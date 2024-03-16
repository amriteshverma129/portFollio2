import React from "react";
import { useSelector } from "react-redux";

const MiniProjectCard = ({ videoAlt, videoSrc, title, gitLink }) => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <div className={`${theme === "dark" && "border border-white rounded-md"}`}>
      <div className="h-64 rounded-md bg-gradient-to-t from:black">
        <video
          controls
          className="h-full w-full object-cover rounded-t-md"
          title={videoAlt}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-row justify-between items-center p-2  bg-black rounded-b-md text-white">
        {" "}
        <div className="text-lg font-semibold">{title}</div>
        <a href={gitLink} target="_blank" rel="noreferrer">
          <div className="cursor-pointer hover:text-red-600 text-sm hover:text-base ">
            Get the code
          </div>
        </a>
      </div>
    </div>
  );
};

export default MiniProjectCard;
