import React from "react";
import styles from "./index.module.css"

export function ScanCard() {
  return <div className={styles.card}>
   <h4 className={styles.date}>Date</h4>
   <h3 className={styles.scan}>Scan Type</h3>
   <p className={styles.location}>Location</p>
  </div>;
}
