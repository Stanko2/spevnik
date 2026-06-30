<template>
    <div class="w-screen bg-gray-500 flex justify-between h-14 z-20 items-center">
        <button class="m-2 btn" @click="selectSong(-1)">
          <span class="material-symbols-rounded block">
            chevron_left
          </span>
        </button>
        <router-link to="/settings" class="btn">
          <span class="material-symbols-rounded block">
            settings
          </span>
        </router-link>
        <button class="btn" @click="showSearchView = true">
          <span class="material-symbols-rounded block">
            search
          </span>
        </button>
        <button class="btn" @click="random">
          <span class="material-symbols-rounded block transform-gpu translate-y-px">
            cycle
          </span>
        </button>
        <button class="btn" @click="openMenu">
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

        <button class="btn" @click="selectSong(1)">
          <span class="material-symbols-rounded block">
            chevron_right
          </span>
        </button>
        <transition name="search"
          enter-active-class="duration-300 transition-all ease-in-out"
          leave-active-class="duration-300 transition-all ease-in-out"
          enter-from-class="opacity-0"
          leave-from-class="opacity-100"
          enter-to-class="opacity-100"
          leave-to-class="opacity-0"
          >
          <search-view v-if="showSearchView" @close="onSearchClose" :songs="songs" @more="onSearchMore"/>
        </transition>
        <transition
          enter-active-class="duration-300 transition-all ease-in-out transform-gpu"
          leave-active-class="duration-300 transition-all ease-in-out transform-gpu"
          enter-from-class="translate-x-full"
          leave-from-class="translate-x-0"
          enter-to-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="showMenu" class="fixed right-3 dark:bg-gray-700 top-3 bottom-3 rounded-lg shadow-xl dark:text-gray-200 xl:w-1/3 left-3 xl:left-auto bg-gray-200 z-50">
            <button class="absolute top-0 right-0 m-2 rounded-full transition-all bg-gray-300 hover:bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-400 p-2 flex items-center justify-center" @click="showMenu = false">
              <span class="material-symbols-rounded block">
                close
              </span>
            </button>
            <SummaryView :SearchQuery="searchQuery"></SummaryView>
          </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { Song } from '@/store'
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'

import SearchView from './SearchView.vue'
import SummaryView from '@/components/SummaryView.vue'
import { useRouter } from 'vue-router'
import { useMagicKeys } from '@vueuse/core'

const store = useStore()
const props = defineProps<{ songs: Song[] }>()
const router = useRouter()

const songId = ref<number>(store.state.currentSong)
const showSearchView = ref(false)
const showMenu = ref(false)
const searchQuery = ref('')

function selectSong (dir: number): void {
  if (isNaN(songId.value)) songId.value = 0
  store.commit('setSong', Math.max(songId.value + dir, 1))
}

function onSearchClose (id: number | undefined):void {
  showSearchView.value = false
  if (id) {
    store.commit('setSong', id)
  }
}

function onSearchMore (q:string): void {
  showSearchView.value = false
  showMenu.value = true
  searchQuery.value = q
}

function setSpeed (dir: number):void {
  if (dir === 1) {
    store.commit('setSpeed', 1.5)
  } else {
    store.commit('setSpeed', 1 / 1.5)
  }
}


const { h, r, m, n, escape, ArrowRight, ArrowLeft } = useMagicKeys()

watch(h, (v) => {
  if (!v) return
  showSearchView.value = true
})
watch(escape, (v) => {
  if (!v) return
  showSearchView.value = false
  showMenu.value = false
})
watch(r, (v) => v && random())
watch(m, (v) => v && openMenu())
watch(n, (v) => v && openSettings())

watch(ArrowRight, (v) => v && selectSong(1))
watch(ArrowLeft, (v) => v && selectSong(-1))

watch(() => store.state.currentSong, (newVal) => {
  showMenu.value = false
})

function random (): void {
  if (showMenu.value || showSearchView.value) return

  const max = store.state.songs.length
  const id = Math.round(Math.random() * max)
  store.commit('setSong', id)
}

function openSettings(): void {
  if (showMenu.value || showSearchView.value) return

  router.push({
    name: 'Settings'
  })
}

function openMenu (): void {
  if (showMenu.value || showSearchView.value) return

  showMenu.value = true
  searchQuery.value = ''
}

const autoScroll = computed(() => {
  return store.state.autoscroll
})

const playing = computed({
  get: () => {
    return store.state.playerStatus.playing
  },
  set: (val: boolean) => {
    store.commit('setPlaying', val)
  }
})

watch(
  () => store.state.currentSong,
  (newVal) => {
    songId.value = newVal
    store.commit('setSong', songId.value)
    if (store.state.isMobile) {
      showMenu.value = false
    }
  }
)



</script>

<style scoped>
@reference 'tailwindcss';

.btn{
  @apply w-12 h-12 flex items-center justify-center;
}

.search-enter-to .background, .search-leave .background{
  opacity: 0.6;
}

.search-leave-to .background, .search-enter .background {
  opacity: 0;
}
</style>
