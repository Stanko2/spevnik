<template>
  <div class="chord flex flex-row rounded-tr-lg rounded-tl-lg overflow-hidden bg-gray-500" v-if="chordFound">
    <div class="h-full flex flex-col items-center justify-center font-bold w-0 z-50 pt-5" @click="openLayout -= 1"
      v-if="layoutCount > 1 && openLayout !== 0">
      <span class="material-symbols-rounded" style="scale:3; transform: translateX(.35rem)">
        chevron_left
      </span>
    </div>
    <div class="w-full h-full flex flex-col">
      <span class="font-bold p-1 absolute w-full align-center text-3xl">{{ chord }}</span>
      <div class="w-full h-full pt-9">
        <div class="layouts flex flex-row flex-nowrap h-full" :style="`width: ${layoutCount * 100}%;`">
          <div class="layout w-full p-3" :class="{ open: openLayout === i }" v-for="(layout, i) in chordLayouts"
            :key="i" :style="`transform: translateX(-${openLayout * 100}%);`">
            <ChordView :chord="chordData" :layout="layout" :lite="lite"></ChordView>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full flex flex-col items-center justify-center font-bold w-0 z-50 pt-5" @click="openLayout += 1"
      v-if="layoutCount > 1 && openLayout !== layoutCount - 1">
      <span class="material-symbols-rounded" style="scale:3; transform: translateX(-.35rem)">
        chevron_right
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import getChord, { ChordLayout, ChordObject } from './chords'
import ChordView from './Chord.vue'

@Component({ components: { ChordView } })
export default class ChordPopup extends Vue {
  @Prop() chord!: string | null
  @Prop() lite = false

  chordFound = false
  chordLayouts: ChordLayout[] = []
  openLayout = 0
  layoutCount = 0
  chordData: ChordObject | null = null

  mounted (): void {
    this.$watch('chord', () => {
      this.chordFound = false
      this.chordLayouts = []
      this.chordData = null
      this.openLayout = 0
      this.layoutCount = 0
      if (this.chord) {
        this.chordData = getChord(this.chord)
        this.chordFound = this.chordData.found !== null
        if (this.chordData.found !== null) {
          this.chordLayouts = this.chordData.found.layouts
          this.layoutCount = this.chordLayouts.length
        }
      }
    })
  }
}
</script>

<style>
.chord {
  position: fixed;
  bottom: 3.5rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 1000;
  width: 200px;
  height: 170px;
  contain: content;
  color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

@media (min-width: 768px) {
  .chord {
    width: 300px;
    height: 250px;
  }
}
</style>
