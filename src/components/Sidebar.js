import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div id="header-sideBar" className="header-sideBar-collapse">
        <ul>
          <li className="theme-light">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="theme-light">
            <Link to="/experience">Experiences</Link>
          </li>
          <li className="theme-light">
            <Link to="/education">Educations</Link>
          </li>
          <li className="theme-light">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
