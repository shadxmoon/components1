import initialSets from './data.json'

const STORAGE_KEY = 'setsData'

export function getSets() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) return JSON.parse(raw)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSets))
  return initialSets
}

export function saveSets(sets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sets))
}

export function deleteSetById(setId) {
  const sets = getSets();
  const filtered = sets.filter(set => set.id !== setId);
  saveSets(filtered);
}
