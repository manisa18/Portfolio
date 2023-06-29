import React from "react";
import { Box, Typography } from "@mui/material";
import aboutme from "../image/aboutme.jpg";
import ContactMe from "../component/ContactMe";
const AboutMe = () => {
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
          src={aboutme}
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
          sx={{ fontSize: "40px", fontWeight: "700", color: "#DC5F00" }}>
          ABOUT ME
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: "20px",
            fontWeight: "300",
            color: "#ffff",
            padding: "50px 5%",
          }}>
          I'm Manisa Basak, a Full Stack Developer and self-taught graphic
          designer. With experience in various frameworks and a passion for
          machine learning, I thrive as a problem solver. I enjoy transforming
          challenges into triumphs and excelling as a competitive programmer.
          <br />
          <br /> My versatile skill set allows me to adapt to different project
          requirements and deliver exceptional results. I stay updated with the
          latest advancements in machine learning and enjoy applying its
          principles to solve real-world problems. With a dedication to
          continuous improvement and a strong analytical mindset, I am excited
          to contribute to meaningful projects and make a lasting impact.
        </Typography>
        <Box
          sx={{
            fontSize: "42px",
            fontWeight: "700",
            paddingBottom: "20px",
            color: "#DC5F00",
            padding: "50px",
          }}>
          My Skillsets <span>&#x1F4BB;</span>
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
            padding: "50px 5%",
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
            padding: "50px 5%",
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

export default AboutMe;
