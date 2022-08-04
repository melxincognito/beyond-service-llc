import React from "react";
import { Box } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ref, onValue, set } from "firebase/database";
import { db } from "../../firebase-config";
import kitchenRemodelData from "../../data/kitchenRemodelData.json";

export default function KitchenGallery() {
  const [kitchenPhotos, setKitchenPhotos] = React.useState([]);

  React.useEffect(() => {
    onValue(ref(db, "KitchenGalleries", +"/Zero"), (snapshot) => {
      setKitchenPhotos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((img) => {
          setKitchenPhotos((oldArray) => [...oldArray, img]);
          return img;
        });
      }
    });
  }, []);

  let data = [];

  const todatabase = () => {
    kitchenRemodelData.kitchenRemodelData.map((image) => {
      data.push(image);
      return data;
    });
    console.log(data);
  };

  const toStorage = (e) => {
    e.preventDefault();
    data.map((image, index) =>
      set(ref(db, "KitchenGalleries/" + "Zero/" + index), {
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
          {kitchenPhotos.map((subarray) =>
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
      <button onClick={todatabase}> click me</button>
      <button onClick={toStorage}> Send to storage</button>
    </div>
  );
}
