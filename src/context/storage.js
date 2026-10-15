// Small wrappers around localStorage / sessionStorage.
// The project has no backend, so accounts, the cart and orders live in the browser.
// Storage can be unavailable (private mode, blocked cookies) — then we just keep state in memory.

export const readJSON = (storage, key, fallback) => {
  try {
    const value = storage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export const writeJSON = (storage, key, value) => {
  try {
    if (value === null || value === undefined) storage.removeItem(key);
    else storage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore: storage is full or disabled
  }
};
