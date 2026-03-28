import React from "react";
import Summar from "../components/Summar";
import Certificates from "../components/Certificates";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      <section className="py-20 md:py-32">
        <Summar />
      </section>
      <section className="py-20 scroll-mt-20">
        <Certificates />
      </section>
    </div>
  );
};

export default HomePage;
