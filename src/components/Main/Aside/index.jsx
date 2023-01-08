import React from 'react'
import styles from "./index.module.css";
import { Consultations } from './Consultations'
import { Sync } from './Sync'

export function Aside() {
  return (
    <div className={styles.aside}>
        <Sync/>
        <Consultations/>
    </div>
  )
}
