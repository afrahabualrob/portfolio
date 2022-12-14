import React from "react";

const Heading = ({ text, styling}) => {
  return (
    <h2  style={styling} >
      {text}
    </h2>
  );
};

export default Heading;
