import React from "react";
import { Expanded, Unexpanded } from "./EvaluationCard";
import { OverAll } from "./OverAll";
import styles from "./index.module.css"

export function Content() {
  return (
    <div className={styles.content}>
      <Expanded className={styles.expanded} />
      <Unexpanded className={styles.unexpanded}/>
      <Unexpanded />
      <OverAll />
    </div>
  );
}
