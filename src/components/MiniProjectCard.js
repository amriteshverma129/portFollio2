import React from "react";
import { useSelector } from "react-redux";

const MiniProjectCard = ({ videoAlt, videoSrc, title, gitLink }) => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <div className={`group relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
      theme === "dark"
        ? "bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-gray-900/50 hover:border-blue-500/50 hover:shadow-blue-500/20"
        : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl shadow-gray-200/50 hover:border-blue-400/50 hover:shadow-blue-300/20"
    } hover:shadow-2xl`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none z-10"></div>
      
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <video
          controls
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          title={videoAlt}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={`relative flex flex-row justify-between items-center p-4 md:p-6 z-20 ${
        theme === "dark" ? "bg-gray-900/90 backdrop-blur-sm" : "bg-gray-50/90 backdrop-blur-sm"
      }`}>
        <div className={`text-base md:text-lg font-bold ${
          theme === "dark" ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"
        } transition-colors duration-300`}>{title}</div>
        <a href={gitLink} target="_blank" rel="noreferrer">
          <button className="btn-secondary text-sm py-2 px-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Code
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default MiniProjectCard;
