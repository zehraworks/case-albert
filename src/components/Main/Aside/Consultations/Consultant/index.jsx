import React from "react";
import styles from "./index.module.css";
import { BsPlayCircle } from "react-icons/bs";

export function Consultant() {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <div className={styles.img}></div>
        <div className={styles.info}>
          <h5 className={styles.name}> name</h5>
          <p className={styles.time}>time</p>
        </div>
      </div>
      <BsPlayCircle className={styles.icon} />
    </div>
  );
}
