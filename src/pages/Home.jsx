import React from "react";
import coder from "../image/coder1.svg";
// import recommendationEngine from "../image/recommendationEngine.svg";
import Box from "@mui/material/Box";
import HomePage from "../component/HomePage";
import ContactMe from "../component/ContactMe";
import ProjectsList from "../component/ProjectsList";
const Home = () => {
  const skillsetsStyle = {
    "& > div": {
      padding: { md: "20px", sm: "15px", xs: "10px" },
      borderRadius: { md: 5, sm: 10, xs: 5 },
      backgroundColor: "rgba(128, 128, 128, 0.16)",
      width: { md: "100%", sm: "20%", xs: "20%" },
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "500",
    },
  };
  return (
    <Box>
      <HomePage />
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#000000",
          color: "#ffff",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}>
        <Box
          sx={{
            padding: { xs: "10%", sm: "15%", md: "15% 5%" },
            width: { sm: "70%", md: "50%" },
          }}>
          <Box
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              paddingBottom: "20px",
              color: "#DC5F00",
            }}>
            The Prologue <span>&#x1F44B;</span>
          </Box>
          <Box sx={{ fontSize: "25px", paddingBottom: "10px" }}>
            I'm Manisa Basak, a Full Stack Developer and self taught graphic
            designer.
          </Box>
          <Box sx={{ fontSize: "25px", paddingBottom: "10px" }}>
            I worked on various frameworks. I am also a Machine Learning
            Enthusiast.
          </Box>
          <Box sx={{ fontSize: "25px", paddingBottom: "10px" }}>
            thrive as a problem solver, transforming challenges into triumphs as
            a competitive programmer.
          </Box>
        </Box>
        <Box
          sx={{ padding: { md: "10% 0" }, width: { sm: "100%", md: "50%" } }}>
          <img width="100%" src={coder} alt="coder"></img>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#ffff",
          padding: { xs: "5%", md: "5%", sm: "15%" },
        }}>
        <Box
          sx={{
            fontSize: "42px",
            fontWeight: "700",
            paddingBottom: "20px",
            color: "#DC5F00",
          }}>
          Skillsets <span>&#x1F4BB;</span>
        </Box>
        <Box
          sx={{
            fontSize: "30px",
            fontWeight: "500",
            paddingBottom: "20px",
          }}>
          Languages
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "inherit",
            gap: 4,
            flexDirection: "column",
          }}>
          <Box sx={{ display: "flex", gap: 4, ...skillsetsStyle }}>
            <Box>C</Box>
            <Box>C++</Box>
            <Box>Java</Box>
            <Box>Python</Box>
          </Box>
          <Box sx={{ display: "flex", gap: 4, ...skillsetsStyle }}>
            <Box>HTML</Box>
            <Box>CSS</Box>
            <Box>JavaScript</Box>
            <Box>SQL</Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: "40px",
            fontSize: "30px",
            fontWeight: "500",
            paddingBottom: "20px",
          }}>
          Frameworks
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "inherit",
            gap: 4,
            flexDirection: "column",
          }}>
          <Box sx={{ display: "flex", gap: 4, ...skillsetsStyle }}>
            <Box>ReactJs</Box>
            <Box>NodeJs</Box>
            <Box>MUI</Box>
            <Box>MySQL</Box>
          </Box>
          <Box sx={{ display: "flex", gap: 4, ...skillsetsStyle }}>
            <Box>MongoDB</Box>
            <Box>ExpressJs</Box>
            <Box>Git</Box>
            <Box>Github</Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#000000",
          color: "#ffff",
          padding: "0 10% 10%",

          flexDirection: "column",
        }}>
        <Box
          sx={{
            fontSize: "42px",
            fontWeight: "700",
            paddingBottom: "20px",
            color: "#DC5F00",
            textAlign: "center",
          }}>
          Projects
        </Box>
        <Box
          sx={{
            fontSize: "20px",
            paddingBottom: "50px",
            color: "#EEEEEE",
            textAlign: "center",
          }}>
          Innovate, collaborate, and revolutionize with our cutting-edge
          technology that pushes boundaries and exceeds expectations.
        </Box>
        <ProjectsList />
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#EEEEEE",
          color: "#ffff",
          padding: "7%",

          flexDirection: "column",
        }}>
        <Box>
          <ContactMe />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
