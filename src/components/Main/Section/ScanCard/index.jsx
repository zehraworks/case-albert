import React from "react";
import styles from "./index.module.css";

export function ScanCard({ date, title, location }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.date}>{date}</h4>
      <h3 className={styles.scan}>{title}</h3>
      <p className={styles.location}>{location}</p>
    </div>
  );
}
