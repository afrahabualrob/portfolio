import React from "react";
import styles from "./style.module.css";
import Heading from "../HOC/Heading";
import styledHeading from "../HOC/styledHeading";
import {
  Grid,
  Container,
  Card,
  CardContent,
  CardActions,
  Fab,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectTechnology from "./ProjectTechnology";

const Projects = () => {
  const DarkTitle = styledHeading(Heading, "dark");
  const projects = [
    {
      id: 0,
      title: "TodoApp Project",
      description:
        "This is my first react project ,Through this application, can added an tasks, delete, search and indicated it as completed",
      link: "https://github.com/afrahabualrob/AfrahRepo/tree/final-project",
      details: [
        {
          Description: [
            " Added or deleted a task",
            "Indicated task as completed",
            "Search a task",
          ],
        },
        {
          Technology: [
            "Hooks",
            "State & Props",
            "Life Cycle Methods",
            "Context",
          ],
        },
      ],
    },
    {
      id: 1,
      title: "e-commerce Project",
      description:
        "E-commerce React Project full functionlity and fully responsive",
      link: "https://github.com/afrahabualrob/AfrahRepo/tree/final-project",

      details: [
        {
          Description: [
            "Add/Remove products to cart",
            "Add/remove products into favorite list",
            "See each product details (route to details page)",
            "Filtration products according to category ,colors and price ",
            "Login and Logout",
          ],
        },
        {
          Technology: [
            "React axios",
            "Contexts ",
            "Router",
            "Restful API",
            "Material UI",
            "Suspense fallback",
            "Lazy loading",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "portfolio Project",
      description:
        "portfolio Project ia a react project using react concepts plus JSS",
      link: "https://github.com/afrahabualrob/AfrahRepo/tree/final-project",
      details: [
        { Description: ["Skills", "Experiences","Recant projects"] },
        { Technology: ["JSS", "restful API", "Material UI"] },
      ],
    },
  ];

  return (
    <Container maxWidth="md" className={styles.projectSection}>
      <DarkTitle text="recent projects" />
      <Grid container justifyContent="space-between" spacing={5} rowSpacing={4}>
        {projects.map((project, index) => {
          const { id, title, description, link, details } = project;

          return (
            <Grid item key={id} xs={12} md={4}>
              <Card className={styles.projectCard} key={index}>
                <h2 className={styles.projectTitle}>{title}</h2>
                <CardContent className={styles.projectDescription}>
                  {description}
                </CardContent>
                <div className={styles.projectCardWrapper}></div>
                {details.map((item, index) => (
                  <ProjectTechnology item={item} key={index} />
                ))}

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.projectLink}
                  >
                    <Fab
                      variant="extended"
                      sx={{
                        height: "40px",
                        background: "#fff",
                        color: " #a16653",
                      }}
                      className={styles.fab}
                    >
                      <GitHubIcon sx={{ mr: 1 }} />
                      <span>Github</span>
                    </Fab>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
