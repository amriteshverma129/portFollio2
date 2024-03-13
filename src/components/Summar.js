import React from "react";

const Summar = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="md:w-8/12 w-full md:order-1 order-2">
          <h1 className="text-3xl font-semibold">
            Hi all, I'm Amritesh
            <span className="wave-emoji">👋</span>
          </h1>
          <p className="py-3 text-lg">
            {" "}
            A seasoned FullStack Developer <strong>(MERN)</strong> with nearly
            3.4 years of hands-on experience in crafting and deploying
            innovative applications and solutions across diverse technologies
            and programming languages. I am passionate about seeking
            opportunities where I can harness my skills and expertise to drive
            substantial growth for the organization while advancing my own
            professional journey. My dedication to delivering high-quality
            solutions and my commitment to continuous learning make me a
            valuable asset to any team. Let's build something remarkable
            together!
          </p>
          <div>
            <a
              href={
                "https://portfollio.cdn.prismic.io/portfollio/ZfG7ekmNsf2sHjWH_AmriteshResume.pdf"
              }
              target="_blank"
              download={"Amritesh Resume"}
              type="pdf"
            >
              <button className="bg-slate-900 text-white text-base rounded-md px-5 py-2 mt-5">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-4/12 w-full relative md:order-2 order-1">
          <img
            alt="Amritesh Verma"
            src={
              "https://images.prismic.io/portfollio/ZfG7e0mNsf2sHjWJ_Amritesh.jpg?auto=format,compress"
            }
            className="h-full w-full -z-10 "
          ></img>
          <div className="absolute inset-0 z-0 md:bg-gradient-to-r from-white bg-gradient-to-t"></div>
        </div>
      </div>
    </div>
  );
};

export default Summar;
