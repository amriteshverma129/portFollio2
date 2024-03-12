import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Range from "./Range";
import { SKILLS_ARR } from "../utils/variables/constant";

const Skill = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      path: "/lottie/skillsAnimation.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <div id="skills">
      <div className="text-3xl font-semibold">Skills</div>
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div ref={container} className="lg:w-1/2 w-full h-[500px] p-10"></div>
        <div className="lg:w-1/2 w-full">
          {SKILLS_ARR.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Range width={item.percentage} skill={item.skill} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="py-4 flex flex-row flex-wrap text-white">
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Cloudflare
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Hasura
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Stripe
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          ZoomSDK
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Primic
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Upstash-qstash
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Auth0
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Vercel
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Github
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Tailwind CSS
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Bootstrap
        </div>
        <div className="bg-slate-400 py-2 px-5 rounded-md inline m-2">
          Material UI
        </div>
      </div>
    </div>
  );
};

export default Skill;
