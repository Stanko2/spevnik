<template>
    <div class="h-full z-50 grid shadow-2xl" style="grid-template-rows: min-content 1fr min-content;">
        <div>
          <h1 class="text-2xl mt-5">Obsah</h1>
          <div class="flex justify-items-stretch h-10 z-30 m-3">
              <input type="search" class="dark:bg-gray-500 bg-gray-300 p-2 rounded-l-md outline-none flex-grow" v-model="SearchQuery">
              <button class="btn m-0 rounded-none flex-shrink h-10 w-10" @click="selectMode(selectedMode)">
                  <span class="material-symbols-rounded block">
                      search
                  </span>
              </button>
              <button class="btn m-0 rounded-l-none flex-shrink h-10 w-10" @click="showModeDropdown = !showModeDropdown">
                  <span class="material-symbols-rounded block">
                      {{ selectedMode?.icon || 'sort' }}
                  </span>
              </button>
          </div>
          <transition
              enter-active-class="duration-300 transition-all ease-in-out transform-gpu"
              leave-active-class="duration-300 transition-all ease-in-out transform-gpu"
              enter-class="-translate-y-5 opacity-0 z-10"
              leave-class="translate-y-0 opacity-100"
              enter-to-class="translate-y-0 opacity-100"
              leave-to-class="-translate-y-5 opacity-0 z-10"
          >
              <div v-if="showModeDropdown" class="absolute w-60 text-left right-2 bg-gray-300 dark:bg-gray-600 shadow-xl rounded-md z-50">
                  <div v-for="(mode,i) in songTreeModes" @click="selectMode(mode)" :key="i" class="transition-all hover:bg-gray-400 dark:hover:bg-gray-500 p-2 rounded-md flex items-center"><span class="material-symbols-rounded mr-1">{{ mode.icon }}</span>{{mode.text}}</div>
              </div>
          </transition>
        </div>
        <div class="overflow-y-auto xl:left-2/3 content mx-3">
          <Summary class="left-3 right-3" :nodes="nodes" v-if="$store.state.songs.length > 0"></Summary>
          <div v-else class="text-red-400">Pre zobrazenie obsahu zapni offline režim v nastaveniach</div>
        </div>
        <div class="z-20 w-full bg-gray-600 rounded-b-md flex" v-if="$store.state.credential">
          <button class="btn w-1/2 flex items-center justify-between px-2" @click="openEditor(false)" v-shortkey="['e']" @shortkey="openEditor(false)">
            {{ $store.state.isAdmin ? 'Zmeniť aktuálnu pesničku' : 'Navrhnúť zmenu' }}
            <span class="material-symbols-rounded">
              edit
            </span>
          </button>
          <button class="btn w-1/2 flex items-center justify-between px-2" @click="openEditor(true)" v-shortkey="['q']" @shortkey="openEditor(true)" v-if="$store.state.songs.length > 0">
            {{ $store.state.isAdmin ? 'Pridať novú pesničku' : 'Navrhnúť novú pesničku' }}
            <span class="material-symbols-rounded">
              add
            </span>
          </button>
        </div>
    </div>
</template>

<script lang="ts">
import store, { Song } from '@/store'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Search } from './Search'
import Summary, { SongTreeNode } from './Summary'

interface SortMode {
    name: string
    icon: string
    text: string
}

@Component({ components: { Summary } })
export default class SummaryView extends Vue {
    @Prop({ required: false, default: '' }) SearchQuery!: string
    songTree: SongTreeNode | null = null
    showModeDropdown = false
    songTreeModes: SortMode[] = [
      {
        name: 'default',
        text: 'Podľa spevníkov',
        icon: 'book'
      },
      {
        name: 'popular',
        text: 'Najpopulárnejšie',
        icon: 'sort'
      },
      {
        name: 'author',
        text: 'Podľa interpretov',
        icon: 'person'
      },
      {
        name: 'alphabetical',
        text: 'Abecedne',
        icon: 'abc'
      }
    ]

    nodes: SongTreeNode[] = []
    selectedMode!: SortMode

    created ():void {
      this.selectMode(this.songTreeModes[0])
    }

