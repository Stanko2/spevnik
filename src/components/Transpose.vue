<template>
    <div class="absolute right-0 bottom-14 dark:bg-gray-700 dark: dark:text-gray-100 p-2 rounded-t-md flex items-center shadow-md z-0 bg-gray-300 text-gray-900">
        <button @click="changeScale" class="p-1 font-bold hover:bg-gray-500 rounded-md mx-1 transition-all w-8">{{currentScale}}</button>
        <span>{{ currentTranspose }}</span>
        <button class="flex items-center justify-center p-1 hover:bg-gray-500 rounded-md mx-1 transition-all" @click="transpose(-1)"><span class="material-symbols-rounded block">expand_more</span></button>
        <button class="flex items-center justify-center p-1 hover:bg-gray-500 rounded-md mx-1 transition-all" @click="transpose(1)"><span class="material-symbols-rounded block">expand_less</span></button>
    </div>
</template>

<script lang="ts" setup>
import { useMagicKeys, whenever } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()

const { o, p } = useMagicKeys()

whenever(o, () => transpose(-1))
whenever(p, () => transpose(1))

const currentScale = ref('#')
const currentTranspose = ref(0)
const scale = {
  '#': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H'],
  b: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'B', 'H']
}
const isMobile = computed(() => store.state.isMobile)

function transpose (dir: number): void {
  currentTranspose.value = mod(currentTranspose.value + dir, scale['#'].length)
  store.commit('transpose', {
    scale: currentScale.value,
    transpose: currentTranspose.value
  })
}

function mod (a:number, b:number): number {
  return ((a % b) + b) % b
}

function changeScale (): void {
  currentScale.value = currentScale.value === '#' ? 'b' : '#'
  transpose(0)
}

watch(() => route.params.id, () => {
  currentScale.value = '#'
  currentTranspose.value = 0
})
</script>
