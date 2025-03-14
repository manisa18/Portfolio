import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Link,
  useMediaQuery,
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Mobile mode check
  const [menuBtn, setMenuBtn] = useState(false);

  const handleButtonClick = (path) => {
    setMenuBtn(false);
    window.location.href = path;
  };

  useEffect(() => {
    document.body.style.overflow = menuBtn ? "hidden" : "visible";
  }, [menuBtn]);

  var menu = {
    Home: {
      name: "Home",
      path: "/",
    },
    "About Me": {
      name: "About Me",
      path: "/about",
    },
    Projects: {
      name: "Projects",
      path: "/projects",
    },
    Contact: {
      name: "Contact",
      path: "/contact",
    },
  };
  return (
    <Router>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#000000",
          opacity: 0.9,
          top: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 20px",
        }}>
        <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "#DC5F00" }}
              onClick={() => setMenuBtn(!menuBtn)}>
              {menuBtn ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Button onClick={() => handleButtonClick("/")}>
              <Typography
                variant="h5"
                sx={{
                  color: "#DC5F00",
                  fontFamily: "'Dancing Script', cursive",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#ffff",
                    transform: "scale(1.2)", // Slightly enlarges the button
                  },
                  "&:active": {
                    transform: "scale(1)", // Shrinks when clicked
                  },
                }}>
                Manisa
              </Typography>
            </Button>
          )}

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                {Object.values(menu).map((item, index) => {
                  if (item.name !== "Home") {
                    return (
                      <Button
                        key={index}
                        onClick={() => handleButtonClick(item.path)}
                        sx={{
                          color: "#ffff",
                          fontWeight: "bold",
                          letterSpacing: "1px",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            color: "#DC5F00",
                            transform: "scale(1.1)", // Slightly enlarges the button
                          },
                          "&:active": {
                            transform: "scale(0.95)", // Shrinks when clicked
                          },
                        }}>
                        {item.name}
                      </Button>
                    );
                  }
                })}
              </Box>
            )}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link
                sx={{
                  color: "#ffff",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#2ea6cb",
                    transform: "scale(1.1)", // Slightly enlarges the button
                  },
                  "&:active": {
                    transform: "scale(0.95)", // Shrinks when clicked
                  },
                }}
                href="https://www.linkedin.com/in/manisa-basak-6625301b7/"
                target="_blank"
                rel="noopener">
                <LinkedInIcon />
              </Link>
              <Link
                sx={{
                  color: "#ffff",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#fffd",
                    transform: "scale(1.1)", // Slightly enlarges the button
                  },
                  "&:active": {
                    transform: "scale(0.95)", // Shrinks when clicked
                  },
                }}
                href="https://github.com/manisa18"
                target="_blank"
                rel="noopener">
                <GitHubIcon />
              </Link>
              <Link
                sx={{
                  color: "#ffff",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#00b300",
                    transform: "scale(1.1)", // Slightly enlarges the button
                  },
                  "&:active": {
                    transform: "scale(0.95)", // Shrinks when clicked
                  },
                }}
                href="mailto:basak.manisha94@gmail.com"
                target="_blank"
                rel="noopener">
                <MailIcon />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Mode - Fullscreen Menu */}
      {isMobile && menuBtn && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "#000000",
            color: "#ffff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 5,
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}>
            {Object.values(menu).map((item, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(item.path)}
                sx={{
                  color: "#ffff",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#DC5F00",
                    transform: "scale(1.1)", // Slightly enlarges the button
                  },
                  "&:active": {
                    transform: "scale(0.95)", // Shrinks when clicked
                  },
                }}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Router>
  );
};

export default Navbar;
