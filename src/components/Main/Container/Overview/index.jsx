import React from 'react'
import { Content } from './Content'
import { Footer } from './Footer'
import { Title } from './Title'
import styles from "./index.module.css";

export function Overview() {
  return (
    <div className={styles.overview}>
      <Title />
      <Content />
      <hr className={styles.line}/>
      <Footer />
    </div>
  );
}
