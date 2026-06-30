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

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{
  frets: number[];
  baseFret: number;
  capo: boolean;
  color: string;
  strings: number;
}>()

const offset = computed(() => {
  if (props.strings === 4) {
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
})

const getBarreOffset = (frets: number[], baseFret: number, capo: boolean) =>
  props.strings === 6
    ? frets[0] === 1 || capo ? (baseFret > 9 ? -18 : -14) : (baseFret > 9 ? -14 : -10)
    : frets[0] === 1 || capo ? (baseFret > 9 ? -8 : -4) : (baseFret > 9 ? -4 : 0)

const getNeckHorizonalLine = (pos: number) =>
  `M ${offset.value.x} ${12 * pos} H ${offset.value.length}`

const getNeckVerticalLine = (pos: number) => `M ${offset.value.y + pos * 10} 0 V 48`

const getNeckPath = () =>
  Array(5)
    .fill(null)
    .map((_, pos) => getNeckHorizonalLine(pos))
    .join(' ')
    .concat(
      Array(props.strings)
        .fill(null)
        .map((_, pos) => getNeckVerticalLine(pos))
        .join(' ')
    )
</script>
