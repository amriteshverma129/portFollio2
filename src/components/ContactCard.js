import React from "react";
import LottieAnimation from "./LottieAnimation";
import { useSelector } from "react-redux";

const ContactCard = ({ href, title, contactDetail, animationPath }) => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="group block"
    >
      <div className={`relative h-full rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
        theme === "dark"
          ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg shadow-gray-900/50 hover:border-blue-500/50 hover:shadow-blue-500/20"
          : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg shadow-gray-200/50 hover:border-blue-400/50 hover:shadow-blue-300/20"
      } hover:shadow-2xl`}>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
        
        <div className="relative z-10 text-center space-y-4">
          <div className="h-24 mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
            <LottieAnimation
              path={animationPath}
              className="w-full h-full"
              speed={0.9}
            />
          </div>
          <div className={`text-lg font-semibold ${
            theme === "dark" ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"
          } transition-colors duration-300`}>
            {title}
          </div>
          <div className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            {contactDetail}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
