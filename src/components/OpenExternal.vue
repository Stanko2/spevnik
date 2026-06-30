<template>
  <dialog ref="dialog" class="fixed top-1/2 left-1/2 -translate-1/2 p-3 rounded-xl bg-gray-300 dark:bg-gray-700 dark:text-white">
    <div class="flex justify-between items-center mb-5 relative">
      <h3 class="text-xl font-bold font-sans pr-8">{{ song?.name }}</h3>
      <button
        class="absolute -top-2 -right-2 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-600 p-2 flex items-center justify-center text-gray-500 dark:text-gray-300"
        @click="close"
      >
        <span class="material-symbols-rounded block text-xl">close</span>
      </button>
    </div>
    <div class="flex flex-col gap-3">
      <div v-if="songsterrSong" class="border border-gray-100 dark:border-gray-700 rounded-xl p-3 bg-gray-200 dark:bg-gray-900/50">
        <p class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Songsterr</p>
        <div class="flex gap-2">
          <button
            @click="openSongsterr('guitar')"
            class="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
          >
            <svg>
              <use href="@/assets/instruments.svg#acoustic-guitar"></use>
            </svg>
          </button>
          <button
            @click="openSongsterr('bass')"
            class="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <svg>
              <use href="@/assets/instruments.svg#electric-bass"></use>
            </svg>
          </button>
          <button
            @click="openSongsterr('drums')"
            class="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
          >
            <svg>
              <use href="@/assets/instruments.svg#drums"></use>
            </svg>
          </button>
        </div>
      </div>
      <button
        @click="openYoutube"
        class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-200 dark:bg-gray-600 rounded-xl dark:text-white font-semibold transition-colors shadow-md mt-2"
      >
        <img src="@/assets/youtube.svg" alt="youtube" class="w-8 h-8 block">
        <span>YouTube</span>
      </button>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { Song } from '@/store'
import { ref } from 'vue'


const props = defineProps<{
  song: Song
}>()

const dialog = ref<HTMLDialogElement | null>(null)

interface SongsterrResultEntry {
  songId: number,
  artist: string,
  title: string,
  tracks: SongsterrTrack[]
}


const songsterrSong = ref<SongsterrResultEntry | undefined>(undefined)



async function searchSongsterr () {
  const response = await fetch(`https://songsterr.com/api/search?pattern=${encodeURIComponent(props.song.name)}`)
  const data = await response.json() as { records: SongsterrResultEntry[] }
  console.log(data)

  if (data.records.length > 0) {
    const songTitle = props.song.name.replace(' ', '').toLowerCase()
    const songArtist = props.song.author.toLowerCase().replace(/\s/g, '')

    const artist = data.records[0].artist.toLowerCase().replace(/\s/g, '')
    const title = data.records[0].title.toLowerCase().replace(/\s/g, '')

    if (songTitle === title || songArtist === artist) {
      songsterrSong.value = data.records[0]

    }
  }
}

interface SongsterrTrack {
  instrumentId: number,
  instrument: string,
  hash: string,
  views: number
}

function openSongsterr(instrument: 'drums' | 'guitar' | 'bass') {
  if (songsterrSong.value) {
    const artist = songsterrSong.value.artist.toLowerCase().replace(/\s/g, '-')
    const title = songsterrSong.value.title.toLowerCase().replace(/\s/g, '-')
    const track = getSongsterrTrack(instrument)
    const urlInstrument = instrument === 'guitar' ? '' : `-${instrument}`
    console.log(track)
    if (track !== undefined) {
      window.open(`https://songsterr.com/a/wsa/${artist}-${title}${urlInstrument}-tab-s${songsterrSong.value.songId}t${track}`, '_blank')
    } else {
      window.open(`https://songsterr.com/a/wsa/${artist}-${title}${urlInstrument}-tab-s${songsterrSong.value.songId}`, '_blank')
    }
  }
}

function getSongsterrTrack (category: 'drums' | 'guitar' | 'bass'): number | undefined {
  if (!songsterrSong.value?.tracks) return undefined

  let bestTrackIndex: number | undefined
  let maxViews = -1

  songsterrSong.value.tracks.forEach((track, index) => {
    const name = track.instrument.toLowerCase()
    let isMatch = false

    if (category === 'drums') {
      isMatch = name.includes('drum') || name.includes('percussion')
    } else if (category === 'bass') {
      isMatch = name.includes('bass') && !name.includes('acoustic')
    } else if (category === 'guitar') {
      isMatch = (name.includes('guitar') && !name.includes('bass')) || name.includes('player')
    }

    if (isMatch && track.views > maxViews) {
      maxViews = track.views
      bestTrackIndex = index
    }
  })

  return bestTrackIndex
}

function openYoutube() {
  window.open('https://youtu.be/'+(props.song.youtube || 'dQw4w9WgXcQ'), '_blank')
}

function close() {
  songsterrSong.value = undefined
  dialog.value?.close()
}

defineExpose({
  show: () => {
    dialog.value?.showModal()
    console.log('show')
    searchSongsterr()
  },
  close
})
</script>

<style scoped>
svg {
  width: 2em;
  height: 2em;
  fill: white;
  transform: translate(5px, 0);
}
</style>
