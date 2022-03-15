import React, { Component } from "react";
import {
  Card,
  CardContent,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import itemData from "../data/photogalleryimgs.json";
import itemDataBathrooms from "../data/photogalleryimgs.json";
import itemDataRemodels from "../data/photogalleryimgs.json";

export default class ProjectGalleryPage extends Component {
  render() {
    const mainCardStyles = {
      bgcolor: "secondary.light",
      borderRadius: 2,
      padding: 2,
    };

    const headerCardStyles = {
      display: "flex",
      justifyContent: "center",
      margin: 2,
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)",
      borderRadius: "4px 25px 4px 25px",
      bgcolor: "secondary.light",
    };

    const mainContainerStyles = {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      margin: "auto",
      justifyContent: "space-around",
    };

    const galleryStyles = {
      width: 500,
      height: 450,
      overflowY: "scroll",
    };

    const galleryTitleStyles = {
      display: "flex",
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
                <Box sx={galleryStyles}>
                  <Box sx={galleryTitleStyles}>
                    <Typography variant="h6"> Bathrooms</Typography>
                  </Box>

                  <ImageList variant="masonry" cols={3} gap={8}>
                    {itemDataBathrooms.itemDataBathrooms.map((item) => (
                      <ImageListItem
                        key={item.photoIndex}
                        onClick={() => this.setState({ isOpen: true })}
                      >
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>

                <Box sx={galleryStyles}>
                  <Box sx={galleryTitleStyles}>
                    <Typography variant="h6"> Kitchen Remodels</Typography>
                  </Box>

                  <ImageList variant="masonry" cols={3} gap={8}>
                    {itemDataRemodels.itemDataRemodels.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
                <Box sx={galleryStyles}>
                  <Box sx={galleryTitleStyles}>
                    <Typography variant="h6"> Project 3</Typography>
                  </Box>

                  <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
                <Box sx={galleryStyles}>
                  <Box sx={galleryTitleStyles}>
                    <Typography variant="h6"> Project 4</Typography>
                  </Box>
                  <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </Box>
            </Card>
            <hr size="1" width="100%" color="gray" />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
}
