import React from "react";
import styles from "./style.module.css";

const Logo = () => {
  return (
    <h2 className={styles.logo}>
      <span className={`${styles.l1} ${styles.letter}`}> {String("<")}</span>
      <span className={`${styles.l2} ${styles.letter}`}>A</span>
      <span className={`${styles.l3} ${styles.letter}`}>F</span>
      <span className={`${styles.l4} ${styles.letter}`}>R</span>
      <span className={`${styles.l2} ${styles.letter}`}>A</span>
      <span className={`${styles.l1} ${styles.letter}`}>H</span>
      <span className={`${styles.l3} ${styles.letter}`}>/</span>
      <span className={`${styles.l4} ${styles.letter}`}>{String(">")}</span>
    </h2>
  );
};

export default Logo;
