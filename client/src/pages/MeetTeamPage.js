import React from "react";
// styling components
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//theme provider
import theme from "../assets/theme";
import { ThemeProvider } from "@mui/material";
// images
import Jonathan from "../assets/photos/Jonathan.jpg";
import Juan from "../assets/photos/Juan.jpg";

export default function MeetTeamPage() {
  // styles

  const cardStyles = {
    borderRadius: 5,
    display: "flex-box",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
  };

  const headerCardStyles = {
    display: "flex",
    justifyContent: "center",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)",
    borderRadius: "4px 25px 4px 25px",
  };

  const teamMemberCardStyles = {
    display: "flex",
    justifyContent: "space-evenly",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)",
  };

  const teamMemberImgStyles = {
    borderRadius: "50%",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  function linkedInPageClick() {
    window.open(
      "https://www.linkedin.com/in/rodriguezjonathon/#experience",
      "_blank"
    );
  }

  return (
    <div>
      <Card sx={cardStyles}>
        <Card sx={headerCardStyles}>
          <CardContent>
            <Typography variant="h4"> Meet the Team </Typography>
          </CardContent>
        </Card>

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
                <Typography variant="h5">
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
              <Box display="flex" sx={{ marginLeft: 2.5 }}>
                <LinkedInIcon
                  onClick={linkedInPageClick}
                  color="primary.dark"
                />{" "}
                <Typography variant="subtitle2" color="primary.main">
                  {" "}
                  Read more about Jonathan on LinkedIn
                </Typography>
              </Box>
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
                <Typography variant="h5">
                  Juan Rodriguez - Field Manager{" "}
                </Typography>
                <Typography>
                  {" "}
                  Juan is also a Phoenix local with many years of experience
                  working in the construction industry. From general
                  contracting, plumbing, electrical.. Juan is a jack of all
                  trades. With so many years of hands on experience under his
                  belt, Juan ensures all the work completed is top quality.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </CardContent>
      </Card>
      <hr size="2" width="95%" color="white" />
    </div>
  );
}
