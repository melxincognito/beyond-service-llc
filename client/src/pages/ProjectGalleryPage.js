import * as React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import itemData from "../data/photogalleryimgs.json";

export default function ProjectGalleryPage() {
  const mainCardStyles = {
    bgcolor: "secondary.light",
    borderRadius: 2,
    padding: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
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
              <div>
                {itemData.itemData.map((item) => (
                  <img
                    src={item.img}
                    alt={item.tag}
                    height="200"
                    width="200"
                    srl_gallery_image="true"
                  />
                ))}
              </div>
            </Box>
          </Card>
          <hr size="1" width="100%" color="gray" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
