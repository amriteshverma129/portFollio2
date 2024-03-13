import React from "react";

const Certificates = () => {
  return (
    <div id="certificates" className="mb-10">
      <div className="text-3xl font-semibold mb-6">Certificates</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10">
        <div className="h-64 rounded-md">
          <img
            src={
              "https://images.prismic.io/portfollio/ZfG7eEmNsf2sHjWD_Javascriptcertificate.jpg?auto=format,compress"
            }
            alt={""}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-64 rounded-md">
          <img
            src={
              "https://images.prismic.io/portfollio/ZfG7eUmNsf2sHjWF_FrontendDevelopment.jpg?auto=format,compress"
            }
            alt={""}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="h-64 rounded-md">
          <img
            src={
              "https://images.prismic.io/portfollio/ZfG7dkmNsf2sHjV-_certificate.jpg?auto=format,compress"
            }
            alt={""}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
