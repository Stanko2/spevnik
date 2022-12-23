<template>
  <Transition
    enter-active-class="duration-200"
    leave-active-class="duration-200"
    enter-class="transform-gpu translate-y-full translate-x-1/2 opacity-0"
    leave-to-class="transform-gpu translate-y-full translate-x-1/2 opacity-0"
    leave-class="transform-gpu translate-y-0 translate-x-1/2 opacity-1"
    enter-to-class="transform-gpu translate-y-0 translate-x-1/2 opacity-1"
  >
    <div
      class="chord flex flex-row rounded-tr-lg rounded-tl-lg overflow-hidden bg-gray-500 shadow-2xl z-30"
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

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import getChord, { ChordLayout, ChordObject } from './chords'
import ChordView from './Chord.vue'

@Component({ components: { ChordView } })
export default class ChordPopup extends Vue {
  @Prop() chord!: string | null;
  @Prop() lite = false;

  chordFound = false;
  chordLayouts: ChordLayout[] = [];
  openLayout = 0;
  layoutCount = 0;
  chordData: ChordObject | null = null;

  mode = this.$store.state.chordMode;

  mounted (): void {
    this.$watch('chord', () => {
      this.loadChord()
    })

    this.$store.watch(
      (state) => state.chordMode,
      (mode) => {
        this.mode = mode
        this.loadChord()
      }
    )
  }

  loadChord (): void {
    this.chordFound = false
    this.chordLayouts = []
    this.chordData = null
    this.openLayout = 0
    this.layoutCount = 0
    if (this.chord) {
      this.chordData = getChord(this.chord, this.mode)
      this.chordFound = this.chordData.found !== null
      if (this.chordData.found !== null) {
        this.chordLayouts = this.chordData.found.layouts
        this.layoutCount = this.chordLayouts.length
      }
    }
  }

  click (event: MouseEvent): void {
    event.stopImmediatePropagation()
  }
}
</script>

<style>
.chord {
  position: fixed;
  bottom: 3.5rem;
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
  .chord {
    width: 300px;
    height: 250px;
  }

  .posFix {
    transform: translateX(-10px);
  }
}
</style>
