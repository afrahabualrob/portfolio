import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

const ImageAbout = () => {
  return (
    <Card sx={{ p: 3 }}>
      <CardMedia
        component="img"
        image="./assets/Images/myPicture.jpg"
        alt="My Picture"
      />
      <Grid container justifyContent="center">
        <Grid item sx={{ pt: 3 }}>
          <CardMedia
            component="img"
            width="70"
            height="70"
            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
            alt="React Logo"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ImageAbout;
