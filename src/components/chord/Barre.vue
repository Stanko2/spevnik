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

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{
  barre: number,
  frets: Array<number>,
  capo: boolean,
  finger: number,
  lite: boolean,
  color: string
}>()

const strings = computed(() => props.frets.length)

const fretXPosition = computed(() => {
  return strings.value === 6
    ? [0, 10, 20, 30, 40, 50]
    : [10, 20, 30, 40, 50]
})

const offset = computed(() => strings.value === 6 ? -1 : 0)

const positions = ref({
  string: [50, 40, 30, 20, 10, 0],
  fret: [-4, 6.5, 18, 30, 42, 54],
  finger: [-3, 8, 19.5, 31.5, 43.5]
})
const fretYPosition = ref([2.35, 13.9, 26, 38])


const getStringPosition = (string: number) =>
  positions.value.string[string + offset.value]

const onlyBarres = (frets: number[], barre: number) =>
  frets
    .map((f, index) => ({ position: index, value: f }))
    .filter((f) => f.value === barre)

const barreFrets = onlyBarres(props.frets, props.barre)
const string1 = barreFrets[0].position
const string2 = barreFrets[barreFrets.length - 1].position
const width = (string2 - string1) * 10
const y = fretYPosition.value[props.barre - 1]
</script>
