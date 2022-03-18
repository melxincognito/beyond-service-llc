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

  const introCardContentContainerStyles = {
    display: "flex",
    gap: 2,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    justifyItems: "center",
    marginRight: "10rem",
    width: "90%",
  };
  const introContentCardStyles = {
    borderRadius: "5px 25px 5px 25px",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    margin: 5,
    padding: 2,
    backgroundColor: "rgba(255, 255, 255, 0.53)",
  };

  const customerReviewContainerStyles = {
    backgroundColor: "gray",
    width: "95%",
    borderRadius: 1.5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
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
  const spacerStyles = {
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
        <Box id="headImgContainer" sx={contentContainerStyles}>
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
        <Box
          id="pageContentContainer"
          sx={{
            marginTop: "20rem",
            display: "grid",
            gridTemplateColumns: "auto",
          }}
        >
          <Box id="introContentContainer" sx={introCardContentContainerStyles}>
            {" "}
            <Box>
              <Card sx={introContentCardStyles}>
                <CardContent
                  sx={{
                    borderRadius: "5px 25px 5px 25px",
                    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
                    margin: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.53)",
                  }}
                >
                  <Typography variant="h4" color="secondary.main">
                    {" "}
                    Who are we?
                  </Typography>
                </CardContent>{" "}
                <CardContent>
                  {" "}
                  <Typography>
                    Phoenix locals providing only the BEST general contracting
                    services to customers in the valley. We provide all types of
                    services to our customers, from home remodels, plumbing and
                    HVAC. Look around to find out more about what Beyond
                    Services has to offer, don't be afraid to use or contact
                    form or give us a call to find out more about how we can
                    help turn your house into a the perfect home!
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Card
                sx={{
                  borderRadius: "50%",
                  width: "260px",
                  height: "260px",
                  position: "relative",
                  top: "12rem",
                  left: "2rem",
                  border: "5px rgba(0, 0, 0, 0.55) solid;",
                }}
              >
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="pool"
                  style={{
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",
                  }}
                />
              </Card>
              <Card
                sx={{
                  borderRadius: "50%",
                  width: "350px",
                  height: "350px",
                  position: "relative",
                  bottom: "15rem",
                  left: "9rem",
                  zIndex: -1,
                  border: "5px orange solid;",
                }}
              >
                {" "}
                <img
                  src="https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                  alt="pool"
                  style={{
                    width: "350px",
                    height: "350px",
                    borderRadius: "50%",
                  }}
                />
              </Card>
            </Box>
          </Box>
          <Box id="spacer" sx={spacerStyles}>
            {" "}
          </Box>
          <Box sx={customerReviewContainerStyles}>
            {" "}
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
          <Box id="spacer" sx={spacerStyles}>
            {" "}
          </Box>
        </Box>{" "}
        {/*horizontal image gallery in seperate container on bottom bc it keeps getting pushed to the top */}
        <Box
          id="horizontalImgGalleryContainer"
          sx={horizontalImgGalleryContainerStyles}
        >
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
              <a href="#">
                <img
                  src={item.img}
                  alt={item.alt}
                  width="220"
                  height="220"
                  style={{ margin: " 0 7px" }}
                />
              </a>
            ))}{" "}
          </ul>{" "}
          <Box id="spacer" sx={spacerStyles}>
            {" "}
          </Box>
        </Box>{" "}
      </motion.div>
    </AnimatePresence>
  );
}
