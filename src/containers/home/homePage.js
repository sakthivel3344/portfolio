import React from 'react'
import styles from "./homePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.Home}>
      <section className={styles.Home_home_section}>
        <div className={styles.Home_home_section_content}>
          <div className={styles.Home_home_section_content_one}>
            <p className={styles.title_1}>HELLO</p>
            <p className={styles.title_1}>I AM SAKTHIVEL</p>
            <p className={styles.title_2}>APPLICATION DEVELOPER</p>
          </div>
          <div className={styles.Home_home_section_content_two}></div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;