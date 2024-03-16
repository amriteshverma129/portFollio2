import React from "react";
import { useSelector } from "react-redux";

const ProjectCard = ({
  projectName,
  projectURL,
  projectAlt,
  projectFeature,
  gitLink,
}) => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <div className=" rounded-lg shadow bg-gray-800 border-gray-700">
      <div className="h-52 w-full object-cover rounded-t-md bg-gradient-to-t from:black">
        <video
          controls
          className="h-full w-full object-cover rounded-t-md "
          title={projectAlt}
        >
          <source src={projectURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
          {projectName}
        </h5>
        <p className="mb-3 font-normal text-gray-400  relative">
          <ul className="list-disc p-5">
            {projectFeature.map((para, index) => {
              return (
                <li key={index} dangerouslySetInnerHTML={{ __html: para }}></li>
              );
            })}
          </ul>
        </p>
        <a href={gitLink} target="_blank" rel="noreferrer">
          {" "}
          <button
            className={`bg-white py-2 px-5 rounded-sm mt-auto ${
              theme === "dark" && "text-black"
            }`}
          >
            Get the code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
