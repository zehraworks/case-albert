import React from "react";
import styles from "./index.module.css";

export function Person() {
  return (
    <div className={styles.person}>
      <div className={styles.img} />
      <h3 className={styles.name}>Bill Terner</h3>
    </div>
  );
}
