import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import { Box } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase-config";

export default function RamadaGallery() {
  const [ramadaPhotos, setRamadaPhotos] = useState([]);

  React.useEffect(() => {
    onValue(ref(db, "OutdoorProjectGalleries", +"/Zero"), (snapshot) => {
      setRamadaPhotos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((img) => {
          setRamadaPhotos((oldArray) => [...oldArray, img]);
          return img;
        });
      }
    });
  }, []);

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
          {ramadaPhotos.map((subarray) =>
            subarray.map((image) => (
              <div className="each-slide" key={image.id}>
                <div
                  style={{
                    backgroundImage: `url(${image.img}})`,
                    height: "29rem",
                    backgroundSize: "cover",
                    borderRadius: "5px 5px 0px 0px",
                  }}
                ></div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>{image.tag}</span>
                </div>
              </div>
            ))
          )}
        </Slide>
      </Box>
    </div>
  );
}
