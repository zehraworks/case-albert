import React from 'react'
import styles from "./index.module.css";

export function Text() {
  return (
    <div className={styles.text}>
        <h4 className={styles.title}>Consultations</h4>
        <p className={styles.all}>All</p>
    </div>
  )
}
