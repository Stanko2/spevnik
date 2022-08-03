import { Song } from '@/store'
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
        return <div class="p-2 hover:bg-gray-400 transition-all bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md shadow-md flex items-center" onClick={() => this.selectSong(node.id)}>
          <span class="material-symbols-rounded mr-2">music_note</span>{node.name}
        </div>
      }
      return <div>
        <div class="p-2 hover:bg-gray-400 dark:hover:bg-gray-500 transition-all bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-300 border-l-4 rounded-md shadow-md flex items-center" onClick={() => this.toggleNode(node)}>
          <span class="material-symbols-rounded mr-2">{node.expanded ? 'folder_open' : 'folder'}</span>{node.name}
        </div>
        <div class="ml-4 rounded-md">
          <tranistion
            enter-active-class="transition-all ease-in-out duration-300"
            leave-active-class="transition-all ease-in-out duration-300"
            enter-to-class="h-0"
            leave-to-class="h-auto"
            enter-class="h-auto"
            leave-class="h-0"
          >
            {node.expanded ? node.children.map((child) => this.renderNode(child)) : null}
          </tranistion>
        </div>
      </div>
    }

    toggleNode (node: SongTreeNode): void {
      node.expanded = !node.expanded
    }

    selectSong (id:number): void {
      this.$router.push({ path: `/song/${id}` })
    }
}
