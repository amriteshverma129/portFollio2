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
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((store) => store.theme.theme);
  const bodyClass = theme === "dark" 
    ? `bg-gradient-to-br from-gray-900 via-[#171c27] to-gray-900 text-white min-h-screen` 
    : `bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 min-h-screen`;
  
  return (
    <div className={bodyClass}>
      <Header />
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl`}>
        <section className="py-20 md:py-32">
          <Summar />
        </section>
        
        <section id="skills" className="py-20 scroll-mt-20">
          <Skill />
        </section>
        
        <section id="experience" className="py-20 scroll-mt-20">
          <Experience />
        </section>
        
        <section id="projects" className="py-20 scroll-mt-20">
          <Projects />
        </section>
        
        <section id="mini-projects" className="py-20 scroll-mt-20">
          <MiniProjects />
        </section>
        
        <section id="education" className="py-20 scroll-mt-20">
          <Educations />
        </section>
        
        <section className="py-20 scroll-mt-20">
          <Certificates />
        </section>
        
        <section id="contact" className="py-20 scroll-mt-20">
          <Contact />
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
