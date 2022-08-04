import React, { useState, forwardRef } from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Box,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { set, ref } from "firebase/database";
import { db } from "../../firebase-config";
import { v4 as uuidv4 } from "uuid";

const servicesOptions = [
  { value: "Remodel Service", label: "Remodel Service" },
  { value: "AirBnb Remodel Service", label: "AirBnb Remodel Service" },
  { value: "Home Addition Service", label: "Home Addition Service" },
  { value: "Outdoor Addition Service", label: "Outdoor Addition Service" },
  { value: "Other", label: "Other" },
];
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomerReviewForm() {
  // states for storing form values and sending to firestore

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerReview, setCustomerReview] = useState("");
  const [customerImgUrl, setCustomerImgUrl] = useState("");
  const [serviceReview, setServiceReview] = useState("Remodel Service");

  let userId = uuidv4();

  const handleServiceChange = (event) => {
    setServiceReview(event.target.value);
  };
  // set data variable to send object to database

  const data = {
    Name: customerName,
    Email: customerEmail,
    Review: customerReview,
    Service: serviceReview,
    ImgUrl: customerImgUrl,
  };
  // send data to realtime database

  const sendReview = (e) => {
    e.preventDefault();
    set(ref(db, "PendingReviews/" + userId), {
      id: userId,
      name: data.Name,
      email: data.Email,
      review: data.Review,
      service: data.Service,
      imgUrl: data.ImgUrl,
    });

    console.log("sent to pending reviews");
  };

  // set popup after submit upon

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    routeChange();
  };
  // route change after popup is closed
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  // styles components
  const cardStyles = {
    padding: 3,
    borderRadius: 2,
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };
  const formTitleDisplayStyles = {
    display: "flex",
    justifyContent: "center",
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    borderRadius: "4px 25px 4px 25px",
  };

  const textFieldStyles = {
    margin: "10px 0px",
  };

  const submitButtonStyles = {
    gap: 1,
    backgroundColor: "primary.main",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent sx={formTitleDisplayStyles}>
          <Typography variant="h4"> Submit a Testimonial</Typography>
        </CardContent>

        <Box id="contactFormContainer" sx={{ margin: "1.5rem 0" }}>
          <Box
            id="contactFormInstructionsContainer"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              justfiyItems: "center",
            }}
          >
            <Typography variant="body1">
              {" "}
              Fill out the form below to submit a testimonial about Beyond
              Service.{" "}
            </Typography>
          </Box>

          <form onSubmit={sendReview}>
            <div id="nameInputField">
              <TextField
                fullWidth
                label="Name"
                id="contactName"
                name="name"
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div id="contactEmailInputField">
              <TextField
                fullWidth
                sx={textFieldStyles}
                label="Contact Email"
                type="email"
                id="contactEmail"
                name="userEmail"
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
              />
            </div>{" "}
            <div id="imgUrlInputField">
              <TextField
                fullWidth
                sx={textFieldStyles}
                label="Image URL"
                type="url"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://flickr.com/photos.jpg"
                onChange={(e) => setCustomerImgUrl(e.target.value)}
                required
              />
            </div>{" "}
            <div id="projectTypeInputField">
              <TextField
                sx={textFieldStyles}
                id="serviceReviewSelection"
                fullWidth
                select
                label="Service Category"
                value={serviceReview}
                onChange={handleServiceChange}
                name="service"
                helperText="Select the service category you're reviewing for Beyond Service"
                required
              >
                {servicesOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div id="reviewInputField">
              <TextField
                fullWidth
                multiline
                sx={textFieldStyles}
                rows={5}
                label="Write about your experience with Beyond Service here!"
                id="fullWidth"
                name="testimonial"
                onChange={(e) => setCustomerReview(e.target.value)}
                required
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              sx={submitButtonStyles}
              fullWidth
              onClick={handleClickOpen}
            >
              <SendIcon /> Submit Testimonial
            </Button>
          </form>
        </Box>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thanks for submitting a testimonial!"}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your contribution is greatly appreciated ☺️
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
