import React from "react";
import { Unexpanded } from "./Unexpanded";
import styles from "./index.module.css";

export function Expanded({ icon, name, score }) {
  return (
    <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.component}>
        <Unexpanded icon={icon} name={name} score={score} />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Excellent! One of the best result!</p>
        <button className={styles.btn}>More</button>
      </div>
    </div>
    </div>
  );
}
