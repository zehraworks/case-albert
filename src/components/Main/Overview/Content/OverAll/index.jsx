import React from "react";
import styles from "./index.module.css";

export function OverAll() {
  return (
    <div className={styles.overall}>
      <h3 className={styles.score}>77</h3>
      <p className={styles.status}>Good</p>
    </div>
  );
}
