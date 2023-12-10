<template>
    <div class="w-screen bg-gray-500 flex justify-between h-14 z-20 items-center">
        <button class="m-2 rounded-md w-12 h-12 bg-gray-800 text-white shadow-md" @click="selectSong(-1)" v-shortkey="['arrowleft']" @shortkey="selectSong(-1)">
          <span class="material-symbols-rounded block">
            chevron_left
          </span>
        </button>
        <router-link to="/settings" class="btn flex items-center justify-center" v-shortkey="['n']" @shortkey="openSettings">
          <span class="material-symbols-rounded block">
            settings
          </span>
        </router-link>
        <button class="btn" @click="showSearchView = true" v-shortkey="['h']" @shortkey="showSearchView = true">
          <span class="material-symbols-rounded block">
            search
          </span>
        </button>
        <button class="btn" @click="random" v-shortkey="['r']" @shortkey="random">
          <span class="material-symbols-rounded block transform-gpu translate-y-px">
            cycle
          </span>
        </button>
        <button class="btn" @click="openMenu" v-shortkey="['m']" @shortkey="openMenu">
          <span class="material-symbols-rounded block">
            menu
          </span>
        </button>
        <button class="btn mr-2"   @click="playing = !playing" v-if="autoScroll">
          <span class="material-symbols-rounded block">
            {{ playing ? 'pause' : 'play_arrow' }}
          </span>
        </button>
        <button class="btn mr-2" v-if="autoScroll">
            <span class="material-symbols-rounded block" @click="setSpeed(1)">
                add
            </span>
        </button>
        <button class="btn mr-2" @click="setSpeed(2)" v-if="autoScroll">
            <span class="material-symbols-rounded block">
                remove
            </span>
        </button>

        <button class="btn" @click="selectSong(1)" v-shortkey="['arrowright']" @shortkey="selectSong(1)">
          <span class="material-symbols-rounded block">
            chevron_right
          </span>
        </button>
        <transition name="search"
          enter-active-class="duration-300 transition-all ease-in-out"
          leave-active-class="duration-300 transition-all ease-in-out"
          enter-class="opacity-0"
          leave-class="opacity-100"
          enter-to-class="opacity-100"
          leave-to-class="opacity-0"
          >
          <search-view v-if="showSearchView" @close="onSearchClose" :songs="songs" @more="onSearchMore"/>
        </transition>
        <transition
          enter-active-class="duration-300 transition-all ease-in-out transform-gpu"
          leave-active-class="duration-300 transition-all ease-in-out transform-gpu"
          enter-class="translate-x-full"
          leave-class="translate-x-0"
          enter-to-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="showMenu" class="fixed right-3 dark:bg-gray-700 top-3 bottom-3 rounded-lg shadow-xl dark:text-gray-200 xl:w-1/3 left-3 xl:left-auto bg-gray-200 z-50">
            <button class="absolute top-0 right-0 m-2 rounded-full transition-all bg-gray-300 hover:bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-400 p-2" @click="showMenu = false" v-shortkey="['esc']" @shortkey="showMenu = false">
              <span class="material-symbols-rounded block">
                close
              </span>
            </button>
            <SummaryView :SearchQuery="searchQuery"></SummaryView>
          </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Song } from '@/store'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import SearchView from './SearchView.vue'
import SummaryView from '@/components/SummaryView.vue'

@Component({ components: { SearchView, SummaryView } })
export default class Navbar extends Vue {
    @Prop() songs!: Song[]
    songId = this.$store.state.currentSong
    showSearchView = false
    showMenu = false
    searchQuery = ''
    selectSong (dir: number): void {
      if (isNaN(this.songId)) this.songId = 0
      this.$store.commit('setSong', Math.max(this.songId + dir, 1))
      // this.$router.push({
      //   path: `/song/${Math.max(this.songId + dir, 1)}`
      // })
    }

    onSearchClose (id: number | undefined):void {
      this.showSearchView = false
      if (id) {
        this.$store.commit('setSong', id)
        // this.$router.push({
        //   path: `/song/${id}`
        // })
      }
    }

    onSearchMore (q:string): void {
      this.showSearchView = false
      this.showMenu = true
      this.searchQuery = q
    }

    @Watch('$store.state.currentSong')
    showSong (): void {
      this.songId = this.$store.state.currentSong
      this.$store.commit('setSong', this.songId)
      if (this.$store.state.isMobile) {
        this.showMenu = false
      }
    }

    setSpeed (dir: number):void {
      if (dir === 1) {
        this.$store.commit('setSpeed', 1.5)
      } else {
        this.$store.commit('setSpeed', 1 / 1.5)
      }
    }

    get playing (): boolean {
      return this.$store.state.autoscroll && this.$store.state.playerStatus.playing
    }

    set playing (val: boolean) {
      this.$store.commit('setPlaying', val)
    }

    get autoScroll (): boolean {
      return this.$store.state.autoscroll
    }

    random (): void {
      const max = this.$store.state.songs.length
      const id = Math.round(Math.random() * max)
      this.$store.commit('setSong', id)
      // this.$router.push({
      //   path: `/song/${id}`
      // })
    }

    openSettings ():void{
      this.$router.push({
        name: 'Settings'
      })
    }

    openMenu ():void{
      this.showMenu = true
      this.searchQuery = ''
    }
}
</script>

<style scoped>
.btn{
  @apply w-12 h-12;
}

/* .search-enter-active .background, .search-leave-active .background{
  transition: all;
  transition-duration: 5s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
} */

.search-enter-to .background, .search-leave .background{
  opacity: 0.6;
}

.search-leave-to .background, .search-enter .background {
  opacity: 0;
}
</style>
