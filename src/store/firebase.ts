import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, User, setPersistence, browserLocalPersistence, Unsubscribe, signOut } from 'firebase/auth'
import { get, getDatabase, ref, set, onValue, remove } from 'firebase/database'
import { getAnalytics, logEvent as logAnalyticsEvent } from 'firebase/analytics'
import store, { Song, Suggestion } from '.'
import Vue from 'vue'

const firebaseConfig = {
  apiKey: 'AIzaSyDY690VtfSWU1EURhyW8wcEYskqe-oBGSQ',
  authDomain: 'masivny-spevnik.firebaseapp.com',
  projectId: 'masivny-spevnik',
  storageBucket: 'masivny-spevnik.appspot.com',
  messagingSenderId: '679304186220',
  appId: '1:679304186220:web:6ecdacfe8dbfa890558b49',
  databaseURL: 'https://masivny-spevnik-default-rtdb.europe-west1.firebasedatabase.app'
}

function RandStr (prefix: string) {
  return Math.random().toString(36).replace('0.', prefix || '')
}

export const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const auth = getAuth(app)
export const analytics = getAnalytics(app)
auth.onAuthStateChanged(user => {
  get(ref(db, `users/${user?.uid}`)).then(ref => {
    store.commit('setCredentials', {
      credential: user,
      data: ref.val()
    })
  })
})
let syncEvent: Unsubscribe | undefined

export async function login (): Promise<{user: User, admin: boolean}> {
  await setPersistence(auth, browserLocalPersistence)
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const credential = GoogleAuthProvider.credentialFromResult(result)
  if (!credential) {
    throw new Error('Login failed')
  }
  const userRef = await get(ref(db, `users/${result.user.uid}`))
  if (!userRef.exists()) {
    await set(ref(db, `users/${result.user.uid}`), {
      photo: result.user.photoURL,
      admin: false
    }).catch(e => console.log(e))
  } else {
    const user = userRef.val() as {
      photo: string
      admin: boolean
    }
    // if (user.admin) await importToDB()
    return {
      user: result.user,
      admin: user.admin
    }
  }

  return {
    user: result.user,
    admin: false
  }
}

export async function getSong (id: number): Promise<Song | null> {
  const song = await get(ref(db, `songs/${id}`))
  if (!song.exists()) {
    return null
  }
  return song.val() as Song
}

export async function importToDB ():Promise<void> {
  const data:Song[] = (await fetch('/Songs.json').then(res => res.json())).songs
  for (let i = 0; i < data.length; i++) {
    data[i].id = i + 1
    await set(ref(db, `songs/${data[i].id}`), data[i])
  }
}

export async function cacheAllSongs ():Promise<Song[]> {
  const lastUpdate = parseInt(localStorage.getItem('lastDBUpdate') || '0')
  if (lastUpdate > Date.now() - 1000 * 60 * 10 && store.state.songs.length > 0) {
    console.log('updated recently, not caching ... ')
    return store.state.songs
  }
  localStorage.setItem('lastDBUpdate', Date.now().toString())
  const songs = await get(ref(db, 'songs/'))
  let data = songs.val()
  if (typeof data === 'object') data = Object.values(data)
  data = data.filter((song: any) => song.id > 0)
  return data as Song[]
}

export async function updateSong (song: Song):Promise<void> {
  if (song.id === -1) throw new Error('Song does not have an id, use createSong instead')

  if (store.state.isAdmin) {
    await set(ref(db, `songs/${song.id}`), song)
  } else {
    const id = RandStr('suggestion_')
    await set(ref(db, `suggestions/${id}`), {
      userName: store.state.credential?.displayName,
      song,
      id
    })
  }
}

export async function importSongViews (songViews: Record<number, number>): Promise<void> {
  const ops: Promise<void>[] = []
  for (const song of Object.keys(songViews)) {
    console.log('updating song', parseInt(song), songViews[parseInt(song)])
    ops.push(set(ref(db, `songs/${song}/views`), songViews[parseInt(song)]))
    store.state.songs[parseInt(song) - 1].views = songViews[parseInt(song)]
  }
  await Promise.all(ops)
  console.log('done')
}

export async function resolveSuggestion (suggestion: Suggestion, accept: boolean): Promise<void> {
  if (!store.state.isAdmin) return
  await remove(ref(db, `suggestions/${suggestion.id}`))
  if (accept) {
    await createOrUpdateSong(suggestion.song)
  }
}

export async function createSong (song: Song):Promise<void> {
  if (song.id !== -1) throw new Error('Song already has an id, use updateSong instead')

  if (store.state.isAdmin && confirm('Create (OK) or suggest (Cancel)')) {
    const songs = await get(ref(db, 'songs/'))
    const data = songs.val()
    const ids = typeof data === 'object' ? Object.keys(data).map(Number) : data.map((song: any) => song.id)
    song.id = Math.max(...ids) + 1

    await set(ref(db, `songs/${song.id}`), song)
    store.commit('updateSong', song)
  } else {
    const id = RandStr('suggestion_')
    await set(ref(db, `suggestions/${id}`), {
      userName: store.state.credential?.displayName,
      song,
      id
    })
  }
}

export async function createOrUpdateSong (song: Song):Promise<void> {
  if (song.id === -1) {
    return createSong(song)
  }
  return updateSong(song)
}

export async function listAllSuggestions (): Promise<Suggestion[]> {
  const snapshot = await get(ref(db, 'suggestions'))
  return snapshot.val() as Suggestion[]
}

export function logEvent (name: string, params: any = {}): void {
  if (Vue.config.devtools) return
  logAnalyticsEvent(analytics, name, params)
}

export async function createSession (id: string):Promise<void> {
  if (store.state.credential === undefined) throw new Error('You need to be logged in to create session')
  if (store.state.session !== undefined) throw new Error('Already in session, can\'t create new one')
  logAnalyticsEvent(analytics, 'session_created')
  await set(ref(db, `sessions/${id}`), {
    id,
    song: store.state.currentSong || 1,
    creator: store.state.credential.uid
  })
  store.subscribe((mut) => {
    if (mut.type === 'setSong') {
      set(ref(db, `sessions/${id}/song`), mut.payload)
    }
  })
}

export async function joinSession (id: string): Promise<void> {
  if (store.state.session !== undefined) throw new Error('Can\'t join session, already in one')
  const session = await get(ref(db, `sessions/${id}`))
  if (!session.exists()) throw new Error(`Session ${id} does not exist`)
  console.log('joined session', id)

  syncEvent = onValue(ref(db, `sessions/${id}/song`), (snapshot: any) => {
    store.commit('setSong', snapshot.val())
  })
}

export async function leaveSession (): Promise<void> {
  if (syncEvent) {
    syncEvent()
  } else {
    const session = await get(ref(db, `sessions/${store.state.session}`))
    if (session.exists() && session.val().creator === store.state.credential?.uid) {
      await remove(ref(db, `sessions/${store.state.session}`))
    }
  }
}

export async function logOut ():Promise<void> {
  await signOut(auth)
}
