<template>
    <div class="w-screen h-screen dark:bg-gray-800 max-h-screen grid overflow-x-hidden" style="grid-template-rows: 3rem 1fr;">
        <div class="p-2 sticky w-screen rounded-md shadow-md bg-gray-300 dark:bg-gray-600 dark:text-white overflow-ellipsis whitespace-nowrap flex justify-between items-center">
                <h1 class="text-3xl text-left flex items-center">
                    <span class="material-symbols-rounded m-2 mr-4 font-bold cursor-pointer" @click="$router.back()">arrow_back</span>
                <p>Návrhy na zmeny</p>
            </h1>
            <div v-if="store.state.credential" class="opacity-70">
                Prihlásený ako {{ store.state.credential.displayName }}
            </div>
        </div>
        <div class="container mx-auto dark:text-gray-200">
            <div v-for="Suggestion in suggestions" :key="Suggestion.id" class="my-1">

                <div class="bg-gray-400 dark:bg-gray-500 flex justify-between rounded-md p-2">
                    <p>{{ store.state.songs[Suggestion.song.id - 1]?.name }}</p>
                    <div>
                        <button @click="resolve(Suggestion, true)"><span class="material-symbols-rounded text-green-500">done</span></button>
                        <button @click="resolve(Suggestion, false)"><span class="material-symbols-rounded text-red-500">close</span></button>
                        <button @click="toggle(Suggestion.id)"><span class="material-symbols-rounded">expand_more</span></button>
                    </div>
                </div>
                <div v-if="expanded.has(Suggestion.id)" class="flex flex-col justify-around dark:bg-gray-600 bg-gray-300 rounded-b-lg p-3">
                    <h2>Návrh od {{ Suggestion.userName }}</h2>
                    <div class="flex justify-between w-full my-1">
                        <span class="">Meno</span>
                        <div  :ref="(el) => setDomRef(el, 'namediff', Suggestion.id.substring(10))" class="text-left whitespace-pre-wrap bg-gray-200 dark:bg-gray-700 rounded-md p-0.5"></div>
                    </div>
                    <div class="flex justify-between w-full my-1">
                        <span class="">Interpret</span>
                        <div  :ref="(el) => setDomRef(el, 'authordiff', Suggestion.id.substring(10))" class="text-left whitespace-pre-wrap bg-gray-200 dark:bg-gray-700 rounded-md p-0.5"></div>
                    </div>
                    <div class="flex justify-between w-full my-1">
                        <span class="">Cesta</span>
                        <div  :ref="(el) => setDomRef(el, 'pathdiff', Suggestion.id.substring(10))" class="text-left whitespace-pre-wrap bg-gray-200 dark:bg-gray-700 rounded-md p-0.5"></div>
                    </div>
                    <div class="flex justify-between w-full my-1">
                        <span class="">Youtube ID</span>
                        <div  :ref="(el) => setDomRef(el, 'youtubediff', Suggestion.id.substring(10))" class="text-left whitespace-pre-wrap bg-gray-200 dark:bg-gray-700 rounded-md p-0.5"></div>
                    </div>
                    <div>
                        <span>Text</span>
                        <div :ref="(el) => setDomRef(el, 'textdiff', Suggestion.id.substring(10))" class="text-left whitespace-pre-wrap bg-gray-200 dark:bg-gray-700 rounded-md p-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { listAllSuggestions, resolveSuggestion } from '@/store/firebase'
import { ref, onMounted, nextTick, computed } from 'vue'
import { useStore } from 'vuex'
import { diffChars, diffWords } from 'diff'
import { Song } from '@/store'

interface Suggestion {
  userName: string
  song: Song
  id: string
}

const store = useStore()
const suggestions = ref<Suggestion[]>([])
const expanded = ref<Set<string>>(new Set())

const elementMap = ref<Record<string, HTMLElement>>({})

const setDomRef = (el: any, refName: string, id: string) => {
  if (el) {
    elementMap.value[`${refName}${id}`] = el as HTMLElement
  }
}

onMounted(() => {
  listAllSuggestions().then(s => {
    if (s == null) return
    suggestions.value = Object.values(s) as Suggestion[]
  })
})

function toggle (id: string): void {
  if (expanded.value.has(id)) {
    expanded.value.delete(id)
  } else {
    expanded.value.add(id)
    nextTick().then(() => createDiffs(suggestions.value.findIndex((e) => e.id === id)))
  }
}

const songs = computed(() => store.state.songs)

function createDiffs (idx: number):void {
  const sug = suggestions.value[idx]
  createDiff(songs.value[sug.song.id - 1].name, sug.song.name, 'char', 'namediff', sug.id.substring(10))
  createDiff(songs.value[sug.song.id - 1].author, sug.song.author, 'char', 'authordiff', sug.id.substring(10))
  createDiff(songs.value[sug.song.id - 1].path, sug.song.path, 'char', 'pathdiff', sug.id.substring(10))
  createDiff(songs.value[sug.song.id - 1].youtube || '', sug.song.youtube || '', 'char', 'youtubediff', sug.id.substring(10))
  createDiff(songs.value[sug.song.id - 1].text, sug.song.text, 'word', 'textdiff', sug.id.substring(10))
}

function createDiff (oldStr: string, newStr: string, type: 'char' | 'word', refName: string, id: string): void {
  const ret = document.createElement('div')
  const diff = type === 'char' ? diffChars(oldStr, newStr) : diffWords(oldStr, newStr)

  diff.forEach(part => {
    const color = part.added ? 'text-green-500' : part.removed ? 'text-red-500' : ''
    const span = document.createElement('span')
    span.classList.add(color)
    span.appendChild(document.createTextNode(part.value))
    ret.appendChild(span)
  })

  const targetElement = elementMap.value[`${refName}${id}`]
  if (targetElement) {
    targetElement.innerHTML = ''
    targetElement.appendChild(ret)
  }
}

function resolve (suggestion: Suggestion, accept: boolean):void {
  resolveSuggestion(suggestion, accept)
  suggestions.value.splice(suggestions.value.indexOf(suggestion), 1)
}

</script>
