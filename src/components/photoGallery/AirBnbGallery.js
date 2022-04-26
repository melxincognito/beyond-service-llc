import { Box } from "@mui/material";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase-config";

export default function AirbnbGallery() {
  const [photos, setPhotos] = React.useState([]);

  // importing the database to get the approved reviews
  React.useEffect(() => {
    onValue(ref(db, "ImageGalleries", +"/AirBnbImageGalleries"), (snapshot) => {
      setPhotos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((image) => {
          setPhotos((oldArray) => [...oldArray, image]);
          return image;
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
          maxWidth: "47rem", // wider than the other galleries to fit photos better
          margin: "auto",
          padding: "auto",
          borderRadius: "5px 5px 5px 5px",
          boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.36)",
        }}
      >
        <Slide>
          {photos.map((subarray) =>
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
