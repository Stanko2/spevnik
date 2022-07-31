import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

interface TextSegment {
    text: string
    type: 'text' | 'accord' | 'bold'
}

@Component
export default class TextRenderer extends Vue {
    @Prop({ required: true }) text!: string
    @Prop({ required: false, default: 1.1 }) fontSize!: number
    @Prop({ required: false, default: 1 }) columns!: number
    render (): VNode {
      const lines = this.text.split('\n')
      return (
        <div class="text-left overflow-scroll pb-3">
          <div class="m-3" style={{ 'column-count': this.columns }}>

            {lines.map((line, index) => {
              const segments: TextSegment[] = [{ text: '', type: 'text' }]
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
              if (segments.length === 1 && segments[0].text === '') { return <br></br> }
              return <p key={index} style={{ fontSize: this.fontSize + 'rem' }} class="dark:text-gray-200">
                {segments.map((segment, index) => {
                  return <span key={index} class={segment.type}>{segment.text}</span>
                })}
              </p>
            })}
          </div>
        </div>
      )
    }
}
