import React from "react";
import { Card, CardContent, Grid, Typography, Container } from "@mui/material";
import styles from "./style.module.css";
import Heading from "../HOC/Heading";
import styledHeading from "../HOC/styledHeading";

const Skills = () => {
  const WhiteTitle = styledHeading(Heading, "whiteTitle");

  const skills = [
    {
      name: "html5",
      icon: "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/HTML5-256.png",
    },
    {
      name: "css3",
      icon: "https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-64.png",
    },
    { name: "js", icon: "https://img.icons8.com/ios-filled/2x/javascript.png" },
    {
      name: "react",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-256.png",
    },
    {
      name: "css_module",
      icon: "https://cdn4.iconfinder.com/data/icons/eon-education-i/32/program_code_coding-64.png",
    },
    {
      name: "sass",
      icon: "https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/640/sass-64.png",
    },
  ];
  return (
    <div className={styles.wrapper} id="skills">
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
                sx={{ px: 4, pt: 1, backgroundColor: "#fff" }}
                className={styles.skillCard}
              >
                <Grid container justifyContent="center">
                  <Grid item>
                    <CardContent>
                      <Typography
                        variant="h6"
                        display="block"
                        gutterBottom
                        color="#a16653;"
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
