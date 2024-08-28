import React from "react";
import styles from "./mainLayout.module.scss";
import SideBar from "@/components/sideBar/sideBar";
import NavBar from "@/components/navBar";

const MainLayout = ({ children }) => {

  return (
    <div className={styles.MainLayout}>
      <div className={styles.MainLayout_side_bar_wrapper}>
        <SideBar />
      </div>
      <div className={styles.MainLayout_content_wrapper}>
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
