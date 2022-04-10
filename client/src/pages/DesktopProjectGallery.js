import * as React from "react";
import { Card, CardContent, Box, Typography, Container } from "@mui/material";
import RamadaGallery from "../components/photoGallery/RamadaGallery";
import BathroomGallery from "../components/photoGallery/BathroomGallery";
import KitchenGallery from "../components/photoGallery/KitchenGallery";
import { AnimatePresence, motion } from "framer-motion";
import MiscGallery from "../components/photoGallery/MiscGallery";
export default function DesktopProjectGallery() {
  const mainCardStyles = {
    padding: 4,
    borderRadius: 2,
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  };

  const headerCardStyles = {
    display: "flex",
    justifyContent: "center",
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    borderRadius: "4px 25px 4px 25px",
  };

  const mainContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    overflowY: "scroll",
    gap: 8,
    borderRadius: 2,
    justifyContent: "center",
    marginTop: 2,
    paddingBottom: 2,
    bgcolor: "secondary.light",
  };

  const galleryTitleContainerStyles = {
    display: "flex",
    justifyContent: "center",
    bgcolor: "secondary.main",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    borderRadius: "4px 25px 4px 25px",
    margin: "1rem 0",
  };

  return (
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
          <Box id="mainContainer" sx={mainContainerStyles}>
            <div id="ramadaGalleryContainer">
              <CardContent sx={galleryTitleContainerStyles}>
                <Typography> Outdoor Additions</Typography>
              </CardContent>
              <RamadaGallery />
            </div>
            <div id="bathroomGalleryContainer">
              <CardContent sx={galleryTitleContainerStyles}>
                <Typography> Bathroom Remodels</Typography>
              </CardContent>
              <BathroomGallery />
            </div>
            <div id="ramadaGalleryContainer">
              <CardContent sx={galleryTitleContainerStyles}>
                <Typography> Kitchen Remodels</Typography>
              </CardContent>
              <KitchenGallery />
            </div>
            <div id="bathroomGalleryContainer">
              <CardContent sx={galleryTitleContainerStyles}>
                <Typography> Misc</Typography>
              </CardContent>
              <MiscGallery />
            </div>
          </Box>
        </Card>

        <hr size="1" width="100%" color="gray" />
      </motion.div>
    </AnimatePresence>
  );
}
