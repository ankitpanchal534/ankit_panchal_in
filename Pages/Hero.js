"use client"; // this is a client component 👈🏽

import React from "react";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
// import { hero_image } from "../assests";
import "animate.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { darkTheme, lightTheme } from "./theme";
import { Link } from "next/link";
import { useWindowDimention } from "../hooks/useWindowDimentions";

export default function Hero() {
  const { innerWidth } = useWindowDimention();
  const lightMode = true;

  return (
    <Grid container>
      <Grid
        item
        lg={12}
        xs={12}
        sm={12}
        md={12}
        container
        justifyContent={"space-between"}
        pt={innerWidth > 680 ? "9vh" : "14vh"}
      >
        <Grid
          item
          lg={6}
          xs={12}
          sm={6}
          md={6}
          container
          justifyContent={"center"}
          alignItems="center"
          p={2}
        >
          <Grid
            item
            lg={9}
            xs={11}
            sm={11}
            md={11}
            gap={2}
            container
            className="animate__animated animate__fadeInLeft"
          >
            <Typography
              color={"red"}
              fontSize={17}
              style={{ textTransform: "uppercase" }}
            >
              Software Developer
            </Typography>
            <Typography variant="h3" fontWeight={"bold"}>
              Hello, my name <br /> is{" "}
              <span style={{ color: "red" }}>Ankit Panchal</span>
            </Typography>
            <Typography variant="subtitle1" color={"gray"}>
              Strong in design and integration with intuitive problem-solving
              skills. Proficient in ReactJS, HTML, CSS, JAVASCRIPT, and Next Js
              . Passionate about implementing and launching new projects.
              Ability to translate business requirements into technical
              solutions.
            </Typography>
            <Grid container pt={4} gap={3}>
              <Button
                variant="contained"
                LinkComponent={Link}
                href="https://api.whatsapp.com/send/?phone=%2B919568376762&text=Job+Related+Queries+(ref:ankitpanchal.in)"
                sx={{ backgroundColor: "gold", color: "black" }}
                // href="mailto:ankitpanchal534@gmail.com?subject=Job Related Queries (ref:ankitpanchal.in)"
              >
                {" "}
                Hire Me{" "}
              </Button>
              <Button
                href="https://www.linkedin.com/in/ankit-panchal-76569a172/"
                target="_blank"
                variant="outlined"
                style={lightMode ? lightTheme : darkTheme}
              >
                <LinkedInIcon sx={{ color: "blue" }} />
                LinkedIn
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sm={6}
          md={6}
          container
          justifyContent={"flex-end"}
        >
          <img
            src={"/Group 2.svg"}
            width={"100%"}
            className="animate__animated animate__fadeInRight"
            alt="hero image"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
