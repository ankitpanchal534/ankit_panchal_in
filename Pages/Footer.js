import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { LinkedIn, Instagram, Facebook, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  return (
    <Grid
      container
      spacing={1}
      p={2}
      pt={6}
      pb={6}
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <Grid
        item
        lg={4}
        xs={11}
        md={4}
        sm={4}
        container
        justifyContent={"center"}
        alignItems="center"
      >
        <Button
          href="https://www.linkedin.com/in/ankit-panchal-76569a172/"
          target="_blank"
        >
          {" "}
          <LinkedIn />
        </Button>
        <Button
          href="https://www.instagram.com/__ankit.panchal/"
          target="_blank"
        >
          {" "}
          <Instagram />
        </Button>
        <Button
          href="https://www.facebook.com/ankitpanchaldudhla"
          target="_blank"
        >
          {" "}
          <Facebook />
        </Button>
        <Button href="whatsapp:+919568376762">
          {" "}
          <WhatsApp />
        </Button>
        <Grid container justifyContent={"center"} pt={2}>
          <Typography variant="overline">
            All rights reserved <a href="#">Ankit Panchal</a>&nbsp;@2023
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
