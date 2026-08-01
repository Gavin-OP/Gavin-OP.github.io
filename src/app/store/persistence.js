const STORAGE_KEY = "gavin-op-home-state";

export const loadPersistedState = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const serializedState = window.localStorage.getItem(STORAGE_KEY);
  if (!serializedState) {
    return undefined;
  }

  try {
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to parse persisted state:", error);
    return undefined;
  }
};

export const savePersistedState = (state) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save persisted state:", error);
  }
};
