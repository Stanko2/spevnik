import guitar from './guitarChords'
import ukulele from './ukuleleChords'

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

function getChord (chord: string, mode: string): ChordObject {
  const chords: ChordArray = mode === 'guitar' ? guitar : ukulele
  // find the longest matching key in keys array
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
