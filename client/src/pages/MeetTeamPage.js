import React from "react";
// styling components
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// images
import Jonathan from "../assets/photos/Jonathan.jpg";
import Juan from "../assets/photos/Juan.jpg";
import { AnimatePresence, motion } from "framer-motion";

export default function MeetTeamPage() {
  // styles

  const cardStyles = {
    padding: 2,
    borderRadius: 2,
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",

    display: "flex-box",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
  };

  const headerCardStyles = {
    display: "flex",
    justifyContent: "center",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    borderRadius: "4px 25px 4px 25px",
    bgcolor: "secondary.light",
  };

  const teamMemberCardStyles = {
    display: "flex",
    flexWrap: "wrap",
    overflowY: "scroll",
    justifyContent: "space-evenly",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    bgcolor: "secondary.light",
    borderRadius: 3.5,
    margin: "1rem 0",
  };

  const teamMemberImgStyles = {
    borderRadius: "50%",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  const spacerStyles = {
    margin: "0 0 -50px 0",
    height: "100px",
    bgcolor: "primary.dark",
  };

  function linkedInPageClick() {
    window.open(
      "https://www.linkedin.com/in/rodriguezjonathon/#experience",
      "_blank"
    );
  }

  return (
    <div>
      <AnimatePresence>
        <motion.div
          transition={{ delay: 0.17 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Card sx={cardStyles}>
            <Card sx={headerCardStyles}>
              <CardContent>
                <Typography variant="h4"> Meet the Team </Typography>
              </CardContent>
            </Card>

            <CardContent sx={{ display: "flex-box" }}>
              <Card sx={teamMemberCardStyles}>
                <Box sx={{ width: "13rem" }}>
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
                      Jonathan is a Phoenix local who is passionate about
                      building up his community. Jonathan graduated from
                      Concordia University-Wisconsin with a Bachelors degree in
                      Business Management & Marketing, but his education didn't
                      end there. Jonathan had experience working in the
                      construction industry as a laborer and he wanted to expand
                      on that so he came back to the valley and began studying
                      to get licensed as a general contractor while working as a
                      project manager at a flooring installation company.
                      Jonathan is passionate about what he does and enjoys being
                      able to make .{" "}
                    </Typography>
                  </CardContent>
                  <Box display="flex" sx={{ marginLeft: 2.5, marginBottom: 2 }}>
                    <LinkedInIcon onClick={linkedInPageClick} />{" "}
                    <Typography variant="subtitle2" color="primary.main">
                      {" "}
                      Read more about Jonathan on LinkedIn
                    </Typography>
                  </Box>
                </Box>
              </Card>
              <Card sx={teamMemberCardStyles}>
                <Box sx={{ width: "13rem" }}>
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
                      Juan Rodriguez - Executive Manager{" "}
                    </Typography>
                    <Typography>
                      {" "}
                      Juan is another Phoenix local with many years of
                      experience working in the construction industry. He's a
                      jack of all trades with experience in general contracting,
                      plumbing, electrical and more. Juan uses his many years of
                      hands on experience to ensure all work completed by Beyond
                      Service is top quality. He makes sure each clients vision
                      for their home is able to become an infinite reality.
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </CardContent>
          </Card>
          <hr size="1" width="100%" color="gray" />
          <Box id="spacer" sx={spacerStyles}>
            {" "}
          </Box>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
