import React from "react";
import { Card, CardContent, Grid, Typography, Container } from "@mui/material";
import Heading from "../HOC/Heading";
import styledHeading from "../HOC/styledHeading";
import useStyles from "./styles";

const Skills = () => {
  const WhiteTitle = styledHeading(Heading, "whiteTitle");
  const classes = useStyles();

  const skills = [
    {
      name: "C++",
      icon: "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/HTML5-256.png",
    },
    {
      name: "HTML5",
      icon: "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/HTML5-256.png",
    },
    {
      name: "CSS3",
      icon: "https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-64.png",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-64.png",
    },
    { name: "JS", icon: "https://img.icons8.com/ios-filled/2x/javascript.png" },
    {
      name: "ES6",
      icon: "https://img.icons8.com/ios-filled/2x/javascript.png",
    },

    {
      name: "React",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-256.png",
    },
    {
      name: "css_module",
      icon: "https://cdn4.iconfinder.com/data/icons/eon-education-i/32/program_code_coding-64.png",
    },
    {
      name: "SAAS",
      icon: "https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/640/sass-64.png",
    },
    {
      name: "JSS",
      icon: "https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/640/sass-64.png",
    },
  ];
  return (
    <div className={classes.wrapper} id="skills">
      <Container>
        <WhiteTitle text="skills" />
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 4, sm: 7, md: 8 }}
          sx={{ mt: 2 }}
        >
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <Card
                sx={{ px: 3, pt: 1, backgroundColor: "#fff" }}
                className={classes.skillCard}
              >
                <Grid container justifyContent="center">
                  <Grid item>
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        display="block"
                        gutterBottom
                        color="#a16653;"
                        className={classes.skill}
                      >
                        {skill.name}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Skills;
