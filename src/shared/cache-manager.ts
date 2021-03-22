interface CacheResponse {
  success: boolean;
  error?: any;
  cachedData?: string | null;
}

/** Used for storing data in the cache. */
function saveData(key: string, value: string): CacheResponse {
  try {
    localStorage.setItem(key.toLowerCase(), value);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

/** Used for loading data from cache. */
function loadData(key: string): CacheResponse {
  try {
    const cachedData = localStorage.getItem(key.toLowerCase());
    return { cachedData, success: true };
  } catch (error) {
    return { success: false, error };
  }
}

/** Used for removing data from cache. By default delays removing data by 5 minutes. */
function removeData(key: string, delay = 300000) {
  try {
    setTimeout(() => {
      localStorage.removeItem(key.toLowerCase());
    }, delay);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

const cacheManager = { saveData, loadData, removeData };

export default cacheManager;
