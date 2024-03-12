import React from "react";
import ExperinceCard from "./ExperinceCard";
import { EXPERIENCE_ARR } from "../utils/variables/constant";

const Experience = () => {
  return (
    <div id="experience" className="my-4">
      <div className="text-3xl font-semibold mb-3">Experience</div>
      <div className="flex flex-col">
        {EXPERIENCE_ARR.map((experience) => (
          <React.Fragment key={experience.id}>
            <ExperinceCard
              backgroundColor={experience.backgroundColor}
              borderColor={experience.borderColor}
              companyName={experience.companyName}
              designation={experience.designation}
              duration={experience.duration}
              imageAlt={experience.imageAlt}
              companyLogo={experience.companyLogo}
              projects={experience.projects}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
