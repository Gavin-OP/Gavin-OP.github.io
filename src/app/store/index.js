import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import { loadPersistedState, savePersistedState } from "./persistence";

const persistedState = loadPersistedState();

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();
  savePersistedState({
    home: state.home,
  });
});
