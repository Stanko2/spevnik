import type { Chord } from './chords'

const chords: Chord[] = [
  {
    key: 'C',
    suffix: 'major',
    positions: [
      {
        frets: [-1, 3, 2, 0, 1, 0],
        fingers: [0, 3, 2, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 1, 1, 4],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'minor',
    positions: [
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 3, 1, 0, 1, 3],
        fingers: [0, 3, 2, 0, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 1, 1, -1, -1],
        fingers: [4, 2, 1, 1, 0, 0],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 4, 2, 4, 2],
        fingers: [0, 2, 3, 1, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, -1, 1, 2, 1, -1],
        fingers: [2, 0, 1, 3, 1, 0],
        barres: [1],
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 1, 4],
        barres: [1],
        baseFret: 10
      }
    ]
  },
  {
    key: 'C',
    suffix: 'sus2',
    positions: [
      {
        frets: [-1, 3, 0, 0, 1, 3],
        fingers: [0, 3, 0, 0, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 0, 0, 3, 3],
        fingers: [0, 1, 0, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, -1, 0, 1, 2, 2],
        fingers: [2, 0, 0, 1, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'sus4',
    positions: [
      {
        frets: [-1, 3, 3, 0, 1, 1],
        fingers: [0, 3, 4, 0, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 3, -1, 0, 1, 3],
        fingers: [2, 3, 0, 0, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [-1, 3, 3, 0, 3, 3],
        fingers: [0, 1, 2, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 0, 0, 1, 1],
        fingers: [0, 3, 0, 0, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      }
    ]
  },
  {
    key: 'C',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, 3, 3, 3, 1, 1],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, 2, 1, 4, 4, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [-1, 1, 2, 3, 3, 0],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, -1, 4, 3, 1, 2],
        fingers: [0, 0, 4, 3, 1, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 1, 4, 3, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [-1, -1, 3, 2, 2, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '6',
    positions: [
      {
        frets: [-1, 3, 2, 2, 1, 0],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 4],
        barres: [3],
        baseFret: 3
      },
      {
        frets: [2, -1, 1, 3, 2, -1],
        fingers: [2, 0, 1, 4, 3, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, -1, 3, 2, 3, 1],
        fingers: [1, 0, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: '69',
    positions: [
      {
        frets: [-1, 3, 2, 2, 3, 3],
        fingers: [0, 3, 1, 1, 3, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 0, 0, 3, 3],
        fingers: [0, 1, 0, 0, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'C',
    suffix: '7',
    positions: [
      {
        frets: [-1, 3, 2, 3, 1, 0],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 1, 3, 1],
        fingers: [0, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 1, 1, 2],
        fingers: [0, 0, 1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: '7b5',
    positions: [
      {
        frets: [-1, -1, 2, 3, 1, 2],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [2, -1, 2, 3, 1, 0],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '7/G',
    positions: [
      {
        frets: [3, 3, 2, 3, -1, -1],
        fingers: [2, 3, 1, 4, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 2, 0, 1, 0],
        fingers: [4, 2, 3, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 3, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        baseFret: 3
      }
    ]
  },
  {
    key: 'C',
    suffix: 'aug7',
    positions: [
      {
        frets: [-1, 3, 2, 3, -1, 4],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, -1, 1, 2, 2, 0],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '9',
    positions: [
      {
        frets: [0, 3, 2, 0, 3, 0],
        fingers: [0, 2, 3, 0, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 2, 3, 3, 3],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [2, 1, 2, 1, 2, 2],
        fingers: [2, 1, 3, 1, 4, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, 4, 2, 1, 2, 4],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 2, 1, 3, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '9b5',
    positions: [
      {
        frets: [-1, 3, 2, 3, 3, 2],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 4, 3, 3, 0],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 1, 2, -1, 3],
        fingers: [1, 2, 1, 3, 0, 4],
        barres: [1],
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'aug9',
    positions: [
      {
        frets: [-1, 3, 2, 3, 3, 4],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [-1, 1, 0, 1, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 1, 2, 1, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'C',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, 3, 2, 3, 2, 3],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, -1, 1, 2, 1, 2],
        fingers: [1, 0, 1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 2, 1, 3, 1],
        fingers: [0, 0, 3, 1, 4, 2],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '7#9',
    positions: [
      {
        frets: [-1, 3, 2, 3, 4, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 1, 2, 0],
        fingers: [0, 1, 3, 1, 2, 0],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [1, 3, 1, 2, 1, 4],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 2, 1, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '11',
    positions: [
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 2, 0, 0, 1, 1],
        fingers: [3, 2, 0, 0, 1, 1],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 2, 1, 1],
        fingers: [1, 1, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: '9#11',
    positions: [
      {
        frets: [-1, 3, 2, 3, 3, 2],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 2, 1, 3, 1],
        fingers: [0, 1, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '13',
    positions: [
      {
        frets: [-1, 2, 1, 2, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [4],
        baseFret: 2
      },
      {
        frets: [1, 1, 1, 1, 3, 3],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 2, 2, 2, 3, 1],
        fingers: [3, 2, 2, 2, 4, 1],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 2, 3, 1],
        fingers: [1, 3, 1, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj7',
    positions: [
      {
        frets: [3, 3, 2, 0, 0, 0],
        fingers: [2, 3, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 1, 1, 3],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 3, 3, 3],
        fingers: [0, 0, 1, 3, 3, 3],
        barres: [3],
        baseFret: 10
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [-1, 3, 2, 4, 0, 2],
        fingers: [0, 3, 1, 4, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [-1, 3, 2, 1, 0, 0],
        fingers: [0, 3, 2, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 4, 2, 3, 0],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 3, 2, 1, 0, 0],
        fingers: [4, 3, 2, 1, 0, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 0, 0],
        fingers: [1, 4, 3, 2, 0, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj9',
    positions: [
      {
        frets: [-1, 3, 0, 0, 0, 0],
        fingers: [0, 3, 0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 2, 4, 3, -1],
        fingers: [2, 2, 1, 4, 3, 0],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [0, 1, 1, 1, 1, 3],
        fingers: [0, 1, 1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, -1, 2, 2, 1, 3],
        fingers: [1, 0, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj11',
    positions: [
      {
        frets: [-1, 3, 2, 0, 0, 1],
        fingers: [0, 3, 2, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 0, 0, 0],
        fingers: [0, 1, 1, 0, 0, 0],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [3, 2, 4, 0, 1, 0],
        fingers: [3, 2, 4, 0, 1, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 2, 2, 1, 1],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj13',
    positions: [
      {
        frets: [-1, 3, 2, 2, 0, 1],
        fingers: [0, 4, 2, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 1, 2, 2, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm6',
    positions: [
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 3, -1, 2, 3],
        fingers: [0, 1, 3, 0, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 2, 2],
        fingers: [2, 0, 1, 3, 3, 4],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [1, 3, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm7',
    positions: [
      {
        frets: [-1, 3, 1, 3, 4, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 2, 1],
        fingers: [1, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, 3, 4, 3, 4, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 1, 3],
        fingers: [0, 0, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 3, 1, 4, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 3, 3, 3],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm9',
    positions: [
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [-1, 3, 0, 3, 4, 3],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 2, 3, 3],
        fingers: [0, 1, 3, 2, 4, 4],
        barres: [3],
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm69',
    positions: [
      {
        frets: [-1, 3, 1, 2, 3, 3],
        fingers: [0, 3, 1, 2, 4, 4],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [-1, 1, 0, 0, 2, 3],
        fingers: [0, 1, 0, 0, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 1, 2, 2, -1, -1],
        fingers: [4, 1, 2, 3, 0, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 3, 3, 1, 3, 3],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [3],
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm11',
    positions: [
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 3, 3, 4, 3],
        fingers: [0, 1, 1, 1, 2, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, 3, 1, 0, 0, -1],
        fingers: [0, 3, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 2, 2, 1],
        fingers: [1, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 3, 3, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [-1, 3, -1, 4, 4, 2],
        fingers: [0, 2, 0, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 4, 4, 4, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 3, 1, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [-1, 3, 1, 4, 3, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 0, 4, 4, 3],
        fingers: [0, 1, 0, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, -1, 2, 0, 3],
        fingers: [3, 1, 0, 2, 0, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [-1, 3, 1, 0, 0, 1],
        fingers: [0, 3, 1, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 3, 4, 4, 3],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 1, 3, 2],
        fingers: [0, 0, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'C',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, 3, 2, 0, 3, 0],
        fingers: [0, 2, 1, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 0, 0, 3, 0],
        fingers: [0, 1, 0, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 0, 0, 2, 0],
        fingers: [2, 1, 0, 0, 3, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, 3, 1, 0, 3, 3],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 0, 3, 2, 1],
        fingers: [0, 1, 0, 4, 3, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 1, 0, 2, 3, 3],
        fingers: [3, 1, 0, 2, 4, 4],
        barres: [3],
        baseFret: 6
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: '/E',
    positions: [
      {
        frets: [0, 3, 2, 0, 1, 0],
        fingers: [0, 3, 2, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 3, 2, 0, 1, 3],
        fingers: [0, 3, 2, 0, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, 1, 4, 4],
        fingers: [0, 3, 1, 1, 4, 4],
        barres: [1],
        baseFret: 5
      }
    ]
  },
  {
    key: 'C',
    suffix: '/F',
    positions: [
      {
        frets: [-1, -1, 3, 0, 1, 0],
        fingers: [0, 0, 3, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 0, 1, 0],
        fingers: [1, 4, 3, 0, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 3, 3, 1],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '/G',
    positions: [
      {
        frets: [3, 3, 2, 0, 1, 0],
        fingers: [3, 4, 2, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 4, 4, -1],
        fingers: [2, 3, 1, 4, 4, 0],
        barres: [4],
        baseFret: 2
      }
    ]
  },

  {
    key: 'C#',
    suffix: 'major',
    positions: [
      {
        frets: [-1, 4, 3, 1, 2, 1],
        fingers: [0, 4, 3, 1, 2, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 1, 1, 1, 4],
        fingers: [3, 2, 1, 1, 1, 4],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'minor',
    positions: [
      {
        frets: [-1, 4, 2, 1, 2, -1],
        fingers: [0, 4, 2, 1, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 2, 1, 1, -1, 4],
        fingers: [3, 2, 1, 1, 0, 4],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, 4, 2, -1, 2, 3],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, -1, 2, 3, 2, 3],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 1, 3, 1],
        fingers: [0, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, -1, 1, 2, 1, -1],
        fingers: [2, 0, 1, 3, 1, 0],
        barres: [1],
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 1, 1, 3, 4, -1],
        fingers: [0, 1, 0, 0, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 3, -1, 1, 3],
        fingers: [1, 2, 3, 0, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'sus4',
    positions: [
      {
        frets: [-1, 4, 4, 1, 2, -1],
        fingers: [0, 3, 4, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, -1, 1, 1, 2, 4],
        fingers: [2, 3, 0, 0, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, 4, 4, 4, 2, 2],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, -1, 1, 2, 2],
        fingers: [0, 0, 0, 1, 2, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, 4, 3, 0, 2, 1],
        fingers: [0, 4, 3, 0, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 0, 4, 1],
        fingers: [0, 2, 3, 0, 4, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 4, 3, 1, 2],
        fingers: [0, 0, 4, 3, 1, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, 4, 4, 4, 2, 2],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, -1, 3, 2, 2, 1],
        fingers: [1, 0, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 9,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: '6',
    positions: [
      {
        frets: [-1, 4, 3, 3, 2, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 3],
        barres: [3],
        baseFret: 4
      },
      {
        frets: [4, 3, 3, 1, 1, 1],
        fingers: [4, 2, 3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, -1, 3, 2, 3, 1],
        fingers: [1, 0, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: '69',
    positions: [
      {
        frets: [-1, 4, 1, 3, 2, 1],
        fingers: [0, 4, 1, 3, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 4, 3, 3, 4, 4],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 2, 1, 2, 2],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: '7',
    positions: [
      {
        frets: [-1, 4, 3, 4, 2, -1],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 1, 3, 1],
        fingers: [0, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 1, 1, 1, 2],
        fingers: [4, 3, 1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: '7b5',
    positions: [
      {
        frets: [-1, 4, 3, 0, 0, 1],
        fingers: [0, 4, 3, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'aug7',
    positions: [
      {
        frets: [-1, 4, 3, 2, 0, 1],
        fingers: [0, 4, 3, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, 1, -1, 0, 1],
        fingers: [4, 3, 1, 0, 0, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, -1, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: '9',
    positions: [
      {
        frets: [4, 4, 3, 4, 4, 4],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [2, 1, 2, 1, -1, -1],
        fingers: [3, 1, 4, 2, 0, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, -1, 2, 1, 3, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: '9b5',
    positions: [
      {
        frets: [-1, 4, 3, 4, 4, 3],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, -1, 2, 0, 3],
        fingers: [1, 2, 0, 3, 0, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'aug9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [3, 2, 1, 2, 0, -1],
        fingers: [4, 2, 1, 3, 0, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 4, 1, 2, 0, 3],
        fingers: [1, 4, 1, 2, 0, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, 4, 3, 4, 3, 4],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 0, 1, 3, 4],
        fingers: [0, 1, 0, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 2, 3, 1, 0, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: '7#9',
    positions: [
      {
        frets: [-1, 4, 3, 4, 2, 0],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 2, 2],
        fingers: [0, 1, 2, 2, 3, 4],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [1, 3, 1, 2, 1, 4],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: '11',
    positions: [
      {
        frets: [-1, 4, 3, 0, 0, 4],
        fingers: [0, 2, 1, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, 1],
        fingers: [0, 1, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 1, 2, 1, 1],
        fingers: [1, 2, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: '9#11',
    positions: [
      {
        frets: [-1, 3, 2, 0, 0, 3],
        fingers: [0, 2, 1, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, 1],
        fingers: [0, 1, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 1, 2, 1, 1],
        fingers: [1, 2, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: '13',
    positions: [
      {
        frets: [-1, 4, 3, 3, 0, 2],
        fingers: [0, 4, 2, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 1, 3, 3],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, 2, 2, 3, 1],
        fingers: [3, 2, 2, 2, 4, 1],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [1, 1, 1, 2, 3, 3],
        fingers: [1, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'maj7',
    positions: [
      {
        frets: [-1, 4, 3, 1, 1, 1],
        fingers: [0, 4, 3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, -1, 1, 1, 3],
        fingers: [0, 0, 0, 1, 1, 3],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [1, -1, 2, 2, 1, -1],
        fingers: [1, 0, 3, 4, 2, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [-1, 2, 1, 3, 4, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 4, 2, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 4, 3, 3, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 3, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'maj9',
    positions: [
      {
        frets: [-1, 4, 1, 1, 1, 1],
        fingers: [0, 4, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 2, 1, 3, 2, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 3, 1, 2, 1],
        fingers: [2, 1, 4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 2, 1, 4, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'maj11',
    positions: [
      {
        frets: [-1, 3, 2, 4, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, -1, -1, 1, 2],
        fingers: [4, 2, 0, 0, 1, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 2, 2, 1, 1],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'maj13',
    positions: [
      {
        frets: [-1, 4, 1, 3, 1, 1],
        fingers: [0, 4, 2, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 1, 2, 2, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'm6',
    positions: [
      {
        frets: [-1, 4, 2, 3, 2, 4],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 2, 1, 2],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 2, -1],
        fingers: [2, 0, 1, 3, 4, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'm7',
    positions: [
      {
        frets: [-1, 1, 3, 1, 2, 1],
        fingers: [0, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 4, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, -1, 1, 3, 2, 2],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 1, 3],
        fingers: [0, 0, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, -1, 2, 2, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'm9',
    positions: [
      {
        frets: [-1, 4, 2, 4, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [-1, 2, 2, 2, 1, 3],
        fingers: [0, 2, 2, 3, 1, 4],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [-1, 1, 3, 2, 3, 3],
        fingers: [0, 1, 3, 2, 4, 4],
        barres: [3],
        baseFret: 7
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'm69',
    positions: [
      {
        frets: [-1, 4, 1, 3, 2, 0],
        fingers: [0, 4, 1, 3, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 2, 3, 4, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 2, 2, -1, 0],
        fingers: [4, 1, 2, 3, 0, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 3, 3, 1, 3, 3],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [3],
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'm11',
    positions: [
      {
        frets: [-1, 4, 2, 4, 2, 2],
        fingers: [0, 2, 1, 3, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [1],
        baseFret: 11
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, 4, 2, 1, 1, -1],
        fingers: [0, 4, 2, 1, 1, 0],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 2, 2, 1],
        fingers: [1, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, 1, 1, 3, 3, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [-1, 4, 2, 0, 1, 0],
        fingers: [0, 4, 2, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 2, 1, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [-1, 4, 1, 1, 1, 0],
        fingers: [0, 4, 1, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 4, 3, 0],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 1, 3, 2, 1, 0],
        fingers: [1, 1, 4, 3, 2, 0],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 3, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 1, 1, 2, 2, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, -1, 1, 1, 3, 2],
        fingers: [0, 0, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 4, 3, -1, 4, 4],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, -1, 1, 2, -1],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C#',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 1, 0],
        fingers: [0, 1, 3, 4, 2, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 1, -1, 2, 3, 0],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },

  {
    key: 'D',
    suffix: 'major',
    positions: [
      {
        frets: [-1, -1, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 2, 1],
        fingers: [0, 4, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'minor',
    positions: [
      {
        frets: [-1, -1, 0, 2, 3, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, -1, 0, 1, -1, 1],
        fingers: [0, 0, 0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, -1, 0, 1, 0, 1],
        fingers: [0, 0, 0, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 1, 3, 1],
        fingers: [0, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 0, 4, 3, 1],
        fingers: [0, 2, 0, 4, 3, 1],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'sus2',
    positions: [
      {
        frets: [-1, -1, 0, 2, 3, 0],
        fingers: [0, 0, 0, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 1, 2, 4],
        fingers: [0, 0, 1, 1, 2, 4],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 1, 1, 4, 4],
        fingers: [0, 1, 1, 1, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'D',
    suffix: 'sus4',
    positions: [
      {
        frets: [-1, -1, 0, 2, 3, 3],
        fingers: [0, 0, 0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 0, 0, 1, 3],
        fingers: [0, 3, 0, 0, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 4, 1, 1, 2, 2],
        fingers: [0, 4, 1, 1, 2, 2],
        barres: [1, 2],
        baseFret: 2
      },
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, -1, 0, 2, 1, 3],
        fingers: [0, 0, 0, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 3, 1, -1],
        fingers: [0, 2, 3, 4, 1, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, -1, 0, 1, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, -1, 1, 2],
        fingers: [0, 4, 2, 0, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 3, 0, 3, 1, 2],
        fingers: [0, 3, 0, 4, 1, 2],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, -1, 0, 3, 3, 2],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        baseFret: 7
      },
      {
        frets: [1, -1, 3, 2, 2, -1],
        fingers: [1, 0, 4, 2, 3, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 10,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '6',
    positions: [
      {
        frets: [-1, -1, 0, 2, 0, 2],
        fingers: [0, 0, 0, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 4],
        barres: [3],
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 1, 4, 1],
        fingers: [1, 3, 1, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'D',
    suffix: '69',
    positions: [
      {
        frets: [-1, 4, 3, 1, 0, 0],
        fingers: [0, 4, 3, 1, 0, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'D',
    suffix: '7',
    positions: [
      {
        frets: [-1, -1, 0, 2, 1, 2],
        fingers: [0, 0, 0, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 3, 1, -1],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 3, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: '7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 1, 2],
        fingers: [0, 0, 0, 1, 1, 2],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 3, 1, 2],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'aug7',
    positions: [
      {
        frets: [-1, -1, 0, 3, 1, 2],
        fingers: [0, 0, 0, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, -1, 3],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, -1, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '9',
    positions: [
      {
        frets: [2, 2, 1, 2, 2, 2],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [-1, 1, 0, 1, 1, 2],
        fingers: [0, 1, 0, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 2, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: '9b5',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 2, 1, 3, 0],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 2, 1, 2, -1, 3],
        fingers: [1, 2, 1, 3, 0, 4],
        barres: [1],
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'aug9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [-1, 3, 0, 1, 3, 2],
        fingers: [0, 3, 0, 1, 4, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, -1, 1, 2, 2, 0],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, -1, 0, 4, 3, 1],
        fingers: [0, 0, 0, 4, 3, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 0, 1, 3, 1],
        fingers: [0, 2, 0, 1, 4, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '7#9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [0, 0, 0, 4, 1, 2],
        fingers: [0, 0, 0, 4, 1, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 2, 1, 1, 1, 2],
        fingers: [0, 2, 1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 1, 2, 1, 4],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: '11',
    positions: [
      {
        frets: [-1, -1, 0, 0, 1, 2],
        fingers: [0, 0, 0, 0, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 1, 1, 2, 2],
        fingers: [1, 1, 1, 2, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'D',
    suffix: '9#11',
    positions: [
      {
        frets: [-1, -1, 0, 1, 1, 2],
        fingers: [0, 0, 0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 0, 1, 3, 2],
        fingers: [0, 3, 0, 1, 4, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'D',
    suffix: '13',
    positions: [
      {
        frets: [-1, -1, 0, 4, 1, 2],
        fingers: [0, 0, 0, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 1, 3, 3],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 2, 0, 2, 0, 1],
        fingers: [4, 2, 0, 3, 0, 1],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, -1, 1, 2, 3, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj7',
    positions: [
      {
        frets: [-1, -1, 0, 2, 2, 2],
        fingers: [0, 0, 0, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 4, 3, 1, 1, 1],
        fingers: [0, 4, 3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 1, 1, 3],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 2, 2],
        fingers: [0, 0, 0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 2, 2, 2, -1, 1],
        fingers: [1, 2, 3, 4, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [-1, -1, 0, 3, 2, 2],
        fingers: [0, 0, 0, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [-1, 1, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, -1, 0, 3, 3, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj9',
    positions: [
      {
        frets: [-1, 4, 1, 1, 1, 1],
        fingers: [0, 4, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [-1, 2, 1, 3, 1, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 3, 0, 3, 1, 3],
        fingers: [0, 2, 0, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, -1, 2, 2, 1, 3],
        fingers: [1, 0, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj11',
    positions: [
      {
        frets: [-1, -1, 0, 0, 2, 2],
        fingers: [0, 0, 0, 0, 1, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 0, 1, 2, 3],
        fingers: [0, 3, 0, 1, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 2, 2, 1, 1],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj13',
    positions: [
      {
        frets: [-1, -1, 0, 4, 2, 2],
        fingers: [0, 0, 0, 3, 1, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 4, 3, 3, 1, 0],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm6',
    positions: [
      {
        frets: [-1, -1, 0, 2, 0, 1],
        fingers: [0, 0, 0, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 3, -1, 2, 3],
        fingers: [0, 1, 3, 0, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 2, 2],
        fingers: [2, 0, 1, 3, 3, 3],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm7',
    positions: [
      {
        frets: [-1, -1, 0, 2, 1, 1],
        fingers: [0, 0, 0, 3, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 1, 2, 1],
        fingers: [0, 1, 3, 1, 2, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 1, 1],
        fingers: [0, 0, 0, 1, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 3, 1, 2],
        fingers: [0, 3, 1, 4, 1, 2],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 0, 3, 2, 1],
        fingers: [0, 1, 0, 4, 3, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm9',
    positions: [
      {
        frets: [1, 0, 0, 2, 1, 0],
        fingers: [1, 0, 0, 3, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 3
      },
      {
        frets: [-1, 1, 3, 1, 2, 0],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm69',
    positions: [
      {
        frets: [-1, 4, 2, 1, 0, 0],
        fingers: [0, 4, 2, 1, 0, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 3, 1, 2, 3, 0],
        fingers: [0, 3, 1, 2, 4, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 2, 0, 2, 1, 2],
        fingers: [0, 2, 0, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 3, 3, 1, 3, 3],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [3],
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm11',
    positions: [
      {
        frets: [-1, -1, 0, 0, 1, 1],
        fingers: [0, 0, 0, 0, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, -1, 0, 2, 2, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 2, 1, 1, 0],
        fingers: [0, 4, 2, 1, 1, 0],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [1, 1, 3, 2, 2, 1],
        fingers: [1, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 2, 1],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 4
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 2, 1, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [-1, 3, 1, 4, 3, 0],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 3, 0, 2, 2, 1],
        fingers: [0, 4, 0, 2, 3, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [-1, -1, 0, 0, 2, 1],
        fingers: [0, 0, 0, 0, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 1, 1, 3, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [-1, 1, 3, 3, 3, 0],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, -1, 0, 3, 1, 4],
        fingers: [0, 0, 0, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, 4, 2, 1, 2, 0],
        fingers: [0, 4, 2, 1, 3, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 2, 0],
        fingers: [0, 1, 3, 4, 2, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: '/F#',
    positions: [
      {
        frets: [2, 0, 0, 2, 3, 2],
        fingers: [1, 0, 0, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 1, 2, 1],
        fingers: [1, 4, 3, 1, 2, 1],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [-1, -1, 3, 1, 2, 4],
        fingers: [0, 0, 3, 1, 2, 4],
        baseFret: 2,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '/A',
    positions: [
      {
        frets: [-1, 0, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [2, 2, 1, 4, 4, -1],
        fingers: [2, 3, 1, 4, 4, 0],
        barres: [4],
        baseFret: 4
      }
    ]
  },
  {
    key: 'D',
    suffix: '/B',
    positions: [
      {
        frets: [-1, 1, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 4, 2, 3, 2],
        fingers: [0, 1, 4, 2, 3, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 1, 3, 3, 3, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barres: [3],
        baseFret: 5
      }
    ]
  },
  {
    key: 'D',
    suffix: '/H',
    positions: [
      {
        frets: [-1, 2, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 4, 2, 3, 2],
        fingers: [0, 1, 3, 1, 2, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 1, 3, 1, 2, 4],
        fingers: [0, 1, 3, 1, 2, 4],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'D',
    suffix: '/C',
    positions: [
      {
        frets: [-1, 3, 0, 2, 3, 2],
        fingers: [0, 3, 0, 1, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 4, 2, 3, 2],
        fingers: [0, 2, 4, 1, 3, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [4, 1, 3, 3, 3, -1],
        fingers: [4, 1, 3, 3, 3, 0],
        barres: [3],
        baseFret: 5
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'major',
    positions: [
      {
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 3, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 2, 1],
        fingers: [0, 4, 3, 1, 2, 1],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 1, 1, 4],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'minor',
    positions: [
      {
        frets: [-1, -1, 1, 3, 4, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 4, 3, 4, 2],
        fingers: [0, 0, 3, 2, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 1, 3, 1],
        fingers: [0, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 1, -1],
        fingers: [2, 0, 1, 3, 1, 0],
        barres: [1],
        baseFret: 10
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [4, 1, 1, 3, 4, -1],
        fingers: [3, 1, 1, 2, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 3, -1, 1, 3],
        fingers: [1, 2, 3, 0, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'sus4',
    positions: [
      {
        frets: [-1, -1, 1, 3, 4, 4],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 1, 2, -1],
        fingers: [0, 0, 1, 1, 2, 0],
        barres: [1],
        baseFret: 8
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 4, 1, 1, 2, 2],
        fingers: [0, 4, 1, 1, 2, 2],
        barres: [1, 2],
        baseFret: 3
      },
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, -1, 1, 3, 2, 4],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 3, 1, 1],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, -1, 1, 2, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 0, 1, 2],
        fingers: [0, 4, 2, 0, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 2, 0, 3, -1],
        fingers: [0, 1, 2, 0, 3, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 1, -1, 3, 1, 2],
        fingers: [2, 1, 0, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, -1, 3, 2, 2, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, -1, 3, 2, 2, -1],
        fingers: [1, 0, 4, 2, 3, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 11,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: '6',
    positions: [
      {
        frets: [-1, -1, 1, 3, 1, 3],
        fingers: [0, 0, 1, 3, 1, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 3],
        barres: [3],
        baseFret: 6
      },
      {
        frets: [2, -1, 1, 3, 2, -1],
        fingers: [2, 0, 1, 4, 3, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: '69',
    positions: [
      {
        frets: [-1, -1, 1, 0, 1, 1],
        fingers: [0, 0, 2, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 3, 4, 3],
        fingers: [0, 1, 1, 1, 2, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D#',
    suffix: '7',
    positions: [
      {
        frets: [-1, -1, 1, 3, 2, 3],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, 1, 3, 1],
        fingers: [0, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 1, 1, 2],
        fingers: [0, 0, 1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: '7b5',
    positions: [
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 3, 1, 2],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, 1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'aug7',
    positions: [
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 2, 3, 0, 0, 1],
        fingers: [3, 2, 4, 0, 0, 1],
        baseFret: 9,
        barres: []
      },
      {
        frets: [1, -1, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: '9',
    positions: [
      {
        frets: [-1, -1, 1, 0, 2, 1],
        fingers: [0, 0, 1, 0, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 2],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [2, 1, 2, 1, -1, -1],
        fingers: [3, 1, 4, 2, 0, 0],
        baseFret: 10,
        barres: []
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: '9b5',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 2, 0, 1, 4],
        fingers: [0, 1, 3, 0, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [1, 2, 0, 3, 0, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      },
      {
        frets: [1, 2, 1, 2, -1, 3],
        fingers: [1, 2, 1, 3, 0, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'aug9',
    positions: [
      {
        frets: [3, 4, 3, 4, 4, 3],
        fingers: [1, 2, 1, 3, 4, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [3, 2, -1, 2, 0, 1],
        fingers: [4, 2, 0, 3, 0, 1],
        baseFret: 9,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        baseFret: 10
      }
    ]
  },
  {
    key: 'D#',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, -1, 1, 0, 2, 0],
        fingers: [0, 0, 2, 0, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 3, 1, 3, 0],
        fingers: [0, 1, 3, 1, 4, 0],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: '7#9',
    positions: [
      {
        frets: [-1, -1, 1, 0, 2, 2],
        fingers: [0, 0, 2, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 2, 1, 1, 1, 2],
        fingers: [0, 2, 1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [2, 1, 2, 2, -1, -1],
        fingers: [2, 1, 3, 4, 0, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: '11',
    positions: [
      {
        frets: [1, 1, 1, 1, 2, 3],
        fingers: [1, 1, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [0, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 2, 1, 1],
        fingers: [1, 1, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: '9#11',
    positions: [
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D#',
    suffix: '13',
    positions: [
      {
        frets: [-1, 2, 1, 2, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [4],
        baseFret: 5
      },
      {
        frets: [1, 1, 1, 1, 3, 3],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 2, 2, 0, 1, 1],
        fingers: [4, 2, 3, 0, 1, 1],
        barres: [1],
        baseFret: 9
      },
      {
        frets: [1, 1, 1, 2, 3, 3],
        fingers: [1, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'maj7',
    positions: [
      {
        frets: [-1, 1, 1, 3, 3, 3],
        fingers: [0, 1, 1, 3, 3, 3],
        barres: [1, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 4, 3, 1, 1, 1],
        fingers: [0, 4, 3, 1, 1, 1],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 1, 1, 3],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        baseFret: 8
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [-1, -1, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 3, 1],
        fingers: [0, 1, 2, 2, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      },
      {
        frets: [1, 2, 2, 2, -1, 1],
        fingers: [1, 2, 2, 2, 0, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, 2, 1, 3, -1, 3],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 4, 2, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, -1, 2, 2, 2, 1],
        fingers: [1, 0, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'maj9',
    positions: [
      {
        frets: [-1, 4, 1, 1, 1, 1],
        fingers: [0, 4, 1, 1, 1, 1],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, 2, 1, 3, 2, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 1, 1, 1, 3],
        fingers: [0, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'maj11',
    positions: [
      {
        frets: [-1, -1, 1, 1, 3, 3],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 3, 2, 4, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 2, 2, 1, 1],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'maj13',
    positions: [
      {
        frets: [-1, 3, 1, 0, 3, -1],
        fingers: [0, 3, 1, 0, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'm6',
    positions: [
      {
        frets: [-1, 1, 1, 3, 1, 2],
        fingers: [0, 1, 1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 2, 2, 1, 2],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'm7',
    positions: [
      {
        frets: [-1, -1, 1, 3, 2, 2],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 2, 1],
        fingers: [1, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 4, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 1, 3],
        fingers: [0, 0, 1, 2, 1, 4],
        barres: [1],
        baseFret: 7
      },
      {
        frets: [2, -1, 2, 2, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'm9',
    positions: [
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 4
      },
      {
        frets: [-1, -1, 2, 4, 1, 3],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 1, 3, 2, 3, 3],
        fingers: [0, 1, 3, 2, 4, 4],
        barres: [3],
        baseFret: 9
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'm69',
    positions: [
      {
        frets: [2, -1, 1, 3, 1, 1],
        fingers: [2, 0, 1, 3, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 2, 3, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 1, 2, 2, 1, 1],
        fingers: [4, 1, 2, 3, 0, 0],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, -1, 3, 1, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'm11',
    positions: [
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, -1, 1, 3, 3, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 2, 1, 1, -1],
        fingers: [0, 4, 3, 1, 2, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 3, 2, 2, 1],
        fingers: [0, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 5
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 2, 1, 0, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [-1, 3, 1, 4, 3, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 1, 4, 2, -1, -1],
        fingers: [3, 1, 4, 2, 0, 0],
        baseFret: 9,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [-1, 1, 1, 1, 3, 2],
        fingers: [0, 1, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 3, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 2, 2, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 2, 1, 0, 2, 2],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, -1, 1, 2, -1],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 10,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D#',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, -1, 4, 3, 4, 1],
        fingers: [0, 0, 3, 2, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 3, 3],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: 'major',
    positions: [
      {
        frets: [0, 2, 2, 1, 0, 0],
        fingers: [0, 2, 3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 3, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 2, 1],
        fingers: [0, 4, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'minor',
    positions: [
      {
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [0, 2, 3, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 1, 1, 3, 4, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [-1, 1, 3, 3, 2, 1],
        fingers: [0, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 2, 1, 1, -1, -1],
        fingers: [4, 3, 1, 2, 0, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, -1, 2, 3, -1, 3],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'dim7',
    positions: [
      {
        frets: [0, 1, 2, 0, 2, 0],
        fingers: [0, 1, 2, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 3, 2, 3],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 1, 3, -1],
        fingers: [0, 2, 3, 1, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 1, -1],
        fingers: [2, 0, 1, 3, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [0, 1, 3, 3, 1, 1],
        fingers: [0, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [0, 1, 1, 1, 0, 0],
        fingers: [0, 1, 2, 3, 0, 0],
        baseFret: 9,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, 1, 3],
        fingers: [1, 3, 4, 0, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'E',
    suffix: 'sus4',
    positions: [
      {
        frets: [0, 2, 2, 2, 0, 0],
        fingers: [0, 2, 3, 4, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 1, 1, 3, 4, 4],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 1, 2, 0],
        fingers: [0, 0, 1, 1, 2, 0],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [0, 0, 2, 2, 0, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 2, 2, 0, 2],
        fingers: [0, 1, 2, 3, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 4, 1, 1, 2, 2],
        fingers: [0, 4, 1, 1, 2, 2],
        barres: [1, 2],
        baseFret: 4
      }
    ]
  },
  {
    key: 'E',
    suffix: '7sus4',
    positions: [
      {
        frets: [0, 2, 0, 2, 0, 0],
        fingers: [0, 2, 0, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 3, 1, 1],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'alt',
    positions: [
      {
        frets: [0, 1, 2, 1, -1, -1],
        fingers: [0, 1, 3, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [0, 3, 2, -1, 1, 2],
        fingers: [0, 4, 2, 0, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [0, 1, 2, 3, 3, 0],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'aug',
    positions: [
      {
        frets: [0, 3, 2, 1, 1, 0],
        fingers: [0, 4, 3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 4, 3, 3, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 3, 2, 1, 1, 0],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 12,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 12,
        barres: []
      },
      {
        frets: [0, 2, 2, -1, -1, -1],
        fingers: [0, 2, 3, 0, 0, 0],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '6',
    positions: [
      {
        frets: [0, 2, 2, 1, 2, 0],
        fingers: [0, 2, 3, 1, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 2, 4, 2, 4],
        fingers: [0, 1, 1, 3, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 3],
        barres: [3],
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: '69',
    positions: [
      {
        frets: [0, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 1, 1, 1],
        fingers: [0, 1, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [0, 1, 1, 1, 2, 2],
        fingers: [0, 1, 1, 1, 3, 4],
        barres: [1],
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: '7',
    positions: [
      {
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [0, 2, 0, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 3, 1, -1],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 3, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 1, 1, 2],
        fingers: [0, 0, 1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: '7b5',
    positions: [
      {
        frets: [0, 1, 0, 1, 3, 0],
        fingers: [0, 1, 0, 2, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 3, 3, 4],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 3, 1, 2],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'aug7',
    positions: [
      {
        frets: [0, 3, 0, 1, 1, 0],
        fingers: [0, 4, 0, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, -1, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '9',
    positions: [
      {
        frets: [0, 2, 0, 1, 0, 2],
        fingers: [0, 2, 0, 1, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, -1, 2, 4, 3, 2],
        fingers: [3, 0, 1, 4, 2, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2, 2, 2],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [0, 1, 1, 1, 1, 2],
        fingers: [0, 1, 1, 1, 1, 2],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: '9b5',
    positions: [
      {
        frets: [0, 1, 2, 1, 3, 2],
        fingers: [0, 1, 2, 1, 4, 3],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [0, 3, 2, 1, 1, 2],
        fingers: [0, 4, 2, 1, 1, 3],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [0, 3, 2, 1, 3, 0],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'aug9',
    positions: [
      {
        frets: [0, 3, 0, 1, 3, 2],
        fingers: [0, 3, 0, 1, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [0, 1, 2, 1, 1, 2],
        fingers: [0, 1, 2, 1, 1, 3],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: '7b9',
    positions: [
      {
        frets: [0, 2, 0, 1, 0, 1],
        fingers: [0, 3, 0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 0, 1, 3, 1],
        fingers: [0, 3, 0, 1, 4, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '7#9',
    positions: [
      {
        frets: [0, 2, 0, 1, 0, 3],
        fingers: [0, 2, 0, 1, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 3, 0, 0, 1, 2],
        fingers: [0, 3, 0, 0, 1, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [0, 2, 1, 1, 1, 2],
        fingers: [0, 2, 1, 1, 1, 3],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: '11',
    positions: [
      {
        frets: [0, 0, 0, 1, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 0, 4, 4, 3, 4],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: '9#11',
    positions: [
      {
        frets: [0, 1, 0, 1, 0, 0],
        fingers: [0, 1, 0, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 3, 0, 1, 3, 2],
        fingers: [0, 3, 0, 1, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: '13',
    positions: [
      {
        frets: [0, 2, 0, 1, 2, 0],
        fingers: [0, 2, 0, 1, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 0, 0, 1, 2, 2],
        fingers: [0, 0, 0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 1, 2, 2, 1, 0],
        fingers: [0, 1, 3, 4, 2, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 1, 1, 3, 3],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj7',
    positions: [
      {
        frets: [0, 2, 1, 1, 0, 0],
        fingers: [0, 3, 1, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 4, 4, 4],
        fingers: [0, 0, 1, 3, 3, 3],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [-1, 4, 3, 1, 1, 1],
        fingers: [0, 4, 3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [0, 1, 1, 1, 4, 0],
        fingers: [0, 1, 1, 1, 4, 0],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 3, 4, 4],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [0, 1, 3, 3, 1, 1],
        fingers: [0, 1, 3, 4, 1, 1],
        barres: [1],
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [0, 3, 2, 1, 4, 4],
        fingers: [0, 3, 2, 1, 4, 4],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 4, 2, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [0, 3, 2, 1, 1, 3],
        fingers: [0, 3, 2, 1, 1, 4],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj9',
    positions: [
      {
        frets: [0, 2, 1, 1, 0, 2],
        fingers: [0, 3, 1, 2, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 2, 4, 4, 2],
        fingers: [2, 1, 1, 3, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 2, 1, 3, 2, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 1, 3, 1, 3],
        fingers: [0, 0, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj11',
    positions: [
      {
        frets: [0, 0, 1, 1, 0, 0],
        fingers: [0, 0, 1, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 0, 3, 1, 1, 2],
        fingers: [0, 0, 3, 1, 1, 2],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [0, 3, 1, 1, 2, 3],
        fingers: [0, 3, 1, 1, 2, 4],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj13',
    positions: [
      {
        frets: [0, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm6',
    positions: [
      {
        frets: [0, 2, 2, 0, 2, 0],
        fingers: [0, 1, 2, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 2, 4, 2, 3],
        fingers: [0, 1, 1, 3, 1, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 2, 2, 1, 2],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm7',
    positions: [
      {
        frets: [0, 2, 2, 0, 3, 0],
        fingers: [0, 2, 3, 0, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 0, 0, 0, 0],
        fingers: [0, 2, 0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 2, 4, 3, 3],
        fingers: [0, 1, 1, 4, 2, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 1, 2, 1],
        fingers: [1, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm7b5',
    positions: [
      {
        frets: [0, 1, 2, 3, 3, 3],
        fingers: [0, 1, 2, 3, 3, 3],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 1, 3],
        fingers: [0, 0, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [2, -1, 2, 2, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm9',
    positions: [
      {
        frets: [0, 2, 0, 0, 0, 2],
        fingers: [0, 2, 0, 0, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 2, 0, 3, 2],
        fingers: [0, 1, 2, 0, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 5
      },
      {
        frets: [0, 1, 3, 2, 3, 1],
        fingers: [0, 1, 3, 2, 4, 1],
        barres: [1],
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm69',
    positions: [
      {
        frets: [0, 2, 2, 0, 2, 2],
        fingers: [0, 1, 1, 0, 2, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [3, -1, 2, 4, 2, 2],
        fingers: [2, 0, 1, 3, 1, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 2, 3, 3],
        fingers: [0, 3, 1, 2, 4, 4],
        barres: [3],
        baseFret: 5
      },
      {
        frets: [0, 1, 2, 2, 3, 0],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm11',
    positions: [
      {
        frets: [0, 0, 0, 0, 0, 2],
        fingers: [0, 0, 0, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 0, 3, 2, 1, 0],
        fingers: [0, 0, 3, 2, 1, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [0, 2, 1, 0, 0, 0],
        fingers: [0, 2, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 2, 4, 4, 3],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 4, 2, 1, 1, -1],
        fingers: [0, 4, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 3, 2, 2, 1],
        fingers: [1, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [0, 1, 1, 0, -1, 0],
        fingers: [0, 1, 2, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 3, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 6
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [0, 2, 1, 0, 0, 2],
        fingers: [0, 2, 1, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, -1, 4, 4, 4, 3],
        fingers: [0, 0, 2, 2, 4, 1],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [0, 4, 3, 2, 1, 0],
        fingers: [0, 4, 3, 2, 1, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'E',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [0, 0, 1, 0, 0, 2],
        fingers: [0, 0, 1, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 2, 2, 4, 3],
        fingers: [0, 1, 1, 1, 3, 2],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 1, 2, 2, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'add9',
    positions: [
      {
        frets: [0, 2, 2, 1, 0, 2],
        fingers: [0, 2, 3, 1, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, -1, 2, 2],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 3, 1, 0, 1, 3],
        fingers: [0, 3, 1, 0, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 1, 3, 0, 2, 1],
        fingers: [0, 1, 4, 0, 3, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '/H',
    positions: [
      {
        frets: [-1, 2, 2, 1, 0, 0],
        fingers: [0, 2, 3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 1, 3, 4, 3],
        fingers: [0, 1, 1, 3, 4, 3],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm/H',
    positions: [
      {
        frets: [-1, 2, 2, 0, 0, 0],
        fingers: [0, 1, 2, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 2, 0, 0, 3],
        fingers: [0, 1, 2, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 1, 3, 4, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: '/C#',
    positions: [
      {
        frets: [-1, 1, 3, 1, 2, 1],
        fingers: [0, 1, 3, 1, 2, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [-1, 1, 3, 1, 2, 4],
        fingers: [0, 1, 3, 1, 2, 4],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 1, 4, 4],
        fingers: [1, 3, 1, 1, 4, 4],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm/C#',
    positions: [
      {
        frets: [-1, 4, 2, 0, 0, 0],
        fingers: [0, 3, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 2, 4],
        fingers: [0, 1, 2, 1, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 4, 4, 4],
        fingers: [1, 2, 1, 4, 4, 4],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: '/D',
    positions: [
      {
        frets: [-1, -1, 0, 1, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 1, 2, 1],
        fingers: [0, 2, 4, 1, 3, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [-1, 4, 1, 3, 4, 3],
        fingers: [0, 3, 1, 2, 4, 2],
        barres: [3],
        baseFret: 2
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm/D',
    positions: [
      {
        frets: [-1, -1, 0, 0, 0, 0],
        fingers: [0, 0, 0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 2, 1, 2, -1],
        fingers: [0, 2, 3, 1, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 1, 1, 1, 1],
        fingers: [0, 0, 1, 1, 1, 1],
        barres: [1],
        baseFret: 12
      }
    ]
  },
  {
    key: 'E',
    suffix: '/D#',
    positions: [
      {
        frets: [-1, -1, 1, 1, 0, 0],
        fingers: [0, 0, 1, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 1, 2, 1],
        fingers: [0, 3, 4, 1, 2, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [3, 3, 1, 1, 4, 4],
        fingers: [2, 3, 1, 1, 4, 4],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm/D#',
    positions: [
      {
        frets: [-1, -1, 1, 0, 0, 0],
        fingers: [0, 0, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 1, 2, -1],
        fingers: [0, 4, 2, 1, 3, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 4, 4, 3, -1],
        fingers: [0, 1, 3, 4, 2, 0],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '/F',
    positions: [
      {
        frets: [1, 2, 2, 1, 0, 0],
        fingers: [1, 3, 4, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 1, 0, 0],
        fingers: [0, 0, 3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '/F#',
    positions: [
      {
        frets: [2, 2, 2, 1, 0, 0],
        fingers: [2, 3, 4, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 1, 2, 1],
        fingers: [0, 0, 1, 1, 2, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 3, 4, 3],
        fingers: [1, 1, 1, 3, 4, 3],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'E',
    suffix: '/G',
    positions: [
      {
        frets: [3, 2, 2, 1, 0, 0],
        fingers: [4, 2, 3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 3, 4, 3],
        fingers: [2, 1, 1, 3, 4, 3],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [-1, -1, 2, 1, 2, 1],
        fingers: [0, 0, 3, 1, 4, 2],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '/G#',
    positions: [
      {
        frets: [-1, -1, -1, 1, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 2, 1, 0, 0],
        fingers: [4, 2, 3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 1, 2, 1],
        fingers: [1, 4, 3, 1, 2, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [3, 1, 1, 3, 4, -1],
        fingers: [2, 1, 1, 3, 4, 0],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm/F',
    positions: [
      {
        frets: [-1, -1, 3, 0, 0, 0],
        fingers: [0, 0, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 0, 0, 0],
        fingers: [1, 2, 3, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 0, 0, 3],
        fingers: [1, 2, 3, 0, 0, 4],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm/F#',
    positions: [
      {
        frets: [2, 2, 2, 0, 0, 0],
        fingers: [1, 2, 3, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 2, 0, 0, 3],
        fingers: [1, 2, 3, 0, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3, 4, 2],
        fingers: [1, 1, 1, 3, 4, 2],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm/G',
    positions: [
      {
        frets: [3, 2, 2, 0, 0, 0],
        fingers: [3, 1, 2, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 2, 0, 0, 3],
        fingers: [3, 1, 2, 0, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 3, 4, 0],
        fingers: [2, 1, 1, 3, 4, 0],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm/G#',
    positions: [
      {
        frets: [4, 2, 2, 0, 0, 0],
        fingers: [4, 1, 2, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 2, 1, 2, -1],
        fingers: [1, 4, 2, 1, 3, 0],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [-1, -1, 4, 2, 3, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'major',
    positions: [
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 3, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 2, 1],
        fingers: [0, 4, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'minor',
    positions: [
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 3, 4, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 3, 3, 2, 1],
        fingers: [0, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [4, 2, 1, 1, -1, -1],
        fingers: [4, 2, 1, 1, 0, 0],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, -1, 3, 4, -1, 4],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'dim7',
    positions: [
      {
        frets: [1, -1, 0, 1, 0, 1],
        fingers: [1, 0, 0, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 4, 3, 4],
        fingers: [0, 0, 1, 3, 1, 4],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, -1, 1, 2, 1, -1],
        fingers: [3, 0, 1, 4, 2, 0],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 3, 3, -1, 1, 3],
        fingers: [1, 2, 3, 0, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [4, 1, 1, 3, 4, -1],
        fingers: [3, 1, 1, 2, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'sus4',
    positions: [
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 3, 4, 4],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 1, 2, -1],
        fingers: [0, 0, 1, 1, 2, 0],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        baseFret: 8
      },
      {
        frets: [-1, 4, 1, 1, 2, 2],
        fingers: [0, 4, 1, 1, 2, 2],
        barres: [1, 2],
        baseFret: 5
      }
    ]
  },
  {
    key: 'F',
    suffix: '7sus4',
    positions: [
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'alt',
    positions: [
      {
        frets: [1, 2, 3, 2, 0, -1],
        fingers: [1, 2, 4, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 0, 3],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 1, -1, 3, 1, 2],
        fingers: [2, 1, 0, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'F',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, -1, 3, 2, 2, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, -1, 3, 3, 2],
        fingers: [0, 1, 0, 3, 4, 2],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '6',
    positions: [
      {
        frets: [1, -1, 3, 2, 3, 1],
        fingers: [1, 0, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 1, 3],
        fingers: [0, 1, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 3, 3],
        fingers: [1, 1, 3, 3, 3, 3],
        barres: [1, 3],
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: '69',
    positions: [
      {
        frets: [1, 0, 0, 0, 1, 1],
        fingers: [1, 0, 0, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 1, 1, 2, 1],
        fingers: [0, 1, 1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'F',
    suffix: '7',
    positions: [
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 2, 3],
        fingers: [0, 1, 1, 3, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 1, 3, 1, 3, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 1, 1, 1, 2],
        fingers: [0, 0, 1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: '7b5',
    positions: [
      {
        frets: [1, 0, 1, 2, 0, 1],
        fingers: [1, 0, 2, 4, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, -1, 2, 3, 1, 2],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'aug7',
    positions: [
      {
        frets: [1, 0, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [2, 1, 2, -1, 3, -1],
        fingers: [2, 1, 3, 0, 4, 0],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '9',
    positions: [
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 2, 4, 3],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 2, 2, 2],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 1, 1, 2],
        fingers: [0, 1, 1, 1, 1, 2],
        barres: [1],
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: '9b5',
    positions: [
      {
        frets: [1, 0, 1, 0, 0, 1],
        fingers: [1, 0, 2, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 2, 0, 3, 4],
        fingers: [0, 1, 2, 0, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 1, 2, 0, 0, 2],
        fingers: [2, 1, 2, 0, 0, 3],
        barres: [2],
        baseFret: 12
      }
    ]
  },
  {
    key: 'F',
    suffix: 'aug9',
    positions: [
      {
        frets: [1, 0, 1, 0, 2, 1],
        fingers: [1, 0, 2, 0, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2, 2, 1],
        fingers: [1, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [2, 1, 2, 1, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'F',
    suffix: '7b9',
    positions: [
      {
        frets: [1, 3, 1, 2, 1, 2],
        fingers: [1, 4, 1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 2, 4, 2],
        fingers: [0, 0, 2, 1, 3, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '7#9',
    positions: [
      {
        frets: [1, 3, 1, 2, 1, 4],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 2, 4, 4],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 2, 1, 1, 1, 2],
        fingers: [0, 2, 1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: '11',
    positions: [
      {
        frets: [1, 1, 1, 2, 1, 1],
        fingers: [1, 1, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 1, 2, 3],
        fingers: [1, 1, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: '9#11',
    positions: [
      {
        frets: [1, 0, 1, 0, 0, 1],
        fingers: [1, 0, 2, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 2, 1, 3, 1],
        fingers: [0, 1, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: '13',
    positions: [
      {
        frets: [1, 3, 1, 2, 3, 1],
        fingers: [1, 3, 1, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 2, 3, 3],
        fingers: [1, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 2, 1, 2, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [4],
        baseFret: 7
      },
      {
        frets: [1, 1, 1, 1, 3, 3],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj7',
    positions: [
      {
        frets: [-1, -1, 3, 2, 1, 0],
        fingers: [0, 0, 3, 2, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 2, 1, 1],
        fingers: [1, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 3, 3],
        fingers: [0, 1, 1, 3, 3, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [1, 0, 2, 2, 0, 0],
        fingers: [1, 0, 2, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [1, 0, 2, 2, 2, 0],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 4, 2, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, -1, 4, 3, 3, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj9',
    positions: [
      {
        frets: [1, 0, 2, 0, 1, 0],
        fingers: [1, 0, 3, 0, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 3, 2, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 3, 1, 3],
        fingers: [0, 0, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj11',
    positions: [
      {
        frets: [1, 1, 2, 2, 1, 1],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 1, 3, 3],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 2, 4, 0, 1, 0],
        fingers: [3, 2, 4, 0, 1, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj13',
    positions: [
      {
        frets: [1, 0, 0, 0, 1, 0],
        fingers: [1, 0, 0, 0, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 3, 0],
        fingers: [0, 0, 2, 1, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm6',
    positions: [
      {
        frets: [1, -1, 0, 1, 1, 1],
        fingers: [1, 0, 0, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 3, 1, 2],
        fingers: [0, 0, 1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 2, 2, 1, 2],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm7',
    positions: [
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 3, 2, 2],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 2, 1],
        fingers: [1, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm7b5',
    positions: [
      {
        frets: [1, -1, 1, 1, 0, -1],
        fingers: [1, 0, 2, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 4, 4, 4],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [3, 1, 3, 3, 0, -1],
        fingers: [2, 1, 3, 4, 0, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm9',
    positions: [
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 3, 0, 4, 4],
        fingers: [0, 1, 2, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 6
      },
      {
        frets: [3, 1, 3, 0, 3, 3],
        fingers: [2, 1, 3, 0, 4, 4],
        barres: [3],
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm69',
    positions: [
      {
        frets: [1, 3, 3, 1, 3, 3],
        fingers: [1, 2, 2, 1, 3, 4],
        barres: [1, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, -1, 1, 3, 1, 1],
        fingers: [2, 0, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 3, 1, 2, 3, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 1, 2, 0, 3, -1],
        fingers: [3, 1, 2, 0, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm11',
    positions: [
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 3, 4, 4],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 3, 3, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 3, 2, 2, 1],
        fingers: [1, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, -1, 4, 2, 2, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [1, 2, 2, 1, 0, 0],
        fingers: [1, 2, 3, 1, 0, 0],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 7
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 0, 3, 2],
        fingers: [0, 0, 1, 0, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 3, 1, 4, 3, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 1, -1, 2, 3, 0],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 1, 3, 2],
        fingers: [0, 1, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 2, 2, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 0, 4, 3],
        fingers: [0, 0, 1, 0, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 2, 1, 0, 2, 2],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 3, 1, 0, 1, 3],
        fingers: [0, 3, 1, 0, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 1, 3, 0, 2, 1],
        fingers: [0, 1, 4, 0, 3, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '/C',
    positions: [
      {
        frets: [-1, 3, 3, 2, 1, 1],
        fingers: [0, 3, 4, 2, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 4, 3],
        fingers: [0, 1, 1, 3, 4, 3],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: '/D',
    positions: [
      {
        frets: [-1, 1, 3, 1, 2, 1],
        fingers: [0, 1, 3, 1, 2, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [-1, 1, 3, 1, 2, 4],
        fingers: [0, 1, 3, 1, 2, 4],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '/D#',
    positions: [
      {
        frets: [-1, -1, 1, 2, 1, 1],
        fingers: [0, 0, 1, 2, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 2, 3, 1, 2, 1],
        fingers: [0, 2, 4, 1, 3, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [-1, 4, 1, 3, 4, 3],
        fingers: [0, 3, 1, 2, 4, 2],
        barres: [3],
        baseFret: 3
      }
    ]
  },
  {
    key: 'F',
    suffix: '/E',
    positions: [
      {
        frets: [0, 0, 3, 2, 1, 1],
        fingers: [0, 0, 3, 2, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 2, 1, 1],
        fingers: [0, 0, 2, 3, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [0, 3, 3, 2, 1, 1],
        fingers: [0, 3, 4, 2, 1, 1],
        barres: [1],
        baseFret: 1
      }
    ]
  },
  {
    key: 'F',
    suffix: '/G',
    positions: [
      {
        frets: [3, 0, 3, 2, 1, 1],
        fingers: [3, 0, 4, 2, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [3, 3, 3, 2, -1, -1],
        fingers: [2, 3, 4, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3, 4, 3],
        fingers: [1, 1, 1, 3, 4, 3],
        barres: [1],
        baseFret: 3
      }
    ]
  },
  {
    key: 'F',
    suffix: '/A',
    positions: [
      {
        frets: [-1, 0, 3, 2, 1, 1],
        fingers: [0, 0, 3, 2, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [4, 2, 2, 1, -1, -1],
        fingers: [4, 2, 3, 1, 0, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 4, 3, 1, 2, 1],
        fingers: [1, 4, 3, 1, 2, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [3, 1, 1, 3, 4, 0],
        fingers: [2, 1, 1, 3, 4, 0],
        barres: [1],
        baseFret: 3
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm/C',
    positions: [
      {
        frets: [-1, 3, 3, 1, 1, 1],
        fingers: [0, 3, 4, 1, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 3, 3, 1, 1, 4],
        fingers: [0, 2, 3, 1, 1, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        baseFret: 8
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'major',
    positions: [
      {
        frets: [2, 4, 4, 3, 2, 2],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 4, 3],
        fingers: [0, 1, 1, 2, 4, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 4, 3, 1, 2, 1],
        fingers: [1, 4, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'minor',
    positions: [
      {
        frets: [2, 4, 4, 2, 2, 2],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 4, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 3, 2, 3, 1],
        fingers: [0, 0, 3, 2, 4, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'dim',
    positions: [
      {
        frets: [2, 0, -1, 2, 1, -1],
        fingers: [2, 0, 0, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'dim7',
    positions: [
      {
        frets: [2, -1, 1, 2, 1, -1],
        fingers: [2, 0, 1, 3, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 3, 4, 2, 4, 2],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'sus2',
    positions: [
      {
        frets: [2, -1, -1, 1, 2, 2],
        fingers: [2, 0, 0, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [4, 1, 1, 3, 4, -1],
        fingers: [3, 1, 1, 2, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'sus4',
    positions: [
      {
        frets: [2, 4, 4, 4, 2, 2],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 4, 4],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, -1, 1, 1, 2, 4],
        fingers: [0, 0, 1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [2, 2, 4, 4, 2, 4],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        baseFret: 9
      },
      {
        frets: [-1, 4, 1, 1, 2, 2],
        fingers: [0, 4, 1, 1, 2, 2],
        barres: [1, 2],
        baseFret: 6
      }
    ]
  },
  {
    key: 'F#',
    suffix: '7sus4',
    positions: [
      {
        frets: [2, 4, 2, 4, 2, 2],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 3, 2, 4],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 3, 3, 3, 1, 1],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, -1, 4, 3, 1, 2],
        fingers: [0, 0, 4, 3, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 4, 3, -1, 2],
        fingers: [1, 2, 4, 3, 0, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, -1, 4, 3, 3, 2],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 4, 3, 3, -1],
        fingers: [0, 0, 2, 1, 1, 0],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F#',
    suffix: '5',
    positions: [
      {
        frets: [2, 4, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 9,
        barres: []
      },
      {
        frets: [2, 4, 4, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: '6',
    positions: [
      {
        frets: [2, -1, 1, 3, 2, -1],
        fingers: [2, 0, 1, 4, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, -1, 4, 3, 4, 2],
        fingers: [1, 0, 3, 2, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 1, 3],
        fingers: [0, 1, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 3],
        barres: [3],
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: '69',
    positions: [
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 4, 3, 4, 4],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 1, 1, 2, 1],
        fingers: [0, 1, 1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F#',
    suffix: '7',
    positions: [
      {
        frets: [2, 4, 2, 3, 2, 2],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 2, 3],
        fingers: [0, 1, 1, 3, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 2, 3, 1, -1],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 3, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: '7b5',
    positions: [
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 1, 2],
        fingers: [0, 1, 2, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 2, 1, 3, 0],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'aug7',
    positions: [
      {
        frets: [2, -1, 2, 3, 3, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 3, 2, 1, 1, 0],
        fingers: [0, 4, 3, 1, 2, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: '9',
    positions: [
      {
        frets: [2, 4, 2, 3, 2, 4],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 1, 3, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 2, 1, 2, 2, 2],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [-1, 1, 1, 1, 1, 2],
        fingers: [0, 1, 1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F#',
    suffix: '9b5',
    positions: [
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 2, 1, 1, 0],
        fingers: [2, 1, 3, 1, 1, 0],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 1, 2, 1, 3, 2],
        fingers: [0, 1, 2, 1, 4, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'aug9',
    positions: [
      {
        frets: [2, 1, 2, 1, 3, 0],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 3, 2, 1, 3, 0],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [4, -1, 2, 3, 1, 0],
        fingers: [4, 0, 2, 3, 1, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: '7b9',
    positions: [
      {
        frets: [2, 1, 2, 0, 2, 0],
        fingers: [2, 1, 3, 0, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 1, 3, 1],
        fingers: [0, 0, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: '7#9',
    positions: [
      {
        frets: [2, 1, 2, 2, 2, 2],
        fingers: [2, 1, 3, 3, 3, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 1, 4],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [-1, -1, 2, 1, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: '11',
    positions: [
      {
        frets: [2, 1, 2, 1, 0, 0],
        fingers: [3, 1, 4, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 1, 2, 3],
        fingers: [1, 1, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: '9#11',
    positions: [
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 1, 2, 1, 3, 1],
        fingers: [0, 1, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: '13',
    positions: [
      {
        frets: [2, 2, 1, 3, 0, 0],
        fingers: [2, 3, 1, 4, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 2, 3, 4, 4],
        fingers: [1, 1, 1, 2, 3, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 2, 2, 1, 0],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 1, 1, 3, 3],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'maj7',
    positions: [
      {
        frets: [2, 4, 3, 3, 2, 2],
        fingers: [1, 4, 2, 3, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 3, 3],
        fingers: [0, 1, 1, 3, 3, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 4, 3, 1, 1, 1],
        fingers: [0, 4, 3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 2, 1, 3, 4, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [2, -1, 3, 3, 3, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 4, 2, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 9,
        barres: []
      },
      {
        frets: [-1, -1, 2, 1, 1, 3],
        fingers: [0, 0, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'maj9',
    positions: [
      {
        frets: [2, 1, 3, 1, 2, 1],
        fingers: [2, 1, 4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, -1, 3, 3, 2, 4],
        fingers: [1, 0, 2, 3, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 1, 4, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 2, 1, 3, 2, -1],
        fingers: [2, 2, 1, 4, 3, 0],
        barres: [2],
        baseFret: 8
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'maj11',
    positions: [
      {
        frets: [2, 2, 3, 3, 2, 2],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 1, 3, 3],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, 3, 0, 2],
        fingers: [0, 2, 1, 4, 0, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'maj13',
    positions: [
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 1, 3, 3],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'm6',
    positions: [
      {
        frets: [2, -1, 1, 2, 2, 2],
        fingers: [2, 0, 1, 3, 3, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 1, 2],
        fingers: [0, 1, 1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 2, 4, 1, 3, -1],
        fingers: [0, 2, 4, 1, 3, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'm7',
    positions: [
      {
        frets: [2, 4, 2, 2, 2, 2],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 3, 2, 2],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 2, 1],
        fingers: [1, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'm7b5',
    positions: [
      {
        frets: [2, 0, 2, 2, 1, 0],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 9,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 1, 3],
        fingers: [0, 0, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'm9',
    positions: [
      {
        frets: [2, 0, 2, 1, 2, 0],
        fingers: [2, 0, 3, 1, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 2, 2, 2, 4],
        fingers: [1, 2, 1, 1, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 7
      },
      {
        frets: [-1, -1, 2, 4, 1, 3],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'm69',
    positions: [
      {
        frets: [2, 0, 1, 1, 2, 2],
        fingers: [2, 0, 1, 1, 3, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [2, 4, 4, 2, 4, 4],
        fingers: [1, 2, 2, 1, 3, 4],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 3, 1, 1],
        fingers: [2, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 1, 2, 3, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'm11',
    positions: [
      {
        frets: [2, 0, 2, 1, 0, 0],
        fingers: [2, 0, 3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 2, 2, 2, 4],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [2, 4, 3, 2, 2, 2],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 3, 3, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 4, 2, 1, 1, -1],
        fingers: [0, 4, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 3, 2, 2, 1],
        fingers: [1, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [2, 3, 3, 2, -1, 2],
        fingers: [1, 2, 3, 1, 0, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 8
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [2, 0, 3, 1, 2, 1],
        fingers: [2, 0, 4, 1, 3, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [2, 0, 3, 1, 2, -1],
        fingers: [2, 0, 4, 1, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 3, 2, 2, 4],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 3, 1, 4, 3, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [2, 2, 3, 2, 2, 4],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 1, 1, 1, 3, 2],
        fingers: [0, 1, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 1, 1, 2, 2, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'add9',
    positions: [
      {
        frets: [2, 1, -1, 1, 2, 2],
        fingers: [3, 1, 0, 2, 4, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, -1, 4, 3, 2, 4],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 2, 1, -1, 2, 2],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F#',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, -1, 4, 2, 2, 4],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 4, 4, 2, 2, 4],
        fingers: [1, 2, 3, 1, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 3, 3],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'major',
    positions: [
      {
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [2, 1, 0, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 3, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 3, 1, 2, 1],
        fingers: [1, 4, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'G',
    suffix: 'minor',
    positions: [
      {
        frets: [3, 1, 0, 0, 3, 3],
        fingers: [2, 1, 0, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 3, 4, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'dim',
    positions: [
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'dim7',
    positions: [
      {
        frets: [3, 1, -1, 3, 2, 0],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, -1, 2, 3, 2, 0],
        fingers: [3, 0, 1, 4, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'sus2',
    positions: [
      {
        frets: [3, 0, 0, 0, 3, 3],
        fingers: [1, 0, 0, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 4, 1, 1, 2, 4],
        fingers: [0, 3, 1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'sus4',
    positions: [
      {
        frets: [3, 3, 0, 0, 1, 3],
        fingers: [2, 3, 0, 0, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 3, 4, 4],
        fingers: [0, 1, 1, 3, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [3, 3, 0, 2, 1, -1],
        fingers: [3, 4, 0, 2, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 0, 2, 3, -1],
        fingers: [2, 3, 0, 1, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 0, 0, 2, 1, 3],
        fingers: [3, 0, 0, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: '7sus4',
    positions: [
      {
        frets: [3, 3, 0, 0, 1, 1],
        fingers: [2, 3, 0, 0, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 3, 3, 3, 1, 1],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'alt',
    positions: [
      {
        frets: [3, 2, -1, 0, 2, 3],
        fingers: [3, 1, 0, 0, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 0, 3],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 2, 1, 0, 0, 1],
        fingers: [0, 3, 1, 0, 0, 2],
        baseFret: 9,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'aug',
    positions: [
      {
        frets: [3, 2, 1, 0, 0, -1],
        fingers: [3, 2, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, -1, 3, 2, 2, -1],
        fingers: [1, 0, 4, 2, 3, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, -1, 2, 1, 1, -1],
        fingers: [0, 0, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'G',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 10,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '6',
    positions: [
      {
        frets: [3, 2, 0, 0, 0, 0],
        fingers: [2, 1, 0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, -1, 2, 4, 3, -1],
        fingers: [2, 0, 1, 4, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 1, 3, 1, 3],
        fingers: [0, 1, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 4],
        barres: [3],
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: '69',
    positions: [
      {
        frets: [3, 0, 0, 0, 0, 0],
        fingers: [1, 0, 0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 2, 2, 3, 3],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'G',
    suffix: '7',
    positions: [
      {
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [3, 2, 0, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 3, 2, 3],
        fingers: [0, 1, 1, 3, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 3, 1, 3, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: '7b5',
    positions: [
      {
        frets: [3, -1, 3, 4, 2, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 0, 1],
        fingers: [0, 3, 1, 4, 0, 2],
        baseFret: 9,
        barres: []
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'aug7',
    positions: [
      {
        frets: [3, 2, 1, 0, 0, 1],
        fingers: [4, 3, 1, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, -1, 3, 4, 4, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: '9',
    positions: [
      {
        frets: [3, 0, 0, 0, 0, 1],
        fingers: [3, 0, 0, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 3, 2, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 2, 2, 2],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'G',
    suffix: '9b5',
    positions: [
      {
        frets: [3, 2, 3, 2, 2, 3],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 2, 0, 3],
        fingers: [1, 2, 1, 3, 0, 4],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, 2, 1, 0, 0, 3],
        fingers: [0, 2, 1, 0, 0, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'aug9',
    positions: [
      {
        frets: [3, 0, 1, 0, 0, 1],
        fingers: [3, 0, 2, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 3, 2, 4, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 9
      },
      {
        frets: [-1, 1, 2, 0, 1, 2],
        fingers: [0, 1, 3, 0, 2, 4],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '7b9',
    positions: [
      {
        frets: [3, 2, 0, 1, 3, 1],
        fingers: [3, 2, 0, 1, 4, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [3, -1, 3, 4, 3, 4],
        fingers: [1, 0, 1, 2, 1, 3],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 1, 3, 1],
        fingers: [0, 0, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'G',
    suffix: '7#9',
    positions: [
      {
        frets: [3, 2, 0, 3, 0, 1],
        fingers: [3, 2, 0, 4, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2, 4, 4],
        fingers: [1, 3, 1, 2, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 2, 2, 1, 3, 3],
        fingers: [0, 2, 3, 1, 4, 4],
        barres: [3],
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '11',
    positions: [
      {
        frets: [3, 2, 0, 0, 1, 1],
        fingers: [3, 2, 0, 0, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 1, 2, 3],
        fingers: [1, 1, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: '9#11',
    positions: [
      {
        frets: [3, 2, 3, 2, 2, 3],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, 1, 2, 1, 3, 1],
        fingers: [0, 1, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: '13',
    positions: [
      {
        frets: [3, 0, 2, 0, 0, 1],
        fingers: [3, 0, 2, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, -1, 1, 2, 3, 3],
        fingers: [1, 0, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 1, 2, 3, 1],
        fingers: [1, 3, 1, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 2, 1, 2, 2, 4],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj7',
    positions: [
      {
        frets: [3, 2, 0, 0, 0, 2],
        fingers: [3, 2, 0, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 2, 1, 1],
        fingers: [1, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 3, 3, 3],
        fingers: [0, 1, 1, 3, 3, 3],
        barres: [1, 3],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 3, 2, 3, 1],
        fingers: [0, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [3, 2, 4, 4, 2, 2],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 4, 4, 4, -1, -1],
        fingers: [1, 2, 3, 4, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [-1, -1, 1, 0, 0, 2],
        fingers: [0, 0, 1, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, -1, 4, 4, 4, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 4, 2, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj9',
    positions: [
      {
        frets: [3, 0, 0, 0, 0, 2],
        fingers: [2, 0, 0, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 4, 2, 3, 2],
        fingers: [2, 1, 4, 1, 3, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 2, 1, 3, 2, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj11',
    positions: [
      {
        frets: [3, 2, 0, 0, 1, 2],
        fingers: [4, 2, 0, 0, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 4, 4, 3, 3],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 0, 1, 2],
        fingers: [0, 0, 3, 0, 1, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj13',
    positions: [
      {
        frets: [3, 2, 2, 2, 3, 2],
        fingers: [3, 1, 1, 1, 3, 1],
        barres: [2, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 2, 2, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm6',
    positions: [
      {
        frets: [3, -1, 2, 3, 3, 3],
        fingers: [2, 0, 1, 3, 4, 4],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 3, 1, 2],
        fingers: [0, 1, 1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm7',
    positions: [
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 3, 2, 2],
        fingers: [0, 1, 1, 4, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 1, 3, 1, 3],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 1, 3, 1, 2, 1],
        fingers: [1, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm7b5',
    positions: [
      {
        frets: [3, -1, -1, 3, 2, 1],
        fingers: [3, 0, 0, 4, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, -1, 3, 3, 2, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm9',
    positions: [
      {
        frets: [3, 0, 0, 3, 3, 1],
        fingers: [2, 0, 0, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 2, 0, 1, 1],
        fingers: [0, 0, 2, 0, 1, 1],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 8
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm69',
    positions: [
      {
        frets: [3, 1, 0, 2, 3, 0],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 1, 3, 3],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [3],
        baseFret: 3
      },
      {
        frets: [2, 1, 1, 3, 1, 1],
        fingers: [2, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 1, 2, 3, 3],
        fingers: [0, 3, 1, 2, 4, 4],
        barres: [3],
        baseFret: 8
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm11',
    positions: [
      {
        frets: [3, -1, 3, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 1, 3, 3],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'G',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [3, 1, 0, 0, 3, 2],
        fingers: [3, 1, 0, 0, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 3, 3, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 3, 2, 2, 1],
        fingers: [0, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [3, 4, 4, 3, -1, 3],
        fingers: [1, 2, 3, 1, 0, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 9
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [3, 0, 0, 3, 3, 2],
        fingers: [2, 0, 0, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 2, 0, 2, 1],
        fingers: [0, 0, 2, 0, 3, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 3, 1, 4, 3, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 1, 3, 2],
        fingers: [0, 1, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 1, 1, 2, 2, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'add9',
    positions: [
      {
        frets: [3, 0, 0, 2, 0, 3],
        fingers: [2, 0, 0, 1, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 4],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 2, 1, 0, 2, 2],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'madd9',
    positions: [
      {
        frets: [3, 1, 0, 2, 3, 3],
        fingers: [3, 1, 0, 2, 4, 4],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 2, 0, 3, 1],
        fingers: [0, 0, 2, 0, 3, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '/F#',
    positions: [
      {
        frets: [2, 2, 0, 0, 0, 3],
        fingers: [1, 2, 0, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 0, 0, 3, 3],
        fingers: [1, 2, 0, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 4, 4, 3, 3],
        fingers: [0, 0, 2, 3, 1, 1],
        barres: [3],
        baseFret: 1
      }
    ]
  },
  {
    key: 'G',
    suffix: '/H',
    positions: [
      {
        frets: [-1, 2, 0, 0, 3, 3],
        fingers: [0, 1, 0, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 0, 0, 0, 3],
        fingers: [0, 1, 0, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 4, 3, 2, 2],
        fingers: [0, 1, 4, 3, 2, 2],
        barres: [2],
        baseFret: 2
      }
    ]
  },
  {
    key: 'G',
    suffix: '/D',
    positions: [
      {
        frets: [-1, -1, 0, 0, 0, 3],
        fingers: [0, 0, 0, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 2, 1, 1],
        fingers: [0, 3, 4, 2, 1, 1],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, 1, 1, 3, 4, 3],
        fingers: [0, 1, 1, 3, 4, 3],
        barres: [1],
        baseFret: 5
      }
    ]
  },
  {
    key: 'G',
    suffix: '/E',
    positions: [
      {
        frets: [0, 2, 0, 0, 3, 3],
        fingers: [0, 1, 0, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 2, 0, 0, 0, 3],
        fingers: [0, 1, 0, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 4, 3, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '/F',
    positions: [
      {
        frets: [1, 2, 0, 0, 3, 3],
        fingers: [1, 2, 0, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 0, 0, 0, 3],
        fingers: [1, 2, 0, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 4, 3, 3],
        fingers: [0, 0, 1, 2, 1, 1],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'major',
    positions: [
      {
        frets: [4, 3, 1, 1, 1, -1],
        fingers: [3, 2, 1, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 3, 4, 3],
        fingers: [0, 1, 1, 2, 4, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 4, 3, 1, 2, 1],
        fingers: [1, 4, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'minor',
    positions: [
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 1, 3, 4, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 3, 1],
        fingers: [0, 0, 3, 2, 4, 1],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'dim',
    positions: [
      {
        frets: [4, 2, -1, 4, 3, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 9,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, -1, 0, 1, 0, 1],
        fingers: [0, 0, 0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, -1, 3, 4, 3, 4],
        fingers: [2, 0, 1, 3, 1, 4],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'sus2',
    positions: [
      {
        frets: [4, -1, -1, 3, 4, 4],
        fingers: [2, 0, 0, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, 1, 3],
        fingers: [1, 2, 3, 0, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'sus4',
    positions: [
      {
        frets: [-1, -1, 1, 1, 2, 4],
        fingers: [0, 0, 1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 3, 4, 4],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 3, 3, 3, 1, 1],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, -1, 4, 3, 1, 2],
        fingers: [0, 0, 4, 3, 1, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 2, 1, 4, 4, 1],
        fingers: [0, 2, 1, 4, 4, 1],
        barres: [1, 4],
        capo: true,
        baseFret: 10
      },
      {
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'aug',
    positions: [
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, -1, 3, 2, 2, -1],
        fingers: [1, 0, 4, 2, 3, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 2, 1, 1, -1],
        fingers: [0, 0, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'G#',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 11,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: '6',
    positions: [
      {
        frets: [-1, 3, 1, 1, 1, 1],
        fingers: [0, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, -1, 1, 3, 2, -1],
        fingers: [2, 0, 1, 4, 3, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 1, 1, 3, 1, 3],
        fingers: [0, 1, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: '69',
    positions: [
      {
        frets: [-1, 1, 1, 1, 1, 1],
        fingers: [0, 1, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 3, 3, 3, 4, 4],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 1, 2, 2],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G#',
    suffix: '7',
    positions: [
      {
        frets: [-1, -1, 1, 1, 1, 2],
        fingers: [0, 0, 1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 3, 2, 3],
        fingers: [0, 1, 1, 3, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 3, 1, 3, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: '7b5',
    positions: [
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 1, 2],
        fingers: [0, 1, 2, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'aug7',
    positions: [
      {
        frets: [1, -1, 1, 2, 2, 0],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 3, 2, 3, 1, 0],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 9,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: '9',
    positions: [
      {
        frets: [4, 3, 4, 3, 4, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 2, 1, 3, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 1, 2, 2, 2],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'G#',
    suffix: '9b5',
    positions: [
      {
        frets: [4, 3, 0, 3, -1, 2],
        fingers: [4, 2, 0, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 4, 3, 3, 4],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 2, -1, 3],
        fingers: [1, 2, 1, 3, 0, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'aug9',
    positions: [
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 2, 1, 3, 0],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 0],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, 0, 1, 1, 1, 2],
        fingers: [0, 0, 1, 1, 1, 2],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [1, 0, 1, 2, 1, 3],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [-1, -1, 2, 1, 3, 1],
        fingers: [0, 0, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G#',
    suffix: '7#9',
    positions: [
      {
        frets: [4, 3, 4, 4, 4, 4],
        fingers: [2, 1, 3, 3, 3, 4],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 4, 4],
        fingers: [1, 3, 1, 2, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 2, 1, 3, 3],
        fingers: [0, 0, 3, 1, 4, 4],
        barres: [3],
        baseFret: 5
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: '11',
    positions: [
      {
        frets: [1, 1, 1, 2, 1, 1],
        fingers: [1, 1, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 1, 2, 3],
        fingers: [1, 1, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: '9#11',
    positions: [
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      },
      {
        frets: [-1, 1, 2, 1, 3, 1],
        fingers: [0, 1, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: '13',
    positions: [
      {
        frets: [4, 1, 3, 1, 1, 2],
        fingers: [4, 1, 3, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 3, 1],
        fingers: [1, 3, 1, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 2, 3, 3],
        fingers: [1, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 1, 2, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [4],
        baseFret: 10
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'maj7',
    positions: [
      {
        frets: [1, 3, 2, 2, 1, 1],
        fingers: [1, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 3, 3, 3],
        fingers: [0, 1, 1, 3, 3, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 2, 4, 1, -1],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 9,
        barres: []
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 2, 2, -1, -1],
        fingers: [1, 2, 3, 4, 0, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [0, 0, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        barres: [3],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 2, 4, 0],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [4, 3, 2, 0, 1, 0],
        fingers: [4, 3, 2, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 3, 0, 3, 0],
        fingers: [2, 1, 3, 0, 4, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 1, 4, 2, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'maj9',
    positions: [
      {
        frets: [-1, 1, 1, 1, 1, 3],
        fingers: [0, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 3, 1, 2, 1],
        fingers: [2, 1, 4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 2, 2, 1, 3],
        fingers: [1, 3, 2, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 2, 1, 3, 2, -1],
        fingers: [2, 2, 1, 4, 3, 0],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'maj11',
    positions: [
      {
        frets: [4, 3, 1, 0, 2, -1],
        fingers: [4, 3, 1, 0, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2, 1, 1],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 1, 1, 3, 3],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'maj13',
    positions: [
      {
        frets: [4, 3, 3, 3, 4, 3],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 2, 2, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'm6',
    positions: [
      {
        frets: [4, -1, 3, 4, 4, -1],
        fingers: [2, 0, 1, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 3, 1, 2],
        fingers: [0, 1, 1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'm7',
    positions: [
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 3, 2, 2],
        fingers: [0, 1, 1, 4, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 1, 3, 1, -1],
        fingers: [0, 2, 1, 3, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 1, 3, 1, 2, 1],
        fingers: [1, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 0, 2],
        fingers: [0, 0, 0, 1, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, -1, 4, 4, 3, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'm9',
    positions: [
      {
        frets: [4, 1, 1, 1, 0, 2],
        fingers: [4, 1, 1, 2, 0, 3],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 2, 2, 3, 1],
        fingers: [1, 3, 2, 2, 4, 1],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 9
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'm69',
    positions: [
      {
        frets: [2, -1, 1, 2, 2, 4],
        fingers: [2, 0, 1, 3, 3, 4],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 3, 3, 1, 3, 3],
        fingers: [1, 2, 2, 1, 3, 4],
        barres: [1, 3],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 1, 1, 3, 1, 1],
        fingers: [2, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 1, 2, 3, 3],
        fingers: [0, 3, 1, 2, 4, 4],
        barres: [3],
        baseFret: 9
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'm11',
    positions: [
      {
        frets: [4, 2, 4, 3, 2, 2],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 3, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, 2, 1, 1, 4, 3],
        fingers: [0, 2, 1, 1, 4, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 3, 3, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 3, 2, 2, 1],
        fingers: [0, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 3, 1, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 10
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [2, -1, 3, 1, 0, 2],
        fingers: [2, 0, 4, 1, 0, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 3, 3, 2],
        fingers: [1, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 1, 4, 3, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 1, 1, 1, 3, 2],
        fingers: [0, 1, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 1, 1, 2, 2, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'add9',
    positions: [
      {
        frets: [4, 3, -1, 3, 4, -1],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 2, 1, -1, 2, 2],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G#',
    suffix: 'madd9',
    positions: [
      {
        frets: [4, 2, -1, 3, 4, -1],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 3, 1, 1, 3],
        fingers: [1, 2, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'major',
    positions: [
      {
        frets: [-1, 0, 2, 2, 2, 0],
        fingers: [0, 0, 1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 1, 1, 1, 4],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 0, 1, 3, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'minor',
    positions: [
      {
        frets: [-1, 0, 2, 2, 1, 0],
        fingers: [0, 0, 2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 1, 4, 4, 4],
        fingers: [0, 0, 1, 4, 4, 4],
        barres: [4],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 0, 1, 3, 4, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, 0, 1, 2, 1, -1],
        fingers: [0, 0, 1, 3, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, -1, 2, 1, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, 0, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 1, -1],
        fingers: [2, 0, 1, 3, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 0, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        barres: [1],
        baseFret: 7
      }
    ]
  },
  {
    key: 'A',
    suffix: 'sus2',
    positions: [
      {
        frets: [-1, 0, 2, 2, 0, 0],
        fingers: [0, 0, 2, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 2, 4, 0, 0],
        fingers: [0, 0, 1, 4, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 0, 1, 1, 0, 0],
        fingers: [0, 0, 1, 2, 0, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'sus4',
    positions: [
      {
        frets: [-1, 0, 2, 2, 3, 0],
        fingers: [0, 0, 1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 0, -1, 3, 0],
        fingers: [0, 0, 0, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 3, 3, 4, 1, 1],
        barres: [1, 3],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 1, 3, 4, 4],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'A',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [-1, 0, 0, 2, 0, 0],
        fingers: [0, 0, 0, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [4, 4, 1, 3, -1, -1],
        fingers: [3, 4, 1, 2, 0, 0],
        baseFret: 2,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, 0, 2, 0, 3, 0],
        fingers: [0, 0, 2, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 0, 1, 3, 2, 4],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 3, 3, 3, 1, 1],
        fingers: [0, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'A',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, 0, 1, 2, 2, -1],
        fingers: [0, 0, 1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 4, 3, 1, 2],
        fingers: [0, 0, 4, 3, 1, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, 0, 4, 1, 3, 2],
        fingers: [0, 0, 4, 1, 3, 2],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, 0, 3, 2, 2, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, -1, 3, 2, 2, 1],
        fingers: [1, 0, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'A',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 0, 2, -1, -1, -1],
        fingers: [0, 0, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '6',
    positions: [
      {
        frets: [-1, 0, 2, 2, 2, 2],
        fingers: [0, 0, 1, 1, 1, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, -1, 1, 3, 2, -1],
        fingers: [2, 0, 1, 4, 3, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, -1, 2, 3, 1],
        fingers: [1, 3, 0, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '69',
    positions: [
      {
        frets: [-1, 0, 4, 4, 2, 2],
        fingers: [0, 0, 3, 4, 1, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [2],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: '7',
    positions: [
      {
        frets: [-1, 0, 2, 0, 2, 0],
        fingers: [0, 0, 2, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 2, 2, 2, 3],
        fingers: [0, 0, 1, 1, 1, 2],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 0, 1, 3, 2, 3],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '7b5',
    positions: [
      {
        frets: [-1, 0, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 2, 3, 1, 2],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 1, 2, 3, 1, 2],
        fingers: [0, 1, 2, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'A',
    suffix: 'aug7',
    positions: [
      {
        frets: [-1, 0, 3, 0, 2, 1],
        fingers: [0, 0, 3, 0, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 3, 2, 2, 3],
        fingers: [0, 0, 2, 1, 1, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 0, 1, 2, 2, 1],
        fingers: [0, 0, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '9',
    positions: [
      {
        frets: [4, 3, 1, 0, 0, 0],
        fingers: [4, 3, 1, 0, 0, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [-1, 0, 2, 4, 2, 3],
        fingers: [0, 0, 1, 3, 1, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 2, 1, 2, 2, 2],
        fingers: [0, 2, 1, 3, 3, 3],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: '9b5',
    positions: [
      {
        frets: [-1, 0, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 0, 2, 1, 1, 2],
        fingers: [0, 0, 2, 1, 1, 3],
        barres: [1],
        baseFret: 8
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: 'aug9',
    positions: [
      {
        frets: [-1, 0, 3, 4, 2, 3],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 1, 0, 0, 3],
        fingers: [3, 2, 1, 0, 0, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 0, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 0, 3],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, 0, 2, 3, 2, 3],
        fingers: [0, 0, 1, 2, 1, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 1, 2],
        fingers: [1, 4, 1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 2, 1, 3, 1],
        fingers: [0, 0, 2, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: '7#9',
    positions: [
      {
        frets: [1, 3, 1, 2, 4, 4],
        fingers: [1, 3, 1, 2, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 2, 1, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 0, 3, 2, 1, 2],
        fingers: [0, 0, 4, 2, 1, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '11',
    positions: [
      {
        frets: [-1, 0, 0, 0, 2, 0],
        fingers: [0, 0, 0, 0, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [3, 2, 0, 0, 0, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 1, 2, 1, 1],
        fingers: [1, 1, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 1, 1, 2, 3],
        fingers: [1, 1, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'A',
    suffix: '9#11',
    positions: [
      {
        frets: [-1, 0, 1, 0, 2, 0],
        fingers: [0, 0, 1, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: '13',
    positions: [
      {
        frets: [-1, 0, 2, 0, 2, 2],
        fingers: [0, 0, 1, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 2, 0, 1, 0],
        fingers: [4, 2, 3, 0, 1, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 3, 1, 2, 3, 1],
        fingers: [1, 3, 1, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 2, 1, 2, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [4],
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj7',
    positions: [
      {
        frets: [-1, 0, 2, 1, 2, 0],
        fingers: [0, 0, 2, 1, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 2, 2, 2, 4],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2, 1, 1],
        fingers: [1, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 0, 1, 3, 3, 3],
        fingers: [0, 0, 1, 3, 3, 3],
        barres: [3],
        baseFret: 7
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [-1, 0, 1, 1, 2, 4],
        fingers: [0, 0, 1, 1, 2, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 0, 1, 2, 2, 4],
        fingers: [0, 0, 1, 2, 2, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 2, -1, -1],
        fingers: [1, 2, 3, 4, 0, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 0, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [-1, 0, 3, 1, 2, 1],
        fingers: [0, 0, 3, 1, 2, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [-1, 0, 3, 2, 2, 4],
        fingers: [0, 0, 2, 1, 1, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, 0, 2, 2, 2, 1],
        fingers: [0, 0, 2, 3, 4, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [0, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj9',
    positions: [
      {
        frets: [-1, 0, 2, 4, 2, 4],
        fingers: [0, 0, 1, 3, 1, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 1, 3, 1, 2, 0],
        fingers: [2, 1, 4, 1, 3, 0],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [-1, 0, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 1, 3, 2, -1],
        fingers: [2, 2, 1, 4, 3, 0],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj11',
    positions: [
      {
        frets: [-1, 0, 0, 1, 2, 0],
        fingers: [0, 0, 0, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 0, 2, 2, 4],
        fingers: [0, 0, 0, 1, 1, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 1, 2, 2, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [2, 0, 1, 1, 1, 1],
        fingers: [2, 0, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj13',
    positions: [
      {
        frets: [-1, 0, 2, 1, 2, 2],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [-1, 0, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm6',
    positions: [
      {
        frets: [-1, 0, 2, 2, 1, 2],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 2, 2],
        fingers: [2, 0, 1, 3, 3, 4],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [1, 3, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 1, 3, 1, 2],
        fingers: [0, 1, 1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm7',
    positions: [
      {
        frets: [-1, 0, 2, 0, 1, 0],
        fingers: [0, 0, 2, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 0, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 1, 3, 2, 2],
        fingers: [0, 1, 1, 4, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, 0, 1, 0, 1, -1],
        fingers: [0, 0, 2, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, -1, 2, 2, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 3, 1, 4, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [2],
        baseFret: 7
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm9',
    positions: [
      {
        frets: [-1, 0, 2, 4, 1, 3],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 0, 2, 0, 1, 0],
        fingers: [1, 0, 3, 0, 2, 0],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 10
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm69',
    positions: [
      {
        frets: [-1, 0, 1, 2, 0, 0],
        fingers: [0, 0, 2, 4, 0, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 3, 1, 3, 3],
        fingers: [1, 2, 2, 1, 3, 4],
        barres: [1, 3],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 0, 1, 3, 1, 1],
        fingers: [2, 0, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 3, 1, 2, 3, 3],
        fingers: [0, 3, 1, 2, 4, 4],
        barres: [3],
        baseFret: 10
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm11',
    positions: [
      {
        frets: [-1, 0, 0, 0, 1, 0],
        fingers: [0, 0, 0, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'A',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, 0, 2, 1, 1, 0],
        fingers: [0, 0, 3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 1, 1, 3, 3, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 4, 2, 1, 1, -1],
        fingers: [0, 4, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [-1, 0, 1, 1, 1, 4],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 3, 1, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [3, 1, 4, 2, 0, 0],
        fingers: [3, 1, 4, 2, 0, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [-1, 0, 3, 2, 0, 1],
        fingers: [0, 0, 3, 2, 0, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 0, 2, 2, 2, 1],
        fingers: [0, 0, 2, 3, 4, 1],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [-1, 0, 0, 1, 1, 0],
        fingers: [0, 0, 0, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 0, 1, 1, 3, 2],
        fingers: [0, 0, 1, 1, 3, 2],
        barres: [1],
        baseFret: 7
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'A',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, 0, 2, 4, 2, 0],
        fingers: [0, 0, 1, 3, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, 2, 1, -1, 2, 2],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, 0, 2, 4, 1, 0],
        fingers: [0, 0, 2, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 3, 0, 2],
        fingers: [0, 0, 1, 3, 0, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '/C#',
    positions: [
      {
        frets: [-1, 3, 1, 1, 4, 4],
        fingers: [0, 3, 1, 1, 4, 4],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [-1, 3, 1, 1, 1, 4],
        fingers: [0, 3, 1, 1, 1, 4],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [-1, 1, 4, 3, 2, 2],
        fingers: [0, 1, 4, 3, 2, 2],
        barres: [2],
        baseFret: 4
      }
    ]
  },
  {
    key: 'A',
    suffix: '/E',
    positions: [
      {
        frets: [0, 0, 2, 2, 2, 0],
        fingers: [0, 0, 1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 2, 1, 1],
        fingers: [0, 3, 4, 2, 1, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 1, 1, 4],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'A',
    suffix: '/F',
    positions: [
      {
        frets: [1, 0, 2, 2, 2, 0],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 2, 0],
        fingers: [0, 0, 3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 2, 2, 2, -1],
        fingers: [1, 4, 2, 2, 2, 0],
        barres: [2],
        baseFret: 1
      }
    ]
  },
  {
    key: 'A',
    suffix: '/F#',
    positions: [
      {
        frets: [2, 0, 2, 2, 2, 0],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 4, 4],
        fingers: [1, 3, 1, 1, 4, 4],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [1, 3, 1, 1, 1, 4],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'A',
    suffix: '/G',
    positions: [
      {
        frets: [3, 0, 2, 2, 2, 0],
        fingers: [4, 0, 1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 1, 1],
        fingers: [0, 0, 1, 2, 1, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [2, 3, 1, 1, 4, 4],
        fingers: [2, 3, 1, 1, 4, 4],
        baseFret: 2,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '/G#',
    positions: [
      {
        frets: [3, 3, 1, 1, 4, 4],
        fingers: [2, 3, 1, 1, 4, 4],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [3, 3, 1, 1, 1, 4],
        fingers: [2, 3, 1, 1, 1, 4],
        barres: [1],
        baseFret: 2
      },
      {
        frets: [-1, -1, 2, 2, 1, 1],
        fingers: [0, 0, 2, 3, 1, 1],
        barres: [1],
        baseFret: 5
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm/C',
    positions: [
      {
        frets: [-1, 3, 2, 2, 1, 0],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 1, 4, 4, 4],
        fingers: [0, 2, 1, 4, 4, 4],
        barres: [4],
        baseFret: 2
      },
      {
        frets: [-1, 2, 1, 1, 4, 4],
        fingers: [0, 2, 1, 1, 4, 4],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm/E',
    positions: [
      {
        frets: [0, 0, 2, 2, 1, 0],
        fingers: [0, 0, 2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 3, 2, 2, 1, 0],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 3, 3, 1, 1, 1],
        fingers: [0, 3, 4, 1, 1, 1],
        barres: [1],
        baseFret: 5
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm/F',
    positions: [
      {
        frets: [1, 0, 2, 2, 1, 0],
        fingers: [1, 0, 3, 4, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 0],
        fingers: [0, 0, 3, 2, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 2, 1, -1],
        fingers: [1, 4, 2, 3, 1, 0],
        barres: [1],
        baseFret: 1
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm/F#',
    positions: [
      {
        frets: [2, 0, 2, 2, 1, 0],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 4, 4, 4],
        fingers: [1, 2, 1, 4, 4, 4],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm/G',
    positions: [
      {
        frets: [-1, -1, 1, 1, 1, 1],
        fingers: [0, 0, 1, 1, 1, 1],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [3, 0, 2, 2, 1, 0],
        fingers: [4, 0, 2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 4, 4, 4],
        fingers: [2, 3, 1, 4, 4, 4],
        barres: [4],
        baseFret: 2
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm/G#',
    positions: [
      {
        frets: [3, 2, 1, 4, 4, 4],
        fingers: [3, 2, 1, 4, 4, 4],
        barres: [4],
        baseFret: 2
      },
      {
        frets: [3, 2, 1, 1, 4, 4],
        fingers: [3, 2, 1, 1, 4, 4],
        barres: [1],
        baseFret: 2
      }
    ]
  },
  {
    key: 'B',
    suffix: 'major',
    positions: [
      {
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 3, 1, 1, 1, -1],
        fingers: [4, 3, 1, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 3, 4, 3],
        fingers: [0, 1, 1, 2, 4, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'B',
    suffix: 'minor',
    positions: [
      {
        frets: [-1, 1, 3, 3, 2, 1],
        fingers: [0, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 3, 1, 1, 1],
        fingers: [0, 0, 3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 3, 4, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, 1, 2, 0, 2, 0],
        fingers: [0, 1, 2, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 3, 2, 3],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 2, 1, 2],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 1, 1, 3, 4, -1],
        fingers: [3, 1, 1, 2, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 4, 1, 1, 2, 4],
        fingers: [0, 3, 1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: 'sus4',
    positions: [
      {
        frets: [-1, 1, 3, 3, 4, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 1, 2, 4],
        fingers: [0, 0, 1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 3, 3, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 3, 4, 4],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'B',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [4, 4, 1, 3, -1, -1],
        fingers: [3, 4, 1, 2, 0, 0],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, 1, 3, 1, 4, 1],
        fingers: [0, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 3, 4, 4],
        fingers: [0, 0, 1, 1, 2, 2],
        barres: [3, 4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 3, 2, 4],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, 1, 2, 3, 3, 0],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 0, 3, 1, 0],
        fingers: [2, 3, 0, 4, 1, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 0, 2, -1, 1],
        fingers: [1, 3, 0, 4, 0, 2],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 4, 3],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, 1, 4, 3, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [-1, -1, 3, 2, 2, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 2, 1, 1, -1],
        fingers: [0, 0, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'B',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '6',
    positions: [
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 3],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [2, 1, 0, 0, 2, 2],
        fingers: [2, 1, 0, 0, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, -1, 2, 3, 1],
        fingers: [1, 3, 0, 2, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 4, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '69',
    positions: [
      {
        frets: [-1, 1, 0, 0, 1, 1],
        fingers: [0, 1, 0, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'B',
    suffix: '7',
    positions: [
      {
        frets: [-1, 1, 3, 1, 3, 1],
        fingers: [0, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 3, 2, 3],
        fingers: [0, 1, 1, 3, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 3, 2, 3, 1, -1],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '7b5',
    positions: [
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, -1, 2, 3, 1, 0],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 3, 2, 3, 1, 0],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'aug7',
    positions: [
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, -1, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, -1, 3],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '9',
    positions: [
      {
        frets: [-1, 1, 0, 1, 1, 1],
        fingers: [0, 1, 0, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 2, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 2, 1, 2, 2, 2],
        fingers: [0, 2, 1, 3, 3, 3],
        barres: [2],
        baseFret: 12
      }
    ]
  },
  {
    key: 'B',
    suffix: '9b5',
    positions: [
      {
        frets: [-1, 1, 0, 1, 1, 0],
        fingers: [0, 1, 0, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, -1, 0, 2, 2, 1],
        fingers: [4, 0, 0, 2, 3, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, 2, 1, 2, 2, 0],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'aug9',
    positions: [
      {
        frets: [-1, 1, 0, 1, 1, 2],
        fingers: [0, 1, 0, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 4, 3, 3, 4],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 2, 1, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, -1, 1, 2, 2, 3],
        fingers: [1, 0, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'B',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, 1, 0, 1, 0, 1],
        fingers: [0, 1, 0, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, -1, 1, 2, 1, 2],
        fingers: [1, 0, 1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'B',
    suffix: '7#9',
    positions: [
      {
        frets: [-1, 1, 0, 1, 2, -1],
        fingers: [0, 1, 0, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2, 4, 4],
        fingers: [1, 3, 1, 2, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 2, 1, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '11',
    positions: [
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 2, 0, 2, 1, 1],
        fingers: [4, 2, 0, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 1, 2, 3],
        fingers: [1, 1, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'B',
    suffix: '9#11',
    positions: [
      {
        frets: [-1, 1, 0, 1, 1, 0],
        fingers: [0, 1, 0, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 1, 1, -1],
        fingers: [2, 1, 3, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'B',
    suffix: '13',
    positions: [
      {
        frets: [-1, 1, 0, 1, 3, 3],
        fingers: [0, 1, 0, 2, 4, 4],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [3, 2, 0, 0, 1, 1],
        fingers: [3, 2, 0, 0, 1, 1],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 2, 3, 3],
        fingers: [1, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 2, 1, 2, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [4],
        baseFret: 12
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj7',
    positions: [
      {
        frets: [-1, 1, 3, 2, 3, 1],
        fingers: [0, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 1, 1, 3],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 2, 2, 1, 1],
        fingers: [1, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 3, 3, 3],
        fingers: [0, 1, 1, 3, 3, 3],
        barres: [1, 3],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 2, 2, -1, 0],
        fingers: [1, 2, 3, 4, 0, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [-1, 1, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 1, 1, 3],
        fingers: [0, 0, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, -1, 2, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj9',
    positions: [
      {
        frets: [1, 1, 0, 2, 1, -1],
        fingers: [1, 1, 0, 3, 2, 0],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [4, 1, 1, 1, 1, 3],
        fingers: [4, 1, 1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 1, 3, 1, 2, -1],
        fingers: [2, 1, 4, 1, 3, 0],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 2, 1, 3],
        fingers: [1, 3, 2, 2, 1, 4],
        barres: [1, 2],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj11',
    positions: [
      {
        frets: [-1, 1, 1, 2, 3, 1],
        fingers: [0, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, -1, 0, 2, 1, 2],
        fingers: [4, 0, 0, 2, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 2, 2, 1, 1],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 1, 3, 3],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj13',
    positions: [
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 2, 2, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm6',
    positions: [
      {
        frets: [-1, 1, 3, -1, 2, 3],
        fingers: [0, 1, 3, 0, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 1, 4, -1],
        fingers: [0, 2, 3, 1, 4, 0],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 2, 2],
        fingers: [2, 0, 1, 3, 3, 4],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm7',
    positions: [
      {
        frets: [-1, 1, 3, 1, 2, 1],
        fingers: [0, 1, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 3, 2, 4],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 3, 2, 2],
        fingers: [0, 1, 1, 4, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 2, 3, 2, 4],
        fingers: [0, 0, 1, 2, 1, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, -1, 2, 2, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [2],
        baseFret: 8
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm9',
    positions: [
      {
        frets: [-1, -1, 2, 4, 1, 3],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 1, -1, 2, 3, 1],
        fingers: [3, 1, 0, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 3, 1, 3, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm69',
    positions: [
      {
        frets: [2, -1, 1, 2, 2, 4],
        fingers: [2, 0, 1, 3, 3, 4],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [1, -1, 3, 1, 3, 3],
        fingers: [1, 0, 2, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, -1, 1, 3, 1, 1],
        fingers: [2, 0, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 3, 1, 2, 3, -1],
        fingers: [0, 3, 1, 2, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm11',
    positions: [
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'B',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, 1, 3, 2, 2, 1],
        fingers: [0, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 3, 3, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 4, 2, 1, 1, -1],
        fingers: [0, 4, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [-1, 1, 2, 2, 2, 0],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, -1, 2, 1, 1],
        fingers: [2, 4, 0, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 3, 1, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [3, 1, -1, 2, 3, 2],
        fingers: [3, 1, 0, 2, 4, 2],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [3, 1, 4, 2, -1, -1],
        fingers: [3, 1, 4, 2, 0, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 3, 3, 2],
        fingers: [1, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'B',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [-1, 1, 1, 2, 2, 1],
        fingers: [0, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 1, 1, 1, 3, 2],
        fingers: [0, 1, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'B',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, 1, 0, 3, 1, 1],
        fingers: [0, 1, 0, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 2, 1, -1, 2],
        fingers: [0, 0, 2, 1, 0, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, 4, 3, 3, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, -1, 2, 3, -1],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 4,
        barres: []
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'major',
    positions: [
      {
        frets: [2, 2, 4, 4, 4, 2],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 1, 1, 4],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 3, 4, 3],
        fingers: [0, 1, 1, 2, 4, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'minor',
    positions: [
      {
        frets: [2, 2, 4, 4, 3, 2],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 3, 4, 2],
        fingers: [0, 0, 1, 3, 4, 2],
        baseFret: 9,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 3, 1],
        fingers: [0, 0, 3, 2, 4, 1],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, 2, 0, -1, 0, 1],
        fingers: [0, 3, 0, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 4, 3, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, -1, 2],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, 2, 3, 1, 3, 1],
        fingers: [0, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 3, 4, 3, 4],
        fingers: [0, 0, 1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 1, -1],
        fingers: [3, 0, 1, 4, 2, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: 'sus2',
    positions: [
      {
        frets: [2, 2, 4, 4, 2, 2],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, -1, -1, 1, 2, 2],
        fingers: [2, 0, 0, 1, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 1, 3, 4, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [-1, 4, 1, 1, 2, 4],
        fingers: [0, 3, 1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: 'sus4',
    positions: [
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [-1, -1, 1, 1, 2, 4],
        fingers: [0, 0, 1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 3, 4, 4],
        fingers: [0, 1, 1, 3, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [-1, 2, 2, 4, 2, 2],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 4, 1, 3, -1, -1],
        fingers: [3, 4, 1, 2, 0, 0],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, 2, 2, 2, 0, 0],
        fingers: [0, 1, 2, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, 2, 3, 4, 4, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 4, 3, 1, 2],
        fingers: [0, 0, 4, 3, 1, 2],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 3, 2, 0, -1],
        fingers: [1, 2, 4, 3, 0, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 0, 3],
        fingers: [0, 0, 1, 2, 0, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, 2, 1, 0, 0, -1],
        fingers: [0, 2, 1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 3, 2, 2, 1],
        fingers: [0, 0, 4, 2, 3, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, -1, 3, 2, 2, -1],
        fingers: [1, 0, 4, 2, 3, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 3, 2, 1, 1, 0],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'H',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 2, 4, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '6',
    positions: [
      {
        frets: [-1, 2, 1, 1, 0, -1],
        fingers: [0, 3, 1, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 4, 4, 4, 4],
        fingers: [0, 1, 3, 3, 3, 3],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [1, -1, 3, 2, 3, -1],
        fingers: [1, 0, 3, 2, 4, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 3, 1, 3],
        fingers: [0, 0, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: '69',
    positions: [
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [-1, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [-1, 4, 1, 3, 2, 1],
        fingers: [0, 4, 1, 3, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: '7',
    positions: [
      {
        frets: [-1, 2, 1, 2, 0, 2],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 4, 2, 4, 2],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 1, 1, 2],
        fingers: [0, 0, 1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: '7b5',
    positions: [
      {
        frets: [-1, 2, 1, 2, 0, 1],
        fingers: [0, 3, 1, 4, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 3, 2, 4, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'aug7',
    positions: [
      {
        frets: [-1, 2, 1, 2, 0, 3],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 0, 2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, -1, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 4, 2, 3],
        fingers: [0, 0, 1, 4, 2, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 2],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [4, 1, 1, 3, 1, 2],
        fingers: [4, 1, 1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 2, 1, 3, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '9b5',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 1, 2, -1, 3],
        fingers: [1, 2, 1, 3, 0, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 13
      }
    ]
  },
  {
    key: 'H',
    suffix: 'aug9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 1, 2, 1, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 1, 2, 2, 1],
        fingers: [1, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, -1, 1, 2, 1, 2],
        fingers: [1, 0, 1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 2, 1, 3, 1],
        fingers: [0, 0, 2, 1, 3, 1],
        barres: [1],
        baseFret: 8
      }
    ]
  },
  {
    key: 'H',
    suffix: '7#9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 0, 3, 0, 1],
        fingers: [3, 2, 0, 4, 0, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 2, 4, 4],
        fingers: [1, 3, 1, 2, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 2, 1, 3, 3],
        fingers: [0, 0, 2, 1, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '11',
    positions: [
      {
        frets: [-1, 2, 1, 2, 0, 0],
        fingers: [0, 2, 1, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 2, 2, 4, 2],
        fingers: [1, 1, 1, 1, 3, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 2, 1, 1],
        fingers: [1, 1, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 1, 1, 1, 2, 3],
        fingers: [1, 1, 1, 1, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: '9#11',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, 2, 3, 2, 4, 2],
        fingers: [0, 1, 2, 1, 3, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 2, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '13',
    positions: [
      {
        frets: [-1, 2, 1, 2, 4, 4],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [2, 2, 2, 2, 4, 4],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 1, 3, 1, 1, 2],
        fingers: [4, 1, 3, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 2, 3, 3],
        fingers: [1, 1, 1, 2, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj7',
    positions: [
      {
        frets: [2, 2, 4, 3, 4, 2],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 1, 1, 3],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 2, 2, 1, 1],
        fingers: [1, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 3, 3, 3],
        fingers: [0, 1, 1, 3, 3, 3],
        barres: [1, 3],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [-1, 2, 3, 3, 4, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 2, 2, 0, -1],
        fingers: [1, 2, 3, 4, 0, 0],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, -1, 1, 2, 3, 3],
        fingers: [0, 0, 1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [-1, 2, 1, 3, 0, 3],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 4, 2, 3, -1],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 1, 3, 0, 3, -1],
        fingers: [2, 1, 3, 0, 3, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj9',
    positions: [
      {
        frets: [2, 2, 1, 3, 2, -1],
        fingers: [2, 2, 1, 4, 3, 0],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [-1, -1, 1, 3, 1, 3],
        fingers: [0, 0, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 1, 3, 1, 2, -1],
        fingers: [2, 1, 4, 1, 3, 0],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [-1, -1, 2, 1, 4, 2],
        fingers: [0, 0, 2, 1, 4, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj11',
    positions: [
      {
        frets: [-1, 2, 1, 3, 0, 0],
        fingers: [0, 2, 1, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 2, 3, 4, 2],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 2, 2, 1, 3],
        fingers: [1, 1, 2, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 1, 3, 3],
        fingers: [0, 0, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj13',
    positions: [
      {
        frets: [-1, 2, 2, 3, 4, 4],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 2, 2, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 4, 3, 3, 1, 1],
        fingers: [0, 4, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm6',
    positions: [
      {
        frets: [2, 2, 0, 1, 0, 2],
        fingers: [2, 3, 0, 1, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, -1, 4, 4, 3, 4],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, -1, 1, 2, 2, -1],
        fingers: [2, 0, 1, 3, 4, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm7',
    positions: [
      {
        frets: [2, 2, 4, 2, 3, 2],
        fingers: [1, 1, 3, 1, 2, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 3, 2, 2],
        fingers: [0, 1, 1, 4, 2, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, 2, 3, 2, 3, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, -1, 2, 2, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 3, 1, 4, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 2, 2, 2],
        fingers: [0, 0, 1, 2, 2, 2],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm9',
    positions: [
      {
        frets: [-1, 2, 0, 2, 2, 2],
        fingers: [0, 1, 0, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 2, 2, 2, 1, 3],
        fingers: [0, 2, 3, 3, 1, 4],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 2, 2, 3, 1],
        fingers: [1, 3, 2, 2, 4, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm69',
    positions: [
      {
        frets: [-1, 2, 0, 1, 2, 2],
        fingers: [0, 2, 0, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [-1, 1, 2, 2, 3, 3],
        fingers: [0, 1, 2, 2, 3, 3],
        barres: [2, 3],
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 1, 3, 3],
        fingers: [1, 2, 2, 1, 3, 4],
        barres: [1, 3],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, -1, 1, 3, 1, 1],
        fingers: [2, 0, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm11',
    positions: [
      {
        frets: [-1, 2, 0, 2, 2, 0],
        fingers: [0, 1, 0, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 1, 2, 2],
        fingers: [0, 0, 1, 1, 2, 3],
        barres: [1, 2],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, 2, 0, 3, 0, 2],
        fingers: [0, 1, 0, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 4, 3, 3, 2],
        fingers: [1, 1, 4, 2, 3, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 3, 3, 2],
        fingers: [0, 1, 1, 3, 4, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [-1, 2, 3, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, -1, 2, 1, 1],
        fingers: [2, 4, 0, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 3, 1, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, -1, 1, 2, 3, 2],
        fingers: [0, 0, 1, 2, 4, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [-1, 2, 0, 3, 2, 2],
        fingers: [0, 1, 0, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 4, 2, 0, -1],
        fingers: [3, 1, 4, 2, 0, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 3, 1, 4, 3, -1],
        fingers: [0, 3, 1, 4, 3, 0],
        baseFret: 12,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [-1, 2, 0, 3, 2, 0],
        fingers: [0, 1, 0, 3, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 2, 3, 3, 2],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 1, 1, 1, 3, 2],
        fingers: [0, 1, 1, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'H',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, 2, 1, -1, 2, 2],
        fingers: [0, 2, 1, 0, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, -1, 1, 2, 2],
        fingers: [3, 1, 0, 2, 4, 4],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, 4, 3, 3, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 1, 0, 2, 3, -1],
        fingers: [3, 1, 0, 2, 4, 0],
        baseFret: 5,
        barres: []
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 11,
        barres: []
      }
    ]
  }
]

export default chords
