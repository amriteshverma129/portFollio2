import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECT_ARR } from "../utils/variables/constant";

const Projects = () => {
  return (
    <div>
      <div id="projects" className="mb-10">
        <div className="text-3xl font-semibold">Projects</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 my-5">
          {PROJECT_ARR.map((project) => (
            <React.Fragment key={project.id}>
              <ProjectCard
                projectAlt={project.projectAlt}
                projectName={project.projectName}
                gitLink={project.gitLink}
                projectFeature={project.projectFeature}
                projectURL={project.projectURL}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
