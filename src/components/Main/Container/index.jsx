import React from "react";
import { Aside } from "./Aside";
import { Overview } from "./Overview";
import styles from "./index.module.css"

export function Container() {
  return (
    <div className={styles.container}>
      <Overview />
      <Aside />
    </div>
  );
}
