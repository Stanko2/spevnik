<template>
    <div class="min-h-screen w-screen dark:bg-gray-800 settings">
        <div class="p-2 sticky w-screen rounded-b-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white overflow-ellipsis whitespace-nowrap flex justify-between items-center">
                <h1 class="text-3xl text-left flex items-center">
                    <span class="material-symbols-rounded m-2 mr-4 font-bold cursor-pointer" @click="close" v-shortkey="['esc']" @shortkey="close">arrow_back</span>
                Nastavenia
            </h1>
            <div v-if="$store.state.credential" class="opacity-70 flex items-center">
                {{ $store.state.credential.displayName }}
                <img :src="$store.state.credential.photoURL" class="aspect-square rounded-full w-10 h-10 ml-2" />
                <span class="material-symbols-rounded p-2 rounded-full block hover:bg-gray-400 ml-2 transition-all" @click="$store.commit('signOut')">logout</span>
            </div>
        </div>
        <div class="container m-auto">
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="guitarMode" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Zobrazovať akordy</span>
                    <div class="relative">
                        <input id="guitarMode" type="checkbox" class="sr-only" v-model="guitarMode" @change="$store.commit('setGuitarMode', guitarMode)">
                        <div class="bg-gray-400 dark:bg-gray-600 h-5 w-11 rounded-full shadow-inner"></div>
                        <div class="h-6 w-6 absolute shadow rounded-full bg-gray-50 -left-0.5 -top-0.5 transition-all" :class="{dot: guitarMode}"></div>
                    </div>

                </label>
            </div>
            <transition
                enter-active-class="duration-300 transition-all ease-in-out transform-gpu overflow-hidden"
                leave-active-class="duration-300 transition-all ease-in-out transform-gpu overflow-hidden"
                enter-class="h-0"
                leave-to-class="h-0"
            >
                <div class="dark:text-gray-200 p-4 text-lg" v-if="guitarMode">
                    <label for="guitarMode" class="flex justify-between items-center w-full">
                        <span class="dark:text-gray-200">Režim akordov</span>
                        <div class="relative">
                            <select v-model="chordMode" @change="$store.commit('setChordMode', chordMode)" class="outline-none rounded-lg p-1 text-lg bg-gray-400 dark:bg-gray-600 w-30">
                                <option value="guitar">Gitara</option>
                                <option value="ukulele">Ukulele</option>
                            </select>
                        </div>

                    </label>
                </div>
            </transition>
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="darkMode" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Téma</span>
                    <div class="relative">
                        <input id="darkMode" type="checkbox" class="sr-only" v-model="darkMode" @change="$store.commit('setDarkTheme', darkMode)">
                        <div class="bg-gray-400 dark:bg-gray-600 h-5 w-11 rounded-full shadow-inner"></div>
                        <div class="h-6 w-6 absolute shadow rounded-full bg-gray-50 -left-0.5 -top-0.5 transition-all" :class="{dot: darkMode, 'bg-blue-500': !darkMode}">
                            <span class="material-symbols-rounded block" :class="{
                                'text-yellow-400': !darkMode,
                                'text-gray-400': darkMode
                            }">{{ darkMode ? 'dark_mode' : 'light_mode'}}</span>
                        </div>
                    </div>
                </label>
            </div>
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="fontSize" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Veľkosť písma</span>
                    <div class="flex items-center justify-end w-60">
                        <button class="bg-gray-400 dark:bg-gray-600 outline-none rounded-full hover:bg-gray-500" @click="fontSize--; setFontSize()"><span class="material-symbols-rounded block">remove</span></button>
                        <input type="number" v-model="fontSize" class="dark:bg-gray-800 rounded-md w-24 p-0.5 text-center outline-none dark:focus:border-gray-600" @change="setFontSize" :style="{'font-size': fontSize + 'px'}"/>
                        <button class="bg-gray-400 dark:bg-gray-600 outline-none rounded-full hover:bg-gray-500" @click="fontSize++; setFontSize()"><span class="material-symbols-rounded block">add</span></button>
                    </div>
                </label>
            </div>
            <div class="dark:text-gray-200 p-4 text-lg" v-if="!autoscroll">
                <label for="columns" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Počet stĺpcov</span>
                    <div class="flex items-center justify-end w-60">
                        <button class="bg-gray-400 dark:bg-gray-600 outline-none rounded-full hover:bg-gray-500" @click="columns--; setColumns()"><span class="material-symbols-rounded block">remove</span></button>
                        <input type="number" v-model="columns" class="dark:bg-gray-800 rounded-md w-24 p-0.5 text-center outline-none dark:focus:border-gray-600" @change="setColumns"/>
                        <button class="bg-gray-400 dark:bg-gray-600 outline-none rounded-full hover:bg-gray-500" @click="columns++; setColumns()"><span class="material-symbols-rounded block">add</span></button>
                    </div>
                </label>
            </div>
            <hr class="my-3 opacity-30" />
            <div class="dark:text-gray-200 p-4 text-lg" v-if="isOnline">
                <div class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Admin Mode</span>
                    <button class="bg-gray-400 dark:bg-gray-600 outline-none rounded-md p-2" @click="login" v-if="!$store.state.credential">Prihlásiť sa</button>
                    <div v-else class="opacity-70">
                        <span class="material-symbols-rounded"
                        :class="{'text-green-400': $store.state.isAdmin, 'text-red-400': !$store.state.isAdmin }">
                            {{ $store.state.isAdmin ? 'done' : 'close' }}
                        </span>
                        {{ $store.state.isAdmin ? 'Admin' : 'Používateľ' }}
                    </div>
                </div>
            </div>
            <div class="dark:text-gray-200 p-4 text-lg">
                <div class="flex justify-between items-center w-full" >
                    <span class="dark:text-gray-200">Offline režim</span>
                    <button v-if="!availOffline"
                        class="p-2 rounded-md text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-gray-200"
                        @click="$store.dispatch('startOfflineMode')"
                        :disabled="$store.state.cacheInProgress">
                        {{ $store.state.cacheInProgress ? 'Sťahujem' : 'Zapnúť' }}
                    </button>
                    <button v-else-if="isOnline"
                        class="p-2 rounded-md text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-gray-200"
                        @click="$store.commit('updateOfflineCache', () => $store.commit('save', true))"
                        :disabled="$store.state.cacheInProgress">
                        {{ $store.state.cacheInProgress ? 'Sťahujem' : 'Aktualizovať' }}
                    </button>
                </div>
            </div>
            <hr class="my-3 opacity-30" />
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="showExplicit" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Ukazovať nevhodné (explicitné) pesničky</span>
                    <div class="relative">
                        <input id="showExplicit" type="checkbox" class="sr-only" v-model="showExplicit" @change="$store.commit('setExplicit', showExplicit)">
                        <div class="bg-gray-400 dark:bg-gray-600 h-5 w-11 rounded-full shadow-inner"></div>
                        <div class="h-6 w-6 absolute shadow rounded-full bg-gray-50 -left-0.5 -top-0.5 transition-all" :class="{dot: showExplicit}"></div>
                    </div>

                </label>
            </div>
            <div class="dark:text-gray-200 p-4 text-lg">
                <label for="autoscroll" class="flex justify-between items-center w-full">
                    <span class="dark:text-gray-200">Automatické scrollovanie</span>
                    <div class="relative">
                        <input id="autoscroll" type="checkbox" class="sr-only" v-model="autoscroll" @change="$store.commit('setAutoScroll', autoscroll)">
                        <div class="bg-gray-400 dark:bg-gray-600 h-5 w-11 rounded-full shadow-inner"></div>
                        <div class="h-6 w-6 absolute shadow rounded-full bg-gray-50 -left-0.5 -top-0.5 transition-all" :class="{dot: autoscroll}"></div>
                    </div>
                </label>
                <div v-if="$store.state.isAdmin" class="flex justify-between mt-8">
                    <span>Navrhované zmeny</span>
                    <button
                        @click="$router.push({name: 'ChangeRequests'})"
                        class="p-2 rounded-md text-gray-700 bg-gray-300 dark:bg-gray-600 dark:text-gray-200"
                    >Zmeny
                    </button>
                </div>
                <div v-if="$store.state.isAdmin">
                    <label for="analytics-import" class="btn bg-gray-500">Importovať "zhliadnutia"</label>
                    <input type="file" class="sr-only" id="analytics-import" @input="importViews" />
                </div>
            </div>
            <hr class="my-3 opacity-30" />
            <sessions v-if="isOnline"></sessions>
            <div class="mt-40 text-sm">
                <p class="opacity-60 dark:text-gray-200">Tento spevník bol vytvorený ako re-design pre <a class="text-blue-500" href="https://people.ksp.sk/~petor/spevnik/#">Ralbov Spevník</a>. Oproti nemu tu je pridaných celkom dosť ďalších pesničiek.</p>
                <p class="opacity-60 dark:text-gray-200">Celý spevník je open source, takže ak vieš pridať nejaký feature, alebo niečo opraviť, tak si sprav <a class="text-blue-500" href="https://github.com/Stanko2/spevnik">pull request</a>, prípadne vieš aj submitnúť <a class="text-blue-500" href="https://github.com/Stanko2/spevnik/issues">issue</a> ak niečo nefunguje a ja sa na to pozriem</p>
                <p class="opacity-60 dark:text-gray-200">Vytvoril <a class="text-blue-500" href="https://stanko2.github.io">Stanko</a></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Sessions from '@/components/Sessions.vue'
