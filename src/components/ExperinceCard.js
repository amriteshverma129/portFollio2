import React from "react";
import { useSelector } from "react-redux";

const ExperinceCard = ({
  backgroundColor,
  borderColor,
  companyName,
  designation,
  duration,
  imageAlt,
  companyLogo,
  projects,
  isLast,
}) => {
  const theme = useSelector((store) => store.theme.theme);
  
  return (
    <div className="relative flex gap-6 md:gap-8 group pb-8">
      {/* Timeline line - positioned from logo container */}
      {!isLast && (
        <div className={`absolute left-[2rem] md:left-[2.5rem] top-24 w-0.5 ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        } group-hover:bg-gradient-to-b group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-colors duration-300 h-full`} style={{ bottom: '-2rem' }}></div>
      )}
      
      {/* Logo/Timeline dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl ${
          theme === "dark" ? "bg-gray-800 ring-2 ring-gray-700" : "bg-white ring-2 ring-gray-200"
        } group-hover:ring-blue-500/50 transition-all duration-300 shadow-lg flex items-center justify-center p-3 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30 overflow-hidden`}>
          <img
            src={companyLogo}
            alt={imageAlt}
            className="w-full h-full object-contain"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-2xl transition-all duration-300 blur-xl -z-10"></div>
        </div>
        {/* Timeline dot below logo */}
        <div className={`absolute left-1/2 -translate-x-1/2 top-20 md:top-24 w-3 h-3 rounded-full ${
          theme === "dark" ? "bg-gray-700 group-hover:bg-blue-500" : "bg-gray-300 group-hover:bg-blue-500"
        } transition-colors duration-300 shadow-lg z-20`}></div>
      </div>
      
      {/* Content Card */}
      <div className={`flex-1 mb-12 rounded-2xl p-6 md:p-8 transition-all duration-300 transform hover:scale-[1.01] ${
        theme === "dark"
          ? "bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-gray-900/50 hover:border-blue-500/50 hover:shadow-blue-500/20"
          : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl shadow-gray-200/50 hover:border-blue-400/50 hover:shadow-blue-300/20"
      } hover:shadow-2xl`}>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative space-y-3 mb-6">
          {companyName && (
            <div className={`text-lg md:text-xl font-semibold ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
              {companyName}
            </div>
          )}
          {designation && (
            <div className={`text-xl md:text-2xl font-bold ${
              theme === "dark" ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"
            } transition-colors duration-300`}>
              {designation}
            </div>
          )}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
            theme === "dark" 
              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30" 
              : "bg-blue-100 text-blue-700 border border-blue-300"
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {duration}
          </div>
        </div>
        
        {/* Projects */}
        <div className="relative space-y-8">
          {projects.map((item) => {
            return (
              <div className="space-y-4" key={item.projectId}>
                <div className={`text-xl md:text-2xl font-bold ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                } flex items-center gap-3`}>
                  <div className={`w-2 h-2 rounded-full ${
                    theme === "dark" ? "bg-blue-400" : "bg-blue-600"
                  }`}></div>
                  {item.projectName}
                </div>
                <p className={`text-base md:text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  {item.description}
                </p>
                <ul className={`space-y-3 ml-4 border-l-2 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } pl-6`}>
                  {item.feature.map((para, index) => {
                    return (
                      <li
                        key={index}
                        className={`text-sm md:text-base leading-relaxed ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        } relative`}
                      >
                        <span className="absolute -left-3 text-blue-500 font-bold text-lg">▹</span>
                        <span dangerouslySetInnerHTML={{ __html: para }}></span>
                      </li>
                    );
                  })}
                </ul>

                {item.link && (
                  <div className="pt-2">
                    <a href={item.link} target="_blank" rel="noreferrer" className="inline-block">
                      <button className="btn-secondary">
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Visit Site
                        </span>
                      </button>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperinceCard;
