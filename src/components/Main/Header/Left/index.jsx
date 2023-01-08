import React from "react";
import { SearchBar } from "./SearchBar";
import { IconsSection } from "./IconsSection";
import styles from "./index.module.css";

export function Left() {
  return (
    <div className={styles.left}>
      <SearchBar />
      <IconsSection />
    </div>
  );
}
