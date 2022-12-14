import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import ImageAbout from "./ImageAbout";
import DescriptionAbout from "./DescriptionAbout";
import Heading from "../HOC/Heading";
import styledHeading from "../HOC/styledHeading";

const About = () => {
  const DarkTitle = styledHeading(Heading, "dark");
  return (
    <Paper elevation={0} sx={{ py: 5 }} id="About">
      <Container maxWidth="lg">
        <DarkTitle text="about  me" />

        <Grid
          container
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
          rowSpacing={{ xs: 6, md: 0 }}
        >
          <Grid item xs={10} md={3}>
            <ImageAbout />
          </Grid>
          <Grid item xs={11} md={7}>
            <DescriptionAbout />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default About;
