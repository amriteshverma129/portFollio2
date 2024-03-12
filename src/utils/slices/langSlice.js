import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en-US",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload.currentLocale;
    },
    setToDefaultLang: (state) => {
      state.lang = "en-US";
    },
  },
});

export const { changeLang, setToDefaultLang } = langSlice.actions;
export default langSlice.reducer;
