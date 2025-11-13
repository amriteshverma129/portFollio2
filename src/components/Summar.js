import React from "react";
import { useSelector } from "react-redux";

const Summar = () => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <div className="animate-fade-in">
      <div className="flex md:flex-row flex-col justify-center items-center gap-8 md:gap-12">
        <div className="md:w-8/12 w-full md:order-1 order-2 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Hi all, I'm</span>
              <span className="block gradient-text mt-2">Amritesh Verma</span>
              <span className="inline-block text-4xl md:text-5xl animate-bounce ml-3">👋</span>
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              A seasoned <strong className="text-blue-500">Senior Frontend Developer (MERN)</strong> with
              <strong className="text-purple-500"> 5 years</strong> of hands-on experience in crafting and deploying
              innovative applications and solutions across diverse technologies
              and programming languages.
            </p>
            <p className={`text-base md:text-lg leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              I am passionate about seeking opportunities where I can harness my skills and expertise to drive
              substantial growth for the organization while advancing my own
              professional journey. My dedication to delivering high-quality
              solutions and my commitment to continuous learning make me a
              valuable asset to any team. <span className="font-semibold text-blue-500">Let's build something remarkable together!</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={
                "https://portfollio.cdn.prismic.io/portfollio/aBO61PIqRLdaBy-w_AmriteshVerma.pdf"
              }
              target="_blank"
              download={"Amritesh Resume"}
              type="pdf"
              rel="noreferrer"
            >
              <button className="btn-primary">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </button>
            </a>
            <a href="#contact">
              <button className="btn-secondary">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-4/12 w-full relative md:order-2 order-1 animate-slide-in-right">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className={`relative rounded-3xl overflow-hidden ${theme === "dark" ? "ring-2 ring-gray-700" : "ring-2 ring-gray-200"} shadow-2xl transform group-hover:scale-105 transition-transform duration-300`}>
              <img
                alt="Amritesh Verma"
                src={
                  "https://images.prismic.io/portfollio/ZfG7e0mNsf2sHjWJ_Amritesh.jpg?auto=format,compress"
                }
                className="h-full w-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  theme === "dark" 
                    ? "from-gray-900/50 via-transparent to-transparent" 
                    : "from-white/30 via-transparent to-transparent"
                } pointer-events-none`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summar;
