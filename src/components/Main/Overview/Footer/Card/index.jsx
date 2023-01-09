import React from 'react'
import styles from "./index.module.css"

export function Card() {
  return (
    <div className={styles.card}>
        <h4 className={styles.name}>Name Surname</h4>
        <p className={styles.score}>80 points</p>
    </div>
  )
}
