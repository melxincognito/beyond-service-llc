import * as React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { set, ref, remove } from "firebase/database";
import { db } from "../../firebase-config";

import "./TestimonialStyles.css";

export default function PendingClientReviewCard(props) {
  // discards review from pending review database regardless of approval status
  const discardReview = () => {
    remove(ref(db, "PendingReviews/" + props.ClientId));
  };

  const sendReviewToDiscardedDatabase = (e) => {
    e.preventDefault();
    discardReview();

    set(ref(db, "DiscardedReviews/" + props.ClientId), {
      id: props.ClientId,
      name: props.ClientName,
      email: props.ClientEmail,
      review: props.ClientReview,
      service: props.ServiceCategory,
      imgUrl: props.ClientImgUrl,
    });

    alert("Discarded Testimonial");
  };

  const sendReviewToApprovedDatabase = (e) => {
    e.preventDefault();
    discardReview();
    set(ref(db, "ApprovedReviews/" + props.ClientId), {
      id: props.ClientId,
      name: props.ClientName,
      email: props.ClientEmail,
      review: props.ClientReview,
      service: props.ServiceCategory,
      imgUrl: props.ClientImgUrl,
    });
    console.log("sent to approved database");
  };

  // styles variables

  const paperStyles = {
    padding: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "primary.main",
    color: "white",
  };

  const paperStyles2 = {
    padding: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f57c00",
    color: "white",
  };

  const clientInfoPaperStyles = {
    padding: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        justifyItems: "start",
        width: "100%",
        backgroundColor: "white",
        gap: "1rem",
        padding: "1rem",
        borderRadius: 2,
        boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
      }}
    >
      <div id="reviewNamefield" style={{ display: "flex", gap: "1rem" }}>
        <Paper elevation={3} sx={paperStyles}>
          <Typography>Client Name: </Typography>
        </Paper>
        <Paper elevation={3} sx={clientInfoPaperStyles}>
          <Typography>{props.ClientName} </Typography>
        </Paper>
      </div>
      <div
        id="reviewServiceCategoryField"
        style={{ display: "flex", gap: "1rem" }}
      >
        <Paper elevation={3} sx={paperStyles}>
          <Typography>Service Category: </Typography>
        </Paper>
        <Paper elevation={3} sx={clientInfoPaperStyles}>
          <Typography>{props.ServiceCategory} </Typography>
        </Paper>
      </div>
      <div id="reviewEmailField" style={{ display: "flex", gap: "1rem" }}>
        <Paper elevation={3} sx={paperStyles}>
          <Typography>Email: </Typography>
        </Paper>
        <Paper elevation={3} sx={clientInfoPaperStyles}>
          <Typography>{props.ClientEmail} </Typography>
        </Paper>
      </div>
      <hr size="1" width="90%" color="gray" />
      <div
        id="clientReviewField"
        style={{ display: "grid", gap: "1rem", width: "100%" }}
      >
        <Box>
          <Paper elevation={3} sx={paperStyles2}>
            <Typography>Testimonial: </Typography>
          </Paper>
        </Box>
        <Box>
          <Paper elevation={3} sx={clientInfoPaperStyles}>
            <Typography>{props.ClientReview}</Typography>
          </Paper>
        </Box>
      </div>

      <div id="buttons " style={{ display: "flex", gap: 1 }}>
        <Button
          id="approve"
          variant="contained"
          sx={{ bgcolor: "#388e3c" }}
          onClick={sendReviewToApprovedDatabase}
        >
          <CheckCircleOutlineIcon />
          Approve Testimonial
        </Button>
        <Button
          id="reject"
          sx={{ bgcolor: "secondary.main" }}
          variant="contained"
          onClick={sendReviewToDiscardedDatabase}
        >
          {" "}
          <DeleteOutlineIcon />
          Discard Testimonial
        </Button>
      </div>
      <div>
        <Typography>
          {" "}
          <a href={`${props.ClientImgUrl}`} target="_blank" rel="noreferrer">
            {" "}
            Client photo{" "}
          </a>
        </Typography>
      </div>
    </Box>
  );
}
