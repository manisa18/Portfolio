import React from "react";
import { Box, Button } from "@mui/material";
import recommendationEngine from "../image/recommendationEngine.svg";
import podcast from "../image/podcast.svg";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <Box
      sx={{
        perspective: "1000px", // Enables 3D flip effect
        width: "300px",
        height: "400px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center", // Centers the card inside the flex container
        alignItems: "center",
        "&:hover .flip-container": {
          transform: "rotateY(180deg)", // Flip when hovered
        },
      }}>
      {/* Flip Container */}
      <Box
        className="flip-container"
        sx={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease-in-out",
          transform: "rotateY(0deg)", // Default state
        }}>
        {/* Front Side - Image & Title Only */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            padding: "10px",
            backgroundColor: "#DC5F00",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backfaceVisibility: "hidden",
          }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "90%",
              maxHeight: "70%",
              borderRadius: "8px",
            }}
          />
          <Box sx={{ fontSize: "24px", fontWeight: "600", paddingTop: "20px" }}>
            {title}
          </Box>
        </Box>

        {/* Back Side - Title, Description & View Project Button */}
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
            padding: "20px",
            textAlign: "center",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}>
          <Box
            sx={{ fontSize: "24px", fontWeight: "600", paddingBottom: "20px" }}>
            {title}
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              textAlign: "justify",
              paddingBottom: "15px",
              px: "10px"
            }}>
            {description}
          </Box>
          <Button
            variant="outlined"
            sx={{
              marginTop: "20px",
              mx: "10px",
              width: "100%",
              borderColor: "#fff",
              borderRadius: 10,
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
        justifyContent: "space-between",
        alignItems: "center", 
        flexWrap: "wrap", 
        gap: 4, 
        padding: "40px",
        minHeight: "100vh", 
      }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

export default ProjectsList;
