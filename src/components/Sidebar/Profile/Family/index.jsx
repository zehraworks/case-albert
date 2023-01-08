import React from "react";
import styles from "./index.module.css";

export function Family() {
  return (
    <div className={styles.family}>
      <h4 className={styles.text}>Family</h4>
      <div className={styles.members}>
        <div className={styles.img} />
        <div className={styles.img} />
        <div className={styles.img} />
      </div>
    </div>
  );
}
