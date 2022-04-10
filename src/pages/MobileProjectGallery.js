import React, { Component } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import MobileRamadaGallery from "../components/photoGallery/mobileGalleries/MobileRamadaGallery";
import MobileBathroomGallery from "../components/photoGallery/mobileGalleries/MobileBathroomGallery";
import MobileKitchenGallery from "../components/photoGallery/mobileGalleries/MobileKitchenGallery";
import MobileMiscGallery from "../components/photoGallery/mobileGalleries/MobileMiscGallery";
import BottomNavLabel from "../components/navigation/BottomNavLabel";

export default class MobileProjectGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <MobileRamadaGallery />,
    };
  }

  updateBathroomGallery = () => {
    this.setState({ content: <MobileBathroomGallery /> });
  };

  updateRamadaGallery = () => {
    this.setState({ content: <MobileRamadaGallery /> });
  };

  updateKitchenGallery = () => {
    this.setState({ content: <MobileKitchenGallery /> });
  };

  updateMiscGallery = () => {
    this.setState({ content: <MobileMiscGallery /> });
  };

  render() {
    const titleDisplayStyles = {
      display: "flex",
      justifyContent: "center",
      bgcolor: "secondary.light",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
      borderRadius: "4px 25px 4px 25px",
      width: "97%",
      padding: 1,
      marginBottom: 4,
    };

    const mainContainerStyles = {
      display: "grid",
      alignContent: "center",
      margin: 2,
      zIndex: -2,
    };

    const buttonsContainerStyles = {
      display: "grid",
      justifyContent: "center",
      zIndex: 0,
    };

    return (
      <AnimatePresence>
        <motion.div
          transition={{ delay: 0.17 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box
            sx={{
              marginBottom: 2,
              display: "flex-box",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Box sx={titleDisplayStyles}>
              <Typography variant="h4"> Project Gallery</Typography>
            </Box>
            <Container sx={mainContainerStyles}>
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "black",
                    marginBottom: 3,
                    boxShadow: "0px 5px 15px 8px rgba(0,0,0,0.54)",
                    borderRadius: 2,
                  }}
                >
                  <div> {this.state.content}</div>
                </Box>
              </Container>
              <Box sx={buttonsContainerStyles}>
                <Box id="buttonsContainer" sx={{ display: "grid", gap: 1 }}>
                  <Button
                    variant="contained"
                    onClick={this.updateRamadaGallery}
                  >
                    View Outdoor Addition Gallery
                  </Button>
                  <Button
                    variant="contained"
                    onClick={this.updateBathroomGallery}
                  >
                    View Bathroom Gallery{" "}
                  </Button>
                  <Button
                    variant="contained"
                    onClick={this.updateKitchenGallery}
                  >
                    View Kitchen Gallery
                  </Button>
                  <Button variant="contained" onClick={this.updateMiscGallery}>
                    View Misc Gallery
                  </Button>
                </Box>
              </Box>
            </Container>
            <hr size="1" width="100%" color="gray" />
            <BottomNavLabel />
          </Box>
        </motion.div>
      </AnimatePresence>
    );
  }
}
