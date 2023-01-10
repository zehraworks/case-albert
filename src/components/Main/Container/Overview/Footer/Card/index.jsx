import React from 'react'
import styles from "./index.module.css"

export function Card({name, point}) {
  return (
    <div className={styles.card}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.score}>{point} points</p>
    </div>
  )
}
