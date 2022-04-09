import React from "react";
import { Slide } from "react-slideshow-image";
import { Box } from "@mui/material";
import "react-slideshow-image/dist/styles.css";

import ramadaProjectData from "../../data/ramadaProjectData.json";

export default function RamadaGallery() {
  return (
    <div>
      <Box
        className="slide-container"
        style={{
          height: "auto",
          backgroundColor: "black",
          color: "white",
          maxWidth: "29rem",
          margin: "auto",
          padding: "auto",
          borderRadius: "5px 5px 5px 5px",
          boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.36)",
        }}
      >
        <Slide>
          {ramadaProjectData.ramadaProjectData.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slideImage.img})`,
                  height: "39rem",
                  backgroundSize: "cover",
                  borderRadius: "5px 5px 0px 0px",
                }}
              ></div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>{slideImage.tag}</span>
              </div>
            </div>
          ))}
        </Slide>
      </Box>
    </div>
  );
}
