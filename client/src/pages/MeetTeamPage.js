import React from "react";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import Jonathan from "../assets/Jonathan.jpg";

export default function MeetTeamPage() {
  const cardStyles = {
    borderRadius: 5,
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
  };

  const jonathanCardStyles = {
    display: "flex",
  };
  const jonathanImgStyles = {
    borderRadius: "50%",
    width: "50%",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <Typography variant="h4"> Meet the Team </Typography>

        <CardContent sx={{ display: "flex-box" }}>
          <Card sx={jonathanCardStyles}>
            <CardMedia
              sx={jonathanImgStyles}
              component="img"
              image={Jonathan}
            />
            <Box>
              <Typography variant="h6">
                Jonathan Rodriguez - Director{" "}
              </Typography>
              <Typography>
                {" "}
                Jonathan is a Phoenix local who is passionate about building up
                his community. Jonathan graduated from Concordia
                University-Wisconsin with a Bachelors degree in Business
                Management & Marketing, but his education didn't end there.
                Jonathan had experience working in the construction industry as
                a laborer and he wanted to expand on that so he came back to the
                valley and began studying to get licensed as a general
                contractor while working as a project manager at a flooring
                installation company.{" "}
              </Typography>
            </Box>
          </Card>
          <Box> Juan Rodriguez - Field Manager </Box>
        </CardContent>
      </Card>
      <hr size="2" width="95%" color="white" />
    </>
  );
}
