import React from "react";
import MiniProjectCard from "./MiniProjectCard";
import { MINI_PROJECTS_ARR } from "../utils/variables/constant";

const MiniProjects = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="section-title mb-12">Vanilla JS Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {MINI_PROJECTS_ARR.map((miniProject, index) => {
          return (
            <div
              key={miniProject.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MiniProjectCard
                videoAlt={miniProject.videoAlt}
                videoSrc={miniProject.videoSrc}
                title={miniProject.title}
                gitLink={miniProject.gitLink}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiniProjects;
