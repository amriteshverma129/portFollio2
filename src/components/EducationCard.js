import React from "react";

const EducationCard = ({ duration, degree, college, logoURL, alt }) => {
  return (
    <div className="flex flex-row items-center justify-normal m-5 p-5 gap-10">
      <div className="md:w-1/6 w-1/3 h-auto flex items-center justify-center">
        <img alt={alt} src={logoURL} className="object-contain h-full w-full" />
      </div>
      <div className="text-base md:w-5/6 w-2/3">
        <div>{degree}</div>
        <div className="text-lg font-semibold">{college}</div>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default EducationCard;
