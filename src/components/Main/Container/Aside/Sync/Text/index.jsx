import React from "react";
import styles from "./index.module.css";

export function Text() {
  return (
    <div className={styles.text}>
      <h4 className={styles.title}>Sync with your medical record</h4>
      <p className={styles.description}>
        Keep your doctor informed about the condition
      </p>
    </div>
  );
}
