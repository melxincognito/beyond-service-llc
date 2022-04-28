import { Box } from "@mui/material";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bathroomRemodelData from "../../data/bathroomRemodelData.json";
import { ref, onValue, set } from "firebase/database";
import { db } from "../../firebase-config";

export default function BathroomGallery() {
  let data = [];

  const todatabase = () => {
    bathroomRemodelData.bathroomRemodelData.map((image) => {
      data.push(image);
      return data;
    });
    console.log(data);
  };

  const toStorage = (e) => {
    e.preventDefault();
    data.map((image, index) =>
      set(ref(db, "ImageGalleries/" + "BathroomGallery/" + index), {
        img: image.img,
        tag: image.tag,
        id: image.id,
      })
    );
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
          {bathroomRemodelData.bathroomRemodelData.map((slideImage, index) => (
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
      <button onClick={todatabase}> click me</button>
      <button onClick={toStorage}> Send to storage</button>
    </div>
  );
}
