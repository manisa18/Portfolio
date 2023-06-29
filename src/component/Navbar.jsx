import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();

  const [menuBtn, setMenuBtn] = useState(false);

  const handleButtonClick = (path) => {
    setMenuBtn(false);
    window.location.href = path;
  };

  return (
    <Router>
      <div>
        <AppBar
          position="absolute"
          sx={{
            backgroundColor: "#000000",
            zIndex: 3,
            opacity: 0.8,
            top: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "#DC5F00" }}
              onClick={() => setMenuBtn(!menuBtn)}>
              {menuBtn ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {menuBtn ? <>CLOSE </> : <>MENU</>}
            </Typography>
          </Toolbar>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}>
            <Link
              sx={{ color: "#ffff" }}
              href="https://www.linkedin.com/in/manisa-basak-6625301b7/"
              target="_blank"
              rel="noopener">
              <LinkedInIcon />
            </Link>
            <Link
              sx={{ color: "#ffff" }}
              href="https://github.com/manisa18"
              target="_blank"
              rel="noopener">
              <GitHubIcon />
            </Link>

            <Link
              sx={{ color: "#ffff" }}
              href="mailto:basak.manisha94@gmail.com"
              target="_blank"
              rel="noopener">
              <MailIcon />
            </Link>
          </Toolbar>
        </AppBar>

        {menuBtn ? (
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#000000",
              color: "#ffff",
              zIndex: 2,
              position: "absolute",
            }}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: theme.typography.h3.fontSize,
                display: "flex",
                flexDirection: "column",
              }}>
              <Button
                onClick={() => handleButtonClick("/")}
                sx={{
                  color: "#ffff",
                  textDecoration: "none",
                  fontSize: theme.typography.h3.fontSize,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#DC5F00",
                  },
                }}>
                Home
              </Button>
              <Button
                onClick={() => handleButtonClick("/about")}
                sx={{
                  color: "#ffff",
                  textDecoration: "none",
                  fontSize: theme.typography.h3.fontSize,
                  "&:hover": {
                    color: "#DC5F00",
                    backgroundColor: "transparent",
                  },
                }}>
                About Me
              </Button>
              <Button
                onClick={() => handleButtonClick("/projects")}
                sx={{
                  color: "#ffff",
                  textDecoration: "none",
                  fontSize: theme.typography.h3.fontSize,
                  "&:hover": {
                    color: "#DC5F00",
                    backgroundColor: "transparent",
                  },
                }}>
                Projects
              </Button>
              <Button
                onClick={() => handleButtonClick("/contact")}
                sx={{
                  color: "#ffff",
                  textDecoration: "none",
                  fontSize: theme.typography.h3.fontSize,
                  "&:hover": {
                    color: "#DC5F00",
                    backgroundColor: "transparent",
                  },
                }}>
                Contact
              </Button>
            </Box>
          </Box>
        ) : (
          <div sx={{ position: "absolute", zIndex: -100 }}></div>
        )}
      </div>
    </Router>
  );
};

export default Navbar;
