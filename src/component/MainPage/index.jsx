import { Grid } from "@mui/material";
import React from "react";
import FieldName from "./FieldName";

const MainPage = () => {
  return (
    <section style={{ background: "#202020",margin:"0" }} id="Home">
      <Grid container justifyContent="center">
        <Grid item>
          <FieldName />
        </Grid>
      </Grid>
    </section>
  );
};

export default MainPage;
