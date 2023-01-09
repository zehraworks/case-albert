import React from "react";
import { Card } from "./Card";
import styles from "./index.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <h3 className={styles.other}>Other</h3>
      <div className={styles.cards}>
        <Card />
        <hr />
        <Card />
        <hr />
        <Card />
      </div>
    </div>
  );
}
