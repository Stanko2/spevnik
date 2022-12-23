<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class="w-full h-full flex flex-row items-center justify-center">
      <svg
        width="100%"
        preserveAspectRatio="xMinYMin meet"
        viewBox="-5 0 80 70"
        style="--line-color: rgba(31, 41, 55, var(--tw-bg-opacity))"
      >
        <g transform="translate(13, 13)">
          <Neck
            :frets="layout.frets"
            :base-fret="layout.baseFret"
            :capo="layout.capo"
            :color="color"
            :strings="strings"
          />
        </g>
        <g transform="translate(13, 13)">
          <Barre
            v-for="barre in layout.barres"
            :key="barre"
            :barre="barre"
            :frets="layout.frets"
            :capo="layout.capo ?? false"
            :finger="
              layout.fingers && layout.fingers[layout.frets.indexOf(barre)]
            "
            :lite="lite"
            :color="color"
          />
        </g>
        <g transform="translate(13, 13)">
          <Dot
            v-for="dot in onlyDots()"
            :key="dot.position"
            :string="strings - dot.position"
            :fret="dot.value"
            :finger="layout.fingers && layout.fingers[dot.position]"
            :lite="lite"
            :color="color"
            :strings="strings"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Neck from '@/components/chord/Neck.vue'
import Barre from '@/components/chord/Barre.vue'
import Dot from '@/components/chord/Dot.vue'
import { ChordLayout } from '@/components/chord/chords'

@Component({
  components: {
    Barre,
    Dot,
    Neck
  }
})
export default class ChordView extends Vue {
  @Prop() layout!: ChordLayout;
  @Prop() lite!: boolean;

  strings = this.$store.state.chordMode === 'guitar' ? 6 : 4;

  mounted () {
    this.$store.watch(
      (state) => state.chordMode,
      (mode) => {
        this.strings = mode === 'guitar' ? 6 : 4
      }
    )
  }

  color = 'rgba(31, 41, 55, var(--tw-bg-opacity))';

  onlyDots (): { value: number; position: number }[] {
    return this.layout.frets
      .map((f: number, i: number) => ({ position: i, value: f }))
      .filter(
        (f: { value: number; position: number }) =>
          !this.layout.barres || this.layout.barres.indexOf(f.value) === -1
      )
  }
}
</script>
