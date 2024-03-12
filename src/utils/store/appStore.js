import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
import langSlice from "../slices/langSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    lang: langSlice,
  },
});

export default store;
