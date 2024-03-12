import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import EducationCard from "./EducationCard";
import { EDUCATION_ARR } from "../utils/variables/constant";

const Educations = () => {
  const educationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: educationContainer.current,
      path: "/lottie/educationAnimation.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <div id="education" className="my-4">
      <div className="text-3xl font-semibold">Education</div>
      <div className="flex md:flex-row flex-col">
        <div
          ref={educationContainer}
          className="lg:w-1/2 md:w-1/3 w-full md:h-[500px] h-auto p-10"
        ></div>
        <div className="lg:w-1/2 md:w-2/3 w-full">
          {EDUCATION_ARR.map((item) => (
            <React.Fragment key={item.id}>
              <EducationCard
                duration={item.duration}
                degree={item.degree}
                college={item.college}
                logoURL={item.logoURL}
                alt={item.alt}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
