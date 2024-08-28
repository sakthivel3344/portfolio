import React, { useEffect, useState } from "react";
import styles from "./navBar.module.scss";
import Toggle from "../toggle/toggle";
import { LocalStorage } from "@/utils/storage";
import { updateSiteTheme } from "@/utils/sharedFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageDisplayName } from "@/helpers/sharedFunctions";
import { useRouter } from "next/router";
import { updateCurrentPage } from "@/redux/slices/sideBar";

const NavBar = () => {
  const [currentPageDisplayName, setCurrentPageDisplayName] = useState();
  const [isLightMode, setIsLightMode] = useState();

  const sideBarState = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleThemeOnChange = (value) => {
    if(value) {
      updateSiteTheme("light")
    } else {
      updateSiteTheme("dark")
    }
    setIsLightMode(value);
  }

  useEffect(() => {
    let localVal = LocalStorage.get("site_theme");
    console.log("localVal", localVal);
    setIsLightMode(localVal === "light");
    let pageName = getCurrentPageDisplayName(router.pathname);
    dispatch(updateCurrentPage(pageName));
  } ,[]);

  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBar_left_content}>{sideBarState.currentPage}</div>
      <div className={styles.NavBar_right_content}>
        <Toggle value={isLightMode} onChange={handleThemeOnChange} />
        Profile
      </div>
    </div>
  );
};

export default NavBar;
