import React from "react";
import TextAnimation from "react-animate-text";
import { FaHeart } from "react-icons/fa";
import useStyles from "./styles";

const FieldName = () => {
  const classes = useStyles();

  return (
    <div className={classes.title}>
      <TextAnimation>
        <h1 className={classes.text1}>HI I am !</h1>
        <h2 className={classes.text2}> Afrah Abualrob</h2>
        <p className={classes.text3}>Frontend Developer</p>
        <TextAnimation animation="backspace">
          <FaHeart />
        </TextAnimation>
      </TextAnimation>
    </div>
  );
};

export default FieldName;
