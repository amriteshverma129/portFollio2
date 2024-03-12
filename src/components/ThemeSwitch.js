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
    <div className="mx-3 rounded-full h-6 w-12 flex bg-slate-300 border">
      {theme === "light" && (
        <div
          className="rounded-full h-full w-1/2 flex justify-center items-center bg-white"
          onClick={() => dispatch(changeToDarkTheme())}
        >
          <MoonIcon />
        </div>
      )}
      {theme === "dark" && (
        <div
          className="rounded-full h-full w-1/2 flex justify-center items-center bg-white ml-auto"
          onClick={() => dispatch(changeToLightTheme())}
        >
          <SunIcon />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
