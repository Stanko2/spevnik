const positions = {
  string: [50, 40, 30, 20, 10, 0],
  fret: [-4, 6.5, 18, 30, 42, 54],
  finger: [-3, 8, 19.5, 31.5, 43.5]
}

const offset = -1

const getStringPosition = (string: number) => positions.string[string + offset]

const radius = {
  open: 2,
  fret: 4
}

const Dot = (
  string: number,
  fret = 0,
  finger: number,
  lite = false
): string =>
  fret === -1
    ? `
    <text
      font-size="0.7rem"
      fill="var(--line-color)"
      font-family="Verdana"
      text-anchor="middle"
      x='${getStringPosition(string)}'
      y="-2"
    >
      x
    </text>
  `
    : `
    <g>
      <circle
        stroke-width="0.5"
        stroke="var(--line-color)"
        fill='${fret === 0 ? 'transparent' : 'var(--line-color)'}'
        cx='${getStringPosition(string)}'
        cy='${positions.fret[fret]}'
        r='${fret === 0 ? radius.open : radius.fret}'
      />
      ${!lite && finger > 0 ? `
        <text
          font-size="3pt"
          font-family="Verdana"
          text-anchor="middle"
          fill="white"
          x='${getStringPosition(string)}'
          y='${positions.finger[fret]}'
        >
          ${finger}
        </text>
      ` : ''}
    </g>
  `

export default Dot
