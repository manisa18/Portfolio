import React, { useState, useEffect } from "react";
import bg from "../image/background.png";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  const [text, setText] = useState("");
  const fullText = "I, the Innovative Full Stack Developer, Code Creativity.";
  const [index, setIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowButtons(true), 500); // Delay button appearance
    }
  }, [index]);

  const handleResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1qk84go6Vrt-wdAJHgjnzdG8bKyDZeclw/view?usp=sharing";
    window.open(resumeUrl);
  };

  const handleButtonClick = (path) => {
    window.location.href = path;
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
      <Box>
        <img
          src={bg}
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            zIndex: -10,
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#000000",
          opacity: 0.83,
          zIndex: -7,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontFamily: "Montserrat",
          color: theme.palette.common.white,
          fontSize: theme.typography.h2.fontSize,
          fontWeight: "700",
          zIndex: 1,
        }}>
        <Box sx={{ display: "inline-block" }}>
          {text}
          <span
            style={{
              color: "#DC5F00",
              animation: "blink 1s step-start infinite",
            }}>
            |
          </span>
        </Box>
        <style>
          {`
            @keyframes blink {
              50% { opacity: 0; }
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
        {showButtons && (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              padding: "40px 0",
              justifyContent: "center",
              zIndex: 5,
              animation: "fadeIn 0.8s ease-in",
            }}>
            <Button
              variant="contained"
              sx={{
                pointer: "cursor",
                backgroundColor: "#DC5F00",
                borderRadius: 20,
                width: "50%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#000000",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  transform: "scale(1)", // Shrinks when clicked
                },
              }}
              onClick={handleResume}>
              Download Resume
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick("/projects")}
              sx={{
                pointer: "cursor",
                borderColor: "#ffff",
                color: "#ffff",
                borderRadius: 20,
                width: "50%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "#ffff",
                  backgroundColor: "#ffff",
                  color: "#000000",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  transform: "scale(1)", // Shrinks when clicked
                },
              }}>
              View Projects
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
