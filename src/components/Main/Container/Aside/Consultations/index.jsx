import React from "react";
import { Consultant } from "./Consultant";
import { Text } from "./Text";
import styles from "./index.module.css";
import { useGlobal } from "../../../../../context/GlobalContext";

export function Consultations() {
  const { value } = useGlobal();
  return (
    <div className={styles.consultations}>
      <Text />
      {value.consultations.map((cons, ind) => {
        return (
          <Consultant key={ind} doc={cons.doctor} time={cons.time} img={cons.photo} />
        );
      })}
    </div>
  );
}
