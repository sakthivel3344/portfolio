import MainLayout from "@/layouts/mainLayout/mainLayout";
import React from "react";

const Projects = () => {
  return <div>Projects</div>;
};

Projects.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Projects;
