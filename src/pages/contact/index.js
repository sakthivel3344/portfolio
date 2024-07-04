import MainLayout from "@/layouts/mainLayout/mainLayout";
import React from "react";

const Contact = () => {
  return <div>Contact</div>;
};

Contact.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Contact;
