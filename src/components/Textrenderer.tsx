import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { IState } from '../store'

interface TextSegment {
    text: string
    type: 'text' | 'accord' | 'bold' | 'note'
}

@Component
export default class TextRenderer extends Vue {
    @Prop({ required: true }) text!: string
    @Prop({ required: false, default: 12 }) fontSize!: number
    @Prop({ required: false, default: 1 }) columns!: number
    @Prop({ required: false, default: true }) guitarMode!: boolean
    touchAction = 'none'

    scale = {
      '#': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H'],
      b: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'B', 'H']
    }

    render (): VNode {
      const lines = this.text.split('\n')
      const viewportHeight = (document.querySelector('.viewport') as HTMLElement)?.offsetHeight || 1000
      const lineHeight = this.fontSize * 1.625
      const lineCount = Math.floor(viewportHeight / lineHeight)
      const columnsToRender = Math.min(this.columns, Math.ceil(lines.length / lineCount))
      setTimeout(() => {
        this.touchAction = 'pan-y !important'
      }, 20)
      return (
        <div class="text-left pb-3 leading-relaxed min-w-full max-w-full select-text" style={{ 'touch-action': this.touchAction }}>
          <div class="m-3" style={{ 'column-count': columnsToRender, 'touch-action': 'pan-y !important' }}>
            {lines.map((line, index) => {
              const segments = this.getsegments(line)
              if (segments.length === 1 && segments[0].text === '') return <br />
              return <p key={index} style={{ fontSize: this.fontSize + 'px' }} class="dark:text-gray-200">
                {segments.map((segment, index) => {
                  return <span key={index} class={segment.type}>{segment.text}</span>
                })}
              </p>
            })}
          </div>
        </div>
      )
    }

    computeColumns ():void{
      const viewport = this.$refs.viewport as HTMLElement
      const width = viewport.offsetWidth
      viewport.style.columnCount = Math.max(Math.ceil(width / parseFloat(viewport.style.lineHeight)), 5).toString()
    }

    transpose (accord: string): string {
      const initialScale = this.scale[(accord.length >= 1 && accord[1] === '#') ? '#' : 'b']
      const scale = this.scale[(this.$store.state as IState).scale]
      const t = this.$store.state.transpose
      let a = accord[0]
      if (accord[1] === '#' || accord[1] === 'b') { a += accord[1] }
      const index = initialScale.findIndex(e => e === a)
      const scaledAccord = scale[this.mod(index + t, scale.length)]
      return scaledAccord + accord.substring(a.length, accord.length)
    }

    mod (a:number, b:number): number {
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
          segments.push({ text: '', type: 'accord' })
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
        segments = segments.filter(s => s.type !== 'accord')
      }
      for (const segment of segments) {
        if (segment.type === 'accord') {
          segment.text = segment.text.split(' ').map(s => this.transpose(s)).join(' ')
        }
      }
      return segments
    }
}
