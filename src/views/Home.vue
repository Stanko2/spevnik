<template>
  <div class="h-dvh w-dvw max-h-dvh grid overflow-hidden" style="grid-template-rows: min-content 1fr min-content;" @click="store.commit('setChord', null)">
    <ChordPopup
      :chord="chord"
      :lite="false"
      />
    <div v-if="song === null || song === undefined">
      Invalid ID
    </div>
    <div v-else class="p-2 w-screen rounded-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white h-16 text-ellipsis whitespace-nowrap flex justify-between items-center max-w-full">
      <div>
        <h1 class="text-xl text-left flex items-center">
          <span v-if="!editingId" @click="startEditing" class="cursor-pointer">{{ id }}</span>
          <input v-else type="number" v-model.number="id" ref="Idinput" @change="()=>selectSong(id)" class="bg-gray-400 dark:bg-gray-800 w-12 h-8 rounded-md p-0.5 text-center outline-none border-2 border-blue-500" @blur="stopEditing">. {{ song.name }}
          <span class="bg-red-400 opacity-70 rounded-sm text-sm px-1 ml-1" v-if="song.explicit">E</span>
        </h1>
        <p class="opacity-60 text-left text-sm flex items-center">
          <span class="dark:text-blue-300 text-blue-500 flex items-center" v-if="store.state.session">
            <span class="material-symbols-rounded text-sm pr-1">cast</span>
            <span>{{ store.state.session }}</span>
          </span>
          <span v-if="store.state.session" class="px-1">|</span>
          {{ song.author }}
        </p>
      </div>
      <div class="flex right-0 bg-gray-300 dark:bg-gray-600">
        <div class="p-2 text-3xl cursor-pointer transition-all text-gray-600 dark:text-gray-200 transform-gpu h-12 w-12 flex justify-center items-center origin-center" :class="{'text-red-500': liked, 'scale-125': liked}" @click="toggleLiked">
          <span class="material-symbols-rounded block">favorite</span>
        </div>
        <div class="p-2 text-3xl cursor-pointer text-gray-600 dark:text-gray-200 h-12 w-12 flex justify-center items-center" @click="externalDialog?.show()">
          <span class="material-symbols-rounded block">open_in_new</span>
        </div>
        <OpenExternal :song="song" ref="externalDialog" />
      </div>
    </div>
    <transition name="slide">
      <div
        class="viewport transition-all duration-75 text-left outline-none h-full"
      >
         <text-viewport
          v-if="songShown && song != null"
          :song="song"
          @selectSong="selectSong"
          :nextSong="store.state.songs?.[id] ?? undefined"
          :prevSong="store.state.songs?.[id - 2] ?? undefined"
        />
      </div>
    </transition>
  <transition
    enter-active-class="duration-500 transition-all transform-gpu"
    leave-active-class="duration-500 transition-all transform-gpu"
    enter-to-class="translate-x-0"
    enter-from-class="translate-x-full"
    leave-to-class="translate-x-full"
    leave-from-class="translate-x-0"
  >
    <Transposer v-if="store.state.guitarMode && !store.state.playerStatus.playing" />
  </transition>
  <navbar :songs="store.state.songs" v-if="!isMobile"></navbar>
  <navbar-mobile :songs="store.state.songs" v-else></navbar-mobile>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeMount, onMounted, ref, watch } from 'vue'

import { IState, Song } from '@/store'
import { getSong } from '@/store/firebase'
import Navbar from '@/components/Nav.vue'
import NavbarMobile from '@/components/NavMobile.vue'
import ChordPopup from '@/components/chord/ChordPopup.vue'
import Transposer from '@/components/Transpose.vue'
import TextViewport from '@/components/TextViewport.vue'
import OpenExternal from '@/components/OpenExternal.vue'

import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore<IState>()
const route = useRoute()

const id = ref(-1)
const song = ref<Song | null>(null)
const chord = ref<string | undefined>(undefined)
const Idinput = ref<HTMLInputElement>()
const externalDialog = ref<InstanceType<typeof OpenExternal> | null>(null)

const songShown = ref(true)
const editingId = ref(false)
const liked = ref(false)

const isMobile = computed(() => store.state.isMobile)

onMounted(() => {
  showSong()
  store.subscribe((mut) => {
    if (mut.type === 'setChord') {
      chord.value = mut.payload
    }
  })
})

async function showSong () {
  id.value = store.state.currentSong
  songShown.value = false
  store.commit('resetTranspose')
  await nextTick()
  const lastId = id.value
  if (isNaN(id.value)) {
    song.value = null
    return
  }
  song.value = await loadSong(id.value)
  songShown.value = true
  liked.value = store.state.liked.has(id.value)
  if (song.value == null) {
    if (lastId !== id.value && !isNaN(lastId) && lastId < store.state.songs.length && lastId >= 1) {
      console.log(lastId)
      store.commit('setSong', lastId)
    }
  }
}

watch(() => store.state.currentSong, showSong)

onBeforeMount(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    store.commit('setInstallEvent', e)
  })
})


async function loadSong (id: number): Promise<Song | null> {
  if (store.state.songs.length > 0 && id <= store.state.songs.length) {
    return store.state.songs[id - 1]
  } else if (navigator.onLine) {
    return await getSong(id)
  } else {
    throw new Error('No songs loaded')
  }
}

function startEditing (): void {
  editingId.value = true
  id.value = NaN
  nextTick().then(() => {
    Idinput.value?.focus()
  })
}

function stopEditing ():void {
  editingId.value = false
  id.value = parseInt(route.params.id as string)
}

function selectSong (id: number): void {
  editingId.value = false
  store.commit('setSong', id)
}


function toggleLiked ():void {
  liked.value = !liked.value
  store.commit('toggleLike', id.value)
}
</script>

<style>
@reference "tailwindcss";

.chord {
  font-weight: bold;
  vertical-align: super;
  margin: 0 2px 0 2px;
}
.bold{
  font-weight: bold;
  font-style: italic;
}
.note {
  @apply font-mono font-light
}
.viewport{
  overflow-y: scroll;
  touch-action: pan-y !important;
}

.viewport::-webkit-scrollbar {
  background: transparent;
  width: 1rem;
}

.viewport::-webkit-scrollbar-thumb {
  @apply dark:bg-gray-500 bg-gray-300 rounded-lg w-7
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.btn {
  @apply p-2 m-2 rounded-md bg-gray-800 text-white shadow-md hover:opacity-70 hover:shadow-lg transition-all;
}
</style>
