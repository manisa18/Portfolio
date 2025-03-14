import React from "react";
import { Box, Typography } from "@mui/material";
import aboutme from "../image/aboutme.jpg";
import ContactMe from "../component/ContactMe";
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
      {/* Banner Image */}
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

      {/* About Me Section */}
      <Box
        sx={{
          backgroundColor: "#000",
          width: "100%",
          height: "auto",
          padding: "10% 20%",
          color: "#fff",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {/* Floating Image with Stylish Background */}
          <Box sx={{ position: "relative", marginRight: "50px" }}>
            {/* Floating Stylish Graphic */}
            <Box
              sx={{
                position: "absolute",
                width: "320px",
                height: "320px",
                background: "radial-gradient(circle, #DC5F00, #000)",
                borderRadius: "50%",
                filter: "blur(50px)",
                animation: "float 4s ease-in-out infinite",
                zIndex: 1,
              }}></Box>

            {/* Floating Profile Image */}
            <img
              src={aboutme}
              alt="aboutme"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid #DC5F00",
                position: "relative",
                zIndex: 2,
                animation: "float 4s ease-in-out infinite",
              }}
            />
          </Box>

          {/* About Me Text */}
          <Box sx={{ maxWidth: "700px" }}>
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
                color: "#fff",
                padding: "5% 2%",
                textAlign: "justify",
                fontFamily: "'Montserrat', sans-serif",
              }}>
              👋 <strong>Hey there!</strong> I’m <strong>Manisa</strong>, a
              passionate <strong>Software Developer Engineer</strong> at
              <strong> Highradius</strong>, diving deep into the ever-evolving
              world of technology and innovation. I love crafting
              <strong> seamless web experiences</strong>, solving{" "}
              <strong>complex problems</strong>, and pushing boundaries with
              cutting-edge tech.
              <br />
              <br />
              💡 My tech journey has been nothing short of{" "}
              <strong>exhilarating!</strong> As a{" "}
              <strong>finalist at Bajaj HackRx 3.0</strong> and a participant in{" "}
              <strong>iHack’21 (ISA-VIT)</strong>, I’ve honed my ability to{" "}
              <strong>think critically, innovate boldly,</strong>
              and <strong>collaborate effectively</strong> in high-stakes,
              real-world problem-solving scenarios.
              <br />
              <br />
              🚀 I thrive on <strong>continuous learning</strong> and growth.
              Being a mentee in <strong>LinkedIn Coaching</strong> and
              <strong> SRE'22 Mentorship</strong>, I actively seek insights from
              industry leaders to refine my skills and stay ahead in the tech
              landscape.
              <br />
              <br />
              🏆 My dedication and enthusiasm have been recognized along the
              way—I was honored as
              <strong> one of the Best Freshers of 2021</strong>, a testament to
              my commitment to excellence and perseverance.
              <br />
              <br />
              🌟 Whether it’s{" "}
              <strong>
                building dynamic web applications, optimizing performance,
              </strong>{" "}
              or exploring <strong>cutting-edge technology</strong>, I’m all
              about creating impactful digital experiences. I’m also exploring{" "}
              <strong>entrepreneurship</strong> and
              <strong> graphic design</strong>, blending creativity with
              technology to bring innovative ideas to life.
              <br />
              <br />
              💬 Let’s <strong>connect, collaborate, and innovate</strong>! If
              you have an exciting project or opportunity, I’d love to hear
              about it.
            </Typography>
          </Box>
        </Box>

        {/* Skills Component */}
        <Skills />
      </Box>

      {/* Contact Me Section */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#EEEEEE",
          color: "#000",
          padding: "5%",
          width: "100vw",
          flexDirection: "column",
        }}>
        <Box sx={{ padding: "50px 5%" }}>
          <ContactMe />
        </Box>
      </Box>

      {/* CSS Keyframes for Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </Box>
  );
};

export default AboutMe;
