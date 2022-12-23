<template>
  <g>
    <g v-if="fret===-1">
      <text
      font-size="0.7rem"
      fill="var(--line-color)"
      font-family="Verdana"
      text-anchor="middle"
      :x="getStringPosition(string)"
      y="-2"
    >
      x
    </text>
    </g>
    <g v-else>
      <circle
        stroke-width="0.5"
        stroke="var(--line-color)"
        :fill="fret === 0 ? 'transparent' : color"
        :cx="getStringPosition(string)"
        :cy="positions.fret[fret]"
        :r="fret === 0 ? radius.open : radius.fret"
      />
        <text
          v-if="!lite && finger > 0"
          font-size="3pt"
          font-family="Verdana"
          text-anchor="middle"
          fill="white"
          :x="getStringPosition(string)"
          :y="positions.finger[fret]"
        >
          {{finger}}
        </text>
    </g>
  </g>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Dot extends Vue {
  @Prop() string!: number;
  @Prop() fret!: number;
  @Prop() finger!: number;
  @Prop() lite!: boolean;
  @Prop() color!: string;
  @Prop() strings!: number;

  positions = {
    string: [50, 40, 30, 20, 10, 0],
    fret: [-4, 6.5, 18, 30, 42, 54],
    finger: [-3, 8, 19.5, 31.5, 43.5]
  };

  get offset () {
    if (this.strings === 4) {
      return 0
    } else {
      return -1
    }
  }

  getStringPosition = (string: number) =>
    this.positions.string[this.string + this.offset];

  radius = {
    open: 2,
    fret: 4
  };
}
</script>
