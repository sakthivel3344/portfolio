import React, { useEffect, useState } from "react";
import styles from "./sideBar.module.scss";
import Image from "next/image";
import profileImg from "@/assets/images/sidebar/demo_profile_img.png";
import { sidebarItemList } from "@/constants/sidebar";
import { useRouter } from "next/router";

const SideBar = () => {
  const [pathName, setPathName] = useState("/");
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  useEffect(() => {
    setPathName(router.pathname);
  }, [router]);

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);
  return (
    <div className={styles.SideBar}>
      <div className={styles.SideBar_header}>
        <Image
          className={styles.profile_img}
          height="200"
          width="200"
          src={profileImg}
          alt="profile image"
        />
        <div className={styles.SideBar_header_content}>
          <p>Sakthivel</p>
          <p>Web Developer</p>
        </div>
      </div>
      <div className={styles.SideBar_content}>
        <ul className={styles.SideBar_content_list_wrapper}>
          {sidebarItemList.map((data) => {
            return (
              <li
                className={`${styles.SideBar_content_list_item} ${
                  pathName === data.path ? styles.active : ""
                }`}
                onClick={() => handleClick(data.path)}
                key={data.id}
              >
                {data?.icon && (
                  <data.icon
                    customClassName={styles.SideBar_content_list_icon}
                  />
                )}
                <p className={styles.SideBar_content_list_item_text}>{data.displayName}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.SideBar_footer}>{/* <p>Update Content</p> */}</div>
    </div>
  );
};

export default SideBar;
