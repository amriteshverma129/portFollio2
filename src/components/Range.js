import React from "react";

const Range = ({ width, skill }) => {
  return (
    <div className="w-full my-3">
      <div className="text-base font-semibold">{skill}</div>
      <div className="w-full h-4 bg-slate-200 rounded-full mt-2">
        <div
          className={`h-full bg-slate-400 rounded-full`}
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
};

export default Range;
