import React from "react";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      <section className="py-20 md:py-32 scroll-mt-20">
        <Projects />
      </section>
    </div>
  );
};

export default ProjectsPage;
