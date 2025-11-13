import React from "react";
import LottieAnimation from "./LottieAnimation";
import EducationCard from "./EducationCard";
import { EDUCATION_ARR } from "../utils/variables/constant";
import { useSelector } from "react-redux";

const Educations = () => {
  const theme = useSelector((store) => store.theme.theme);

  return (
    <div className="animate-fade-in">
      <h2 className="section-title mb-12">Education</h2>
      <div className="flex md:flex-row flex-col gap-8 lg:gap-12">
        <div className="lg:w-1/2 md:w-1/3 w-full md:h-[400px] lg:h-[500px] h-auto p-6 md:p-10 animate-slide-in-right group">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${
              theme === "dark" 
                ? "from-blue-500/10 via-purple-500/10 to-pink-500/10" 
                : "from-blue-100/50 via-purple-100/50 to-pink-100/50"
            } rounded-2xl group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300`}></div>
            <LottieAnimation
              path="/lottie/educationAnimation.json"
              className="w-full h-full"
              speed={0.8}
            />
          </div>
        </div>
        <div className="lg:w-1/2 md:w-2/3 w-full space-y-6">
          {EDUCATION_ARR.map((item, index) => (
            <div 
              key={item.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EducationCard
                duration={item.duration}
                degree={item.degree}
                college={item.college}
                logoURL={item.logoURL}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
