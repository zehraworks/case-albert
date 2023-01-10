import React from "react";
import { Card } from "./Card";
import styles from "./index.module.css";
import { useGlobal } from "../../../../../context/GlobalContext";

export function Footer() {
  const { value } = useGlobal();
  return (
    <div className={styles.footer}>
      <h3 className={styles.other}>Other</h3>
      <div className={styles.cards}>
        {value.family.map((person, ind) => {
          return <Card key={ind} name={person.name} point={person.point} />;
        })}
      </div>
    </div>
  );
}
