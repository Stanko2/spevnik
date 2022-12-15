<template>
  <g>
    <g v-if="capo">
      <g
        :transform="
          'translate(' +
          getStringPosition(strings) +
          ', ' +
          positions.fret[barreFrets[0].value] +
          ')'
        "
      >
        <path
          d="
            M 0, 0
            m -4, 0
            a 4,4 0 1,1 8,0
          "
      :fill="color"
          fill-opacity="0.2"
          transform="rotate(-90)"
        />
      </g>
      <rect
      :fill="color"
        :x="fretXPosition[0]"
        :y="fretYPosition[barre - 1]"
        :width="(strings - 1) * 10"
        fill-opacity="0.2"
        height="8.25"
      />
      <g
        :transform="'translate(' + getStringPosition(1) + ', ' + positions.fret[barreFrets[0].value] + ')'"
      >
        <path
          d="
            M 0, 0
            m -4, 0
            a 4,4 0 1,1 8,0
            "
      :fill="color"
          fill-opacity="0.2"
          transform="rotate(90)"
        />
      </g>
    </g>
    <circle
      v-for="fret in barreFrets"
      :key="fret.position"
      strokeWidth="0.25"
      :stroke="color"
      :fill="color"
      :cx="getStringPosition(strings - fret.position)"
      :cy="positions.fret[fret.value]"
      r="4"
    />

    <rect
      :fill="color"
      :x="fretXPosition[string1]"
      :y="y"
      :width="width"
      height="8.25"
    />
    <g v-if="!lite && finger">
      <text
        v-for="fret in barreFrets"
        :key="fret.position"
        :x="getStringPosition(strings - fret.position)"
        :y="positions.finger[fret.value]"
        text-anchor="middle"
        fill="white"
        font-size="3pt"
        font-family="Verdana"
        >{{ finger }}</text
      >
    </g>
  </g>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Barre extends Vue {
  @Prop() barre!: number;
  @Prop() frets!: number[];
  @Prop() capo!: boolean;
  @Prop() finger!: number;
  @Prop() lite!: boolean;
  @Prop() color!: string;
  strings = this.frets.length;

  get fretXPosition () {
    return this.strings === 6
      ? [0, 10, 20, 30, 40, 50]
      : [10, 20, 30, 40, 50]
  }

  fretYPosition = [2.35, 13.9, 26, 38];

  get offset () {
    return this.strings === 6 ? -1 : 0
  }

  positions = {
    string: [50, 40, 30, 20, 10, 0],
    fret: [-4, 6.5, 18, 30, 42, 54],
    finger: [-3, 8, 19.5, 31.5, 43.5]
  };

  getStringPosition = (string: number) =>
    this.positions.string[string + this.offset];

  onlyBarres = (frets: number[], barre: number) =>
    frets
      .map((f, index) => ({ position: index, value: f }))
      .filter((f) => f.value === barre);

  barreFrets = this.onlyBarres(this.frets, this.barre);

  string1 = this.barreFrets[0].position;
  string2 = this.barreFrets[this.barreFrets.length - 1].position;
  width = (this.string2 - this.string1) * 10;
  y = this.fretYPosition[this.barre - 1];
}
</script>
