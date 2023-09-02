import React from "react";
import styles from "./styles.module.css";
export default function Loading() {
  return (
    <div className={styles.active}>
      <div className={styles.loader}></div>
    </div>
  );
}
