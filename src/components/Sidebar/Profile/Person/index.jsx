import React from "react";
import { useGlobal } from "../../../../context/GlobalContext";
import styles from "./index.module.css";

export function Person() {
  const { value } = useGlobal();
  return (
    <div className={styles.person}>
      <img className={styles.img} src={value.photo} />
      <h3 className={styles.name}>{value.name}</h3>
    </div>
  );
}
