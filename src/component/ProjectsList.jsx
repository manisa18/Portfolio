import React from "react";
import { Box, Button } from "@mui/material";
import recommendationEngine from "../image/recommendationEngine.svg";
import podcast from "../image/podcast.svg";

const ProjectCard = ({ image, title, description, link }) => (
  <Box
    sx={{
      backgroundColor: "#DC5F00",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}>
    <img
      src={image}
      alt={title}
      style={{ maxWidth: "100%", paddingBottom: "20px" }}
    />
    <Box sx={{ fontSize: "30px", fontWeight: "500" }}>{title}</Box>
    <Box
      sx={{
        fontSize: "15px",
        padding: "15px 10px",
        textAlign: "justify",
        flexGrow: 1,
      }}>
      {description}
    </Box>
    <Button
      variant="outlined"
      sx={{
        borderColor: "#fff",
        marginTop: "auto",
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
);

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
        gap: 2,
        flexDirection: { sm: "row", xs: "column" },
        alignItems: "stretch",
      }}>
      {projects.map((project, index) => (
        <Box key={index} sx={{ flex: 1 }}>
          <ProjectCard {...project} />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectsList;