    openEditor (newSong:boolean):void {
      if (newSong) {
        this.$router.push({
          name: 'Editor',
          params: {
            id: '-1'
          }
        })
      } else { this.$router.push({ path: `/edit/${this.$store.state.currentSong}` }) }
    }

    selectMode (mode: SortMode):void {
      this.selectedMode = mode
      this.showModeDropdown = false
      let songs: Song[] = this.$store.state.songs
      if (!this.$store.state.showExplicit) {
        songs = songs.filter(song => !song.explicit)
      }
      const songsFiltered: Song[] = Search(this.SearchQuery).map(s => {
        const song = songs.find(song => song.id === s.id)
        if (song) {
          return song
        }
        throw new Error(`Song with id: ${s.id} not found`)
      })
      this.nodes = this.buildSongTree(songsFiltered)
    }

    buildSongTree (songs: Song[]):SongTreeNode[] {
      switch (this.selectedMode.name) {
        case 'default':
          return this.buildDefaultSongTree(songs)
        case 'author':
          return this.buildSongTreeByAuthor(songs)
        case 'alphabetical':
          return songs.sort((a:Song, b:Song) => a.name.localeCompare(b.name)).map((song:Song) => ({
            id: song.id,
            name: song.name,
            type: 'leaf',
            explicit: song.explicit
          })) as SongTreeNode[]
        case 'popular':
          return songs.sort((a:Song, b:Song) => (b.views ?? 0) - (a.views ?? 0)).map((song:Song) => ({
            id: song.id,
            name: song.name,
            type: 'leaf',
            explicit: song.explicit
          })) as SongTreeNode[]
        default:
          throw new Error('Unknown sort mode')
      }
    }

    buildSongTreeByAuthor (songs: Song[]): SongTreeNode[] {
      const authors = songs.map(song => song.author).filter((author, i, arr) => arr.indexOf(author) === i)
      const tree: SongTreeNode = {
        id: -1,
        name: '',
        type: 'node',
        children: []
      }
      for (const author of authors) {
        const songsByAuthor = songs.filter(song => song.author === author)
        tree.children.push({
          id: -1,
          name: author,
          type: 'node',
          children: (songsByAuthor.map((song:Song) => ({
            id: song.id,
            name: song.name,
            type: 'leaf',
            explicit: song.explicit
          })) as SongTreeNode[]),
          expanded: false
        })
      }
      this.sortTree(tree)
      return tree.children as SongTreeNode[]
    }

    buildDefaultSongTree (songs: Song[]):SongTreeNode[] {
      const tree: SongTreeNode = {
        children: [],
        id: -1,
        name: '',
        type: 'node',
        expanded: false
      }
      for (const song of songs) {
        this.addSongToTree(tree, song)
      }
      this.sortTree(tree)
      return tree.children
    }

    addSongToTree (tree: SongTreeNode, song: Song): SongTreeNode {
      const path = song.path.split('/')
      path.pop()
      let currentNode = tree
      for (const part of path) {
        const found = currentNode.children.find((node: SongTreeNode) => node.name === part)
        if (found) {
          currentNode = found
        } else {
          const newNode: SongTreeNode = {
            id: -1,
            name: part,
            type: 'node',
            children: [],
            expanded: false
          }
          currentNode.children.push(newNode)
          currentNode = newNode
        }
      }
      currentNode.children.push({
        id: song.id,
        name: song.name,
        type: 'leaf',
        children: [],
        explicit: song.explicit
      })
      return tree
    }

    sortTree (tree: SongTreeNode):void {
      if (tree.type === 'leaf') return
      tree.children.sort((a: SongTreeNode, b:SongTreeNode) => {
        const aNum = parseInt(a.name.split('.')[0])
        const bNum = parseInt(b.name.split('.')[0])
        if (aNum !== bNum && !isNaN(aNum) && !isNaN(bNum)) {
          return aNum > bNum ? 1 : -1
        } else {
          return a.name.localeCompare(b.name)
        }
      })
      for (const child of tree.children) {
        this.sortTree(child)
      }
    }
}
</script>

<style scoped>
.content::-webkit-scrollbar{
    display: block;
    width: 15px;
    background-color: transparent;
    position: absolute;
}
.content::-webkit-scrollbar-thumb{
    @apply bg-gray-400 dark:bg-gray-200 rounded-full hover:bg-gray-500;
}
</style>
