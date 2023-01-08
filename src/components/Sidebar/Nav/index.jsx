import React from "react";
import styles from "./index.module.css";
import { FiLogOut } from "react-icons/fi";

export function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.navs}>
        <h3 className={styles.nav}>Dashboards</h3>
        <h3 className={styles.nav}>Statistics</h3>
        <h3 className={styles.nav}>Family</h3>
        <h3 className={styles.nav}>Doctors</h3>
      </div>
      <div className={styles.logout}>
        <h3 className={styles.text}>Log out</h3>
        <FiLogOut />
      </div>
    </div>
  );
}
