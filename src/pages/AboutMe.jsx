import React from "react";
import { Box, Typography } from "@mui/material";
import aboutme from "../image/aboutme.jpg";
import ContactMe from "../component/ContactMe";
import { Grid } from "@mui/material";
import Skills from "../component/Skills";

const AboutMe = () => {
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
          sx={{
            fontSize: "40px",
            fontWeight: "500",
            color: "#DC5F00",
            fontFamily: "'Pacifico', cursive",
          }}>
          About Me
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "200",
            color: "#ffff",
            padding: "50px 5%",
            textAlign: "justify",
            fontFamily: "'Montserrat', sans-serif",
          }}>
          👋 Hey there! I'm Manisa, a passionate and driven Software Developer
          Engineer at Highradius, diving deep into the ever-evolving world of
          technology and innovation. From crafting seamless web experiences to
          solving complex problems, I thrive on challenges that push me beyond
          my limits.
          <br />
          <br /> 💡 My journey in tech has been nothing short of exhilarating!
          As a finalist at Bajaj HackRx 3.0 and a participant in iHack’21
          (ISA-VIT), I’ve had the privilege of testing my skills in high-stakes,
          real-world problem-solving scenarios. These experiences have sharpened
          my ability to think critically, innovate boldly, and collaborate
          effectively.
          <br />
          <br />
          🚀 Beyond work, I am on a relentless quest for continuous learning and
          growth. As a mentee in LinkedIn Coaching and SRE'22 Mentorship, I
          actively seek guidance from industry veterans, absorbing insights that
          fuel my evolution as a developer. I firmly believe that growth happens
          outside the comfort zone, and I’m always ready to take on the next big
          challenge!
          <br />
          <br />
          🏆 My dedication and enthusiasm have been recognized along the way—I
          was honored as one of the Best Freshers of 2021, a testament to my
          commitment to excellence and perseverance.
          <br />
          <br />
          🌟 Whether it’s building dynamic web applications, optimizing
          performance, or exploring cutting-edge tech, I’m all about creating
          impact and bringing ideas to life. I’m also deeply interested in
          entrepreneurship and graphic design, exploring ways to merge
          creativity with technology.
          <br />
          <br />
          💬 Let’s connect and collaborate on innovative projects that push
          boundaries! If you have an exciting opportunity, I’d love to hear
          about it.
        </Typography>
        <Skills />
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
