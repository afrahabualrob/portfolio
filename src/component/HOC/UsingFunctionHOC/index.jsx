import Heading from "../Heading/index";
import React from "react";
import styledHeading from "../styledHeading";

const UsingHOC = () => {
  const WhiteTitle = styledHeading(Heading, "whiteTitle");
  const DarkTitle = styledHeading(Heading, "dark");
  return (
    <>
      <WhiteTitle text="Submit" onClick={() => alert("Submit")} disabled />
      <DarkTitle text="Click" onClick={() => alert("Submit")} />
    </>
  );
};

export default UsingHOC;
