import React from "react";
import styles from "./index.module.css";
import { useGlobal } from "../../../../context/GlobalContext";

export function Family() {
  const { value } = useGlobal();

  return (
    <div className={styles.family}>
      <h4 className={styles.text}>Family</h4>
      <div className={styles.members}>
        {value.family.map((person) => {
          return <img className={styles.img} src={person.photo} key={person.name} />;
        })}
      </div>
    </div>
  );
}
