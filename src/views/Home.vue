<template>
  <div class="dark:bg-gray-800 h-screen w-screen">
    <div v-if="song === null">
      Invalid ID
    </div>
    <div v-else>
      <div class="p-2 sticky w-screen rounded-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white h-16 overflow-ellipsis whitespace-nowrap">
        <h1 class="text-2xl text-left">
          <span v-if="!editingId" @click="startEditing">{{ id }}</span>
          <input v-else type="number" min="1" :max="data.length" v-model="id" ref="Idinput" @change="()=>selectSong(id)" class="bg-gray-800 w-12 rounded-md p-0.5 text-center">. {{ song.name }}
        </h1>
        <p class="opacity-60 text-left text-sm">{{ song.author }}</p>
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
      <Navbar :songs="data"></Navbar>
    </div>
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

@Component({ components: { TextRenderer, Navbar } })
export default class SongView extends Vue {
  id = -1
  data: Song[] = []
  song: Song | null = null

  $refs!: {
    Idinput: HTMLInputElement
  }

  songShown = true
  editingId = false
  scrollX = 0

  get opacity (): number {
    return 1 - Math.abs(this.scrollX) / screen.availWidth
  }

  async mounted (): Promise<void> {
    const res = await fetch('/Songs.json')
    this.data = (await res.json()).songs as Song[]
    this.data.forEach((s, i) => {
      s.id = i + 1
    })
    this.showSong()
  }

  @Watch('$route.params.id')
  showSong (): void {
    this.songShown = false
    this.$nextTick().then(() => {
      this.id = parseInt(this.$route.params.id)
      this.song = this.data.find(e => e.id === this.id) || null
      this.songShown = true
    })
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
    // if (this.id === id) return
    this.id = id
    this.$router.push({
      path: `/song/${this.id}`
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
    this.scrollX = e.deltaX
    clearTimeout(this.scrollTimeout)
    this.scrollTimeout = setTimeout(() => {
      this.scrollX = 0
    }, 50)
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
