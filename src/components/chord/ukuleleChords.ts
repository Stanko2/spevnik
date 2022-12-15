import { ChordArray, Chord } from './chords'

export const ukuleleChords: Chord[] = [
  {
    key: 'A',
    suffix: 'major',
    positions: [
      {
        frets: [2, 1, 0, 0],
        fingers: [2, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'minor',
    positions: [
      {
        frets: [2, 0, 0, 0],
        fingers: [2, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 0, 0, 3],
        fingers: [2, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 4, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 2, 3, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'dim',
    positions: [
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'dim7',
    positions: [
      {
        frets: [2, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'sus4',
    positions: [
      {
        frets: [2, 2, 0, 0],
        fingers: [2, 3, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 1, 2, 2],
        fingers: [4, 1, 2, 2],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [4, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '7sus4',
    positions: [
      {
        frets: [0, 2, 0, 0],
        fingers: [0, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'alt',
    positions: [
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'A',
    suffix: 'aug',
    positions: [
      {
        frets: [2, 1, 1, 0],
        fingers: [3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      }
    ]
  },
  {
    key: 'A',
    suffix: '6',
    positions: [
      {
        frets: [2, 4, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '69',
    positions: [
      {
        frets: [4, 4, 2, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '7',
    positions: [
      {
        frets: [0, 1, 0, 0],
        fingers: [0, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: '7b5',
    positions: [
      {
        frets: [2, 3, 3, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'aug7',
    positions: [
      {
        frets: [0, 1, 1, 0],
        fingers: [0, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: '9',
    positions: [
      {
        frets: [0, 1, 0, 2],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 3, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: '9b5',
    positions: [
      {
        frets: [4, 3, 3, 4],
        fingers: [2, 1, 1, 3],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'aug9',
    positions: [
      {
        frets: [0, 1, 1, 2],
        fingers: [0, 1, 1, 2],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '7b9',
    positions: [
      {
        frets: [0, 1, 0, 1],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '7b9#5',
    positions: [
      {
        frets: [0, 1, 1, 1],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '7#9',
    positions: [
      {
        frets: [0, 1, 0, 3],
        fingers: [0, 1, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '11',
    positions: [
      {
        frets: [4, 2, 3, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 3, 3, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '9#11',
    positions: [
      {
        frets: [4, 3, 3, 4],
        fingers: [2, 1, 1, 3],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '13',
    positions: [
      {
        frets: [0, 1, 2, 2],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: '13b9',
    positions: [
      {
        frets: [0, 1, 2, 1],
        fingers: [0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: '13b5b9',
    positions: [
      {
        frets: [1, 4, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 2, 1, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [0, 2, 3, 1],
        fingers: [0, 2, 3, 1],
        baseFret: 9,
        barres: []
      },
      {
        frets: [2, 1, 2, 1],
        fingers: [3, 1, 4, 2],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'b13b9',
    positions: [
      {
        frets: [0, 1, 1, 1],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'b13#9',
    positions: [
      {
        frets: [0, 1, 1, 3],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj7',
    positions: [
      {
        frets: [1, 1, 0, 0],
        fingers: [1, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [2, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [1, 1, 1, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
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
        frets: [1, 1, 0, 2],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 4, 4],
        fingers: [1, 1, 1, 1],
        barres: [4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj11',
    positions: [
      {
        frets: [4, 2, 4, 4],
        fingers: [2, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'maj13',
    positions: [
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm6',
    positions: [
      {
        frets: [2, 4, 2, 3],
        fingers: [1, 3, 1, 2],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm7',
    positions: [
      {
        frets: [0, 0, 0, 0],
        fingers: [0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 3, 3],
        fingers: [1, 3, 2, 2],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 8
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm7b5',
    positions: [
      {
        frets: [2, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm9',
    positions: [
      {
        frets: [0, 0, 0, 2],
        fingers: [0, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 4, 3, 3],
        fingers: [2, 2, 1, 1],
        barres: [3, 4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm69',
    positions: [
      {
        frets: [4, 4, 2, 3],
        fingers: [3, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm9b5',
    positions: [
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 2
      },
      {
        frets: [4, 3, 3, 3],
        fingers: [2, 1, 1, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'A',
    suffix: 'm11',
    positions: [
      {
        frets: [4, 2, 3, 3],
        fingers: [3, 1, 2, 2],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      }
    ]
  },
  {
    key: 'A',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [1, 0, 0, 0],
        fingers: [1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 8
      }
    ]
  },
  {
    key: 'A',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [2, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [1, 0, 0, 2],
        fingers: [1, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 4, 4, 3],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'A',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [4, 2, 4, 3],
        fingers: [3, 1, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      }
    ]
  },
  {
    key: 'A',
    suffix: 'add9',
    positions: [
      {
        frets: [2, 1, 0, 2],
        fingers: [2, 1, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'A',
    suffix: 'madd9',
    positions: [
      {
        frets: [2, 0, 0, 2],
        fingers: [2, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 3
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'major',
    positions: [
      {
        frets: [1, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 2, 1],
        fingers: [3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'minor',
    positions: [
      {
        frets: [1, 3, 4, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 4, 2],
        fingers: [3, 2, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 4],
        fingers: [2, 1, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 3, 2, 1],
        fingers: [3, 4, 2, 1],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'dim',
    positions: [
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 4, 2],
        fingers: [3, 1, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'dim7',
    positions: [
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 8
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'sus4',
    positions: [
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 1, 2, 2],
        fingers: [4, 1, 2, 2],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [4, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '7sus4',
    positions: [
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'alt',
    positions: [
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 4, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'aug',
    positions: [
      {
        frets: [1, 0, 0, 3],
        fingers: [1, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 2, 1],
        fingers: [3, 2, 2, 1],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '6',
    positions: [
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '69',
    positions: [
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '7',
    positions: [
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '7b5',
    positions: [
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'aug7',
    positions: [
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '9',
    positions: [
      {
        frets: [3, 3, 2, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '9b5',
    positions: [
      {
        frets: [3, 2, 2, 3],
        fingers: [2, 1, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'aug9',
    positions: [
      {
        frets: [3, 4, 2, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '7b9',
    positions: [
      {
        frets: [2, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '7b9#5',
    positions: [
      {
        frets: [2, 4, 2, 3],
        fingers: [1, 3, 1, 2],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '7#9',
    positions: [
      {
        frets: [4, 3, 2, 3],
        fingers: [4, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '11',
    positions: [
      {
        frets: [3, 1, 2, 3],
        fingers: [3, 1, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 3, 3, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '9#11',
    positions: [
      {
        frets: [3, 2, 2, 3],
        fingers: [2, 1, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '13',
    positions: [
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '13b9',
    positions: [
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: '13b5b9',
    positions: [
      {
        frets: [1, 4, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 2, 1, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 1, 2, 1],
        fingers: [3, 1, 4, 2],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'b13b9',
    positions: [
      {
        frets: [2, 4, 2, 3],
        fingers: [1, 3, 1, 2],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'b13#9',
    positions: [
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [4, 4, 2, 3],
        fingers: [3, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'maj7',
    positions: [
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'maj9',
    positions: [
      {
        frets: [3, 3, 3, 3],
        fingers: [1, 1, 1, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'maj11',
    positions: [
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 1, 3, 4],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'maj13',
    positions: [
      {
        frets: [0, 0, 1, 1],
        fingers: [0, 0, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'm6',
    positions: [
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'm7',
    positions: [
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'm7b5',
    positions: [
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'm9',
    positions: [
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 2, 2],
        fingers: [2, 2, 1, 1],
        barres: [2, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'm69',
    positions: [
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'm9b5',
    positions: [
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [3, 2, 2, 2],
        fingers: [2, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'm11',
    positions: [
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 3, 2],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'add9',
    positions: [
      {
        frets: [3, 3, 4, 3],
        fingers: [1, 1, 2, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Ab',
    suffix: 'madd9',
    positions: [
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 4, 2],
        fingers: [2, 2, 3, 1],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: 'major',
    positions: [
      {
        frets: [4, 3, 2, 2],
        fingers: [3, 2, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 1, 2, 1],
        fingers: [3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: 'minor',
    positions: [
      {
        frets: [4, 2, 2, 2],
        fingers: [3, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 1, 4],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 3, 4, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 2, 3, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'dim',
    positions: [
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'dim7',
    positions: [
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: 'sus4',
    positions: [
      {
        frets: [4, 4, 2, 2],
        fingers: [3, 4, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 1, 2, 2],
        fingers: [4, 1, 2, 2],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [4, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '7sus4',
    positions: [
      {
        frets: [2, 4, 2, 2],
        fingers: [1, 3, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: 'alt',
    positions: [
      {
        frets: [4, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'aug',
    positions: [
      {
        frets: [0, 3, 3, 2],
        fingers: [0, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 3, 2],
        fingers: [3, 2, 2, 1],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '6',
    positions: [
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: '69',
    positions: [
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
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
        frets: [2, 3, 2, 2],
        fingers: [1, 2, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: '7b5',
    positions: [
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'aug7',
    positions: [
      {
        frets: [2, 3, 3, 2],
        fingers: [1, 2, 2, 1],
        barres: [2, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: '9',
    positions: [
      {
        frets: [2, 3, 2, 4],
        fingers: [1, 2, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: '9b5',
    positions: [
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'aug9',
    positions: [
      {
        frets: [2, 3, 3, 4],
        fingers: [1, 2, 2, 3],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '7b9',
    positions: [
      {
        frets: [2, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '7b9#5',
    positions: [
      {
        frets: [2, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        baseFret: 8
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '7#9',
    positions: [
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
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
        frets: [2, 3, 0, 4],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 2, 3],
        fingers: [3, 1, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 4, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 3, 3, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '9#11',
    positions: [
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '13',
    positions: [
      {
        frets: [2, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: '13b9',
    positions: [
      {
        frets: [2, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'H',
    suffix: '13b5b9',
    positions: [
      {
        frets: [1, 0, 1, 0],
        fingers: [1, 0, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 2],
        fingers: [1, 4, 3, 2],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 4, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 2, 1, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'b13b9',
    positions: [
      {
        frets: [2, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'b13#9',
    positions: [
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj7',
    positions: [
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 2, 2],
        fingers: [2, 3, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 3, 2],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj9',
    positions: [
      {
        frets: [3, 3, 2, 4],
        fingers: [2, 2, 1, 3],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj11',
    positions: [
      {
        frets: [3, 3, 0, 4],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'maj13',
    positions: [
      {
        frets: [3, 3, 4, 4],
        fingers: [1, 1, 2, 2],
        barres: [3, 4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm6',
    positions: [
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm7',
    positions: [
      {
        frets: [2, 2, 2, 2],
        fingers: [1, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm7b5',
    positions: [
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm9',
    positions: [
      {
        frets: [2, 2, 2, 4],
        fingers: [1, 1, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 2, 1, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm69',
    positions: [
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm9b5',
    positions: [
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'm11',
    positions: [
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [3, 2, 2, 2],
        fingers: [2, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [3, 2, 2, 4],
        fingers: [2, 1, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'H',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'H',
    suffix: 'add9',
    positions: [
      {
        frets: [4, 3, 2, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        baseFret: 6
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
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
        frets: [2, 0, 0, 2],
        fingers: [2, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 3
      }
    ]
  },
  {
    key: 'B',
    suffix: 'major',
    positions: [
      {
        frets: [3, 2, 1, 1],
        fingers: [3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 1, 2, 1],
        fingers: [3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: 'minor',
    positions: [
      {
        frets: [3, 1, 1, 1],
        fingers: [3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 1, 4],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 2, 3, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'dim',
    positions: [
      {
        frets: [3, 1, 0, 1],
        fingers: [3, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'dim7',
    positions: [
      {
        frets: [0, 1, 0, 1],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        baseFret: 5
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        baseFret: 8
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: 'sus4',
    positions: [
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 1, 2, 2],
        fingers: [4, 1, 2, 2],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [4, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '7sus4',
    positions: [
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: 'alt',
    positions: [
      {
        frets: [3, 2, 0, 1],
        fingers: [3, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 4, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'B',
    suffix: 'aug',
    positions: [
      {
        frets: [3, 2, 2, 1],
        fingers: [3, 2, 2, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'B',
    suffix: '6',
    positions: [
      {
        frets: [0, 2, 1, 1],
        fingers: [0, 2, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: '69',
    positions: [
      {
        frets: [0, 2, 1, 3],
        fingers: [0, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: '7',
    positions: [
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: '7b5',
    positions: [
      {
        frets: [1, 2, 0, 1],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'aug7',
    positions: [
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: '9',
    positions: [
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: '9b5',
    positions: [
      {
        frets: [1, 2, 0, 3],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        baseFret: 7
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'aug9',
    positions: [
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '7b9',
    positions: [
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '7b9#5',
    positions: [
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '7#9',
    positions: [
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '11',
    positions: [
      {
        frets: [3, 1, 2, 3],
        fingers: [3, 1, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 4, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 3, 3, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '9#11',
    positions: [
      {
        frets: [1, 2, 0, 3],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '13',
    positions: [
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: '13b9',
    positions: [
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'B',
    suffix: '13b5b9',
    positions: [
      {
        frets: [1, 4, 3, 2],
        fingers: [1, 4, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, 1, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'b13b9',
    positions: [
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'b13#9',
    positions: [
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj7',
    positions: [
      {
        frets: [3, 2, 1, 0],
        fingers: [3, 2, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [3, 2, 0, 0],
        fingers: [3, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 0, 1],
        fingers: [2, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [3, 2, 2, 0],
        fingers: [3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj9',
    positions: [
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj11',
    positions: [
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'maj13',
    positions: [
      {
        frets: [2, 2, 3, 3],
        fingers: [1, 1, 2, 2],
        barres: [2, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm6',
    positions: [
      {
        frets: [0, 1, 1, 1],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm7',
    positions: [
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm7b5',
    positions: [
      {
        frets: [1, 1, 0, 1],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm9',
    positions: [
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 2, 1, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm69',
    positions: [
      {
        frets: [0, 1, 1, 3],
        fingers: [0, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm9b5',
    positions: [
      {
        frets: [1, 1, 0, 3],
        fingers: [1, 2, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'm11',
    positions: [
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'B',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [3, 1, 1, 0],
        fingers: [3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'B',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [2, 1, 0, 1],
        fingers: [3, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 0, 0],
        fingers: [3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'B',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'B',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'B',
    suffix: 'add9',
    positions: [
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
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
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 4
      }
    ]
  },
  {
    key: 'C',
    suffix: 'major',
    positions: [
      {
        frets: [0, 0, 0, 3],
        fingers: [0, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [0, 4, 3, 3],
        fingers: [0, 2, 1, 1],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [3, 2, 1, 1],
        fingers: [3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'minor',
    positions: [
      {
        frets: [0, 3, 3, 3],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 1, 1],
        fingers: [3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 1, 1, 4],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 4, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'dim',
    positions: [
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'dim7',
    positions: [
      {
        frets: [2, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'sus2',
    positions: [
      {
        frets: [0, 2, 3, 3],
        fingers: [0, 1, 2, 2],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'C',
    suffix: 'sus4',
    positions: [
      {
        frets: [0, 0, 1, 3],
        fingers: [0, 0, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '7sus4',
    positions: [
      {
        frets: [0, 0, 1, 1],
        fingers: [0, 0, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'alt',
    positions: [
      {
        frets: [4, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'aug',
    positions: [
      {
        frets: [1, 0, 0, 3],
        fingers: [1, 0, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 2, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      }
    ]
  },
  {
    key: 'C',
    suffix: '6',
    positions: [
      {
        frets: [0, 0, 0, 0],
        fingers: [0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: '69',
    positions: [
      {
        frets: [0, 2, 0, 0],
        fingers: [0, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C',
    suffix: '7',
    positions: [
      {
        frets: [0, 0, 0, 1],
        fingers: [0, 0, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 3],
        fingers: [1, 2, 1, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '7b5',
    positions: [
      {
        frets: [3, 4, 2, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'aug7',
    positions: [
      {
        frets: [1, 0, 0, 1],
        fingers: [1, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 4, 3],
        fingers: [1, 4, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '9',
    positions: [
      {
        frets: [0, 2, 0, 1],
        fingers: [0, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
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
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'aug9',
    positions: [
      {
        frets: [1, 2, 0, 1],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '7b9',
    positions: [
      {
        frets: [0, 1, 0, 1],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '7b9#5',
    positions: [
      {
        frets: [1, 1, 0, 1],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C',
    suffix: '7#9',
    positions: [
      {
        frets: [0, 3, 0, 1],
        fingers: [0, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'C',
    suffix: '11',
    positions: [
      {
        frets: [3, 1, 2, 3],
        fingers: [3, 1, 2, 4],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '9#11',
    positions: [
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '13',
    positions: [
      {
        frets: [2, 2, 0, 1],
        fingers: [2, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 0, 0],
        fingers: [3, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: '13b9',
    positions: [
      {
        frets: [2, 1, 0, 1],
        fingers: [3, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 0, 0],
        fingers: [3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'C',
    suffix: '13b5b9',
    positions: [
      {
        frets: [2, 1, 2, 1],
        fingers: [3, 1, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 2, 0],
        fingers: [3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 2],
        fingers: [1, 4, 3, 2],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'b13b9',
    positions: [
      {
        frets: [1, 1, 0, 1],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'C',
    suffix: 'b13#9',
    positions: [
      {
        frets: [1, 3, 0, 1],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj7',
    positions: [
      {
        frets: [0, 0, 0, 2],
        fingers: [0, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 4, 3, 3],
        fingers: [2, 3, 1, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [4, 4, 2, 3],
        fingers: [3, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [1, 0, 0, 2],
        fingers: [1, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 4, 4, 3],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj9',
    positions: [
      {
        frets: [0, 2, 0, 2],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj11',
    positions: [
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'maj13',
    positions: [
      {
        frets: [2, 2, 0, 2],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm6',
    positions: [
      {
        frets: [2, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm7',
    positions: [
      {
        frets: [3, 3, 3, 3],
        fingers: [1, 1, 1, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm7b5',
    positions: [
      {
        frets: [3, 3, 2, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm9',
    positions: [
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        baseFret: 3
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 2, 1, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm69',
    positions: [
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm9b5',
    positions: [
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 2
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'm11',
    positions: [
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
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
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 2
      },
      {
        frets: [4, 3, 3, 3],
        fingers: [2, 1, 1, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [4, 3, 2, 3],
        fingers: [4, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'C',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'C',
    suffix: 'add9',
    positions: [
      {
        frets: [0, 2, 0, 3],
        fingers: [0, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'C',
    suffix: 'madd9',
    positions: [
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 6
      }
    ]
  },
  {
    key: 'D',
    suffix: 'major',
    positions: [
      {
        frets: [2, 2, 2, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 2, 1, 1],
        fingers: [3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'minor',
    positions: [
      {
        frets: [2, 2, 1, 0],
        fingers: [2, 3, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 1, 1, 1],
        fingers: [3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 1, 1, 4],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      }
    ]
  },
  {
    key: 'D',
    suffix: 'dim',
    positions: [
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'dim7',
    positions: [
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 2
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 12
      }
    ]
  },
  {
    key: 'D',
    suffix: 'sus4',
    positions: [
      {
        frets: [0, 2, 3, 0],
        fingers: [0, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 3, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      }
    ]
  },
  {
    key: 'D',
    suffix: '7sus4',
    positions: [
      {
        frets: [2, 2, 3, 3],
        fingers: [1, 1, 2, 2],
        barres: [2, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'alt',
    positions: [
      {
        frets: [4, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'aug',
    positions: [
      {
        frets: [3, 2, 2, 1],
        fingers: [3, 2, 2, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'D',
    suffix: '6',
    positions: [
      {
        frets: [2, 2, 2, 2],
        fingers: [1, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: '69',
    positions: [
      {
        frets: [2, 4, 2, 2],
        fingers: [1, 3, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D',
    suffix: '7',
    positions: [
      {
        frets: [2, 2, 2, 3],
        fingers: [1, 1, 1, 2],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '7b5',
    positions: [
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'aug7',
    positions: [
      {
        frets: [3, 2, 2, 3],
        fingers: [2, 1, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
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
        frets: [2, 4, 2, 3],
        fingers: [1, 3, 1, 2],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '9b5',
    positions: [
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D',
    suffix: 'aug9',
    positions: [
      {
        frets: [3, 4, 2, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '7b9',
    positions: [
      {
        frets: [2, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '7b9#5',
    positions: [
      {
        frets: [3, 3, 2, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D',
    suffix: '7#9',
    positions: [
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'D',
    suffix: '11',
    positions: [
      {
        frets: [0, 4, 2, 3],
        fingers: [0, 3, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 2, 3],
        fingers: [3, 1, 2, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '9#11',
    positions: [
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D',
    suffix: '13',
    positions: [
      {
        frets: [4, 4, 2, 3],
        fingers: [3, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: '13b9',
    positions: [
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [4, 3, 2, 3],
        fingers: [4, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'D',
    suffix: '13b5b9',
    positions: [
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 3, 4, 3],
        fingers: [3, 1, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 2],
        fingers: [1, 4, 3, 2],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'b13b9',
    positions: [
      {
        frets: [3, 3, 2, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'D',
    suffix: 'b13#9',
    positions: [
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj7',
    positions: [
      {
        frets: [2, 2, 2, 4],
        fingers: [1, 1, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [3, 2, 2, 4],
        fingers: [2, 1, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj9',
    positions: [
      {
        frets: [2, 4, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj11',
    positions: [
      {
        frets: [0, 4, 2, 4],
        fingers: [0, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'maj13',
    positions: [
      {
        frets: [4, 4, 2, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm6',
    positions: [
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm7',
    positions: [
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm7b5',
    positions: [
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm9',
    positions: [
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 2, 1, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm69',
    positions: [
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm9b5',
    positions: [
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'D',
    suffix: 'm11',
    positions: [
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
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
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'D',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
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
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'D',
    suffix: 'madd9',
    positions: [
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 8
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'major',
    positions: [
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 2, 1, 1],
        fingers: [3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 1, 2, 1],
        fingers: [3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'minor',
    positions: [
      {
        frets: [1, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 1, 1, 4],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 4, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'dim',
    positions: [
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'dim7',
    positions: [
      {
        frets: [0, 1, 0, 1],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'sus4',
    positions: [
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '7sus4',
    positions: [
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'alt',
    positions: [
      {
        frets: [0, 1, 1, 4],
        fingers: [0, 1, 1, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [4, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'aug',
    positions: [
      {
        frets: [2, 1, 1, 0],
        fingers: [3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 2, 2, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '6',
    positions: [
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'Db',
    suffix: '69',
    positions: [
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Db',
    suffix: '7',
    positions: [
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '7b5',
    positions: [
      {
        frets: [0, 1, 1, 2],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'aug7',
    positions: [
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '9',
    positions: [
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '9b5',
    positions: [
      {
        frets: [0, 3, 1, 2],
        fingers: [0, 3, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'aug9',
    positions: [
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 1, 0],
        fingers: [3, 2, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '7b9',
    positions: [
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '7b9#5',
    positions: [
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Db',
    suffix: '7#9',
    positions: [
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'Db',
    suffix: '11',
    positions: [
      {
        frets: [3, 1, 2, 3],
        fingers: [3, 1, 2, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '9#11',
    positions: [
      {
        frets: [0, 3, 1, 2],
        fingers: [0, 3, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Db',
    suffix: '13',
    positions: [
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: '13b9',
    positions: [
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'Db',
    suffix: '13b5b9',
    positions: [
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 2],
        fingers: [1, 4, 3, 2],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'b13b9',
    positions: [
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'b13#9',
    positions: [
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'maj7',
    positions: [
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [0, 1, 1, 3],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'maj9',
    positions: [
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'maj11',
    positions: [
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'maj13',
    positions: [
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'm6',
    positions: [
      {
        frets: [1, 1, 0, 1],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'm7',
    positions: [
      {
        frets: [1, 1, 0, 2],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 4, 4],
        fingers: [1, 1, 1, 1],
        barres: [4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'm7b5',
    positions: [
      {
        frets: [0, 1, 0, 2],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 3, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'm9',
    positions: [
      {
        frets: [1, 3, 0, 2],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 2, 1, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'm69',
    positions: [
      {
        frets: [1, 3, 0, 1],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'm9b5',
    positions: [
      {
        frets: [0, 3, 0, 2],
        fingers: [0, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'm11',
    positions: [
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [1, 1, 0, 3],
        fingers: [1, 2, 0, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [0, 1, 0, 3],
        fingers: [0, 1, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [1, 3, 0, 3],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'add9',
    positions: [
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        baseFret: 8
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'Db',
    suffix: 'madd9',
    positions: [
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'major',
    positions: [
      {
        frets: [1, 4, 0, 2],
        fingers: [1, 4, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 4, 2],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, 1, 1],
        fingers: [4, 3, 1, 1],
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
        frets: [0, 4, 3, 2],
        fingers: [0, 3, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 3, 2],
        fingers: [3, 4, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 1, 1, 1],
        fingers: [3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: 'dim',
    positions: [
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 9,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: 'dim7',
    positions: [
      {
        frets: [0, 1, 0, 1],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'sus2',
    positions: [
      {
        frets: [4, 4, 2, 2],
        fingers: [3, 4, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 4
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: 'sus4',
    positions: [
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 3, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'E',
    suffix: '7sus4',
    positions: [
      {
        frets: [2, 2, 0, 2],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'alt',
    positions: [
      {
        frets: [4, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 9,
        barres: []
      },
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'aug',
    positions: [
      {
        frets: [1, 0, 0, 3],
        fingers: [1, 0, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 2, 1],
        fingers: [3, 2, 2, 1],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      }
    ]
  },
  {
    key: 'E',
    suffix: '6',
    positions: [
      {
        frets: [1, 1, 0, 2],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 4, 4],
        fingers: [1, 1, 1, 1],
        barres: [4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '69',
    positions: [
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '7',
    positions: [
      {
        frets: [1, 2, 0, 2],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '7b5',
    positions: [
      {
        frets: [1, 2, 0, 1],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'aug7',
    positions: [
      {
        frets: [1, 2, 0, 3],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        baseFret: 4
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        baseFret: 7
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '9',
    positions: [
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '9b5',
    positions: [
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: 'aug9',
    positions: [
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '7b9',
    positions: [
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '7b9#5',
    positions: [
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: '7#9',
    positions: [
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '11',
    positions: [
      {
        frets: [1, 2, 2, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '9#11',
    positions: [
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: '13',
    positions: [
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: '13b9',
    positions: [
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: '13b5b9',
    positions: [
      {
        frets: [3, 2, 1, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 1, 2, 1],
        fingers: [3, 1, 4, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 4, 3, 2],
        fingers: [1, 4, 3, 2],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'b13b9',
    positions: [
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: 'b13#9',
    positions: [
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj7',
    positions: [
      {
        frets: [1, 3, 0, 2],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 3, 1, 1],
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
        frets: [1, 3, 0, 1],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [1, 3, 0, 3],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj9',
    positions: [
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj11',
    positions: [
      {
        frets: [1, 3, 2, 0],
        fingers: [1, 3, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'maj13',
    positions: [
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
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
        frets: [0, 1, 0, 2],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 3, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm7',
    positions: [
      {
        frets: [0, 2, 0, 2],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm7b5',
    positions: [
      {
        frets: [0, 2, 0, 1],
        fingers: [0, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm9',
    positions: [
      {
        frets: [0, 2, 2, 2],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm69',
    positions: [
      {
        frets: [0, 1, 2, 2],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm9b5',
    positions: [
      {
        frets: [0, 2, 2, 1],
        fingers: [0, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'm11',
    positions: [
      {
        frets: [0, 2, 2, 0],
        fingers: [0, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 9
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [0, 3, 0, 2],
        fingers: [0, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
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
        frets: [0, 3, 0, 1],
        fingers: [0, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'E',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [0, 3, 2, 2],
        fingers: [0, 3, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'E',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [0, 3, 2, 0],
        fingers: [0, 3, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 9,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'E',
    suffix: 'add9',
    positions: [
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'E',
    suffix: 'madd9',
    positions: [
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 9,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'major',
    positions: [
      {
        frets: [0, 3, 3, 1],
        fingers: [0, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 3, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 2, 1, 1],
        fingers: [3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'minor',
    positions: [
      {
        frets: [3, 3, 2, 1],
        fingers: [3, 4, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 4, 4],
        fingers: [1, 3, 3, 3],
        barres: [4],
        baseFret: 3
      },
      {
        frets: [3, 1, 1, 1],
        fingers: [3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 1, 1, 4],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'dim',
    positions: [
      {
        frets: [2, 3, 2, 0],
        fingers: [1, 3, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'dim7',
    positions: [
      {
        frets: [2, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'sus2',
    positions: [
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 3
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'sus4',
    positions: [
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 3, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '7sus4',
    positions: [
      {
        frets: [3, 3, 4, 4],
        fingers: [1, 1, 2, 2],
        barres: [3, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'alt',
    positions: [
      {
        frets: [4, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'aug',
    positions: [
      {
        frets: [0, 3, 3, 2],
        fingers: [0, 3, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 3, 2],
        fingers: [3, 2, 2, 1],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '6',
    positions: [
      {
        frets: [3, 3, 3, 3],
        fingers: [1, 1, 1, 1],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '69',
    positions: [
      {
        frets: [0, 0, 1, 1],
        fingers: [0, 0, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '7',
    positions: [
      {
        frets: [3, 3, 3, 4],
        fingers: [1, 1, 1, 2],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '7b5',
    positions: [
      {
        frets: [2, 3, 3, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'aug7',
    positions: [
      {
        frets: [4, 3, 3, 4],
        fingers: [2, 1, 1, 3],
        barres: [3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '9',
    positions: [
      {
        frets: [0, 1, 1, 1],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '9b5',
    positions: [
      {
        frets: [0, 1, 1, 0],
        fingers: [0, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'aug9',
    positions: [
      {
        frets: [0, 1, 1, 2],
        fingers: [0, 1, 1, 2],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '7b9',
    positions: [
      {
        frets: [0, 1, 0, 1],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '7b9#5',
    positions: [
      {
        frets: [0, 1, 0, 2],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 3, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '7#9',
    positions: [
      {
        frets: [0, 1, 2, 1],
        fingers: [0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '11',
    positions: [
      {
        frets: [3, 1, 2, 3],
        fingers: [3, 1, 2, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '9#11',
    positions: [
      {
        frets: [0, 1, 1, 0],
        fingers: [0, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '13',
    positions: [
      {
        frets: [0, 1, 1, 3],
        fingers: [0, 1, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '13b9',
    positions: [
      {
        frets: [0, 1, 0, 3],
        fingers: [0, 1, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: '13b5b9',
    positions: [
      {
        frets: [2, 1, 0, 3],
        fingers: [2, 1, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 1],
        fingers: [3, 1, 4, 2],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 3, 2],
        fingers: [1, 4, 3, 2],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'b13b9',
    positions: [
      {
        frets: [0, 1, 0, 2],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 3, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'b13#9',
    positions: [
      {
        frets: [0, 1, 2, 2],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'maj7',
    positions: [
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'maj9',
    positions: [
      {
        frets: [0, 2, 1, 1],
        fingers: [0, 2, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'maj11',
    positions: [
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'maj13',
    positions: [
      {
        frets: [0, 2, 1, 3],
        fingers: [0, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'm6',
    positions: [
      {
        frets: [3, 3, 2, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'm7',
    positions: [
      {
        frets: [3, 3, 2, 4],
        fingers: [2, 2, 1, 3],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'm7b5',
    positions: [
      {
        frets: [2, 3, 2, 4],
        fingers: [1, 2, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'm9',
    positions: [
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 2, 1, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'm69',
    positions: [
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'm9b5',
    positions: [
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'm11',
    positions: [
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 2
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'add9',
    positions: [
      {
        frets: [0, 3, 1, 1],
        fingers: [0, 3, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Eb',
    suffix: 'madd9',
    positions: [
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'F',
    suffix: 'major',
    positions: [
      {
        frets: [2, 0, 1, 0],
        fingers: [2, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 0, 1, 3],
        fingers: [2, 0, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 2, 1, 1],
        fingers: [3, 2, 1, 1],
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
        frets: [1, 0, 1, 3],
        fingers: [1, 0, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 2, 1],
        fingers: [3, 4, 2, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [3, 1, 1, 1],
        fingers: [3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'dim',
    positions: [
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 10,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: 'dim7',
    positions: [
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'sus2',
    positions: [
      {
        frets: [0, 0, 1, 3],
        fingers: [0, 0, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 5
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
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
        frets: [3, 0, 1, 1],
        fingers: [3, 0, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [3, 0, 1, 3],
        fingers: [2, 0, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [3, 3, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '7sus4',
    positions: [
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'alt',
    positions: [
      {
        frets: [1, 4, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [4, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'aug',
    positions: [
      {
        frets: [2, 1, 1, 0],
        fingers: [3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      }
    ]
  },
  {
    key: 'F',
    suffix: '6',
    positions: [
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '69',
    positions: [
      {
        frets: [2, 2, 3, 3],
        fingers: [1, 1, 2, 2],
        barres: [2, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '7',
    positions: [
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '7b5',
    positions: [
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'aug7',
    positions: [
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '9',
    positions: [
      {
        frets: [2, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '9b5',
    positions: [
      {
        frets: [2, 3, 3, 2],
        fingers: [1, 2, 2, 1],
        barres: [2, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: 'aug9',
    positions: [
      {
        frets: [2, 3, 3, 4],
        fingers: [1, 2, 2, 3],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '7b9',
    positions: [
      {
        frets: [2, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '7b9#5',
    positions: [
      {
        frets: [2, 3, 2, 4],
        fingers: [1, 2, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: '7#9',
    positions: [
      {
        frets: [2, 3, 4, 3],
        fingers: [1, 2, 4, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '11',
    positions: [
      {
        frets: [1, 2, 2, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '9#11',
    positions: [
      {
        frets: [2, 3, 3, 2],
        fingers: [1, 2, 2, 1],
        barres: [2, 3],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: '13',
    positions: [
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: '13b9',
    positions: [
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: '13b5b9',
    positions: [
      {
        frets: [3, 2, 1, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 2, 1],
        fingers: [3, 1, 4, 2],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 4, 3, 2],
        fingers: [1, 4, 3, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'b13b9',
    positions: [
      {
        frets: [2, 3, 2, 4],
        fingers: [1, 2, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: 'b13#9',
    positions: [
      {
        frets: [2, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj7',
    positions: [
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 3, 1, 1],
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
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj9',
    positions: [
      {
        frets: [0, 0, 0, 0],
        fingers: [0, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 3, 3],
        fingers: [1, 3, 2, 2],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj11',
    positions: [
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'maj13',
    positions: [
      {
        frets: [0, 2, 0, 0],
        fingers: [0, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm6',
    positions: [
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm7',
    positions: [
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm7b5',
    positions: [
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm9',
    positions: [
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm69',
    positions: [
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm9b5',
    positions: [
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'm11',
    positions: [
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 10
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 7
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'F',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'F',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 10,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'F',
    suffix: 'add9',
    positions: [
      {
        frets: [0, 0, 1, 0],
        fingers: [0, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 2
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'F',
    suffix: 'madd9',
    positions: [
      {
        frets: [0, 3, 2, 1],
        fingers: [0, 3, 2, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 10,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'G',
    suffix: 'major',
    positions: [
      {
        frets: [0, 2, 3, 2],
        fingers: [0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 3, 2],
        fingers: [3, 1, 2, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
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
        frets: [0, 2, 3, 1],
        fingers: [0, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 3, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 4],
        fingers: [2, 1, 3, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 3, 2, 1],
        fingers: [3, 4, 2, 1],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'dim',
    positions: [
      {
        frets: [0, 1, 3, 1],
        fingers: [0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 3, 1],
        fingers: [3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'dim7',
    positions: [
      {
        frets: [0, 1, 0, 1],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'sus2',
    positions: [
      {
        frets: [0, 2, 3, 0],
        fingers: [0, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 7
      }
    ]
  },
  {
    key: 'G',
    suffix: 'sus4',
    positions: [
      {
        frets: [0, 2, 3, 3],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 1, 2, 2],
        fingers: [4, 1, 2, 2],
        barres: [2],
        baseFret: 2
      },
      {
        frets: [4, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5
      }
    ]
  },
  {
    key: 'G',
    suffix: '7sus4',
    positions: [
      {
        frets: [0, 2, 1, 3],
        fingers: [0, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
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
        frets: [4, 1, 3, 2],
        fingers: [4, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'aug',
    positions: [
      {
        frets: [0, 3, 3, 2],
        fingers: [0, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 3, 3, 2],
        fingers: [3, 2, 2, 1],
        barres: [3],
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 4,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '6',
    positions: [
      {
        frets: [0, 2, 0, 2],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '69',
    positions: [
      {
        frets: [2, 2, 0, 2],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '7',
    positions: [
      {
        frets: [0, 2, 1, 2],
        fingers: [0, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
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
        frets: [0, 1, 1, 2],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'aug7',
    positions: [
      {
        frets: [0, 3, 1, 2],
        fingers: [0, 3, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
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
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: '9b5',
    positions: [
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'aug9',
    positions: [
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '7b9',
    positions: [
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '7b9#5',
    positions: [
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '7#9',
    positions: [
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'G',
    suffix: '11',
    positions: [
      {
        frets: [2, 0, 1, 2],
        fingers: [2, 0, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 3, 3, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '9#11',
    positions: [
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '13',
    positions: [
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 7,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      }
    ]
  },
  {
    key: 'G',
    suffix: '13b9',
    positions: [
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: '13b5b9',
    positions: [
      {
        frets: [1, 4, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 2, 1, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 1, 2, 1],
        fingers: [3, 1, 4, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'b13b9',
    positions: [
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'b13#9',
    positions: [
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj7',
    positions: [
      {
        frets: [0, 2, 2, 2],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [0, 1, 2, 2],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [0, 3, 2, 2],
        fingers: [0, 2, 1, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj9',
    positions: [
      {
        frets: [2, 2, 2, 2],
        fingers: [1, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 10
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj11',
    positions: [
      {
        frets: [2, 0, 2, 2],
        fingers: [1, 0, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 3,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'maj13',
    positions: [
      {
        frets: [2, 4, 2, 2],
        fingers: [1, 3, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 7,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm6',
    positions: [
      {
        frets: [0, 2, 0, 1],
        fingers: [0, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm7',
    positions: [
      {
        frets: [0, 2, 1, 1],
        fingers: [0, 2, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
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
        frets: [0, 1, 1, 1],
        fingers: [0, 1, 2, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm9',
    positions: [
      {
        frets: [3, 2, 1, 0],
        fingers: [3, 2, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 2, 1, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm69',
    positions: [
      {
        frets: [2, 2, 0, 1],
        fingers: [2, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 0, 0],
        fingers: [3, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm9b5',
    positions: [
      {
        frets: [3, 1, 1, 0],
        fingers: [3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 3, 2],
        fingers: [1, 3, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        baseFret: 6
      }
    ]
  },
  {
    key: 'G',
    suffix: 'm11',
    positions: [
      {
        frets: [2, 0, 1, 1],
        fingers: [3, 0, 1, 1],
        barres: [1],
        baseFret: 1
      },
      {
        frets: [3, 0, 1, 0],
        fingers: [3, 0, 1, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 3, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 1, 2, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [0, 2, 2, 1],
        fingers: [0, 2, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 6
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'G',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [0, 1, 2, 1],
        fingers: [0, 1, 3, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [3, 2, 2, 0],
        fingers: [3, 1, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [2, 0, 2, 1],
        fingers: [2, 0, 3, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 0, 2, 0],
        fingers: [3, 0, 2, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [1, 2, 2, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 5,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'add9',
    positions: [
      {
        frets: [2, 2, 3, 2],
        fingers: [1, 1, 2, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 4
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 10,
        barres: []
      }
    ]
  },
  {
    key: 'G',
    suffix: 'madd9',
    positions: [
      {
        frets: [3, 2, 3, 0],
        fingers: [2, 1, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 3, 1],
        fingers: [2, 2, 3, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'major',
    positions: [
      {
        frets: [3, 1, 2, 1],
        fingers: [3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 4],
        fingers: [1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 2, 1, 1],
        fingers: [3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'minor',
    positions: [
      {
        frets: [2, 1, 2, 0],
        fingers: [2, 1, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 1, 2, 4],
        fingers: [2, 1, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 3, 2, 1],
        fingers: [3, 4, 2, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [3, 1, 1, 1],
        fingers: [3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'dim',
    positions: [
      {
        frets: [2, 0, 2, 0],
        fingers: [2, 0, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 4, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'dim7',
    positions: [
      {
        frets: [2, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'sus2',
    positions: [
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 3, 1, 1],
        fingers: [3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [1, 3, 4, 4],
        fingers: [1, 2, 3, 3],
        barres: [4],
        baseFret: 6
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'sus4',
    positions: [
      {
        frets: [4, 1, 2, 4],
        fingers: [3, 1, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 4, 1],
        fingers: [1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 4
      },
      {
        frets: [3, 3, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 4,
        barres: []
      },
      {
        frets: [1, 1, 2, 4],
        fingers: [1, 1, 2, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '7sus4',
    positions: [
      {
        frets: [4, 4, 2, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'alt',
    positions: [
      {
        frets: [3, 0, 2, 1],
        fingers: [3, 0, 2, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 4, 1],
        fingers: [1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [4, 3, 1, 2],
        fingers: [4, 3, 1, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'aug',
    positions: [
      {
        frets: [3, 2, 2, 1],
        fingers: [3, 2, 2, 1],
        barres: [2],
        baseFret: 1
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 1, 1, 4],
        fingers: [2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '6',
    positions: [
      {
        frets: [3, 3, 2, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 4, 2, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '69',
    positions: [
      {
        frets: [3, 3, 4, 4],
        fingers: [1, 1, 2, 2],
        barres: [3, 4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '7',
    positions: [
      {
        frets: [3, 4, 2, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 1, 1, 2],
        fingers: [1, 1, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 1, 1],
        fingers: [1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 2, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '7b5',
    positions: [
      {
        frets: [3, 4, 2, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'aug7',
    positions: [
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 1, 1, 2],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 2, 1],
        fingers: [1, 2, 2, 1],
        barres: [1, 2],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '9',
    positions: [
      {
        frets: [1, 1, 0, 1],
        fingers: [1, 2, 0, 3],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '9b5',
    positions: [
      {
        frets: [1, 0, 0, 1],
        fingers: [1, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 4, 3],
        fingers: [1, 2, 2, 1],
        barres: [3, 4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'aug9',
    positions: [
      {
        frets: [1, 2, 0, 1],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 2, 3],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [2, 3, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '7b9',
    positions: [
      {
        frets: [0, 1, 0, 1],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 3, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 1, 2],
        fingers: [1, 3, 2, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '7b9#5',
    positions: [
      {
        frets: [0, 2, 0, 1],
        fingers: [0, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '7#9',
    positions: [
      {
        frets: [2, 1, 0, 1],
        fingers: [3, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 0, 0],
        fingers: [3, 1, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 3,
        barres: []
      },
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '11',
    positions: [
      {
        frets: [3, 4, 4, 2],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [4, 4, 4, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 1,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '9#11',
    positions: [
      {
        frets: [1, 0, 0, 1],
        fingers: [1, 0, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 4, 4, 3],
        fingers: [1, 2, 2, 1],
        barres: [3, 4],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 3, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '13',
    positions: [
      {
        frets: [1, 3, 0, 1],
        fingers: [1, 3, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 6,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '13b9',
    positions: [
      {
        frets: [0, 3, 0, 1],
        fingers: [0, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [1, 2, 3, 2],
        fingers: [1, 2, 4, 3],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: '13b5b9',
    positions: [
      {
        frets: [0, 3, 0, 3],
        fingers: [0, 1, 0, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 2, 1, 4],
        fingers: [3, 2, 1, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [4, 2, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 1, 2, 1],
        fingers: [3, 1, 4, 2],
        baseFret: 7,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'b13b9',
    positions: [
      {
        frets: [0, 2, 0, 1],
        fingers: [0, 2, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 3
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'b13#9',
    positions: [
      {
        frets: [3, 2, 0, 0],
        fingers: [3, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 0, 1],
        fingers: [2, 3, 0, 1],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 2, 3, 3],
        fingers: [1, 2, 3, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 6,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'maj7',
    positions: [
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [4, 3, 2, 1],
        fingers: [4, 3, 2, 1],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 2, 1, 1],
        fingers: [2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [4, 3, 1, 1],
        fingers: [4, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 8,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [4, 3, 3, 1],
        fingers: [4, 2, 3, 1],
        baseFret: 8,
        barres: []
      },
      {
        frets: [2, 2, 2, 1],
        fingers: [2, 3, 4, 1],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'maj9',
    positions: [
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 3, 1, 3],
        fingers: [1, 3, 2, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 9
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'maj11',
    positions: [
      {
        frets: [2, 4, 3, 1],
        fingers: [2, 4, 3, 1],
        baseFret: 2,
        barres: []
      },
      {
        frets: [3, 1, 3, 3],
        fingers: [2, 1, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'maj13',
    positions: [
      {
        frets: [1, 3, 1, 1],
        fingers: [1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 3, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 3,
        barres: []
      },
      {
        frets: [3, 3, 1, 3],
        fingers: [2, 3, 1, 4],
        baseFret: 6,
        barres: []
      },
      {
        frets: [1, 1, 2, 2],
        fingers: [1, 1, 2, 2],
        barres: [1, 2],
        capo: true,
        baseFret: 10
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'm6',
    positions: [
      {
        frets: [2, 3, 2, 4],
        fingers: [1, 2, 1, 3],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 3, 1, 2],
        fingers: [1, 3, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 11
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'm7',
    positions: [
      {
        frets: [2, 4, 2, 4],
        fingers: [1, 3, 2, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 2, 1, 3],
        fingers: [2, 2, 1, 3],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [1, 1, 1, 1],
        fingers: [1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      },
      {
        frets: [1, 3, 2, 2],
        fingers: [1, 3, 2, 2],
        barres: [2],
        baseFret: 11
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'm7b5',
    positions: [
      {
        frets: [2, 4, 2, 3],
        fingers: [1, 3, 1, 2],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 2, 1, 3],
        fingers: [1, 2, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 2, 1, 2],
        fingers: [2, 3, 1, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [1, 2, 2, 2],
        fingers: [1, 2, 3, 4],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'm9',
    positions: [
      {
        frets: [1, 1, 0, 0],
        fingers: [1, 2, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 3],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 1, 1, 3],
        fingers: [1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'm69',
    positions: [
      {
        frets: [2, 3, 4, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 1, 2],
        fingers: [2, 4, 1, 3],
        baseFret: 5,
        barres: []
      },
      {
        frets: [1, 2, 2, 4],
        fingers: [1, 2, 3, 4],
        baseFret: 8,
        barres: []
      },
      {
        frets: [3, 3, 1, 2],
        fingers: [3, 4, 1, 2],
        baseFret: 11,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'm9b5',
    positions: [
      {
        frets: [1, 0, 0, 0],
        fingers: [1, 0, 0, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [2, 4, 4, 3],
        fingers: [1, 3, 4, 2],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 8
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'm11',
    positions: [
      {
        frets: [2, 4, 4, 2],
        fingers: [1, 3, 4, 1],
        barres: [2],
        capo: true,
        baseFret: 1
      },
      {
        frets: [3, 1, 2, 2],
        fingers: [3, 1, 2, 2],
        barres: [2],
        baseFret: 11
      },
      {
        frets: [4, 1, 2, 1],
        fingers: [4, 1, 2, 1],
        barres: [1],
        baseFret: 11
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [1, 4, 1, 3],
        fingers: [1, 4, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [2, 2, 1, 4],
        fingers: [2, 2, 1, 4],
        barres: [2],
        baseFret: 5
      },
      {
        frets: [4, 2, 2, 1],
        fingers: [4, 2, 2, 1],
        barres: [2],
        baseFret: 8
      },
      {
        frets: [2, 1, 1, 1],
        fingers: [2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [1, 4, 1, 2],
        fingers: [1, 4, 1, 2],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [1, 2, 1, 4],
        fingers: [1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 5
      },
      {
        frets: [3, 2, 1, 2],
        fingers: [4, 2, 1, 3],
        baseFret: 8,
        barres: []
      },
      {
        frets: [4, 2, 1, 1],
        fingers: [4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [1, 1, 1, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [1, 4, 3, 3],
        fingers: [1, 4, 2, 3],
        baseFret: 2,
        barres: []
      },
      {
        frets: [2, 4, 1, 4],
        fingers: [2, 3, 1, 4],
        baseFret: 5,
        barres: []
      },
      {
        frets: [2, 1, 1, 3],
        fingers: [2, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 9
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [1, 4, 3, 1],
        fingers: [1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 2
      },
      {
        frets: [3, 1, 3, 2],
        fingers: [3, 1, 4, 2],
        baseFret: 11,
        barres: []
      },
      {
        frets: [4, 1, 3, 1],
        fingers: [4, 1, 3, 1],
        barres: [1],
        baseFret: 11
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'add9',
    positions: [
      {
        frets: [1, 1, 2, 1],
        fingers: [1, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 1
      },
      {
        frets: [1, 4, 2, 2],
        fingers: [1, 4, 2, 2],
        barres: [2],
        baseFret: 3
      },
      {
        frets: [1, 3, 1, 4],
        fingers: [1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 6
      },
      {
        frets: [3, 2, 1, 3],
        fingers: [3, 2, 1, 4],
        baseFret: 9,
        barres: []
      }
    ]
  },
  {
    key: 'Gb',
    suffix: 'madd9',
    positions: [
      {
        frets: [1, 1, 2, 0],
        fingers: [1, 2, 3, 0],
        baseFret: 1,
        barres: []
      },
      {
        frets: [3, 1, 1, 3],
        fingers: [3, 1, 1, 4],
        barres: [1],
        baseFret: 9
      },
      {
        frets: [4, 3, 4, 1],
        fingers: [3, 2, 4, 1],
        baseFret: 11,
        barres: []
      }
    ]
  }
]
const ukulele: ChordArray = {
  main: { strings: 4, fretsOnChord: 4, name: 'ukulele', numberOfChords: 2114 },
  tunings: { standard: ['G4', 'C4', 'E4', 'A4'] },
  keys: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'B', 'H'],
  keyAliases: {
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
    'A#': 'B'
  },
  suffixes: {
    major: ['maj', 'M', ''],
    minor: ['m', 'min', 'mi'],
    dim: ['dim', 'o'],
    dim7: ['dim7', 'o7'],
    sus2: ['sus2', '2'],
    sus4: ['sus4', '4'],
    '7sus4': ['7sus4', '7sus', '7s4'],
    alt: ['alt', '7alt'],
    aug: ['aug', '+'],
    6: ['6'],
    69: ['69'],
    7: ['7'],
    '7b5': ['7b5'],
    aug7: ['aug7', '+7'],
    9: ['9'],
    '9b5': ['9b5'],
    aug9: ['aug9', '+9'],
    '7b9': ['7b9'],
    '7b9#5': ['7b9#5'],
    '7#9': ['7#9'],
    11: ['11'],
    '9#11': ['9#11'],
    13: ['13'],
    '13b9': ['13b9'],
    '13b5b9': ['13b5b9'],
    b13b9: ['b13b9'],
    'b13#9': ['b13#9'],
    maj7: ['maj7', 'M7'],
    maj7b5: ['maj7b5', 'M7b5'],
    'maj7#5': ['maj7#5', 'M7#5'],
    maj9: ['maj9', 'M9'],
    maj11: ['maj11', 'M11'],
    maj13: ['maj13', 'M13'],
    m6: ['m6', 'mi6', 'min6'],
    m7: ['m7', 'mi7', 'min7'],
    m7b5: ['m7b5', 'mi7b5', 'min7b5'],
    m9: ['m9', 'mi9', 'min9'],
    m69: ['m69', 'mi69', 'min69'],
    m9b5: ['m9b5', 'mi9b5', 'min9b5'],
    m11: ['m11', 'mi11', 'min11'],
    mmaj7: [
      'mmaj7',
      'mM7',
      'mMaj7',
      'mimaj7',
      'miM7',
      'miMaj7',
      'minmaj7',
      'minM7',
      'minMaj7'
    ],
    mmaj7b5: [
      'mmaj7b5',
      'mM7b5',
      'mMaj7b5',
      'mimaj7b5',
      'miM7b5',
      'miMaj7b5',
      'minmaj7b5',
      'minM7b5',
      'minMaj7b5'
    ],
    mmaj9: [
      'mmaj9',
      'mM9',
      'mMaj9',
      'mimaj9',
      'miM9',
      'miMaj9',
      'minmaj9',
      'minM9',
      'minMaj9'
    ],
    mmaj11: [
      'mmaj11',
      'mM11',
      'mMaj11',
      'mimaj11',
      'miM11',
      'miMaj11',
      'minmaj11',
      'minM11',
      'minMaj11'
    ],
    add9: ['add9'],
    madd9: ['madd9', 'miadd9', 'minadd9']
  },
  chords: ukuleleChords
}

export default ukulele
