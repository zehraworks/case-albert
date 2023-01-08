import React from "react";
import { Nav } from "./Nav";
import { Profile } from "./Profile";
import styles from "./index.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <Nav />
    </aside>
  );
}
