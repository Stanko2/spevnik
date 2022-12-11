<template>
    <div class="fixed bottom-0 w-screen bg-gray-500 flex justify-between h-14 z-50 items-center">
        <button class="m-2 rounded-md w-12 h-12 bg-gray-800 text-white shadow-md" @click="selectSong(-1)" v-shortkey="['arrowleft']" @shortkey="selectSong(-1)">&lt;</button>
        <button class="btn" @click="showSearchView = true" v-shortkey="['h']" @shortkey="showSearchView = true">
          <span class="material-symbols-rounded block">
            search
          </span>
        </button>
        <button class="btn" @click="openSettings" v-shortkey="['n']" @shortkey="openSettings">
          <span class="material-symbols-rounded block">
            settings
          </span>
        </button>
        <button class="btn" @click="random" v-shortkey="['r']" @shortkey="random">
          <span class="material-symbols-rounded block transform-gpu translate-y-px">
            cycle
          </span>
        </button>
        <button class="btn" @click="openEditor(false)" v-shortkey="['e']" @shortkey="openEditor(false)" v-if="$store.state.isAdmin">
          <span class="material-symbols-rounded block">
            edit
          </span>
        </button>
        <button class="btn" @click="openEditor(true)" v-shortkey="['q']" @shortkey="openEditor(true)" v-if="$store.state.isAdmin && $store.state.songs.length > 0">
          <span class="material-symbols-rounded block">
            add
          </span>
        </button>
        <button class="btn" @click="openMenu" v-shortkey="['m']" @shortkey="openMenu">
          <span class="material-symbols-rounded block">
            menu
          </span>
        </button>
        <button class="btn" @click="selectSong(1)" v-shortkey="['arrowright']" @shortkey="selectSong(1)">&gt;</button>
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
        <Transposer v-if="$store.state.guitarMode" />
    </div>
</template>

<script lang="ts">
import { Song } from '@/store'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import SearchView from './SearchView.vue'
import SummaryView from '@/components/SummaryView.vue'
import Transposer from '@/components/Transpose.vue'

@Component({ components: { SearchView, SummaryView, Transposer } })
export default class Navbar extends Vue {
    @Prop() songs!: Song[]
    songId = parseInt(this.$route.params.id)
    showSearchView = false
    showMenu = false
    searchQuery = ''
    selectSong (dir: number): void {
      if (isNaN(this.songId)) this.songId = 0
      this.$router.push({
        path: `/song/${Math.max(this.songId + dir, 1)}`
      })
    }

    onSearchClose (id: number | undefined):void {
      this.showSearchView = false
      if (id) {
        this.$router.push({
          path: `/song/${id}`
        })
      }
    }

    onSearchMore (q:string): void {
      this.showSearchView = false
      this.showMenu = true
      this.searchQuery = q
    }

    @Watch('$route.params.id')
    showSong (): void {
      this.songId = parseInt(this.$route.params.id)
      if (this.$store.state.isMobile) {
        this.showMenu = false
      }
    }

    random (): void {
      const max = this.$store.state.songs.length
      const id = Math.round(Math.random() * max)
      this.$router.push({
        path: `/song/${id}`
      })
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

    openEditor (newSong:boolean):void {
      if (newSong) {
        this.$router.push({
          name: 'Editor',
          params: {
            id: '-1'
          }
        })
      } else { this.$router.push({ path: `/edit/${this.$route.params.id}` }) }
    }
}
</script>

<style>
.btn{
  @apply p-1 m-2 rounded-md w-12 h-12 bg-gray-800 text-white shadow-md hover:opacity-70 hover:shadow-lg transition-all;
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
