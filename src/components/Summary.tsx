import store, { Song } from '@/store'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export interface SongTreeNode {
    id: number
    name: string
    type: 'node' | 'leaf'
    children: SongTreeNode[]
    song?: Song
    expanded?: boolean
    explicit?: boolean
}

@Component
export default class Summary extends Vue {
    @Prop({ required: true }) nodes!: SongTreeNode[]

    render (): JSX.Element {
      return <div class="text-left rounded-md">{
        this.nodes.map((node) => {
          return this.renderNode(node)
        })
      }</div>
    }

    renderNode (node: SongTreeNode): JSX.Element {
      if (node.type === 'leaf') {
        console.log(node.id)
        const views = store.state.songs[node.id - 1].views ?? 0
        return <div class="p-2 hover:bg-gray-400 transition-all bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md shadow-md flex items-center relative overflow-hidden" onClick={() => this.selectSong(node.id)}>
          <span class="material-symbols-rounded mr-2">music_note</span>{node.name}
          { node.explicit &&
            <span class="bg-red-400 opacity-70 rounded-sm text-sm px-1 ml-1" v-if="song.explicit">E</span>
          }
          <div class="absolute bottom-0 bg-gray-400 dark:bg-gray-500 h-1 left-0" style={
            {
              width: `${(views / store.getters.maxViews) * 100}%`
            }
          }></div>
        </div>
      }
      return <div>
        <div class="p-2 hover:bg-gray-400 dark:hover:bg-gray-500 transition-all bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-300 border-l-4 rounded-md shadow-md flex items-center" onClick={() => this.toggleNode(node)}>
          <span class="material-symbols-rounded mr-2">{node.expanded ? 'folder_open' : 'folder'}</span>{node.name}
        </div>
        <div class="ml-4 rounded-md">
          <transition
            name="accordion"
            enter-active-class="transition-all ease-in-out duration-300 overflow-hidden"
            leave-active-class="transition-all ease-in-out duration-300 overflow-hidden"
            enter-to-class="h-auto"
            leave-to-class="h-0"
            enter-class="h-0"
            leave-class="h-auto"
          >
            {node.expanded ? <div>{node.children.map((child) => this.renderNode(child))}</div> : null}
          </transition>
        </div>
      </div>
    }

    toggleNode (node: SongTreeNode): void {
      node.expanded = !node.expanded
    }

    selectSong (id:number): void {
      this.$store.commit('setSong', id)
      // this.$router.push({ path: `/song/${id}` })
    }
}
