<template>
    <div class="absolute right-0 bottom-14 dark:bg-gray-700 dark: dark:text-gray-100 p-2 rounded-t-md flex items-center shadow-md z-0 bg-gray-300 text-gray-900">
        <button @click="changeScale" class="p-1 font-bold hover:bg-gray-500 rounded-md mx-1 transition-all w-8">{{currentScale}}</button>
        <span>{{ currentTranspose }}</span>
        <button class="flex items-center justify-center p-1 hover:bg-gray-500 rounded-md mx-1 transition-all" @click="transpose(-1)" v-shortkey="['o']" @shortkey="transpose(-1)"><span class="material-symbols-rounded block">expand_more</span></button>
        <button class="flex items-center justify-center p-1 hover:bg-gray-500 rounded-md mx-1 transition-all" @click="transpose(1)" v-shortkey="['p']" @shortkey="transpose(1)"><span class="material-symbols-rounded block">expand_less</span></button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

@Component
export default class Transposer extends Vue {
    currentScale = '#'
    currentTranspose = 0

    scale = {
      '#': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H'],
      b: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'B', 'H']
    }

    get isMobile (): boolean {
      return this.$store.state.isMobile
    }

    transpose (dir: number): void {
      this.currentTranspose = this.mod(this.currentTranspose + dir, this.scale['#'].length)
      this.$store.commit('transpose', {
        scale: this.currentScale,
        transpose: this.currentTranspose
      })
    }

    mod (a:number, b:number): number {
      return ((a % b) + b) % b
    }

    changeScale (): void {
      this.currentScale = this.currentScale === '#' ? 'b' : '#'
      this.transpose(0)
    }

    @Watch('$route.params.id')
    reset (): void {
      this.currentScale = '#'
      this.currentTranspose = 0
    }
}
</script>
