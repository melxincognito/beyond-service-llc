import * as React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { AnimatePresence, motion } from "framer-motion";
import itemData from "../data/photogalleryimgs.json";
import Lightbox from "../components/lightbox/Lightbox";
import { bgcolor } from "@mui/system";

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
    margin: "0 auto",
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
                <Box className="image-list">
                  <ImageList sx={{ width: "100%", height: 450 }}>
                    <ImageListItem key="Subheader" cols={4}>
                      <ListSubheader
                        component="div"
                        sx={{
                          zIndex: 0,
                          bgcolor: "secondary.main",
                          color: "white",
                          borderRadius: "4px 25px 4px 25px",
                          display: "flex",
                          justifyContent: "center",
                          boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
                          marginBottom: 1,
                        }}
                      >
                        Home Remodels
                      </ListSubheader>
                    </ImageListItem>
                    {itemData.itemData.map((item, index) => (
                      <ImageListItem key={index} className="wrapper-images">
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.tag}
                          loading="lazy"
                          onClick={() => handleClick(item, index)}
                        />
                        <ImageListItemBar
                          title={item.tag}
                          actionIcon={
                            <IconButton
                              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                              aria-label={`info about ${item.tag}`}
                            >
                              <InfoIcon />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>

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
