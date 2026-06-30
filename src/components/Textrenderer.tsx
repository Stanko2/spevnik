import { defineComponent, ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { IState } from '../store'

interface TextSegment {
  text: string;
  type: 'text' | 'chord' | 'bold' | 'note';
}

export default defineComponent({
  name: 'TextRenderer',
  props: {
    text: { type: String, required: true },
    fontSize: { type: Number, required: false, default: 12 },
    columns: { type: Number, required: false, default: 1 },
    guitarMode: { type: Boolean, required: false, default: true }
  },
  setup(props) {
    const store = useStore()
    const touchAction = ref('none')

    const letters = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'H']
    const scale = {
      '#': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H'],
      b: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'B', 'H']
    }

    onMounted(() => {
      setTimeout(() => {
        touchAction.value = 'pan-y !important'
      }, 20)
    })

    const mod = (a: number, b: number): number => ((a % b) + b) % b

    const transpose = (chord: string): string => {
      if (['', ' ', 'N.C.', 'N.C', '/'].includes(chord)) return chord

      let split = chord.indexOf('/')
      if (split === -1) split = chord.indexOf(' ')
      else if (chord.indexOf(' ') !== -1) split = Math.min(split, chord.indexOf(' '))

      if (split === -1) {
        const initialScale = scale[chord.length >= 1 && chord[1] === '#' ? '#' : 'b']
        const currentScale = scale[(store.state as IState).scale]
        const t = store.state.transpose
        let a = chord[0]
        if (!letters.includes(a)) return chord[0] + transpose(chord.substring(1))

        if (chord[1] === '#' || chord[1] === 'b') {
          a += chord[1]
        }
        const index = initialScale.findIndex((e) => e === a)
        const scaledChord = currentScale[mod(index + t, currentScale.length)]
        return scaledChord + chord.substring(a.length, chord.length)
      } else {
        return transpose(chord.substring(0, split)) + chord[split] + transpose(chord.substring(split + 1))
      }
    }

    const getsegments = (line: string): TextSegment[] => {
      let segments: TextSegment[] = [{ text: '', type: 'text' }]
      if (line.startsWith('//')) {
        if (!props.guitarMode) return segments
        segments[0].text = line.substring(2, line.length)
        segments[0].type = 'note'
        return segments
      }
      for (const c of line) {
        if (c === '[') {
          segments.push({ text: '', type: 'chord' })
          continue
        }
        if (c === ']' || c === '}') {
          segments.push({ text: '', type: 'text' })
          continue
        }
        if (c === '{') {
          segments.push({ text: '', type: 'bold' })
          continue
        }
        segments[segments.length - 1].text += c
      }
      if (segments.length === 1 && segments[0].text === '') return segments
      if (!props.guitarMode) {
        segments = segments.filter((s) => s.type !== 'chord')
      }
      for (const segment of segments) {
        if (segment.type === 'chord') {
          segment.text = transpose(segment.text)
        }
      }
      return segments
    }

    const onChordClick = (event: MouseEvent): void => {
      event.preventDefault()
      event.stopImmediatePropagation()
      if (
        event.target instanceof HTMLElement &&
        event.target.classList.contains('chord')
      ) {
        store.commit('setChord', event.target.innerText)
      }
    }

    // Dynamic columns calculation logic
    const columnsToRender = computed(() => {
      const lines = props.text.split('\n')
      const viewportHeight = (document.querySelector('.viewport') as HTMLElement)?.offsetHeight || 1000
      const lineHeight = props.fontSize * 1.625
      const lineCount = Math.floor(viewportHeight / lineHeight)
      return Math.min(props.columns, Math.ceil(lines.length / lineCount))
    })

    return () => {
      const lines = props.text.split('\n')
      return (
        <div
          class="pb-3 leading-relaxed min-w-full max-w-full select-text"
          style={{ 'touch-action': touchAction.value }}
        >
          <div
            class="p-3 rounded-3xl"
            style={{
              'column-count': columnsToRender.value,
              'touch-action': 'pan-y !important'
            }}
          >
            {lines.map((line, index) => {
              const segments = getsegments(line)
              if (segments.length === 1 && segments[0].text === '') return <br key={index} />
              return (
                <p
                  key={index}
                  style={{ fontSize: props.fontSize + 'px' }}
                  class="dark:text-gray-200"
                >
                  {segments.map((segment, idx) => (
                    <span
                      key={idx}
                      class={segment.type}
                      onClick={onChordClick}
                    >
                      {segment.text}
                    </span>
                  ))}
                </p>
              )
            })}
          </div>
        </div>
      )
    }
  }
})
