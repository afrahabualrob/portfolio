import { Grid } from "@mui/material";
import React from "react";
import FieldName from "./FieldName";

const MainPage = () => {
  return (
    <div style={{ background: "#202020",margin:"0" }}>
      <Grid container justifyContent="center">
        <Grid item>
          <FieldName />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
