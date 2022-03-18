import * as React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import itemData from "../data/photogalleryimgs.json";
import Lightbox from "../components/lightbox/Lightbox";

export default function ProjectGalleryPage() {
  const [clickedImg, setClickedImg] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
  };

  const handleRotationRight = () => {
    const totalLength = itemData.itemData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = itemData.itemData[0].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = itemData.itemData.filter((item) => {
      return itemData.itemData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = itemData.itemData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = itemData.itemData[totalLength - 1].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = itemData.itemData.filter((item) => {
      return itemData.itemData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  // styles variables
  const mainCardStyles = {
    bgcolor: "secondary.light",
    borderRadius: 2,
    padding: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  };

  const headerCardStyles = {
    display: "flex",
    justifyContent: "center",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    borderRadius: "4px 25px 4px 25px",
    bgcolor: "secondary.light",
  };

  const mainContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    margin: "auto",
    justifyContent: "center",
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          transition={{ delay: 0.17 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Card sx={mainCardStyles}>
            <CardContent sx={headerCardStyles}>
              <Typography variant="h4"> Project Gallery</Typography>
            </CardContent>
            <Box sx={mainContainerStyles}>
              <div className="wrapper">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto",
                    gap: 15,
                  }}
                >
                  {itemData.itemData.map((item, index) => (
                    <div key={index} className="wrapper-images">
                      <img
                        src={item.img}
                        alt={item.tag}
                        height="200"
                        width="200"
                        onClick={() => handleClick(item, index)}
                      />
                    </div>
                  ))}
                </div>
                {clickedImg && (
                  <Lightbox
                    clickedImg={clickedImg}
                    handleRotationLeft={handleRotationLeft}
                    handleRotationRight={handleRotationRight}
                    setClickedImg={setClickedImg}
                  />
                )}
              </div>
            </Box>
          </Card>

          <hr size="1" width="100%" color="gray" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
