import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  internshipIndex: 0,
  activeProjectId: "wechat-analysis",
};

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setInternshipIndex: (state, action) => {
      const { index, maxIndex } = action.payload;
      state.internshipIndex = clamp(index, 0, maxIndex);
    },
    setActiveProjectId: (state, action) => {
      state.activeProjectId = action.payload;
    },
  },
});

export const { setInternshipIndex, setActiveProjectId } = homeSlice.actions;
export default homeSlice.reducer;
