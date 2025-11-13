import React from "react";
import LottieAnimation from "./LottieAnimation";
import ExperinceCard from "./ExperinceCard";
import { EXPERIENCE_ARR } from "../utils/variables/constant";
import { useSelector } from "react-redux";

const Experience = () => {
  const theme = useSelector((store) => store.theme.theme);

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <h2 className="section-title mb-0 md:mb-0">Work Experience</h2>
        <div className="w-full md:w-64 h-48 md:h-64 group">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${
              theme === "dark" 
                ? "from-blue-500/10 via-purple-500/10 to-pink-500/10" 
                : "from-blue-100/50 via-purple-100/50 to-pink-100/50"
            } rounded-2xl group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300`}></div>
            <LottieAnimation
              path="/lottie/experienceAnimation.json"
              className="w-full h-full"
              speed={0.8}
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col">
          {EXPERIENCE_ARR.map((experience, index) => (
            <div 
              key={experience.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ExperinceCard
                backgroundColor={experience.backgroundColor}
                borderColor={experience.borderColor}
                companyName={experience.companyName}
                designation={experience.designation}
                duration={experience.duration}
                imageAlt={experience.imageAlt}
                companyLogo={experience.companyLogo}
                projects={experience.projects}
                isLast={index === EXPERIENCE_ARR.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
