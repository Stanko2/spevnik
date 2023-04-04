import router from '@/router'
import { BeforeInstallPromptEvent } from '@/shims-tsx'
import { logEvent } from 'firebase/analytics'
import { User } from 'firebase/auth'
import Vue from 'vue'
import Vuex from 'vuex'
import { analytics, cacheAllSongs, createSession, createSong, joinSession, leaveSession, login, logOut, updateSong } from './firebase'

export interface Song{
  text: string
  name: string
  youtube?: string
  author: string
  id: number
  path: string
  explicit?: boolean
}

Vue.use(Vuex)

export interface IState {
  darkTheme: boolean
  guitarMode: boolean
  columnCount: number
  fontSize: number
  songs: Song[]
  isMobile: boolean
  credential: User | undefined
  isAdmin: boolean
  liked: Set<number>
  installEvent: BeforeInstallPromptEvent | undefined
  transpose: number
  scale: 'b' | '#'
  session: string | undefined
  currentSong: number
  chord: string | undefined
  chordMode: 'guitar' | 'ukulele'
  showExplicit: boolean
  autoscroll: boolean
  cacheInProgress: boolean
}

function isMobile ():boolean {
  return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i) != null
}

let songTimeout: number | undefined

export default new Vuex.Store<IState>({
  state: {
    darkTheme: false,
    guitarMode: false,
    songs: [],
    columnCount: 1,
    fontSize: 12,
    isMobile: false,
    credential: undefined,
    isAdmin: false,
    liked: new Set<number>(),
    installEvent: undefined,
    scale: '#',
    transpose: 0,
    currentSong: 0,
    session: undefined,
    chord: undefined,
    chordMode: 'guitar',
    showExplicit: false,
    autoscroll: false,
    cacheInProgress: false
  },
  getters: {
  },
  mutations: {
    initialize (state) {
      const prefs: IState = JSON.parse(localStorage.getItem('preferences') || '{}')
      state.guitarMode = prefs.guitarMode || true
      state.darkTheme = prefs.darkTheme || window.matchMedia('(prefers-color-scheme: dark)').matches
      state.columnCount = prefs.columnCount || 1
      state.fontSize = prefs.fontSize || 12
      state.showExplicit = prefs.showExplicit || false
      state.autoscroll = prefs.autoscroll || false
      state.liked = new Set<number>(prefs.liked as unknown as number[])
      state.isMobile = isMobile()
      state.songs = JSON.parse(localStorage.getItem('songs') || '[]')
      state.currentSong = parseInt(router.currentRoute.params.id)
      const session = JSON.parse(localStorage.getItem('session') || '{}')
      if (session?.name !== undefined) {
        if (!session?.admin) {
          joinSession(session.name).then(() => {
            state.session = session.name
          })
        }
      }
    },
    save (state, saveSongs: boolean) {
      console.log('saving')

      const data = Object.assign({}, {
        darkTheme: state.darkTheme,
        guitarMode: state.guitarMode,
        columnCount: state.columnCount,
        fontSize: state.fontSize,
        showExplicit: state.showExplicit,
        liked: [...state.liked]
      })
      localStorage.setItem('preferences', JSON.stringify(data))
      if (saveSongs) { localStorage.setItem('songs', JSON.stringify(state.songs)) }
    },
    setDarkTheme (state, darkTheme: boolean) {
      state.darkTheme = darkTheme
    },
    setGuitarMode (state, guitarMode: boolean) {
      state.guitarMode = guitarMode
    },
    setFontSize (state, fontSize: number) {
      state.fontSize = fontSize
    },
    setExplicit (state, showExplicit: boolean) {
      state.showExplicit = showExplicit
    },
    setAutoScroll (state, autoscroll: boolean) {
      state.autoscroll = autoscroll
      if (state.autoscroll) state.columnCount = 1
    },
    setColumns (state, columnCount: number) {
      if (!state.isMobile) { state.columnCount = columnCount }
    },
    setInstallEvent (state, installEvent: BeforeInstallPromptEvent) {
      state.installEvent = installEvent
    },
    login (state) {
      login().then((data) => {
        state.credential = data.user
        state.isAdmin = data.admin
      })
    },
    install (state) {
      if (state.installEvent) {
        state.installEvent.prompt()
        state.installEvent.userChoice.then((choice) => {
          console.log(choice)
        })
      }
    },
    enableOffline (state) {
      state.cacheInProgress = true
      cacheAllSongs().then(songs => {
        state.cacheInProgress = false
        logEvent(analytics, 'content_download')
        state.songs = songs
      })
    },
    updateOfflineCache (state) {
      state.cacheInProgress = true
      cacheAllSongs().then(songs => {
        state.songs = songs
        state.cacheInProgress = false
      })
    },
    resetTranspose (state) {
      state.transpose = 0
      state.scale = '#'
    },
    toggleLike (state: IState, id: number) {
      if (state.liked.has(id)) {
        state.liked.delete(id)
        logEvent(analytics, 'song_disliked', { dislikedId: id, dislikedSong: state.songs[id - 1].name })
      } else {
        state.liked.add(id)
        logEvent(analytics, 'song_liked', { likedId: id, likedSong: state.songs[id - 1].name })
      }
      const data = Object.assign({}, {
        darkTheme: state.darkTheme,
        guitarMode: state.guitarMode,
        columnCount: state.columnCount,
        fontSize: state.fontSize,
        liked: [...state.liked]
      })
      localStorage.setItem('preferences', JSON.stringify(data))
    },
    updateSong (state: IState, song: Song) {
      const index = state.songs.findIndex(s => s.id === song.id)
      if (index > -1) {
        state.songs[index] = song
      }
    },
    createSong (state: IState, song: Song) {
      state.songs.push(song)
    },
    transpose (state, payload) {
      state.scale = payload.scale
      state.transpose = payload.transpose
    },
    joinSession (state, sessionName) {
      joinSession(sessionName).then(() => {
        state.session = sessionName
        localStorage.setItem('session', JSON.stringify({
          admin: false,
          name: sessionName
        }))
      })
    },
    createSession (state, sessionName) {
      createSession(sessionName).then(() => {
        state.session = sessionName
        localStorage.setItem('session', JSON.stringify({
          admin: true,
          name: sessionName
        }))
      })
    },
    leaveSession (state) {
      if (state.session === undefined) return
      leaveSession().then(() => {
        state.session = undefined
        localStorage.removeItem('session')
      })
    },
    setSong (state, songId) {
      if (songId === state.currentSong) return
      if (songTimeout !== undefined) {
        clearTimeout(songTimeout)
      }
      if (state.songs.length > 0) {
        while (!state.showExplicit && state.songs[songId - 1].explicit) {
          if (songId > state.currentSong) songId++
          else songId--
        }
      }
      songTimeout = setTimeout(() => {
        logEvent(analytics, 'song_viewed', { songId, songName: state.songs[songId - 1].name })
      }, 10000)
      state.currentSong = songId || 1
      router.push({
        path: `/song/${songId}`
      })
    },
    setCredentials (state, credential) {
      state.credential = credential.credential
      state.isAdmin = credential.data.admin
      const session = JSON.parse(localStorage.getItem('session') || '{}')
      if (session?.admin === true) {
        createSession(session.name).then(() => {
          state.session = session.name
        })
      }
    },
    setChord (state, chord) {
      state.chord = chord
    },
    setChordMode (state, mode) {
      state.chordMode = mode
    },
    signOut (state) {
      logOut().then(() => {
        state.credential = undefined
        state.isAdmin = false
      })
    }
  },
  actions: {
    startOfflineMode (ctx) {
      if (ctx.state.songs.length === 0 && !ctx.state.cacheInProgress) {
        ctx.commit('enableOffline')
        ctx.commit('save', true)
      }
    }
  }
})
