import React from "react";
import styles from "./index.module.css";
import { AiOutlineSetting } from "react-icons/ai";
import { SlPieChart } from "react-icons/sl";
import { IoNotificationsOutline } from "react-icons/io5";

export function IconsSection() {
  return (
    <div className={styles.container}>
      <IoNotificationsOutline className={styles.icon} />
      <SlPieChart className={styles.icon} />
      <AiOutlineSetting className={styles.icon} />
    </div>
  );
}
