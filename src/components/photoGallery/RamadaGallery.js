import React from "react";
import { Slide } from "react-slideshow-image";
import { Box } from "@mui/material";
import "react-slideshow-image/dist/styles.css";

import ramadaProjectData from "../../data/ramadaProjectData.json";

import { ref, onValue, set } from "firebase/database";
import { db } from "../../firebase-config";

export default function RamadaGallery() {
  const data = [];

  const todatabase = () => {
    ramadaProjectData.ramadaProjectData.map((image) => {
      data.push(image);
      return data;
    });
    console.log(data);
  };

  const toStorage = (e) => {
    e.preventDefault();
    data.map((image, index) =>
      set(ref(db, "ImageGalleries/" + "RamadaProjectGalleries/" + index), {
        img: image.img,
        tag: image.tag,
        id: image.id,
      })
    );
    console.log("data sent");
  };
  return (
    <div>
      <Box
        className="slide-container"
        style={{
          height: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.56)",
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
        <button onClick={todatabase}> click me</button>
        <button onClick={toStorage}> Send to storage</button>
      </Box>
    </div>
  );
}
