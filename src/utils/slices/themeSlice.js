import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    changeToDarkTheme: (state) => {
      state.theme = "dark";
    },
    changeToLightTheme: (state) => {
      state.theme = "light";
    },
  },
});

export const { changeToDarkTheme, changeToLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
