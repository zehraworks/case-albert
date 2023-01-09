import React from "react";
import { Header } from "./Header";
import { Section } from "./Section";
import { Container } from "./Container";
import styles from "./index.module.css";

export function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Container />
      <Section />
    </div>
  );
}
