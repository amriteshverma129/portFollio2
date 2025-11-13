import React from "react";
import { useSelector } from "react-redux";

const ProjectCard = ({
  projectName,
  projectURL,
  projectAlt,
  projectFeature,
  gitLink,
}) => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <div className={`group relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
      theme === "dark" 
        ? "bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-gray-900/50" 
        : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl shadow-gray-200/50"
    } hover:shadow-2xl hover:shadow-blue-500/20`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none z-10"></div>
      
      <div className="relative h-52 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <video
          controls
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          title={projectAlt}
        >
          <source src={projectURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative p-6 space-y-4 z-20">
        <h5 className={`text-2xl font-bold tracking-tight ${
          theme === "dark" ? "text-white" : "text-gray-900"
        } group-hover:text-blue-500 transition-colors duration-300`}>
          {projectName}
        </h5>
        <div className={`space-y-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          <ul className="list-disc pl-6 space-y-1.5 text-sm">
            {projectFeature.map((para, index) => {
              return (
                <li key={index} dangerouslySetInnerHTML={{ __html: para }} className="leading-relaxed"></li>
              );
            })}
          </ul>
        </div>
        <div className="pt-2">
          <a href={gitLink} target="_blank" rel="noreferrer">
            <button className="btn-secondary group/btn">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 transition-transform group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Get the code
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
