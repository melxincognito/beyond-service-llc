import { Box } from "@mui/material";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import kitchenRemodelData from "../../data/kitchenRemodelData.json";

export default function KitchenGallery() {
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
          {kitchenRemodelData.kitchenRemodelData.map((slideImage, index) => (
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
