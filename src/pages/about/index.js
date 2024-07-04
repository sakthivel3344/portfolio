import MainLayout from "@/layouts/mainLayout/mainLayout";
import React from "react";

const About = () => {
  return <div>About</div>;
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
