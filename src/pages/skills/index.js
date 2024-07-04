import React from "react";
import styles from "./index.module.scss";
import MainLayout from "@/layouts/mainLayout/mainLayout";

const Skills = () => {
  return <div>Skills</div>;
};

Skills.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Skills;
