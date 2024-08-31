import React from "react";
import styles from "./homePage.module.scss";
import { homeSection } from "@/constants/homePage";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className={styles.Home}>
      <section className={styles.Home_home_section}>
        <div className={styles.Home_home_section_content}>
          <div className={styles.Home_home_section_content_one}>
            <p className={styles.title_1}>{homeSection.title_1}</p>
            <p className={styles.title_1}>{homeSection.title_2}</p>
            <p className={styles.title_2}>{homeSection.title_3}</p>
          </div>
          <Image
            className={styles.Home_home_section_content_two}
            src={homeSection.profileImg}
            height={"25"}
            width={"15"}
            unoptimized={true}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
