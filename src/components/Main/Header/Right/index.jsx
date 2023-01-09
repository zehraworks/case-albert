import React from "react";
import { GetCons } from "./GetCons";
import styles from "./index.module.css"

export function Right() {
  return (
    <div className={styles.right}>
      <GetCons />
    </div>
  );
}
