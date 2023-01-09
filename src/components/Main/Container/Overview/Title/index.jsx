import React from "react";
import styles from "./index.module.css";
import { BiDotsVerticalRounded } from "react-icons/bi";

export function Title() {
  return (
    <div className={styles.title}>
      <h2 className={styles.text}>My health overview</h2>
      <BiDotsVerticalRounded className={styles.icon} />
    </div>
  );
}
