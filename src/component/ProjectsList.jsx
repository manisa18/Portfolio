import React from "react";
import { Box, Button } from "@mui/material";
import recommendationEngine from "../image/recommendationEngine.svg";
import podcast from "../image/podcast.svg";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <Box
      sx={{
        perspective: "1200px", // Adds depth effect
        width: { xs: "100%", sm: "300px" },
        height: { xs: "400px", sm: "400px" },
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover .flip-container": {
          transform: "rotateY(180deg)", // Flip when hovered
        },
      }}>
      <Box
        className="flip-container"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease-in-out",
          transformOrigin: "center",
          "&:hover": {
            transform: "rotateY(0deg)", // Ensures smooth rotation without shifting
          },
        }}>
        {/* Front Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#DC5F00",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backfaceVisibility: "hidden",
          }}>
          <Box sx={{ padding: "10px 10px 0" }}>
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                maxHeight: "70%",
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: "600",
                paddingTop: "15px",
                textAlign: "center",
              }}>
              {title}
            </Box>
          </Box>
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#DC5F00",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}>
          <Box sx={{ padding: "4rem 10px 0" }}>
            <Box
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: "600",
                padding: "10px 0",
                textAlign: "center",
              }}>
              {title}
            </Box>
            <Box
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                textAlign: "justify",
                padding: { xs: "5px", md: "10px" },
                flex: 1,
              }}>
              {description}
            </Box>
            <Button
              variant="outlined"
              sx={{
                marginTop: "10px",
                width: { xs: "100%", md: "80%" },
                borderColor: "#fff",
                borderRadius: "10px",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "#000",
                  color: "#000",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => window.open(link, "_blank")}>
              View Project
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ProjectsList = () => {
  const projects = [
    {
      image: recommendationEngine,
      title: "Recommendation Engine",
      description:
        "This individual project is a content-based movie recommendation engine. Using Pandas, NumPy, Scikit-learn, NLTK, and cosine similarity in Python, it calculates similarity scores among movies and recommends the top 5 similar movies. The recommendations are displayed using Streamlit, providing an intuitive interface for users to explore movie suggestions.",
      link: "https://github.com/manisa18/movie-recommendation-engine",
    },
    {
      image: podcast,
      title: "Podcast Player",
      description:
        "This is a group project where we developed a web application for podcast enthusiasts. Users can enjoy their favorite podcasts, upload content, and create individual podcasts to share, listen, and follow. The application is built using ReactJS, Node.js, Express.js, MongoDB, and MUI for a seamless user experience.",
      link: "https://github.com/manisa18/flipr_podcast",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
        padding: { xs: "20px", md: "40px" },
        minHeight: "100vh",
      }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

export default ProjectsList;
