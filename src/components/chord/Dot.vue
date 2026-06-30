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

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{
  string: number,
  fret: number,
  finger: number,
  lite: boolean,
  color: string,
  strings: number
}>()

const positions = ref({
  string: [50, 40, 30, 20, 10, 0],
  fret: [-4, 6.5, 18, 30, 42, 54],
  finger: [-3, 8, 19.5, 31.5, 43.5]
})

const offset = computed(() => {
  if (props.strings === 4) {
    return 0
  } else {
    return -1
  }
})

const getStringPosition = (string: number) =>
  positions.value.string[string + offset.value]

const radius = ref({
  open: 2,
  fret: 4
})

</script>
