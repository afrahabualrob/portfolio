import React from "react";
import { Grid } from "@mui/material";

const Dots = () => {
  const dots = ["rgb(237, 76, 92)", "rgb(253, 203, 88)", "rgb(120, 177, 89)"];
  return (
    <Grid container justifyContent="center">
      {dots.map((item, index) => (
        <Grid
          key={index}
          sx={{
            backgroundColor: item,
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            mr: 1,
          }}
        ></Grid>
      ))}
    </Grid>
  );
};

export default Dots;
