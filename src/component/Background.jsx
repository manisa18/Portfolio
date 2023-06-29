import React from "react";
import bg from "../image/background.png";

const Background = () => {
  return (
    <div>
      <img
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -100,
        }}
        src={bg}
        alt="background"
      />
    </div>
  );
};

export default Background;
