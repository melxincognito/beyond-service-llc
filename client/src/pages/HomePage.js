import React from "react";
import { Card, CardContent, Typography, Box, Grid, Paper } from "@mui/material";
import HeaderImg from "../assets/sunset.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
export default function HomePage() {
  // center card style
  const cardStyles = {
    borderRadius: "5px 25px 5px 25px",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    width: "40%",
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.53)",
  };

  const topImageStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
  };
  const socialLinkContainerStyles = {
    bgcolor: "rgba(138, 138, 138, 0.38)",
    padding: 2,
    borderRadius: 5,
    width: "40%",
  };

  const socialLinksStyles = {
    margin: 0.3,
  };

  const contactPhonePaperStyles = {
    bgcolor: "#23143e",
    color: "white",
    padding: "0 6px",
  };

  // external page routes

  function facebookPageClick() {
    window.open("https://www.facebook.com/", "_blank");
  }

  function twitterPageClick() {
    window.open("https://www.twitter.com/", "_blank");
  }

  function youtubePageClick() {
    window.open("https://www.youtube.com/", "_blank");
  }

  function linkedInPageClick() {
    window.open(
      "https://www.linkedin.com/in/rodriguezjonathon/#experience",
      "_blank"
    );
  }
  function googlePageClick() {
    window.open("https://www.google.com/", "_blank");
  }

  return (
    <>
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
                <Typography variant="h4">Beyond Service LLC </Typography>
              </div>{" "}
              Our quality of service is BEYOND comparison!
            </CardContent>
            <CardContent>
              <div>
                <Typography variant="h4">Who we are</Typography>
              </div>
              Valley locals who are passionate about building up our local
              community. We specialize in commercial and residential projects
              and we're able to deliver the best results.
            </CardContent>
          </Card>
        </Box>
      </Box>
      <hr size="2" width="100%" color="#23143e" />
      <Box sx={socialLinkContainerStyles}>
        <Grid>
          <FacebookIcon
            sx={socialLinksStyles}
            fontSize="large"
            onClick={facebookPageClick}
          />
          <TwitterIcon
            sx={socialLinksStyles}
            fontSize="large"
            onClick={twitterPageClick}
          />

          <LinkedInIcon
            sx={socialLinksStyles}
            fontSize="large"
            onClick={linkedInPageClick}
          />
          <YouTubeIcon
            sx={socialLinksStyles}
            fontSize="large"
            onClick={youtubePageClick}
          />
          <GoogleIcon
            sx={socialLinksStyles}
            fontSize="large"
            onClick={googlePageClick}
          />
        </Grid>
        <hr size="1" width="95%" color="white" />
        <div>
          <Paper id="contactPhone" sx={contactPhonePaperStyles}>
            <Typography variant="overline">
              <LocalPhoneIcon fontSize="xxsmall" /> Call us at (480)000-0000
            </Typography>
          </Paper>
        </div>
      </Box>
    </>
  );
}
