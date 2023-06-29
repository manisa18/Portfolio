import React from "react";
import { Box, Button, Link } from "@mui/material";
import bg from "../image/background.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = () => {
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
          fontWeight: "700",
          zIndex: 1,
          color: "#fff",
          fontSize: "32px",
        }}>
        <Box>
          It's nice to meet you! <span>&#x1F60A;</span>{" "}
        </Box>
        <Box sx={{ fontSize: "20px", fontWeight: "300", padding: "20px 0" }}>
          Feel free to reach out for collaborations or just a friendly hello.
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            margin: "20px 0",
            alignItems: "center",
            justifyContent: { sm: "left", md: "center" },
          }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#DC5F00",
              borderRadius: 10,

              padding: "10px 30px",
              "&:hover": {
                backgroundColor: "#999999",
              },
            }}
            onClick={() => {
              window.location.href = "mailto:basak.manisha94@gmail.com";
            }}>
            Contact Me
          </Button>
          <Link
            sx={{ color: "#ffff" }}
            href="https://www.linkedin.com/in/manisa-basak-6625301b7/"
            target="_blank"
            rel="noopener">
            <LinkedInIcon fontSize="inherit" sx={{ fontSize: "40px" }} />
          </Link>
          <Link
            sx={{ color: "#ffff" }}
            href="https://github.com/manisa18"
            target="_blank"
            rel="noopener">
            <GitHubIcon fontSize="inherit" sx={{ fontSize: "40px" }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
