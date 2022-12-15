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
      :d="'M ' + offsets.x + ' 0 H ' + offsets.length"
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

  offsets = {
    x: 0,
    y: 0,
    length: 50
  };

  getNeckHorizonalLine = (pos: number) =>
    `M ${this.offsets.x} ${12 * pos} H ${this.offsets.length}`;

  getNeckVerticalLine = (pos: number) =>
    `M ${this.offsets.y + pos * 10} 0 V 48`;

  getNeckPath = () =>
    Array(5)
      .fill(null)
      .map((_, pos) => this.getNeckHorizonalLine(pos))
      .join(' ')
      .concat(
        Array(6)
          .fill(null)
          .map((_, pos) => this.getNeckVerticalLine(pos))
          .join(' ')
      );

  getBarreOffset = (frets: number[], baseFret: number, capo: boolean) =>
    frets[0] === 1 || capo
      ? baseFret > 9
        ? -18
        : -14
      : baseFret > 9
        ? -14
        : -10;
}
</script>
