import React from "react";
import { ScanCard } from "./ScanCard";
import { Text } from "./Text";
import styles from "./index.module.css";
import { useGlobal } from "../../../context/GlobalContext";

export function Section() {
  const { value } = useGlobal();
  return (
    <div className={styles.section}>
      <Text />
      <div className={styles.cards}>
        {value.medications.map((appointment, ind) => {
          return <ScanCard key={ind} date={appointment.date} title={appointment.title} location={appointment.location} />;
        })}
      </div>
    </div>
  );
}
