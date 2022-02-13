import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import HeaderImg from "../assets/sunset.jpg";

export default function HomePage() {
  const cardStyles = {
    borderRadius: 5,
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  const topImageStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
  };

  return (
    <>
      <Box sx={topImageStyles}>
        <img
          height="350"
          width="90%"
          src={HeaderImg}
          alt="
        sunset"
        />
      </Box>

      <Card sx={cardStyles}>
        <CardContent>
          <div>
            <Typography variant="h4">Hello There! </Typography>
          </div>{" "}
          Beyond services thrives by running our business on flexibility and are
          driven by providing our customer innovative and cost effective
          services Who we are Valley locals who are passionate about building up
          our local community
        </CardContent>
        <CardContent>
          <div>
            <Typography variant="h4">Who we are</Typography>
          </div>
          Valley locals who are passionate about building up our local
          community. We take the time to understand each clients needs and
          provide the best results to build up our community to the best of our
          abilities.
        </CardContent>
      </Card>
      <hr size="2" width="95%" color="white" />
    </>
  );
}
