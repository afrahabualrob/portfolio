import React from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import Dots from "../Dots/index";

const DescriptionAbout = () => {
  return (
    <Card>
      <Box sx={{ backgroundColor: "rgba(0,0,0,.03)", py: 2, pl: 3 }}>
        <Grid container justifyContent="flex-start">
          <Grid item>
            <Dots />
          </Grid>
        </Grid>
      </Box>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          l am Afrah Abualrob I am completed my graduation in bachelor degree of
          Computer System Engineering. I am very interested in frontend field
          and find myself in it, I get a frontend course & have traning with
          foothill technology as a frontend developer. Now I want to improve
          myself to get a job & continue my future career in it ...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DescriptionAbout;
