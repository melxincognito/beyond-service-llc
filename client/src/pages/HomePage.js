import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import HeaderImg from "../assets/photos/sunset.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
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
    bgcolor: "primary.main",
    color: "white",
    padding: "0 6px",
    display: "flex",
    justifyContent: "space-around",
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
      {/*social links and contact info*/}
      <Box sx={{ display: "flex", gap: 7 }}>
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
            <InstagramIcon fontSize="large" />
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
            <InstagramIcon fontSize="large" />
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
            <InstagramIcon fontSize="large" />
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
      </Box>
    </Box>
  );
}
