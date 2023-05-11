import React from "react";
// import { hero_image, ankit_panchal.jpg, resumefile } from "../assests";
import { Button, Grid, Typography } from "@mui/material";
import { Download, Face } from "@mui/icons-material";

export default function About() {
  return (
    <Grid container>
      <Grid
        item
        mb={"10vh"}
        lg={12}
        xs={12}
        sm={12}
        md={12}
        container
        justifyContent={"space-between"}
        pt={"14vh"}
      >
        <Grid
          item
          lg={6}
          xs={12}
          sm={12}
          md={12}
          container
          justifyContent={"center"}
          alignItems="center"
        >
          <Grid
            item
            lg={10}
            xs={11}
            sm={11}
            md={11}
            gap={2}
            container
            className="animate__animated animate__fadeInLeft"
          >
            <Typography variant="h3" fontWeight={"bold"}>
              About <span style={{ color: "red" }}>me</span> <Face />{" "}
            </Typography>
            <Typography variant="subtitle1" color={"gray"}>
              Hi 👋 My name is{" "}
              <strong style={{ color: "red" }}> Ankit Panchal </strong>. I am a{" "}
              <u>React JS Frontend Developer</u>. I create cool websites &
              softwares & web applications. I&#39;m Strong in design and
              integration with intuitive problem-solving skills. Proficient in
              ReactJS, HTML, CSS, JAVASCRIPT, and Next Js . Passionate about
              implementing and launching new projects. Ability to translate
              business requirements into technical solutions.
            </Typography>
            <Grid container pt={4} gap={3}>
              <a
                href={"/Resume.pdf"}
                style={{ textDecoration: "none" }}
                download={
                  "Ankit Panchal CV" + " " + new Date().toLocaleDateString()
                }
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "gold", color: "black", width: 120 }}
                >
                  CV &nbsp;&nbsp;
                  <Download />
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sm={12}
          md={12}
          container
          justifyContent={"flex-end"}
        >
          <img
            src={"/ankit_panchal.jpg"}
            width={"80%"}
            style={{ borderRadius: "10%" }}
            className="animate__animated animate__fadeInRight "
            alt="hero image"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
