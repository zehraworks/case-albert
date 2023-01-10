import React from "react";
import { Expanded } from "./EvaluationCard";
import { OverAll } from "./OverAll";
import styles from "./index.module.css";
import { useGlobal } from "../../../../../context/GlobalContext";

export function Content() {
  const { value } = useGlobal();
  return (
    <div className={styles.content}>
      {value.overview.map((item, ind) => {
        return (
          <Expanded
            key={ind}
            className={styles.expanded}
            icon={item.icon}
            name={item.name}
            score={item.value}
          />
        );
      })}
      <OverAll />
      {/* <Expanded className={styles.expanded} />
      <Unexpanded className={styles.unexpanded} />
      <Unexpanded className={styles.unexpanded} />
      <Unexpanded />
       */}
    </div>
  );
}
