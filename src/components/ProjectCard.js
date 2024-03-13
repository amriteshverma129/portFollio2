import React from "react";

const ProjectCard = ({
  projectName,
  projectURL,
  projectAlt,
  projectFeature,
  gitLink,
}) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-52 w-full object-cover rounded-md">
        <video
          controls
          className="h-full w-full object-cover rounded-md"
          title={projectAlt}
        >
          <source src={projectURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {projectName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[300px] relative">
          <ul className="list-disc p-5">
            {projectFeature.map((para, index) => {
              return <li key={index}>{para}</li>;
            })}
          </ul>
        </p>
        <a href={gitLink} target="_blank" rel="noreferrer">
          {" "}
          <button className="bg-white py-2 px-5 rounded-sm mt-2">
            Get the code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
