import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, User, setPersistence, browserLocalPersistence, Unsubscribe } from 'firebase/auth'
import { get, getDatabase, ref, set, onValue, remove } from 'firebase/database'
import store, { Song } from '.'

const firebaseConfig = {
  apiKey: 'AIzaSyDY690VtfSWU1EURhyW8wcEYskqe-oBGSQ',
  authDomain: 'masivny-spevnik.firebaseapp.com',
  projectId: 'masivny-spevnik',
  storageBucket: 'masivny-spevnik.appspot.com',
  messagingSenderId: '679304186220',
  appId: '1:679304186220:web:6ecdacfe8dbfa890558b49',
  databaseURL: 'https://masivny-spevnik-default-rtdb.europe-west1.firebasedatabase.app'
}

export const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const auth = getAuth(app)
auth.onAuthStateChanged(user => {
  store.commit('setCredentials', user)
})
let syncEvent: Unsubscribe | undefined

// export const songs = ref(db, 'songs')

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
  console.log(lastUpdate)
  if (lastUpdate > Date.now() - 1000 * 60 * 10) {
    return store.state.songs
  }
  localStorage.setItem('lastDBUpdate', Date.now().toString())
  const songs = await get(ref(db, 'songs/'))
  const data = songs.val()
  data.splice(0, 1)
  return data as Song[]
}

export async function updateSong (song: Song):Promise<void> {
  await set(ref(db, `songs/${song.id}`), song)
}

export async function createSong (song: Song):Promise<void> {
  await set(ref(db, `songs/${song.id}`), song)
}

export async function createSession (id: string):Promise<void> {
  if (store.state.credential === undefined) throw new Error('You need to be logged in to create session')
  if (store.state.session !== undefined) throw new Error('Already in session, can\'t create new one')
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
