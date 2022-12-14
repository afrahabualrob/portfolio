import React from "react";
import TextAnimation from "react-animate-text";
import { FaHeart } from "react-icons/fa";
import styles from "./style.module.css";

const FieldName = () => {
  const TextShow = () => {
    setTimeout(() => {
      (<p>Afrah</p>);
    }, 2000);
  };
  return (
    <div className={styles.title}>
      {TextShow()}
      <TextAnimation>
        <h1 className={styles.text1}>HI I am !</h1>
        <h2 className={styles.text2}> Afrah Abualrob</h2>
        <p className={styles.text3}>Frontend Developer</p>
        {/* <h1 className={styles.text4}>{String("<   />")}</h1> */}
        <TextAnimation animation="backspace">
          <FaHeart />
        </TextAnimation>
      </TextAnimation>
    </div>
  );
};

export default FieldName;
