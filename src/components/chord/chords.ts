import chordList from './chordList'

export interface ChordLayout {
  frets: number[];
  fingers: number[];
  baseFret: number;
  barres: number[];
  capo?: boolean;
}

export interface Chord {
  key: string;
  suffix: string;
  positions: ChordLayout[];
}

export interface ChordArray {
  main: {
    strings: number;
    fretsOnChord: number;
    name: string;
    numberOfChords: number;
  };
  tunings: {
    standard: string[];
  };
  keys: string[];
  keyAliases: {
    [key: string]: string;
  };
  suffixes: {
    [key: string]: string[];
  }
  chords: Chord[];
}

export interface ChordObject {
  requested: string;
  found: {
    key: string;
    suffix: string;
    layouts: ChordLayout[];
  } | null;
}

function getChord (chord: string): ChordObject {
  // find the longest mathcing key in keys array
  let key = chords.keys.reduce((acc, key) => {
    if (chord.startsWith(key) && key.length > acc.length) {
      return key
    }
    return acc
  }, '')

  if (!key) {
    if (chords.keyAliases[chord]) key = chords.keyAliases[chord]
    else return { requested: chord, found: null }
  }

  const rawSuffix = chord.slice(key.length)
  let realSuffix = rawSuffix
  for (const suffix in chords.suffixes) {
    if (rawSuffix === suffix) {
      realSuffix = suffix
      break
    } else if (chords.suffixes[suffix].includes(rawSuffix)) {
      realSuffix = suffix
      break
    }
  }

  console.log(key, realSuffix)

  const chordObj = chords.chords.find((chord) => chord.key === key && chord.suffix === realSuffix)
  if (!chordObj) return { requested: chord, found: null }
  return {
    requested: chord,
    found: {
      key,
      suffix: realSuffix,
      layouts: chordObj.positions
    }
  }
}

export default getChord

export const chords: ChordArray = {
  main: {
    strings: 6,
    fretsOnChord: 4,
    name: 'guitar',
    numberOfChords: 2141
  },
  tunings: {
    standard: ['E2', 'A2', 'D3', 'G3', 'H3', 'E4']
  },
  keys: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B', 'H'],
  keyAliases: {
    Cb: 'H',
    Db: 'C#',
    Eb: 'D#',
    Fb: 'E',
    Gb: 'F#',
    Ab: 'G#',
    Bb: 'A#',
    Hb: 'B'
  },
  suffixes: {
    major: ['maj', 'M', ''],
    minor: ['m', 'min', 'mi'],
    dim: ['dim', 'o'],
    dim7: ['dim7', 'o7'],
    sus2: ['sus2', '2'],
    sus4: ['sus4', '4'],
    sus2sus4: ['sus2sus4', '2sus4', 'sus24'],
    '7sus4': ['7sus4', '7sus'],
    '7/G': ['7/G', '7/Gb'],
    alt: ['alt', '7alt'],
    aug: ['aug', '+'],
    5: ['5', 'power'],
    6: ['6'],
    69: ['69'],
    7: ['7'],
    '7b5': ['7b5'],
    aug7: ['aug7', '+7'],
    9: ['9'],
    '9b5': ['9b5'],
    aug9: ['aug9', '+9'],
    '7b9': ['7b9'],
    '7#9': ['7#9'],
    11: ['11'],
    '9#11': ['9#11'],
    13: ['13'],
    maj7: ['maj7', 'M7'],
    maj7b5: ['maj7b5', 'M7b5'],
    'maj7#5': ['maj7#5', 'M7#5'],
    maj9: ['maj9', 'M9'],
    maj11: ['maj11', 'M11'],
    maj13: ['maj13', 'M13'],
    m6: ['m6', 'min6', 'mi6'],
    m69: ['m69', 'min69', 'mi69'],
    m7: ['m7', 'min7', 'mi7'],
    m7b5: ['m7b5', 'min7b5', 'mi7b5'],
    m9: ['m9', 'min9', 'mi9'],
    m11: ['m11', 'min11', 'mi11'],
    mmaj7: ['mmaj7', 'mM7', 'mMaj7', 'minMaj7', 'minmaj7', 'minM7', 'miMaj7', 'miM7', 'mimaj7'],
    mmaj7b5: ['mmaj7b5', 'mM7b5', 'mMaj7b5', 'minMaj7b5', 'minmaj7b5', 'minM7b5', 'miMaj7b5', 'miM7b5', 'mimaj7b5'],
    mmaj9: ['mmaj9', 'mM9', 'mMaj9', 'minMaj9', 'minmaj9', 'minM9', 'miMaj9', 'miM9', 'mimaj9'],
    mmaj11: ['mmaj11', 'mM11', 'mMaj11', 'minMaj11', 'minmaj11', 'minM11', 'miMaj11', 'miM11', 'mimaj11'],
    add9: ['add9'],
    madd9: ['madd9', 'minadd9', 'miadd9'],
    '/E': ['/E', '/Fb'],
    '/F': ['/F', '/E#'],
    '/F#': ['/F#', '/Gb'],
    '/G': ['/G'],
    '/G#': ['/G#', '/Ab'],
    '/A': ['/A'],
    '/B': ['/B', '/A#'],
    '/H': ['/H', '/Cb'],
    '/C': ['/C', '/H#'],
    '/C#': ['/C#', '/Db'],
    'm/H': ['m/H', 'm/Cb', 'min/H', 'min/Cb', 'mi/H', 'mi/Cb'],
    'm/C': ['m/C', 'min/C', 'mi/C'],
    'm/C#': ['m/C#', 'min/C#', 'mi/C#', 'm/Db', 'min/Db', 'mi/Db'],
    '/D': ['/D'],
    'm/D': ['m/D', 'min/D', 'mi/D'],
    '/D#': ['/D#', '/Eb'],
    'm/D#': ['m/D#', 'min/D#', 'mi/D#', 'm/Eb', 'min/Eb', 'mi/Eb'],
    'm/E': ['m/E', 'min/E', 'mi/E', 'm/Fb', 'min/Fb', 'mi/Fb'],
    'm/F': ['m/F', 'min/F', 'mi/F', 'm/E#', 'min/E#', 'mi/E#'],
    'm/F#': ['m/F#', 'min/F#', 'mi/F#', 'm/Gb', 'min/Gb', 'mi/Gb'],
    'm/G': ['m/G', 'min/G', 'mi/G'],
    'm/G#': ['m/G#', 'min/G#', 'mi/G#', 'm/Ab', 'min/Ab', 'mi/Ab']
  },
  chords: chordList
}
