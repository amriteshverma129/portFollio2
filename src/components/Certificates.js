import React from "react";

const Certificates = () => {
  return (
    <div id="certificates" className="mb-10">
      <div className="text-3xl font-semibold mb-6">Certificates</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10">
        <div className="h-64 rounded-md">
          <img
            src={"/images/Javascript certificate.jpg"}
            alt={""}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-64 rounded-md">
          <img
            src={"/images/Frontend Development.jpg"}
            alt={""}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-64 rounded-md">
          <img
            src={"/images/certificate.jpg"}
            alt={""}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
