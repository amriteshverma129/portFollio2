import React from "react";

const MiniProjectCard = ({ videoAlt, videoSrc, title, gitLink }) => {
  return (
    <div>
      <div className="h-64 rounded-md">
        <iframe
          title={videoAlt}
          src={videoSrc}
          allow=" autoplay; clipboard-write; encrypted-media"
          className="h-full w-full object-cover rounded-t-md"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-row justify-between items-center p-2 pt-0 bg-black rounded-b-md text-white">
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
