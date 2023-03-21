<template>
  <div class="dark:bg-gray-800 h-screen w-screen">
    <ChordPopup
      :chord="chord"
      :lite="false"
      />
    <div v-if="song === null">
      Invalid ID
    </div>
    <div v-else @click="$store.commit('setChord', null)">
      <div class="p-2 absolute w-screen rounded-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white h-16 overflow-ellipsis whitespace-nowrap flex justify-between items-center max-w-full">
        <div>
          <h1 class="text-xl text-left flex items-center">
            <span v-if="!editingId" @click="startEditing">{{ id }}</span>
            <input v-else type="number" v-model.number="id" ref="Idinput" @change="()=>selectSong(id)" class="bg-gray-800 w-12 rounded-md p-0.5 text-center" @blur="stopEditing">. {{ song.name }}
            <span class="bg-red-400 opacity-70 rounded-sm text-sm px-1 ml-1" v-if="song.explicit">E</span>
          </h1>
          <p class="opacity-60 text-left text-sm">
            <span class="text-blue-300" v-if="$store.state.session">
              <span class="material-symbols-rounded text-sm">cast</span>
              {{ $store.state.session }}
            </span>
            <span v-if="$store.state.session">|</span>
            {{ song.author }}
          </p>
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
        <div
          class="viewport transition-all duration-75 overflow-hidden text-left"
          :class="{'expanded': playing}"
        >
          <text-viewport v-if="$store.state.autoscroll && songShown" class="text-center" @play="(p)=> playing = p">
            <text-renderer
              style="touch-action: pan-y !important;"
              v-hammer:pan.horizontal="e=> onPan(e)"
              v-hammer:swipe.horizontal="e =>onSwipe(e)"
              :text="song.text"
              :style="{'transform': `translateX(${scrollX}px)`, 'opacity': opacity }"
              :guitarMode="$store.state.guitarMode"
              :fontSize="$store.state.fontSize"
              :columns="1"
            ></text-renderer>
          </text-viewport>
          <div v-else-if="songShown" class="absolute bottom-0 top-0 overflow-y-scroll left-0">
            <text-renderer
                style="touch-action: pan-y !important;"
                v-hammer:pan.horizontal="e=> onPan(e)"
                v-hammer:swipe.horizontal="e =>onSwipe(e)"
                :text="song.text"
                :style="{'transform': `translateX(${scrollX}px)`, 'opacity': opacity }"
                :guitarMode="$store.state.guitarMode"
                :fontSize="$store.state.fontSize"
                :columns="$store.state.columnCount"
              ></text-renderer>
          </div>
        </div>
      </transition>
    </div>
    <transition
      enter-active-class="duration-500 transition-all transform-gpu"
      leave-active-class="duration-500 transition-all transform-gpu"
      enter-to-class="translate-y-0"
      enter-class="translate-y-full"
      leave-to-class="translate-y-full"
      leave-class="translate-y-0"
    >
      <div v-if="!playing">
        <navbar :songs="$store.state.songs"></navbar>
        <Transposer v-if="$store.state.guitarMode" />
      </div>
    </transition>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Component from 'vue-class-component'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import TextRenderer from '@/components/Textrenderer'
import { Song } from '@/store'
import { getSong } from '@/store/firebase'
import ChordPopup from '@/components/chord/ChordPopup.vue'
import Transposer from '@/components/Transpose.vue'
import TextViewport from '@/components/TextViewport.vue'

@Component({ components: { TextRenderer, navbar: () => import('@/components/Nav.vue'), ChordPopup, Transposer, TextViewport } })
export default class SongView extends Vue {
  id = -1
  song: Song | null = null
  chord: string | null = null

  $refs!: {
    Idinput: HTMLInputElement
  }

  playing = false
  songShown = true
  editingId = false
  scrollX = 0
  liked = false

  get opacity (): number {
    return 1 - Math.abs(this.scrollX) / screen.availWidth
  }

  mounted ():void {
    this.showSong()
    this.$store.subscribe((mut) => {
      if (mut.type === 'setChord') {
        this.chord = mut.payload
      }
    })
  }

  @Watch('$store.state.currentSong')
  async showSong (): Promise<void> {
    this.id = this.$store.state.currentSong
    this.songShown = false
    this.$store.commit('resetTranspose')
    await this.$nextTick()
    const lastId = this.id
    if (isNaN(this.id)) {
      this.song = null
      return
    }
    this.song = await this.loadSong(this.id)
    this.songShown = true
    this.liked = this.$store.state.liked.has(this.id)
    if (this.song == null) {
      if (lastId !== this.id && !isNaN(lastId)) {
        this.$store.commit('setSong', lastId)
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

  stopEditing ():void {
    this.editingId = false
    this.id = parseInt(this.$route.params.id)
  }

  selectSong (id: number): void {
    this.editingId = false
    this.$store.commit('setSong', id)
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
.viewport.expanded {
  bottom: 0;
  height: calc(100vh - 4rem);
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
