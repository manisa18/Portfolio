import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Box } from "@mui/material";
function Skills() {
  const sections = [
    {
      title: "Programming Language",
      items: ["Java", "C++", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["ReactJs", "ExpressJs", "MUI", "Struts", "Spring", "Hibernate"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      items: ["Git", "Github", "Postman", "VS Code", "Eclipse", "JIRA"],
    },
    {
      title: "Testing & Automation",
      items: ["Selenium", "Cucumber", "JUnit", "Mockito"],
    },
  ];

  const Slideshow = () => {
    return (
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          py: 5,
        }}>
        {sections
          .reduce((rows, section, index) => {
            if (index % 2 === 0) {
              rows.push([section, sections[index + 1] || null]); // Pair sections
            }
            return rows;
          }, [])
          .map((pair, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{
                display: "flex",
                flexDirection: rowIndex % 2 === 0 ? "row" : "row-reverse", // Alternating Left & Right
                justifyContent: "center",
                alignItems: "stretch",
                gap: 5,
                flexWrap: "wrap",
              }}>
              {pair.map((section, index) =>
                section ? (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: rowIndex % 2 === 0 ? -100 : 100,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: 1, minWidth: "45%" }}>
                    <Card
                      sx={{
                        width: "20rem",
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        color: "#fff",
                        padding: 4,
                        borderRadius: 3,
                        textAlign: "center",
                        height: "21rem",
                        alignItems: "center",
                        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.4)",
                        },
                      }}>
                      <CardContent>
                        <Typography
                          variant="h4"
                          gutterBottom
                          sx={{
                            fontWeight: "bold",
                            background:
                              "linear-gradient(90deg, #ffcc00, #ff6600)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}>
                          {section.title}
                        </Typography>
                        {/* Skills Section */}
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 2,
                          }}>
                          {section.items.map((item, idx) => (
                            <Typography
                              key={idx}
                              variant="h6"
                              sx={{
                                backgroundColor: "#222",
                                padding: "8px 16px",
                                borderRadius: "10px",
                                transition: "all 0.3s",
                                "&:hover": { backgroundColor: "#444" },
                              }}>
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : null
              )}
            </Box>
          ))}
      </Box>
    );
  };
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "#ffff",
        padding: { xs: "5%", md: "5%", sm: "15%" },
      }}>
      <Box
        sx={{
          fontSize: "42px",
          fontWeight: "500",
          paddingBottom: "10px",
          color: "#DC5F00",
          fontFamily: "'Pacifico', cursive",
        }}>
        Skills{" "}
        <span
          style={{
            display: "inline-block",
            fontSize: "2rem",
            animation: "slide 1.5s infinite alternate ease-in-out",
          }}>
          💻
          <style>
            {`
            @keyframes slide {
              0% { transform: translateX(-10px); }
              100% { transform: translateX(20px); }
            }
          `}
          </style>
        </span>
      </Box>
      <Slideshow />
    </Box>
  );
}

export default Skills;
