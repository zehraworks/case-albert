import React from "react";
import styles from "./index.module.css";

export function Unexpanded({icon, name, score}) {
  return (
    <div className={styles.box}>
      <img className={styles.svg} src={icon}/>
      <p className={styles.score}>{score}</p>
      <h4 className={styles.system}>{name}</h4>
    </div>
  );
}
