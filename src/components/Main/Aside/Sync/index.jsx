import React from "react";
import styles from "./index.module.css";
import { Btn } from "./Btn";
import { SyncImg } from "./SyncImg";
import { Text } from "./Text";

export function Sync() {
  return (
    <div className={styles.container}>
      <SyncImg />
      <Text />
      <Btn />
    </div>
  );
}
