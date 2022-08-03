import store, { Song } from '@/store'

export interface SearchResult {
    name: string
    author: string
    matchType: 'name' | 'author' | 'text' | 'liked'
    id: number
}

export function Search (query: string): SearchResult[] {
  query = normalizeString(query)
  return findResults(query, store.state.songs).sort(compareSongs)
}

function compareSongs (a: SearchResult, b: SearchResult): number {
  const scoreA = calculateScore(a)
  const scoreB = calculateScore(b)
  if (scoreA > scoreB) {
    return -1
  } else if (scoreA < scoreB) {
    return 1
  } else {
    return a.name < b.name ? -1 : 1
  }
}

function calculateScore (s: SearchResult): number {
  let score = 0
  if (store.state.liked.has(s.id)) {
    score += 100
    s.matchType = 'liked'
  }
  if (s.matchType === 'name') {
    score += 10
  } else if (s.matchType === 'author') {
    score += 5
  } else if (s.matchType === 'text') {
    score += 1
  }
  return score
}

function normalizeString (str: string):string {
  return str.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function findResults (query:string, songs: Song[]): SearchResult[] {
  const res: SearchResult[] = []
  for (const song of songs) {
    if (normalizeString(song.name).includes(query)) {
      res.push({
        name: song.name,
        author: song.author,
        matchType: 'name',
        id: song.id
      })
    } else if (normalizeString(song.author).includes(query)) {
      res.push({
        name: song.name,
        author: song.author,
        matchType: 'author',
        id: song.id
      })
    } else if (normalizeString(song.text).includes(query)) {
      res.push({
        name: song.name,
        author: song.author,
        matchType: 'text',
        id: song.id
      })
    }
  }

  return res
}
