<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class="w-full h-full flex flex-row items-center justify-center">
    <svg width="100%" preserveAspectRatio="xMinYMin meet" viewBox="-5 0 80 70" style="--line-color: rgba(31, 41, 55, var(--tw-bg-opacity));">
      <g transform="translate(13, 13)" v-html="all"></g>
    </svg>
  </div></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Neck from '@/components/chord/Neck'
import Barre from '@/components/chord/Barre'
import Dot from '@/components/chord/Dot'
import { ChordLayout } from '@/components/chord/chords'

@Component
export default class ChordView extends Vue {
  @Prop() layout!: ChordLayout
  @Prop() lite!: boolean

  getNeck (): string {
    return Neck(this.layout.frets, this.layout.baseFret, this.layout.capo)
  }

  getBarres (): string {
    let ret = ''
    if (this.layout.barres) {
      this.layout.barres.forEach((barre: number) => {
        const finger = this.layout.fingers && this.layout.fingers[this.layout.frets.indexOf(barre)]
        ret += Barre(barre, this.layout.frets, this.layout.capo ?? false, finger, this.lite)
      })
    }
    return ret
  }

  onlyDots (): { value: number, position: number }[] {
    return this.layout.frets.map((f: number, i: number) => ({ position: i, value: f })).filter((f: { value: number, position: number }) => !this.layout.barres || this.layout.barres.indexOf(f.value) === -1)
  }

  getDots (): string {
    let ret = ''
    this.onlyDots().forEach((dot: { value: number, position: number }) => {
      ret += Dot(6 - dot.position, dot.value, this.layout.fingers && this.layout.fingers[dot.position], this.lite)
    })
    return ret
  }

  get all (): string {
    return this.getNeck() + this.getBarres() + this.getDots()
  }
}
</script>
