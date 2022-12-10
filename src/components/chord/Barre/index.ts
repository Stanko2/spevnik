const fretXPosition = [0, 10, 20, 30, 40, 50]

const fretYPosition = [2.35, 13.9, 26, 38]
const offset = -1

const positions = {
  string: [50, 40, 30, 20, 10, 0],
  fret: [-4, 6.5, 18, 30, 42, 54],
  finger: [-3, 8, 19.5, 31.5, 43.5]
}

const getStringPosition = (string: number) => positions.string[string + offset]

const onlyBarres = (frets: number[], barre: number) =>
  frets
    .map((f, index) => ({ position: index, value: f }))
    .filter((f) => f.value === barre)

const Barre = (
  barre: number,
  frets: number[],
  capo: boolean,
  finger: number,
  lite: boolean
): string => {
  const strings = frets.length
  const barreFrets = onlyBarres(frets, barre)

  const string1 = barreFrets[0].position
  const string2 = barreFrets[barreFrets.length - 1].position
  const width = (string2 - string1) * 10
  const y = fretYPosition[barre - 1]

  return `
    <g>
      ${
        capo
          ? `
      <g>
        <g
          transform='translate(${getStringPosition(strings)}, ${
              positions.fret[barreFrets[0].value]
            })'
          >
          <path d='
            M 0, 0
            m -4, 0
            a 4,4 0 1,1 8,0
          '
            fill='#555'
            fillOpacity='0.2'
            transform='rotate(-90)'
          />
        </g>
        <rect
          fill='#555'
          x='${fretXPosition[0]}'
          y='${fretYPosition[barre - 1]}'
          width='${(strings - 1) * 10}'
          fillOpacity='0.2'
          height='8.25'
        />
        <g
          transform='translate(${getStringPosition(1)}, ${
              positions.fret[barreFrets[0].value]
            })'
          >
          <path d='
            M 0, 0
            m -4, 0
            a 4,4 0 1,1 8,0
            '
            fill='#555'
            fillOpacity='0.2'
            transform='rotate(90)'
          />
        </g>
      </g>`
          : ''
      }
      ${barreFrets.map(
        (fret) =>
          `<circle
          key='${fret.position}'
          strokeWidth='0.25'
          stroke='#444'
          fill='#444'
          cx='${getStringPosition(strings - fret.position)}'
          cy='${positions.fret[fret.value]}'
          r='4'
        />`
      )}
      <rect
        fill='#444'
        x='${fretXPosition[string1]}'
        y='${y}'
        width='${width}'
        height='8.25'
      />
      ${
        !lite && finger
          ? barreFrets.map(
              (fret) =>
                `<text
            key='${fret.position}'
            fontSize='3pt'
            fontFamily='Verdana'
            textAnchor='middle'
            fill='white'
            x='${getStringPosition(strings - fret.position)}'
            y='${positions.finger[fret.value]}'
          >${finger}</text>`
            )
          : ''
      }
    </g>
  `
}

export default Barre
