import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECT_ARR } from "../utils/variables/constant";

const Projects = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="section-title mb-12">Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {PROJECT_ARR.map((project, index) => (
          <div 
            key={project.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard
              projectAlt={project.projectAlt}
              projectName={project.projectName}
              gitLink={project.gitLink}
              projectFeature={project.projectFeature}
              projectURL={project.projectURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
