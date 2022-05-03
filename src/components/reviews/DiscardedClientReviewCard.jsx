import * as React from "react";
import { Box, Button, Paper, Typography, Modal } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { db } from "../../firebase-config";
import { set, ref, remove } from "firebase/database";
import "./TestimonialStyles.css";

export default function PendingClientReviewCard(props) {
  // modal to confirm permanent discard of item from database
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // discards review permanently from all databases
  const discardReview = () => {
    remove(ref(db, "DiscardedReviews/" + props.ClientId));
    handleClose();
  };
  // reconsider a review function
  const sendReviewToPendingDatabase = (e) => {
    e.preventDefault();
    discardReview();
    set(ref(db, "PendingReviews/" + props.ClientId), {
      id: props.ClientId,
      name: props.ClientName,
      email: props.ClientEmail,
      review: props.ClientReview,
      service: props.ServiceCategory,
      imgUrl: props.ClientImgUrl,
    });

    console.log("sent to pending database");
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

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
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
          onClick={sendReviewToPendingDatabase}
        >
          <CheckCircleOutlineIcon />
          Reconsider Testimonial
        </Button>
        <Button
          id="reject"
          sx={{ bgcolor: "secondary.main" }}
          variant="contained"
          onClick={handleOpen}
        >
          {" "}
          <DeleteOutlineIcon />
          Permanently Discard Testimonial
        </Button>
      </div>
      <div>
        <Typography>
          {" "}
          <a href={`${props.ClientImgUrl}`} rel="noreferrer" target="_blank">
            {" "}
            Client photo{" "}
          </a>
        </Typography>
      </div>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Are you sure you want to permanently discard this testimonial?
          </Typography>
          <Button variant="outlined" onClick={discardReview}>
            {" "}
            Yes{" "}
          </Button>{" "}
          <Button variant="outlined" onClick={handleClose}>
            {" "}
            No{" "}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
