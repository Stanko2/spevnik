<template>
  <g>
    <path
      stroke="var(--line-color)"
      stroke-width="0.25"
      stroke-linecap="square"
      stroke-linejoin="square"
      :d="getNeckPath()"
    />
    <path
      v-if="baseFret === 1"
      stroke="var(--line-color)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      :d="'M ' + offset.x + ' 0 H ' + offset.length"
    />
    <text
      v-else
      font-size="0.4rem"
      fill="var(--line-color)"
      font-family="Verdana"
      :x="getBarreOffset(frets, baseFret, capo)"
      y="8"
      >{{ baseFret }}fr</text
    >
  </g>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ChordView extends Vue {
  @Prop() frets!: number[];
  @Prop() baseFret!: number;
  @Prop() capo!: boolean;
  @Prop() color!: string;
  @Prop() strings!: number;

  get offset () {
    if (this.strings === 4) {
      return {
        x: 10,
        y: 10,
        length: 40
      }
    } else {
      return {
        x: 0,
        y: 0,
        length: 50
      }
    }
  }

  getNeckHorizonalLine = (pos: number) =>
    `M ${this.offset.x} ${12 * pos} H ${this.offset.length}`;

  getNeckVerticalLine = (pos: number) => `M ${this.offset.y + pos * 10} 0 V 48`;

  getNeckPath = () =>
    Array(5)
      .fill(null)
      .map((_, pos) => this.getNeckHorizonalLine(pos))
      .join(' ')
      .concat(
        Array(this.strings)
          .fill(null)
          .map((_, pos) => this.getNeckVerticalLine(pos))
          .join(' ')
      );

  getBarreOffset = (frets: number[], baseFret: number, capo: boolean) =>
    this.strings === 6
      ? frets[0] === 1 || capo ? (baseFret > 9 ? -18 : -14) : (baseFret > 9 ? -14 : -10)
      : frets[0] === 1 || capo ? (baseFret > 9 ? -8 : -4) : (baseFret > 9 ? -4 : 0)
}
</script>
