import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import kitchenRemodelData from "../../../data/kitchenRemodelData.json";
import Lightbox from "../../lightbox/Lightbox";

import { ref, onValue, set } from "firebase/database";
import { db } from "../../../firebase-config";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MobileKitchenGallery() {
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

  var number = kitchenPhotos.length;
  const clickedd = () => {
    console.log(number);
  };

  const [clickedImg, setClickedImg] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  // click to open the lightbox to the current image
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
  };
  // lightbox option to navigate to the right
  const handleRotationRight = () => {
    const totalLength = kitchenPhotos.subarray.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = kitchenPhotos.subarray[0].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = kitchenPhotos.subarray.filter((item) => {
      return kitchenPhotos.subarray.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  kitchenPhotos.map((item) => item.length);

  // lightbox option to navigate to the left
  const handleRotationLeft = () => {
    const totalLength = kitchenPhotos.map((item) => item.length);
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = kitchenPhotos.map((item) => item[totalLength - 1].img);
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = kitchenPhotos.map((item) =>
      item.filter((object) => {
        return kitchenPhotos.map((item) => item.indexOf(object) === newIndex);
      })
    );
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <div>
        <ImageList
          sx={{ width: 265, height: 450 }}
          variant="quilted"
          cols={2}
          rowHeight={121}
        >
          {kitchenPhotos.map((subarray) =>
            subarray.map((item, index) => (
              <ImageListItem
                key={index}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.tag}
                  loading="lazy"
                  onClick={() => handleClick(item, index)}
                />
              </ImageListItem>
            ))
          )}
        </ImageList>
        <button onClick={clickedd}> click me</button>
        {clickedImg && (
          <Lightbox
            clickedImg={clickedImg}
            handleRotationLeft={handleRotationLeft}
            handleRotationRight={handleRotationRight}
            setClickedImg={setClickedImg}
          />
        )}
      </div>
    </div>
  );
}
