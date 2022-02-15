import React from "react";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import Jonathan from "../assets/Jonathan.jpg";
import Juan from "../assets/Juan.jpg";

export default function MeetTeamPage() {
  const cardStyles = {
    borderRadius: 5,
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
  };

  const teamMemberCardStyles = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  const teamMemberImgStyles = {
    borderRadius: "50%",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <Typography variant="h4"> Meet the Team </Typography>

        <CardContent sx={{ display: "flex-box" }}>
          <Card sx={teamMemberCardStyles}>
            <Box sx={{ width: "20%" }}>
              <CardMedia
                sx={teamMemberImgStyles}
                component="img"
                image={Jonathan}
              />
            </Box>

            <Box sx={{ width: "70%" }}>
              <CardContent>
                <Typography variant="h6">
                  Jonathan Rodriguez - Director{" "}
                </Typography>
                <Typography>
                  {" "}
                  Jonathan is a Phoenix local who is passionate about building
                  up his community. Jonathan graduated from Concordia
                  University-Wisconsin with a Bachelors degree in Business
                  Management & Marketing, but his education didn't end there.
                  Jonathan had experience working in the construction industry
                  as a laborer and he wanted to expand on that so he came back
                  to the valley and began studying to get licensed as a general
                  contractor while working as a project manager at a flooring
                  installation company.{" "}
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card sx={teamMemberCardStyles}>
            <Box sx={{ width: "20%" }}>
              <CardMedia
                sx={teamMemberImgStyles}
                component="img"
                image={Juan}
              />
            </Box>

            <Box sx={{ width: "70%" }}>
              {" "}
              <CardContent>
                <Typography variant="h6">
                  Juan Rodriguez - Field Manager{" "}
                </Typography>
                <Typography>
                  {" "}
                  Juan has many years of experience working in the construction
                  industry. From general contracting, plumbing, electrical..
                  Juan is a jack of all trades. With so many years of hands on
                  experience it only makes sense that Juan manages everything
                  directly in the field.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </CardContent>
      </Card>
      <hr size="2" width="95%" color="white" />
    </>
  );
}
