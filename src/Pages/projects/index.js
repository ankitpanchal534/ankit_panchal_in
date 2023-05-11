import React from "react";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";

export default function Projects() {
  const lightMode = true;
  return (
    <Grid container pt={4}>
      <Grid
        item
        lg={12}
        xs={12}
        sm={12}
        md={12}
        flexDirection="column"
        container
        justifyContent={"center"}
        alignItems="center"
        p={4}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          Latest Projects
        </Typography>
        <Typography
          sx={{ maxWidth: 700, opacity: 0.6, fontFamily: "sans-serif" }}
          textAlign={"center"}
        >
          Here are some examples of my past work. Each project showcases my
          skills in developing modern and responsive websites and applications.
        </Typography>
        <hr color="gold" width={100} />
      </Grid>
      <Grid
        container
        item
        lg={12}
        xs={12}
        sm={12}
        md={12}
        justifyContent="center"
        alignItems={"center"}
        mb={4}
        gap={4}
      >
        {projectData.map((item, index) => (
          <ProjectCard
            lightMode={lightMode}
            key={index}
            index={index}
            name={item.name}
            description={item.description}
            link={item.link}
            image={item.image}
          />
        ))}
      </Grid>
      {/* <Grid container item lg={12} xs={12} sm={12} md={12} justifyContent="center" alignItems={'center'} mb={4} gap={4}>
                <Button variant='outlined' sx={{ borderRadius: 9, color: lightMode ? 'blue' : 'gold', textTransform: 'capitalize' }}> Explore More Projects &nbsp;<MoreHorizOutlined /> </Button>
            </Grid> */}
    </Grid>
  );
}
