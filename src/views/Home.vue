<template>
  <div class="dark:bg-gray-800 h-screen w-screen">
    <ChordPopup
      :chord="chord"
      :lite="false"
      />
    <div v-if="song === null">
      Invalid ID
    </div>
    <div v-else @click="handleTextClick">
      <div class="p-2 sticky w-screen rounded-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white h-16 overflow-ellipsis whitespace-nowrap flex justify-between items-center max-w-full">
        <div>
          <h1 class="text-xl text-left">
            <span v-if="!editingId" @click="startEditing">{{ id }}</span>
            <input v-else type="number" v-model="id" ref="Idinput" @change="()=>selectSong(id)" class="bg-gray-800 w-12 rounded-md p-0.5 text-center">. {{ song.name }}
          </h1>
          <p class="opacity-60 text-left text-sm">{{ song.author }}</p>
        </div>
        <div class="flex absolute right-0 bg-gray-300 dark:bg-gray-600">
          <div class="p-2 text-3xl cursor-pointer m-1 transition-all text-gray-200 transform-gpu h-12 w-12 flex justify-center items-center origin-center" :class="{'text-red-500': liked, 'scale-125': liked}" @click="toggleLiked">
            <span class="material-symbols-rounded block">favorite</span>
          </div>
          <a class="p-2 rounded-xl cursor-pointer m-1 h-12 w-12" :href="'https://youtu.be/'+(song.youtube || 'dQw4w9WgXcQ')" target="_blank">
            <img src="@/assets/youtube.svg" alt="youtube" class="w-full h-full block">
          </a>
        </div>
      </div>
      <transition name="slide">
        <div class="viewport transition-all duration-75" :style="{'transform': `translateX(${scrollX}px)`, 'opacity': opacity }">
          <text-renderer
            style="touch-action: pan-y !important;"

            v-if="songShown"
            :text="song.text"
            v-hammer:pan.horizontal="e=> onPan(e)"
            v-hammer:swipe.horizontal="e =>onSwipe(e)"
            :guitarMode="$store.state.guitarMode"
            :fontSize="$store.state.fontSize"
            :columns="$store.state.columnCount"
          ></text-renderer>
        </div>
      </transition>
    </div>
    <Navbar :songs="$store.state.songs"></Navbar>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Component from 'vue-class-component'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import TextRenderer from '@/components/Textrenderer'
import Navbar from '@/components/Nav.vue'
import { Song } from '@/store'
import { getSong } from '@/store/firebase'
import ChordPopup from '@/components/chord/ChordPopup.vue'

@Component({ components: { TextRenderer, Navbar, ChordPopup } })
export default class SongView extends Vue {
  id = -1
  song: Song | null = null
  chord: string | null = null

  $refs!: {
    Idinput: HTMLInputElement
  }

  songShown = true
  editingId = false
  scrollX = 0
  liked = false

  get opacity (): number {
    return 1 - Math.abs(this.scrollX) / screen.availWidth
  }

  async mounted (): Promise<void> {
    this.showSong()
    window.setChord = (chord: string | null) => {
      this.chord = chord
    }
  }

  @Watch('$route.params.id')
  async showSong (): Promise<void> {
    this.songShown = false
    this.$store.commit('resetTranspose')
    await this.$nextTick()
    const lastId = this.id
    this.id = parseInt(this.$route.params.id)
    if (isNaN(this.id)) {
      this.song = null
      return
    }
    this.song = await this.loadSong(this.id)
    this.songShown = true
    this.liked = this.$store.state.liked.has(this.id)
    if (this.song == null) {
      if (lastId !== this.id && !isNaN(lastId)) {
        this.$router.push({ path: `/song/${lastId}` })
      }
    }
  }

  beforeMount ():void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.$store.commit('setInstallEvent', e)
    })
  }

  async loadSong (id: number): Promise<Song | null> {
    if (this.$store.state.songs.length > 0 && id <= this.$store.state.songs.length) {
      return this.$store.state.songs[id - 1]
    } else if (navigator.onLine) {
      return await getSong(id)
    } else {
      throw new Error('No songs loaded')
    }
  }

  startEditing (): void {
    this.editingId = true
    this.id = NaN
    this.$nextTick().then(() => {
      this.$refs.Idinput.focus()
    })
  }

  selectSong (id: number): void {
    this.editingId = false
    this.$router.push({
      path: `/song/${id}`
    })
  }

  onSwipe (e:PointerEvent):void {
    this.scrollX = 0
    clearTimeout(this.scrollTimeout)
    if (e.type === 'swipeleft') {
      this.selectSong(this.id + 1)
    } else if (e.type === 'swiperight') {
      this.selectSong(this.id - 1)
    }
  }

  scrollTimeout: number | undefined
  onPan (e:any):void {
    if (!this.$store.state.isMobile) return
    this.scrollX = e.deltaX
    clearTimeout(this.scrollTimeout)
    this.scrollTimeout = setTimeout(() => {
      this.scrollX = 0
    }, 50)
  }

  toggleLiked ():void {
    this.liked = !this.liked
    this.$store.commit('toggleLike', this.id)
  }

  handleTextClick (event: MouseEvent):void {
    if (event.target instanceof HTMLElement && event.target.classList.contains('accord')) {
      const chord = event.target.innerText
      this.chord = chord
    } else {
      this.chord = null
    }
  }
}
</script>

<style>
.accord {
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
  height: calc(100vh - 7.5rem);
  overflow-y: scroll;
  position: absolute;
  right: 0;
  left: 0;
  top: 4rem;
  bottom: 2.5rem;
  touch-action: pan-y !important;
}
.viewport::-webkit-scrollbar {
  width: 0px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
