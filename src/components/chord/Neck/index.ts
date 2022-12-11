const offsets = {
  x: 0,
  y: 0,
  length: 50
}

const getNeckHorizonalLine = (pos: number) =>
  `M ${offsets.x} ${12 * pos} H ${offsets.length}`

const getNeckVerticalLine = (pos: number) => `M ${offsets.y + pos * 10} 0 V 48`

const getNeckPath = () =>
  Array(5)
    .fill(null)
    .map((_, pos) => getNeckHorizonalLine(pos))
    .join(' ')
    .concat(
      Array(6)
        .fill(null)
        .map((_, pos) => getNeckVerticalLine(pos))
        .join(' ')
    )
const getBarreOffset = (frets: number[], baseFret: number, capo: boolean) =>
  frets[0] === 1 || capo ? (baseFret > 9 ? -12 : -11) : baseFret > 9 ? -10 : -7

const Neck = (
  frets: number[],
  baseFret = 1,
  capo = false
): string => {
  return `<g>
    <path
      stroke='#444'
      stroke-width='0.25'
      stroke-linecap='square'
      stroke-linejoin='square'
      d="${getNeckPath()}" />
    ${
      baseFret === 1
        ? `<path
        stroke='#444'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        d="${`M ${offsets.x} 0 H ${offsets.length}`}"
      />`
        : `<text
        font-size='0.25rem'
        fill='#444'
        font-family='Verdana'
        x="${getBarreOffset(frets, baseFret, capo)}"
        y='8'
      >${baseFret}fr</text>`
    }
  </g>`
}

export default Neck
