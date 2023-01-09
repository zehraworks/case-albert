import React from "react";
import { ScanCard } from "./ScanCard";
import { Text } from "./Text";
import styles from "./index.module.css"

export function Section() {
  return (
    <div className={styles.section}>
      <Text />
      <div className={styles.cards}>
        <ScanCard />
        <ScanCard />
        <ScanCard />
      </div>
    </div>
  );
}
