import React from "react";
/* import styles from "./index.module.css";
 */import { Left } from "./Left";
import { Right } from "./Right";

export function Header() {
  return (
    <div className="flex justify-between h-20 ">
      <Left />
      <Right />
    </div>
  );
}
