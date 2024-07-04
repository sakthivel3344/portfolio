import MainLayout from "@/layouts/mainLayout/mainLayout";
import React from "react";

const Certifications = () => {
  return <div>Certifications</div>;
};

Certifications.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Certifications;
