import React from "react";
import styles from "./toggle.module.scss";

const Toggle = ({ value, onChange }) => {
  const handleClick = () => {
    console.log("value", value);
    onChange(!value);
  };
  return (
    <label
      className={styles.Toggle}
      onClick={handleClick}
    >
      <span
        className={`${styles.slider} ${value ? "" : `${styles.toggle_off}`}`}
      ></span>
    </label>
  );
};

export default Toggle;
