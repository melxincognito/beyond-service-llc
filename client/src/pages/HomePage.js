import React from "react";
import { Card, CardContent, Typography, Box, Container } from "@mui/material";
import HeaderImg from "../assets/photos/sunset.jpg";

// testimonies
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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

  const topImageStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
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

  return (
    <Box
      sx={{
        display: "grid",
        justifyItems: "center",
        gap: "15px",
      }}
    >
      <Box sx={topImageStyles}>
        <img
          style={{
            width: "100%",
            borderRadius: 5,
          }}
          src={HeaderImg}
          alt="
        sunset"
        />
        <Box sx={{ position: "absolute" }}>
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

      {/* top intro pic with card */}

      <hr size="1" width="100%" color="gray" />

      {/*customer testimonials */}
      <Box
        sx={{
          backgroundColor: "gray",
          width: "95%",
          borderRadius: 1.5,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
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
                " They did a great job on my home construction project. I would
                recommend them to anyone in the valley "
              </Typography>
              <div>
                <ul style={{ display: "inline-flex" }}>
                  <li style={{ marginRight: 20 }}> </li>
                  <li style={{ marginRight: 20 }}> </li>
                  <li> </li>
                </ul>
              </div>
            </CardContent>
          </Card>{" "}
        </Box>
        <ArrowForwardIosIcon />
      </Box>
      <hr size="1" width="100%" color="gray" />
    </Box>
  );
}
