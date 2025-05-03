import React from "react";
import { useSelector } from "react-redux";

const ExperinceCard = ({
  backgroundColor,
  borderColor,
  companyName,
  designation,
  duration,
  imageAlt,
  companyLogo,
  projects,
}) => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <div
      className={`flex md:flex-row flex-col border rounded-lg ${borderColor} hover:shadow-gray-500 hover:shadow-lg my-3 md:mt-3 mt-10 `}
    >
      <div
        className={`md:bg-gradient-to-l bg-gradient-to-t ${
          theme === "dark" ? "from-[#171c27]" : "from-white"
        } md:w-1/6 w-full md:h-auto h-[100px] md:rounded-l-lg  rounded-t-lg relative ${backgroundColor}`}
      >
        <div
          className={`md:h-28 md:w-28 h-24 w-24 absolute border ${borderColor} bg-white rounded-full flex items-center justify-center md:top-1/2 -translate-y-1/2 md:left-0 -translate-x-1/2 top-0 left-1/2`}
        >
          <img
            src={companyLogo}
            alt={imageAlt}
            className="h-full w-full object-contain rounded-full"
          />
        </div>
      </div>
      <div className=" w-full  p-5 ">
        <div className="text-lg font-semibold">{companyName}</div>
        <div className="text-xl font-bold">{designation}</div>
        <div className="text-base">{duration}</div>
        {projects.map((item) => {
          return (
            <div className="text-base" key={item.projectId}>
              <div className="text-xl mt-5 font-semibold ">
                {item.projectName}
              </div>
              <p>{item.description}</p>
              <ul className="list-disc p-5">
                {item.feature.map((para, index) => {
                  return (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: para }}
                      className={`${theme === "dark" && "text-gray-400"}`}
                    ></li>
                  );
                })}
              </ul>

              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <button
                    className={`${backgroundColor} text-white text-base rounded-md px-5 py-2 mt-3`}
                  >
                    Visit Site
                  </button>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperinceCard;
