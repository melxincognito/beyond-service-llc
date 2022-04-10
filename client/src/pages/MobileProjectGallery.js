import React, { Component } from "react";
import { Container, Box, Button, Card } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import MobileRamadaGallery from "../components/photoGallery/mobileGalleries/MobileRamadaGallery";
import MobileBathroomGallery from "../components/photoGallery/mobileGalleries/MobileBathroomGallery";
import MobileKitchenGallery from "../components/photoGallery/mobileGalleries/MobileKitchenGallery";

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
  render() {
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
          <Card>
            <Container sx={mainContainerStyles}>
              <Container>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                </Box>
              </Box>
            </Container>
          </Card>
        </motion.div>
      </AnimatePresence>
    );
  }
}
