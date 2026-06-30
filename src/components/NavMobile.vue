<template>
  <div class="relative w-screen flex flex-col justify-between max-h-16 transition-all" :class="{
      'max-h-32': expanded && autoScroll,
    }">
      <div class="absolute -top-5 left-1/2 bg-gray-500 w-12 -translate-x-1/2 transform-gpu rounded-t-full" @click="toggle()" v-if="autoScroll">
        <span class="material-symbols-rounded block">
          {{ expanded ? 'expand_more' : 'expand_less' }}
        </span>
      </div>
    <div class="grid-rows-1 grid bg-gray-500 h-full z-10" :class="{
      'grid-rows-2': expanded,
      'grid-cols-5': autoScroll,
      'grid-cols-6': !autoScroll,
    }">
      <button class="btn" @click="selectSong(-1)">
        <span class="material-symbols-rounded block">
          chevron_left
        </span>
      </button>

      <button class="btn mr-2" @click="playing = !playing" v-if="autoScroll">
        <span class="material-symbols-rounded block">
            {{ playing ? 'pause' : 'play_arrow' }}
        </span>
      </button>
      <button class="btn mr-2" @click="setSpeed(1)" v-if="autoScroll">
          <span class="material-symbols-rounded block">
              add
          </span>
      </button>
      <button class="btn mr-2" @click="setSpeed(2)" v-if="autoScroll">
          <span class="material-symbols-rounded block">
              remove
          </span>
      </button>
      <button class="btn" @click="openSettings" v-if="!autoScroll || expanded">
        <span class="material-symbols-rounded block">
          settings
        </span>
      </button>
      <button class="btn" @click="showSearchView = true" v-if="!autoScroll || expanded">
        <span class="material-symbols-rounded block">
          search
        </span>
      </button>
      <button class="btn" @click="random" v-if="!autoScroll || expanded">
        <span class="material-symbols-rounded block transform-gpu translate-y-px">
          cycle
        </span>
      </button>
      <button class="btn" @click="openMenu" v-if="!autoScroll || expanded">
        <span class="material-symbols-rounded block">
          menu
        </span>
      </button>
      <button class="btn" @click="selectSong(1)" style="grid-row: 1;" :style="{
        'grid-column': autoScroll ? 5 : 6
      }">
        <span class="material-symbols-rounded block">
          chevron_right
        </span>
      </button>
    </div>
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
import { IState, Song } from '@/store'
import { onMounted, ref, computed, watch } from 'vue'
import SearchView from './SearchView.vue'
import SummaryView from '@/components/SummaryView.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useMagicKeys, whenever } from '@vueuse/core'

const props = defineProps({
  songs: {
    type: Array as () => Song[],
    required: true
  }
})
const store = useStore<IState>()
const router = useRouter()

const songId = ref(store.state.currentSong)
const showSearchView = ref(false)
const showMenu = ref(false)
const searchQuery = ref('')
const expanded = ref(false)

onMounted(() => {
  expanded.value = !autoScroll
})

const { h, r, m, n, escape } = useMagicKeys()

watch(h, () => {
  showSearchView.value = true
})
watch(escape, () => {
  showSearchView.value = false
  showMenu.value = false
})
watch(r, random)
watch(m, openMenu)
watch(n, openSettings)


watch(() => store.state.currentSong, (newVal) => {
  showMenu.value = false
})

function selectSong (dir: number): void {
  if (isNaN(songId.value)) songId.value = 0
  songId.value += dir
  store.commit('setSong', songId.value + dir)
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

function toggle ():void {
  if (!autoScroll) {
    return
  }
  expanded.value = !expanded.value
}

function setSpeed (dir: number):void {
  if (dir === 1) {
    store.commit('setSpeed', 1.5)
  } else {
    store.commit('setSpeed', 1 / 1.5)
  }
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
function random (): void {
  const max = store.state.songs.length
  const id = Math.round(Math.random() * max)
  store.commit('setSong', id)
}

function openSettings ():void{
  router.push({
    name: 'Settings'
  })
}

function openMenu ():void{
  showMenu.value = true
  searchQuery.value = ''
}
</script>

<style scoped>
@reference 'tailwindcss';

.btn{
  @apply w-12 h-12 shadow-lg flex items-center justify-center;
}

.search-enter-to .background, .search-leave .background{
  opacity: 0.6;
}

.search-leave-to .background, .search-enter .background {
  opacity: 0;
}
</style>
