import React from "react";
import { Box, Button } from "@mui/material";
const ContactMe = () => {
  return (
    <div>
      <Box
        sx={{
          fontSize: "40px",
          fontWeight: "700",
          paddingBottom: "20px",
          color: "#DC5F00",
          textAlign: "center",
        }}>
        Connect for creative collaboration.
      </Box>
      <Box
        sx={{
          fontSize: "20px",
          fontWeight: "350",
          paddingBottom: "20px",
          color: "#000000",
          textAlign: "center",
        }}>
        Feel free to reach out to me for any inquiries or collaborations via the
        provided contact information.
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DC5F00",
            "&:hover": {
              fontWeight: "600",
              backgroundColor: "#999999",
              color: "#000000",
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(1)", // Shrinks when clicked
            },
          }}
          onClick={() => {
            window.location.href = "mailto:basak.manisha94@gmail.com";
          }}>
          Let's chat
        </Button>
      </Box>
    </div>
  );
};

export default ContactMe;
