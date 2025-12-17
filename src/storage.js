const STORAGE_KEY = 'cardsData';

export function getData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function deleteSet(setName) {
  const data = getData();
  const filtered = data.filter(card => card.setName !== setName);
  saveData(filtered);
}
