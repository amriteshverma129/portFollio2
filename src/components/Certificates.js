import React from "react";
import { useSelector } from "react-redux";

const Certificates = () => {
  const theme = useSelector((store) => store.theme.theme);
  const certificates = [
    {
      src: "https://images.prismic.io/portfollio/ZfG7eEmNsf2sHjWD_Javascriptcertificate.jpg?auto=format,compress",
      alt: "JavaScript Certificate"
    },
    {
      src: "https://images.prismic.io/portfollio/ZfG7eUmNsf2sHjWF_FrontendDevelopment.jpg?auto=format,compress",
      alt: "Frontend Development Certificate"
    },
    {
      src: "https://images.prismic.io/portfollio/ZfG7dkmNsf2sHjV-_certificate.jpg?auto=format,compress",
      alt: "Certificate"
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title mb-12">Certificates</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`group relative h-80 rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
              theme === "dark"
                ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-gray-900/50"
                : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl shadow-gray-200/50"
            } hover:shadow-2xl hover:shadow-blue-500/20`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none z-10"></div>
            <img
              src={cert.src}
              alt={cert.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
