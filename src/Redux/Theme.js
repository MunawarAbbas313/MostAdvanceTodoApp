import { createSlice } from "@reduxjs/toolkit";
import { saveTolocalStorage , loadFromLocalStorage } from "../Utlilits/LocalStorage";

const initialState = {
  darkMode: loadFromLocalStorage("theme", false)
};

export const themeSlice = createSlice({
  name: "theme",
  initialState, // ✅ must be spelled correctly
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      saveTolocalStorage("theme", state.darkMode)
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

// ✅ default export must be reducer
export default themeSlice.reducer;
