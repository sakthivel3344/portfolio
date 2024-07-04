import MainLayout from "@/layouts/mainLayout/mainLayout";
import React from "react";

const Experience = () => {
  return <div>Experience</div>;
};

Experience.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Experience;
