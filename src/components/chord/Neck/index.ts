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

const getBarreOffset = (frets: any[], baseFret: number, capo: boolean) =>
  frets[0] === 1 || capo ? (baseFret > 9 ? -12 : -11) : baseFret > 9 ? -10 : -7

const Neck = (
  frets: any[],
  baseFret = 1,
  capo = false
): string => {
  return `<g>
    <path
      stroke='#444'
      strokeWidth='0.25'
      strokeLinecap='square'
      strokeLinejoin='square'
      d=${getNeckPath()} />
    ${
      baseFret === 1
        ? `<path
        stroke='#444'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        d=${`M ${offsets.x} 0 H ${offsets.length}`}
      />`
        : `<text
        fontSize='0.25rem'
        fill='#444'
        fontFamily='Verdana'
        x=${getBarreOffset(frets, baseFret, capo)}
        y='8'
      >${baseFret}fr</text>`
    }
  </g>`
}

export default Neck
