import React from "react";

const ContactCard = ({ href, title, contactDetail, animation }) => {
  return (
    <div className="border border-slate-300 rounded-md text-base py-8 px-2 w-full">
      <a href={href} target="_blank" rel="noreferrer">
        <div ref={animation} className="h-24 mb-8"></div>
        <div>{title}</div>
        <div>{contactDetail}</div>
      </a>
    </div>
  );
};

export default ContactCard;
