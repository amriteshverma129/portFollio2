import React from "react";
import { useSelector } from "react-redux";

const EducationCard = ({ duration, degree, college, logoURL, alt }) => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <div className={`group flex flex-row items-center justify-normal p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
      theme === "dark"
        ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg shadow-gray-900/50 hover:border-blue-500/50 hover:shadow-blue-500/20"
        : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-gray-200/50 hover:border-blue-400/50 hover:shadow-blue-300/20"
    } hover:shadow-xl gap-6 md:gap-10`}>
      <div className="relative md:w-1/6 w-1/3 h-auto flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-full transition-all duration-300 blur-xl"></div>
        <div className={`relative rounded-full p-2 ${
          theme === "dark" ? "bg-gray-700/50 ring-2 ring-gray-600" : "bg-gray-100 ring-2 ring-gray-200"
        } group-hover:ring-blue-500/50 transition-all duration-300`}>
          <img
            alt={alt}
            src={logoURL}
            className="object-contain h-16 w-16 md:h-20 md:w-20 rounded-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className={`text-base md:w-5/6 w-2/3 space-y-1 ${
        theme === "dark" ? "text-gray-300" : "text-gray-700"
      }`}>
        <div className={`text-sm md:text-base font-medium ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>{degree}</div>
        <div className={`text-lg md:text-xl font-bold ${
          theme === "dark" ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"
        } transition-colors duration-300`}>{college}</div>
        <p className={`text-sm md:text-base ${
          theme === "dark" ? "text-gray-500" : "text-gray-500"
        }`}>{duration}</p>
      </div>
    </div>
  );
};

export default EducationCard;
