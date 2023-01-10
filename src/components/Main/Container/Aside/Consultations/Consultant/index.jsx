import React from "react";
import styles from "./index.module.css";
import { BsPlayCircle } from "react-icons/bs";


export function Consultant({doc, time, img}) {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <img className={styles.img} src={img} />
        <div className={styles.info}>
          <h5 className={styles.name}>{doc}</h5>
          <p className={styles.time}>{time}</p>
        </div>
      </div>
      <BsPlayCircle className={styles.icon} />
    </div>
  );
}
