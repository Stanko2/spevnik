<template>
  <svg width="500px" preserveAspectRatio="xMinYMin meet" viewBox="0 -10 80 80" class="chord">
    <g v-if="meta.requested !== (meta.key ?? '') + meta.suffix">
      <text class="requested" x="40" y="-1"
      >{{ meta.requested }}</text>
      <text class="found" x="40" y="4">{{ meta.key }} {{ meta.suffix }}</text>
    </g>
    <g v-else>
      <text class="requested" x="40" y="3">{{ meta.requested }}</text>
    </g>
    <g transform="translate(13, 13)" v-html="all"></g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Neck from '@/components/chord/Neck'
import Barre from '@/components/chord/Barre'
import Dot from '@/components/chord/Dot'
import { ChordObject, ChordLayout } from '@/components/chord/chords'

@Component
export default class ChordView extends Vue {
  @Prop() meta!: {key: string, suffix: string, requested: string}
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

<style scoped>
.chord {
  font-family: 'Verdana', sans-serif;
}

.requested {
  font-size: 7pt;
  font-weight: bold;
  text-anchor: middle;
  fill: #999;
}

.found {
  font-size: 2.5pt;
  font-weight: bold;
  text-anchor: middle;
  fill: #999;
  transform: translate(0, 5);
}
</style>
