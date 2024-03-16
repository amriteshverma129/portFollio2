import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="flex flex-row items-center h-16 mb-10">
      <div className="sm:text-4xl text-xl italic font-display">
        {" "}
        &lt;Amritesh Verma&gt;{" "}
      </div>
      <ul className="lg:flex flex-row gap-4 ml-auto hidden">
        <li className="theme-light">
          <a href="#skills">Skills</a>
        </li>
        <li className="theme-light">
          <a href="#experience">Experiences</a>
        </li>
        <li className="theme-light">
          <a href="#mini-projects">Vanilla Projects</a>
        </li>
        <li className="theme-light">
          <a href="#projects">Projects</a>
        </li>
        <li className="theme-light">
          <a href="#education">Educations</a>
        </li>
        <li className="theme-light">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* <div id="header-menu" className="ml-4">
        <MenuIcon />
      </div> */}
      <div className="sm:ml-2 ml-auto">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
