const is_browser = typeof window !== "undefined";

export const get_local_storage = <T>(key: string): T | null => {
  if (!is_browser) return null; // If not in the browser, return null
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null; // Parse as JSON and cast to the expected type
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
};

export const set_local_storage = <T>(key: string, value: T): void => {
  if (!is_browser) return; // If not in the browser, do nothing
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
};

export const remove_local_storage = (key: string): void => {
  if (!is_browser) return; // If not in the browser, do nothing
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage:", error);
  }
};
