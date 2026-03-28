import React from "react";
import MiniProjects from "../components/MiniProjects";

const MiniProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      <section className="py-20 md:py-32 scroll-mt-20">
        <MiniProjects />
      </section>
    </div>
  );
};

export default MiniProjectsPage;
