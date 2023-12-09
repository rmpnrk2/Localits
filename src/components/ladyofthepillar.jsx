import React from "react";
import "../Fix.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Ladyofthepillar = () => {
  return (
    <Parallax
      pages={1}
      style={{
        top: "0",
        left: "0",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          padding: "10rem",
        }}
      >
        Building in progress...
      </h1>
    </Parallax>
  );
};

export default Ladyofthepillar;
