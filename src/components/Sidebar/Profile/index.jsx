import React from 'react'
import { Family } from './Family'
import { Person } from './Person'
import styles from "./index.module.css";

export function Profile() {
  return (
    <div className={styles.profile}>
      <Person/>
      <Family/>
    </div>
  )
}
