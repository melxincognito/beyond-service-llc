import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { Box, Button, Paper, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function PendingClientReviewCard(props) {
  const [customerName] = React.useState(props.ClientName);
  const [customerEmail] = React.useState(props.ClientEmail);
  const [customerReview] = React.useState(props.ClientReview);

  const [serviceCategory] = React.useState(props.ServiceCategory);

  // approved service review
  const data = {
    id: uuidv4(),
    Name: customerName,
    Email: customerEmail,
    Review: customerReview,
    Service: serviceCategory,
  };
  const sendReview = (e) => {
    e.preventDefault();

    setDoc(doc(firestore, "ApprovedReviews", data.id), {
      name: data.Name,
      email: data.Email,
      review: data.Review,
      service: data.Service,
    });
    console.log("successfully saved");
  };

  // discard service review and send to rejected database

  const discardReview = (e) => {
    e.preventDefault();

    setDoc(doc(firestore, "DiscardedReviews", data.id), {
      name: data.Name,
      email: data.Email,
      review: data.Review,
      service: data.Service,
    });
    console.log("successfully discarded");
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
        alignItems: "center",
        alignContent: "center",
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
          <Paper elevation={3} sx={paperStyles}>
            <Typography>Review: </Typography>
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
          variant="contained"
          sx={{ bgcolor: "#388e3c" }}
          onClick={sendReview}
        >
          <CheckCircleOutlineIcon />
          Approve Review
        </Button>
        <Button
          sx={{ bgcolor: "secondary.main" }}
          variant="contained"
          onClick={discardReview}
        >
          {" "}
          <DeleteOutlineIcon />
          Discard Review
        </Button>
      </div>
    </Box>
  );
}
