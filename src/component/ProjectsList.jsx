import React from "react";
import { Box, Button } from "@mui/material";
import recommendationEngine from "../image/recommendationEngine.svg";
import podcast from "../image/podcast.svg";
const ProjectsList = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { sm: "row", xs: "column" },
        }}>
        <Box>
          <Box backgroundColor="#DC5F00" sx={{ padding: "10px" }}>
            <img
              src={recommendationEngine}
              alt="recommendationEngine"
              style={{ maxWidth: "100%", paddingBottom: "20px" }}
            />
            <Box sx={{ fontSize: "30px", fontWeight: "500" }}>
              Recommendation Engine
            </Box>
            <Box
              sx={{
                fontSize: "15px",
                paddingTop: "15px",
                textAlign: "justify",
              }}>
              This individual project is a content-based movie recommendation
              engine. Using Pandas, NumPy, Scikit-learn, NLTK, and cosine
              similarity in Python, it calculates similarity scores among movies
              and recommends the top 5 similar movies. The recommendations are
              displayed using Streamlit, providing an intuitive interface for
              users to explore movie suggestions.
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#ffff",
                  margin: "20px 0 10px",
                  borderRadius: 10,
                  color: "#ffff",
                  "&:hover": {
                    borderColor: "#000000",
                    color: "#000000",
                  },
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/manisa18/movie-recommendation-engine"
                  );
                }}>
                View Project
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box backgroundColor="#DC5F00" sx={{ padding: "10px" }}>
            <img
              src={podcast}
              alt="podcast"
              style={{ maxWidth: "100%", paddingBottom: "20px" }}
            />
            <Box sx={{ fontSize: "30px", fontWeight: "500" }}>
              Podcast Player
            </Box>
            <Box
              sx={{
                fontSize: "15px",
                // paddingTop: "15px",
                textAlign: "justify",
                paddingTop: { md: "16px", sm: "55px" },
              }}>
              This is a group project, we are developing a web application for
              podcast enthusiasts. Users can enjoy their favorite podcasts,
              upload their own content, and create individual podcasts to share,
              listen, and follow. The application is built using ReactJS,
              Node.js, Express.js, MongoDB, and Material-UI (MUI) for a seamless and
              visually appealing user experience.
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#ffff",
                  margin: "20px 0 10px",
                  borderRadius: 10,
                  color: "#ffff",
                  "&:hover": {
                    borderColor: "#000000",
                    color: "#000000",
                  },
                }}
                onClick={() => {
                  window.open("https://github.com/manisa18/flipr_podcast");
                }}>
                View Project
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProjectsList;