import { importSongViews, listAllSuggestions } from '@/store/firebase'

@Component({ components: { Sessions } })
export default class Settings extends Vue {
    guitarMode = false
    chordMode: 'guitar' | 'ukulele' = 'guitar'
    darkMode = false
    showExplicit = false
    autoscroll = false
    fontSize = 12
    msg = navigator.userAgent
    columns = 1
    get availOffline (): boolean {
      return this.$store.state.songs.length > 0
    }

    get isOnline (): boolean {
      return navigator.onLine
    }

    mounted ():void {
      this.$store.commit('install')
      this.guitarMode = this.$store.state.guitarMode
      this.chordMode = this.$store.state.chordMode
      this.darkMode = this.$store.state.darkTheme
      this.fontSize = this.$store.state.fontSize
      this.columns = this.$store.state.columnCount
      this.showExplicit = this.$store.state.showExplicit
      this.autoscroll = this.$store.state.autoscroll
      setTimeout(() => {
        listAllSuggestions()
      }, 500)
    }

    setFontSize ():void {
      if (this.fontSize < 12) {
        this.fontSize = 12
      }
      if (this.fontSize > 50) {
        this.fontSize = 50
      }
      this.$store.commit('setFontSize', this.fontSize)
    }

    setColumns ():void {
      if (this.columns < 1) {
        this.columns = 1
      }
      if (this.columns > 5) {
        this.columns = 5
      }
      this.$store.commit('setColumns', this.columns)
    }

    close ():void {
      this.$store.commit('save', this.availOffline)
      this.$router.back()
    }

    login ():void {
      this.$store.commit('login')
    }

    importViews (e: Event): void {
      const file = e.target?.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.readAsText(file, 'UTF-8')
      reader.onload = (e) => {
        const result = e.target?.result
        if (!result) return
        const lines = (result as string).split('\n')
        while (!lines[0].startsWith('# Songs Played by ID')) {
          lines.shift()
        }
        lines.shift()
        lines.shift()
        lines.shift()
        lines.shift()
        console.log(lines[0])
        const views: Record<number, number> = {}
        while (true) {
          if (lines[0].startsWith('#') || lines[0] === '') break
          const [songId, songViews] = lines.shift()?.split(',')?.map((x) => parseInt(x)) || []
          if (!isNaN(songId) && !isNaN(songViews)) { views[songId] = songViews }
        }

        importSongViews(views)
      }
    }
}
</script>

<style scoped>
.dot {
  transform: translateX(100%);
  @apply bg-blue-900;
}
</style>
