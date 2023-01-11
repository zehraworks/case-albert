import React from 'react'
import { GoSearch } from "react-icons/go";
import styles from "./index.module.css";

export function SearchBar() {
  return (
    <div className={styles.search}>
        <GoSearch className={styles.icon}/> 
        <input type="text" placeholder='Search' className={styles.bar} />
    </div>
  )
}
