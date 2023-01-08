import React from "react";
import styles from "./index.module.css";
import SyncImage from "../../../../../assets/sync.svg";

export function SyncImg() {
  return <img src={SyncImage} alt="" className={styles.svg} />;
}
