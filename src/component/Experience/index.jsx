import React from "react";
import { Timeline } from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Card, Grid, Container,Typography } from "@mui/material";
import Heading from "../HOC/Heading";
import styledHeading from "../HOC/styledHeading";
import useStyles from "./styles";

const Experience = () => {
  const DarkTitle = styledHeading(Heading, "dark");
  const classes = useStyles();

  return (
    <section className={classes.wrapper} id="Experience">
      <Container maxWidth="md">
        <DarkTitle text="experience" />

        <Timeline position="alternate" sx={{ mt: 5 }}>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              <b>Internship</b> Sep 2022 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ background: "#fff" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIOGXZkcKNp7iccsRYQoNGyt8HRTf2itz1a40Jk17jw&s"
                  alt="GSG logo"
                  width="auto"
                  height="25px"
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Card sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  display="block"
                  gutterBottom
                  className={classes.name}
                >
                  Gaza Sky Geeks
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Advanced React frontend Technical Training (JS, ES6, Css
                  module , Hooks , Context ,Material UI ,HOC ,consuming a REST
                  API , React Router, GitHub skills)
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              <b>Internship</b> Mar 2022 - Jul 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" sx={{ backgroundColor: "#fff" }}>
                <img
                  src="https://www.foothillsolutions.com/static/squareLogo-00d15a83d026c2e522bcc0b27f1897a8.png"
                  alt="foothill logo"
                  width="auto"
                  height="25px"
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Card sx={{ p: 2, textAlign: "left" }}>
                    <Typography
                      variant="h6"
                      display="block"
                      gutterBottom
                      className={classes.name}
                    >
                      Foothill Technology solution
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Build fully responsive web pages. Interactivity web pages
                      with JavaScript language (plus DOM). Knowledge
                      comprehensive knowledge of React JS platform principle
                      (Axios API,Hooks, Context, and lifecycle method )
                      Maintaining an organized workflow using a project
                      management tool (bitbucket).
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <b>Frontend Course</b> Sep 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: "#fff" }}>
                <img
                  src="https://www.shutterstock.com/image-vector/initial-letter-k-logo-creative-260nw-1586885275.jpg"
                  alt="foothill logo"
                  width="auto"
                  height="25px"
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Card sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  display="block"
                  gutterBottom
                  className={classes.name}
                >
                  knowledge academy
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Build many web pages using HTML, CSS and make this page
                  interactive via JavaScript language.  Using one of the
                  JavaScript libraries (JQuery), build Website Using Bootstrap.
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </section>
  );
};

export default Experience;
