import React from "react";
import { Container, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DraftsIcon from "@mui/icons-material/Drafts";
import useStyles from "./styles";
import Heading from "../HOC/Heading";
import styledHeading from "../HOC/styledHeading";

const Footer = () => {
  const WhiteTitle = styledHeading(Heading, "whiteTitle");
  const classes = useStyles();

  return (
    <footer className={classes.wrapper} id="Contact">
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <WhiteTitle text="Contact me at" />
            <Grid container justifyContent="center" spacing={4}>
              <Grid item>
                <a href="https://www.linkedin.com/in/afrahabualrob-4b5569233 ">
                  <IconButton
                    aria-label="Example"
                    sx={{ background: "#a16653 " }}
                    className={classes.icon}
                  >
                    <GitHubIcon />
                  </IconButton>
                </a>
              </Grid>
              <Grid item>
                <a href="https://www.linkedin.com/in/afrahabualrob-4b5569233 ">
                  <IconButton
                    aria-label="Example"
                    sx={{ background: "#a16653 " }}
                    className={classes.icon}
                  >
                    <DraftsIcon />
                  </IconButton>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
