import React from "react";
import { Consultant } from "./Consultant";
import { Text } from "./Text";
import styles from "./index.module.css"

export function Consultations() {
  return (
    <div className={styles.consultations}>
      <Text />
      <Consultant />
      <Consultant />
    </div>
  );
}
