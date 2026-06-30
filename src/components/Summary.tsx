import { defineComponent, PropType, Transition } from 'vue'
import { useStore } from 'vuex'

export interface SongTreeNode {
  id: number
  name: string
  type: 'node' | 'leaf'
  children: SongTreeNode[]
  expanded?: boolean
  explicit?: boolean
}

export default defineComponent({
  name: 'Summary',
  props: {
    nodes: {
      type: Array as PropType<SongTreeNode[]>,
      required: true
    }
  },
  setup (props) {
    const store = useStore()

    const toggleNode = (node: SongTreeNode): void => {
      node.expanded = !node.expanded
    }

    const selectSong = (id: number): void => {
      store.commit('setSong', id)
    }

    // Recursive render helper engine
    const renderNode = (node: SongTreeNode): JSX.Element => {
      if (node.type === 'leaf') {
        // Safe check to avoid undefined state issues if the song array is still loading
        const songData = store.state.songs[node.id - 1]
        const views = songData?.views ?? 0
        const maxViews = store.getters.maxViews || 1

        return (
          <div
            class="p-2 hover:bg-gray-400 transition-all bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md shadow-md flex items-center relative overflow-hidden my-1 cursor-pointer"
            onClick={() => selectSong(node.id)}
          >
            <span class="material-symbols-rounded mr-2">music_note</span>
            {node.name}

            {node.explicit && (
              <span class="bg-red-400 opacity-70 rounded-sm text-sm px-1 ml-1 text-white font-bold">E</span>
            )}

            <div
              class="absolute bottom-0 bg-gray-400 dark:bg-gray-500 h-1 left-0"
              style={{ width: `${(views / maxViews) * 100}%` }}
            ></div>
          </div>
        )
      }

      return (
        <div class="my-1">
          <div
            class="p-2 hover:bg-gray-400 dark:hover:bg-gray-500 transition-all bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-300 border-l-4 rounded-md shadow-md flex items-center cursor-pointer"
            onClick={() => toggleNode(node)}
          >
            <span class="material-symbols-rounded mr-2">
              {node.expanded ? 'folder_open' : 'folder'}
            </span>
            {node.name}
          </div>

          <div class="ml-4 rounded-md">
            <Transition
              name="accordion"
              enterActiveClass="transition-all ease-in-out duration-300 overflow-hidden"
              leaveActiveClass="transition-all ease-in-out duration-300 overflow-hidden"
              enterToClass="h-auto"
              leaveToClass="h-0"
              enterFromClass="h-0"
              leaveFromClass="h-auto"
            >
              {node.expanded ? (
                <div>
                  {node.children.map((child) => renderNode(child))}
                </div>
              ) : null}
            </Transition>
          </div>
        </div>
      )
    }

    // Root Render Output
    return () => (
      <div class="text-left rounded-md space-y-1">
        {props.nodes.map((node) => renderNode(node))}
      </div>
    )
  }
})
