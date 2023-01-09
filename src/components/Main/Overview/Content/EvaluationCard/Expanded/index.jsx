import React from "react";
import { Unexpanded } from "../Unexpanded";
import styles from "./index.module.css";

export function Expanded() {
  return (
    <div className={styles.container}>
      <Unexpanded className={styles.component} />
      <div className={styles.box}>
        <p className={styles.text}>Excellent! One of the best result!</p>
        <button className={styles.btn}>More</button>
      </div>
    </div>
  );
}
