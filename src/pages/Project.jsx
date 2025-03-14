import React from "react";
import { Box, Typography } from "@mui/material";
import project from "../image/projects.jpg";
import ProjectsList from "../component/ProjectsList";
import ContactMe from "../component/ContactMe";
const Project = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          width: "100vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
        }}>
        <img
          src={project}
          alt="aboutme"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#000",
          width: "100%",
          height: "auto",
          padding: "10%",
          color: "#fff",
        }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontWeight: "700", color: "#FFFF" }}>
          PROJECTS
        </Typography>
        <Box sx={{ padding: "0px 10%" }}>
          <ProjectsList />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#EEEEEE",
          color: "#ffff",
          padding: "5%",
          width: "100vw",
          flexDirection: "column",
        }}>
        <Box sx={{ padding: "50px 5%" }}>
          <ContactMe />
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
