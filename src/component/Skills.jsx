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
          textAlign: "center",
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

      {/* Skills Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          px: { xs: 2, sm: 5, md: 10 },
        }}>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: "1 1 300px", maxWidth: "100%" }}>
            <Card
              sx={{
                minHeight: "21rem",
                maxWidth: "100%",
                minWidth: "280px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                padding: 3,
                borderRadius: 3,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
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
                    background: "linear-gradient(90deg, #ffcc00, #ff6600)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                  {section.title}
                </Typography>

                {/* Skills List */}
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
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
