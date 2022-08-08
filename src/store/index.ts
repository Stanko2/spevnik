import { BeforeInstallPromptEvent } from '@/shims-tsx'
import { User } from 'firebase/auth'
import Vue from 'vue'
import Vuex from 'vuex'
import { cacheAllSongs, createSong, login } from './firebase'

export interface Song{
  text: string
  name: string
  youtube?: string
  author: string
  id: number
  path: string
}

Vue.use(Vuex)

interface IState {
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
}

function isMobile ():boolean {
  return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i) != null
}

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
    installEvent: undefined
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
      state.liked = new Set<number>(prefs.liked as unknown as number[])
      state.isMobile = isMobile()
      state.songs = JSON.parse(localStorage.getItem('songs') || '[]')
    },
    save (state, saveSongs: boolean) {
      console.log('saving')

      const data = Object.assign({}, {
        darkTheme: state.darkTheme,
        guitarMode: state.guitarMode,
        columnCount: state.columnCount,
        fontSize: state.fontSize,
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
    enableOffline (state) {
      cacheAllSongs().then(songs => {
        state.songs = songs
        console.log('cached songs')
        if (state.installEvent) {
          state.installEvent.prompt()
          state.installEvent.userChoice.then((choice) => {
            console.log(choice)
          })
        }
      })
    },
    updateOfflineCache (state) {
      cacheAllSongs().then(songs => {
        state.songs = songs
      })
    },
    toggleLike (state: IState, id: number) {
      if (state.liked.has(id)) {
        state.liked.delete(id)
      } else {
        state.liked.add(id)
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
    }
  }
})
