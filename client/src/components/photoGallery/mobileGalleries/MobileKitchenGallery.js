import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import kitchenRemodelData from "../../../data/kitchenRemodelData.json";
import Lightbox from "../../lightbox/Lightbox";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MobileKitchenGallery() {
  const [clickedImg, setClickedImg] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  // click to open the lightbox to the current image
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
  };
  // lightbox option to navigate to the right
  const handleRotationRight = () => {
    const totalLength = kitchenRemodelData.kitchenRemodelData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = kitchenRemodelData.kitchenRemodelData[0].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = kitchenRemodelData.kitchenRemodelData.filter((item) => {
      return kitchenRemodelData.kitchenRemodelData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  // lightbox option to navigate to the left
  const handleRotationLeft = () => {
    const totalLength = kitchenRemodelData.kitchenRemodelData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = kitchenRemodelData.kitchenRemodelData[totalLength - 1].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = kitchenRemodelData.kitchenRemodelData.filter((item) => {
      return kitchenRemodelData.kitchenRemodelData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <div>
        <ImageList
          sx={{ width: 350, height: 450 }}
          variant="quilted"
          cols={3}
          rowHeight={121}
        >
          {kitchenRemodelData.kitchenRemodelData.map((item, index) => (
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
          ))}
        </ImageList>
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
