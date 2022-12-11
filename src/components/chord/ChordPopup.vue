<template>
    <div class="chord">
      <div v-if="chordFound">
        <ChordView v-for="(layout, i) in chordLayouts" :layout="layout" :lite="lite" :meta="chordMeta" :key="i" />
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import getChord, { ChordLayout } from './chords'
import ChordView from './Chord.vue'

@Component({ components: { ChordView } })
export default class ChordPopup extends Vue {
  @Prop() chord!: string | null
  @Prop() lite = false

  chordFound = false
  chordLayouts: ChordLayout[] = []
  chordMeta: { key: string, suffix: string, requested: string } | null = null

  mounted (): void {
    this.$watch('chord', () => {
      this.chordFound = false
      this.chordLayouts = []
      this.chordMeta = null
      if (this.chord) {
        const chordData = getChord(this.chord)
        this.chordFound = chordData.found !== null
        if (chordData.found !== null) {
          this.chordLayouts = chordData.found.layouts
          this.chordMeta = {
            key: chordData.found.key,
            suffix: chordData.found.suffix,
            requested: chordData.requested
          }
        }
      }
    })
  }
}
</script>
