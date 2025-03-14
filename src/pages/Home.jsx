import React from "react";
import Manisa from "../image/Manisa.jpeg";
import { Box } from "@mui/material";
import HomePage from "../component/HomePage";
import ContactMe from "../component/ContactMe";
import ProjectsList from "../component/ProjectsList";
import Skills from "../component/Skills";
const Home = () => {
  const Prologue = () => {
    return (
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
          width: "100%",
          margin: 0,
        }}>
        <Box
          sx={{
            padding: { xs: "15% 10%", sm: "15% 15% 10%", md: "15% 5% 10%" },
            width: { sm: "70%", md: "50%" },
          }}>
          <Box
            sx={{
              fontSize: { xs: "1rem", md: "1.4rem" },
              fontWeight: "500",
              color: "#DC5F00",
              fontFamily: "'Pacifico', cursive",
            }}>
            The Prologue <span className="wave">&#x1F44B;</span>
          </Box>
          <Box sx={{ fontSize: "20px", paddingBottom: "10px" }}>
            I’m Manisa, a passionate Software Developer Engineer at Highradius,
            crafting innovative solutions in web development.
          </Box>
          <Box sx={{ fontSize: "20px", paddingBottom: "10px" }}>
            A finalist at Bajaj HackRx 3.0 and a problem-solver at heart, I
            thrive on challenges that push creativity and logic. Recognized
            among the Best Freshers of 2021, I’m driven by continuous learning,
            mentorship, and a vision to make a lasting impact in tech.
          </Box>
          <Box sx={{ fontSize: "20px", paddingBottom: "10px" }}>
            Let me know if you’d like any tweaks!
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            padding: { md: "10% 0" },
            width: { sm: "100%", md: "50%" },
            display: "flex",
            marginTop: { xs: "10%", md: "0" },
            marginBottom: { xs: "20%", md: "0" },
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box
            sx={{
              position: "absolute",
              width: "150px",
              height: "150px",
              backgroundColor: "transparent",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background: "linear-gradient(135deg, #DC5F00, #FF9F45)",
              top: "10%",
              left: "5%",
              animation: "moveTriangle1 4s infinite ease-in-out",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "120px",
              height: "120px",
              backgroundColor: "transparent",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background: "linear-gradient(135deg, #FF9F45, #DC5F00)",
              bottom: "10%",
              right: "5%",
              animation: "moveTriangle2 5s infinite alternate ease-in-out",
            }}
          />

          <img
            src={Manisa}
            alt="Manisa"
            style={{
              width: "20rem",
              height: "20rem",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0px 10px 30px rgba(220, 95, 0, 0.5)",
              animation: "floatImage 3s infinite ease-in-out",
            }}
          />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <HomePage />
      <style>
        {`
            @keyframes wave {
              0% { transform: rotate(5deg); }
              25% { transform: rotate(-20deg); } 
              50% { transform: rotate(5deg); }
              75% { transform: rotate(-20deg); }
              100% { transform: rotate(5deg); }
            }
            .wave {
              display: inline-block;
              animation: wave 1s infinite;
            }
            @keyframes floatImage {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            @keyframes moveTriangle1 {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(10deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            @keyframes moveTriangle2 {
              0% { transform: translateX(0px) rotate(0deg); }
              50% { transform: translateX(-20px) rotate(-10deg); }
              100% { transform: translateX(0px) rotate(0deg); }
            }
         `}
      </style>
      <Prologue />

      <Skills />
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
            fontWeight: "500",
            paddingBottom: "20px",
            color: "#DC5F00",
            textAlign: "center",
            fontFamily: "'Pacifico', cursive",
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
