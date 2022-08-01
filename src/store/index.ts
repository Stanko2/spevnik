import Vue from 'vue'
import Vuex from 'vuex'

export interface Song{
  text: string
  name: string
  youtube?: string
  author: string
  id: number
}

Vue.use(Vuex)

interface IState {
  darkTheme: boolean
  guitarMode: boolean
  columnCount: number
  fontSize: number
  songs: Song[]
  isMobile: boolean
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
    isMobile: false
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
      state.isMobile = isMobile()
    },
    save (state, saveSongs: boolean) {
      console.log('saving')

      const data = Object.assign({}, {
        darkTheme: state.darkTheme,
        guitarMode: state.guitarMode,
        columnCount: state.columnCount,
        fontSize: state.fontSize
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
    }
  },
  actions: {
  },
  modules: {
  }
})
