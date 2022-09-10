<template>
    <div class="fixed bottom-14 right-0 dark:bg-gray-700 dark: dark:text-gray-100 p-2 rounded-t-md flex items-center shadow-md z-20 bg-gray-300 text-gray-900">
        <button @click="changeScale" class="p-1 font-bold hover:bg-gray-500 rounded-md mx-1 transition-all w-8">{{currentScale}}</button>
        <span>Stupnica</span>
        <button class="flex items-center justify-center p-1 hover:bg-gray-500 rounded-md mx-1 transition-all" @click="transpose(-1)"><span class="material-symbols-rounded block">expand_more</span></button>
        <button class="flex items-center justify-center p-1 hover:bg-gray-500 rounded-md mx-1 transition-all" @click="transpose(1)"><span class="material-symbols-rounded block">expand_less</span></button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Transposer extends Vue {
    currentScale = '#'
    currentTranspose = 0

    scale = {
      '#': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H'],
      b: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'B', 'H']
    }

    transpose (dir: number): void {
      this.currentTranspose += dir
      this.$store.commit('transpose', {
        scale: this.currentScale,
        transpose: this.currentTranspose
      })
    }

    changeScale (): void {
      this.currentScale = this.currentScale === '#' ? 'b' : '#'
      this.transpose(0)
    }
}
</script>
