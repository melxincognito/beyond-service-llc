import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import ramadaProjectData from "../../../data/ramadaProjectData.json";
import Lightbox from "../../lightbox/Lightbox";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MobileRamadaGallery() {
  const [clickedImg, setClickedImg] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  // click to open the lightbox to the current image
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
  };
  // lightbox option to navigate to the right
  const handleRotationRight = () => {
    const totalLength = ramadaProjectData.ramadaProjectData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = ramadaProjectData.ramadaProjectData[0].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = ramadaProjectData.ramadaProjectData.filter((item) => {
      return ramadaProjectData.ramadaProjectData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  // lightbox option to navigate to the left
  const handleRotationLeft = () => {
    const totalLength = ramadaProjectData.ramadaProjectData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = ramadaProjectData.ramadaProjectData[totalLength - 1].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = ramadaProjectData.ramadaProjectData.filter((item) => {
      return ramadaProjectData.ramadaProjectData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <ImageList
        sx={{ width: 265, height: 450 }}
        variant="quilted"
        cols={2}
        rowHeight={121}
      >
        {ramadaProjectData.ramadaProjectData.map((item, index) => (
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
  );
}
