import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { IState } from '../store'

interface TextSegment {
  text: string;
  type: 'text' | 'chord' | 'bold' | 'note';
}

@Component
export default class TextRenderer extends Vue {
  @Prop({ required: true }) text!: string;
  @Prop({ required: false, default: 12 }) fontSize!: number;
  @Prop({ required: false, default: 1 }) columns!: number;
  @Prop({ required: false, default: true }) guitarMode!: boolean;
  touchAction = 'none';

  scale = {
    '#': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H'],
    b: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'B', 'H']
  };

  render (): VNode {
    const lines = this.text.split('\n')
    const viewportHeight =
      (document.querySelector('.viewport') as HTMLElement)?.offsetHeight ||
      1000
    const lineHeight = this.fontSize * 1.625
    const lineCount = Math.floor(viewportHeight / lineHeight)
    const columnsToRender = Math.min(
      this.columns,
      Math.ceil(lines.length / lineCount)
    )
    setTimeout(() => {
      this.touchAction = 'pan-y !important'
    }, 20)
    return (
      <div
        class="pb-3 leading-relaxed min-w-full max-w-full select-text"
        style={{ 'touch-action': this.touchAction }}
      >
        <div
          class="m-3"
          style={{
            'column-count': columnsToRender,
            'touch-action': 'pan-y !important'
          }}
        >
          {lines.map((line, index) => {
            const segments = this.getsegments(line)
            if (segments.length === 1 && segments[0].text === '') return <br />
            return (
              <p
                key={index}
                style={{ fontSize: this.fontSize + 'px' }}
                class="dark:text-gray-200"
              >
                {segments.map((segment, index) => {
                  return (
                    <span
                      key={index}
                      class={segment.type}
                      onClick={this.onChordClick}
                    >
                      {segment.text}
                    </span>
                  )
                })}
              </p>
            )
          })}
        </div>
      </div>
    )
  }

  onChordClick (event: MouseEvent): void {
    event.preventDefault()
    event.stopImmediatePropagation()
    if (
      event.target instanceof HTMLElement &&
      event.target.classList.contains('chord')
    ) {
      this.$store.commit('setChord', event.target.innerText)
    }
  }

  computeColumns (): void {
    const viewport = this.$refs.viewport as HTMLElement
    const width = viewport.offsetWidth
    viewport.style.columnCount = Math.max(
      Math.ceil(width / parseFloat(viewport.style.lineHeight)),
      5
    ).toString()
  }

  transpose (chord: string): string {
    if (['', ' ', 'N.C.', 'N.C', '/'].includes(chord)) return chord // no chord, don't transpose

    let split = chord.indexOf('/')
    if (split === -1) split = chord.indexOf(' ')
    else if (chord.indexOf(' ') !== -1) split = Math.min(split, chord.indexOf(' '))

    // if chord contains a slash or a space, split it and transpose each part
    if (split === -1) {
      const initialScale =
        this.scale[chord.length >= 1 && chord[1] === '#' ? '#' : 'b']
      const scale = this.scale[(this.$store.state as IState).scale]
      const t = this.$store.state.transpose
      let a = chord[0]
      if (chord[1] === '#' || chord[1] === 'b') {
        a += chord[1]
      }
      const index = initialScale.findIndex((e) => e === a)
      const scaledChord = scale[this.mod(index + t, scale.length)]
      return scaledChord + chord.substring(a.length, chord.length)
    } else {
      return this.transpose(chord.substring(0, split)) + chord[split] + this.transpose(chord.substring(split + 1))
    }
  }

  mod (a: number, b: number): number {
    return ((a % b) + b) % b
  }

  getsegments (line: string): TextSegment[] {
    let segments: TextSegment[] = [{ text: '', type: 'text' }]
    if (line.startsWith('//')) {
      if (!this.guitarMode) return segments
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
    if (!this.guitarMode) {
      segments = segments.filter((s) => s.type !== 'chord')
    }
    for (const segment of segments) {
      if (segment.type === 'chord') {
        segment.text = this.transpose(segment.text)
      }
    }
    return segments
  }
}
