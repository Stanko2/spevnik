<template>
    <div class="max-w-full h-full relative overflow-hidden perspective-distant" ref="rootElement">
        <text-renderer
          :class="[
            'min-h-full w-full h-full overflow-y-auto block backface-hidden relative top-0 left-0',
            { 'transition-all duration-300 ease-out select-none': isTransitioning }
          ]"
          style="touch-action: pan-y !important;"
          ref="swipeTarget"
          :text="song?.text || ''"
          :style="currentSongStyle"
          :guitarMode="store.state.guitarMode"
          :fontSize="store.state.fontSize"
          :columns="store.state.columnCount"
        ></text-renderer>

        <text-renderer
          v-if="upcomingSong"
          :class="[
            'min-h-full w-full absolute top-0 left-0 backface-hidden pointer-events-none',
            { 'transition-all duration-300 ease-out': isTransitioning }
          ]"
          style="touch-action: pan-y !important;"
          :text="upcomingSong?.text || ''"
          :style="upcomingSongStyle"
          :guitarMode="store.state.guitarMode"
          :fontSize="store.state.fontSize"
          :columns="store.state.columnCount"
        ></text-renderer>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Song } from '@/store'
import { usePointerSwipe, UseSwipeDirection } from '@vueuse/core'
import TextRenderer from '@/components/Textrenderer'

const store = useStore()
const emit = defineEmits<{
  play: [playing: boolean]
  selectSong: [id: number]
}>()
const props = defineProps<{
  song: Song,
  prevSong: Song | undefined
  nextSong: Song | undefined
}>()

const rootElement = ref<HTMLElement | null>(null)
const scrollX = ref(0)
const isTransitioning = ref(false)
const forcedDirection = ref<UseSwipeDirection | null>(null)

// Determine which song is arriving based on swipe finger OR forced animation direction
const upcomingSong = computed(() => {
  if (scrollX.value < 0 || forcedDirection.value === 'left') return props.nextSong
  if (scrollX.value > 0 || forcedDirection.value === 'right') return props.prevSong
  return null
})

const swipeProgress = computed(() => {
  const screenWidth = window.innerWidth || 375
  return Math.min(Math.abs(scrollX.value) / screenWidth, 1)
})

const currentSongStyle = computed(() => {
  const progress = swipeProgress.value
  const rotation = scrollX.value * 0.015
  const scale = 1 - (progress * 0.08)
  const opacity = 1 - progress

  return {
    transform: `translateX(${scrollX.value}px) rotateY(${rotation}deg) scale(${scale})`,
    transformOrigin: scrollX.value < 0 || forcedDirection.value === 'left' ? 'right center' : 'left center',
    opacity: opacity
  }
})

const upcomingSongStyle = computed(() => {
  const progress = swipeProgress.value
  const scale = 0.92 + (progress * 0.08)
  const opacity = progress

  const width = window.innerWidth || 375
  let translateX = scrollX.value

  // If we are dragging or animating to the next song (swiping left)
  if (scrollX.value < 0 || forcedDirection.value === 'left') {
    translateX += width
  } else { // Swiping right / previous song
    translateX -= width
  }

  return {
    transform: `translateX(${translateX}px) scale(${scale})`,
    opacity: opacity
  }
})

const swipeTarget = ref<HTMLDivElement | null>(null)
const { distanceX } = usePointerSwipe(swipeTarget, {
  threshold: 40,
  onSwipeEnd: onSwipeEnd,
  onSwipe: onPan,
  onSwipeStart: onSwipeStart
})

function onSwipeStart (e: PointerEvent): void {
  if (window.getSelection) {
    window.getSelection()?.removeAllRanges()
  } else if ((document as any).selection) {
    (document as any).selection.empty()
  }
}

function onPan (e: PointerEvent):void {
  if (forcedDirection.value) return // Block gesture adjustments if a transition is completing
  isTransitioning.value = false
  scrollX.value = -distanceX.value
}

function onSwipeEnd (e: PointerEvent, direction: UseSwipeDirection):void {
  const screenWidth = window.innerWidth || 375

  isTransitioning.value = true

  // Case 1: Swipe didn't pass threshold -> snap back smoothly
  if (Math.abs(distanceX.value) < screenWidth / 3) {
    scrollX.value = 0
    return
  }

  // Case 2: Successful swipe -> force the animation to complete its full slide out
  forcedDirection.value = direction
  if (direction === 'left') {
    scrollX.value = -screenWidth
  } else {
    scrollX.value = screenWidth
  }

  // Wait exactly 300ms for the CSS transition to visually finish, THEN tell parent to swap data
  setTimeout(() => {
    if (direction === 'left') {
      emit('selectSong', props.song.id + 1)
    } else if (direction === 'right') {
      emit('selectSong', props.song.id - 1)
    }

    // Clean reset after DOM matches state
    isTransitioning.value = false
    forcedDirection.value = null
    scrollX.value = 0
  }, 300)
}
</script>

<style>
.chord {
  cursor: pointer;
}
</style>
