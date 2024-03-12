import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div id="header-sideBar" className="header-sideBar-collapse">
        <ul>
          <li className="theme-light">
            <a href="#skills">Skills</a>
          </li>
          <li className="theme-light">
            <a href="#experience">Experiences</a>
          </li>
          <li className="theme-light">
            <a href="#education">Educations</a>
          </li>
          <li className="theme-light">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
