export function saveToStorage(key, value) {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

export function loadFromStorage(key) {
  const storedValue =
    localStorage.getItem(key);

  if (!storedValue) {
    return null;
  }

  return JSON.parse(storedValue);
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}