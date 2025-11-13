import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeToDarkTheme,
  changeToLightTheme,
} from "../utils/slices/themeSlice";
import MoonIcon from "../icon/MoonIcon";
import SunIcon from "../icon/SunIcon";

const ThemeSwitch = () => {
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();
  return (
    <button
      className={`relative rounded-full h-8 w-14 flex items-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
        theme === "dark"
          ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50"
          : "bg-gradient-to-r from-gray-300 to-gray-400 shadow-md"
      }`}
      onClick={() =>
        theme === "dark"
          ? dispatch(changeToLightTheme())
          : dispatch(changeToDarkTheme())
      }
      aria-label="Toggle theme"
    >
      <div
        className={`absolute rounded-full h-6 w-6 flex justify-center items-center transition-all duration-300 transform ${
          theme === "dark"
            ? "bg-white translate-x-7 shadow-lg"
            : "bg-white translate-x-1 shadow-md"
        }`}
      >
        {theme === "light" ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;
