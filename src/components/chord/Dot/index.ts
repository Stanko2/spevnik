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
      fontSize="0.7rem"
      fill="#444"
      fontFamily="Verdana"
      textAnchor="middle"
      x='${getStringPosition(string)}'
      y="-2"
    >
      x
    </text>
  `
    : `
    <g>
      <circle
        strokeWidth="0.25"
        stroke="#444"
        fill='${fret === 0 ? 'transparent' : '#444'}'
        cx='${getStringPosition(string)}'
        cy='${positions.fret[fret]}'
        r='${fret === 0 ? radius.open : radius.fret}'
      />
      ${!lite && finger > 0 ? `
        <text
          fontSize="3pt"
          fontFamily="Verdana"
          textAnchor="middle"
          fill="white"
          x='${getStringPosition(string)}'
          y='${positions.finger[fret]}'
        >
          {finger}
        </text>
      ` : ''}
    </g>
  `

export default Dot
