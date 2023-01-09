import React from "react";
import styles from "./index.module.css";

const arr = [
  {
    svg: "",
    system: "",
    score: "",
  },
];

export function Unexpanded() {
  return (
    <div className={styles.box}>
      <div className={styles.svg}></div>
      <p className={styles.score}>score</p>
      <h4 className={styles.system}>system</h4>
    </div>
  );
}
