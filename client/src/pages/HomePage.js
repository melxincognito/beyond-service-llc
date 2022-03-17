import React from "react";
import { Card, CardContent, Typography, Box, Container } from "@mui/material";
import HeaderImg from "../assets/photos/sunset.jpg";
import homepageImgGalleryData from "../data/homepageImageGallery.json";
// testimonies
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// framer motion
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  // center card style
  const cardStyles = {
    borderRadius: "5px 25px 5px 25px",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.53)",
    padding: 2,
    spacing: 12,
  };

  const contentContainerStyles = {
    display: "grid",
    justifyItems: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: "15px",
  };

  const topImageContainerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    marginTop: "12rem",
  };

  const topImageStyles = {
    width: "100%",
    height: "50%",
    position: "absolute",
    zIndex: -1,
  };

  const customerReviewContainerStyles = {
    backgroundColor: "gray",
    width: "95%",
    borderRadius: 1.5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "15rem",
  };
  const customerReviewCardStyles = {
    borderRadius: "5px 25px 5px 25px",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    margin: "10px auto 10px auto",
    backgroundColor: "rgba(255, 255, 255, 0.53)",
  };

  const horizontalImgGalleryContainerStyles = {
    position: "absolute",
    width: "100%",
    bgcolor: "accordion.main",
    left: 0,
  };
  const horizontalImgGalleryBottomSpacerStyles = {
    margin: "0 0 -50px 0",
    height: "100px",
    bgcolor: "primary.dark",
  };

  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box id="mainContainer" sx={contentContainerStyles}>
          <Box id="imageContainer" sx={topImageContainerStyles}>
            <img
              style={topImageStyles}
              src={HeaderImg}
              alt="
        desert landscape"
            />{" "}
            <Box id="cardContainer" sx={{ position: "absolute" }}>
              <Card sx={cardStyles}>
                <CardContent>
                  <div>
                    <Typography variant="h4">
                      {" "}
                      Phonix General Contractors
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h4" color="success.main">
                      Beyond Service LLC{" "}
                    </Typography>
                  </div>{" "}
                  <div>
                    <Typography variant="h4">
                      {" "}
                      Our quality of service is BEYOND comparison!
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>{" "}
        <hr size="1" width="100%" color="gray" />
        <Box sx={customerReviewContainerStyles}>
          <ArrowBackIosIcon />
          <Box>
            {" "}
            <Card sx={customerReviewCardStyles}>
              {" "}
              <CardContent>
                <Container
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "pink",
                    height: 100,
                    width: 100,
                    margin: "5px auto",
                  }}
                />{" "}
                <Typography> Customer Name</Typography>
                <Typography variant="caption">
                  {" "}
                  " They did a great job on my home construction project. I
                  would recommend them to anyone in the valley "
                </Typography>
                <div>
                  <ul style={{ display: "inline-flex" }}>
                    <li style={{ marginRight: 20 }}> </li>
                    <li style={{ marginRight: 20 }}> </li>
                    <li> </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Box>
          <ArrowForwardIosIcon />
        </Box>
        <hr size="1" width="100%" color="gray" />
        {/*horizontal image gallery */}
        <Box
          id="horizontalImgGalleryContainer"
          sx={horizontalImgGalleryContainerStyles}
        >
          {" "}
          <ul
            style={{
              marginLeft: 0,
              padding: 0,
              whiteSpace: "nowrap",
              width: "100%",
              overflowX: "auto",
            }}
          >
            {homepageImgGalleryData.homepageImgGalleryData.map((item) => (
              <img src={item.img} alt={item.alt} width="220" height="220" />
            ))}{" "}
          </ul>{" "}
          <Box id="spacer" sx={horizontalImgGalleryBottomSpacerStyles}>
            {" "}
          </Box>
        </Box>{" "}
      </motion.div>
    </AnimatePresence>
  );
}
