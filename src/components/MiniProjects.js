import React from "react";
import MiniProjectCard from "./MiniProjectCard";
import { MINI_PROJECTS_ARR } from "../utils/variables/constant";

const MiniProjects = () => {
  return (
    <div id="mini-projects" className="mb-10">
      <div className="text-3xl font-semibold mb-6">Vanilla Projects</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {MINI_PROJECTS_ARR.map((miniProject) => {
          return (
            <React.Fragment key={miniProject.id}>
              <MiniProjectCard
                videoAlt={miniProject.videoAlt}
                videoSrc={miniProject.videoSrc}
                title={miniProject.title}
                gitLink={miniProject.gitLink}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MiniProjects;
