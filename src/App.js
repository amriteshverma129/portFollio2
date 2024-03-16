import React from "react";
import "./index.css";
import Summar from "./components/Summar";
import Header from "./components/Header";
import Educations from "./components/Educations";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import MiniProjects from "./components/MiniProjects";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((store) => store.theme.theme);
  const bodyClass = theme === "dark" ? `bg-[#171c27] text-white` : "";
  return (
    <div className={bodyClass}>
      <div className={`container mx-auto px-4 `}>
        <Header />
        <Summar />
        <Skill />
        <Experience />
        <Projects />
        <MiniProjects />
        <Educations />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
};

export default App;
