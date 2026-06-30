<template>
  <Transition
    enter-active-class="duration-200"
    leave-active-class="duration-200"
    enter-from-class="transform-gpu translate-y-full translate-x-1/2 opacity-0"
    leave-to-class="transform-gpu translate-y-full translate-x-1/2 opacity-0"
    leave-class="transform-gpu translate-y-0 translate-x-1/2 opacity-1"
    enter-to-class="transform-gpu translate-y-0 translate-x-1/2 opacity-1"
  >
    <div
      class="chord-menu flex flex-row rounded-tr-lg rounded-tl-lg overflow-hidden bg-gray-500 shadow-2xl z-30"
      v-if="chordFound"
      @click="click"
    >
      <div
        class="h-full flex flex-col items-center justify-center font-bold w-0 z-50 pt-5"
        @click="openLayout -= 1"
        v-if="layoutCount > 1 && openLayout !== 0"
      >
        <span
          class="material-symbols-rounded"
          style="scale: 3; transform: translateX(0.35rem)"
        >
          chevron_left
        </span>
      </div>
      <div class="w-full h-full flex flex-col" @click="click">
        <span class="font-bold p-1 absolute w-full align-center text-3xl">{{
          chord
        }}</span>
        <div class="w-full h-full pt-9 posFix">
          <div
            class="layouts flex flex-row flex-nowrap h-full"
            :style="`width: ${layoutCount * 100}%;`"
          >
            <div
              class="layout w-full p-3 transition-all duration-200"
              :class="{ open: openLayout === i }"
              v-for="(layout, i) in chordLayouts"
              :key="i"
              :style="`transform: translateX(-${openLayout * 100}%);`"
            >
              <ChordView
                :chord="chordData"
                :layout="layout"
                :lite="lite"
              ></ChordView>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-full flex flex-col items-center justify-center font-bold w-0 z-50 pt-5"
        @click="openLayout += 1"
        v-if="layoutCount > 1 && openLayout !== layoutCount - 1"
      >
        <span
          class="material-symbols-rounded"
          style="scale: 3; transform: translateX(-0.35rem)"
        >
          chevron_right
        </span>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import getChord, { ChordLayout, ChordObject } from './chords'
import ChordView from './Chord.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  chord: String,
  lite: Boolean
})
const store = useStore()

watch(() => props.chord, () => loadChord())

const chordFound = ref(false)
const chordLayouts = ref<ChordLayout[]>([])
const openLayout = ref(0)
const layoutCount = ref(0)
const chordData = ref<ChordObject | null>(null)

const mode = computed(() => store.state.chordMode)

onMounted(() => {
  store.watch(
    (state) => state.chordMode,
    (mode) => {
      loadChord()
    }
  )
})

function loadChord (): void {
  chordFound.value = false
  chordLayouts.value = []
  chordData.value = null
  openLayout.value = 0
  layoutCount.value = 0
  if (props.chord) {
    chordData.value = getChord(props.chord, mode.value)
    chordFound.value = chordData.value.found !== null
    if (chordData.value.found !== null) {
      chordLayouts.value = chordData.value.found.layouts
      layoutCount.value = chordLayouts.value.length
    }
  }
}

function click (event: MouseEvent): void {
  event.stopImmediatePropagation()
}
</script>

<style>
@reference 'tailwindcss';

.chord-menu {
  position: fixed;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  width: 200px;
  height: 170px;
  contain: content;
  color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

.posFix {
  transform: translateX(-6px);
}

@media (min-width: 768px) {
  .chord-menu {
    width: 300px;
    height: 250px;
  }

  .posFix {
    transform: translateX(-10px);
  }
}
</style>
