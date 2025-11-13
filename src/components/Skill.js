import React from "react";
import LottieAnimation from "./LottieAnimation";
import Range from "./Range";
import { SKILLS_ARR } from "../utils/variables/constant";
import { useSelector } from "react-redux";

const Skill = () => {
  const theme = useSelector((store) => store.theme.theme);

  const techStack = [
    "Cloudflare", "Hasura", "Stripe", "ZoomSDK", "Prismic",
    "Upstash-qstash", "Auth0", "Vercel", "Github", "Tailwind CSS",
    "Bootstrap", "Material UI"
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title mb-12">Skills</h2>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 lg:gap-12">
        <div className="lg:w-1/2 w-full h-[400px] md:h-[500px] p-6 md:p-10 animate-slide-in-right group">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${
              theme === "dark" 
                ? "from-blue-500/10 via-purple-500/10 to-pink-500/10" 
                : "from-blue-100/50 via-purple-100/50 to-pink-100/50"
            } rounded-2xl group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300`}></div>
            <LottieAnimation
              path="/lottie/skillsAnimation.json"
              className="w-full h-full"
              speed={0.8}
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full space-y-6">
          {SKILLS_ARR.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Range width={item.percentage} skill={item.skill} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="mt-12">
        <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
          Technologies & Tools
        </h3>
        <div className="flex flex-row flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`group relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-110 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/30"
                  : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-300/50"
              }`}
            >
              <span className="relative z-10">{tech}</span>
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
