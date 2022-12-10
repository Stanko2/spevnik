<template>
  <svg width="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 80 70">
    <g transform="translate(13, 13)" v-html="all"></g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Neck from '@/components/chord/Neck'
import Barre from '@/components/chord/Barre'
import Dot from '@/components/chord/Dot'
import { ChordLayout } from '@/components/chord/chords'

@Component
export default class ChordView extends Vue {
    @Prop() chord!: ChordLayout
    @Prop() lite!: boolean
    $refs!: {
        svg: SVGSVGElement
    }

    getNeck (): string {
      return Neck(this.chord.frets, this.chord.baseFret, this.chord.capo)
    }

    getBarres (): string {
      let ret = ''
      if (this.chord.barres) {
        this.chord.barres.forEach((barre: number) => {
          const finger = this.chord.fingers && this.chord.fingers[this.chord.frets.indexOf(barre)]
          ret += Barre(barre, this.chord.frets, this.chord.capo ?? false, finger, this.lite)
        })
      }
      return ret
    }

    onlyDots (): any[] {
      return this.chord.frets.map((f: number, i: number) => ({ position: i, value: f })).filter((f: any) => !this.chord.barres || this.chord.barres.indexOf(f.value) === -1)
    }

    getDots (): string {
      let ret = ''
      this.onlyDots().forEach((dot: any) => {
        ret += Dot(6 - dot.position, dot.value, this.chord.fingers && this.chord.fingers[dot.position], this.lite)
      })
      return ret
    }

    get all (): string {
      return this.getNeck() + this.getBarres() + this.getDots()
    }
}
</script>
