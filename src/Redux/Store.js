import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme";
import todoReducer from "./Slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,   // ✅ correct
    todo: todoReducer,     // ✅ correct
  },
});
