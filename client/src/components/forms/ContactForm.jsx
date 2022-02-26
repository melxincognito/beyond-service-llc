import * as React from "react";

// email forward imports
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
// form imports MUI
import {
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

// forms global variables
const servicesOptions = [
  { value: "Construction", label: "Construction" },
  { value: "Plumbing", label: "Plumbing" },
  { value: "Electrical", label: "Electrical" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactForm() {
  // form functionality variables

  const [open, setOpen] = React.useState(false);

  const [serviceInquiry, setServiceInquiry] = React.useState("Construction");

  const handleServiceChange = (event) => {
    setServiceInquiry(event.target.value);
  };

  // form functionality functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    routeChange();
  };

  // email forward functions
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fa6qhtn",
        "template_etcs82f",
        form.current,
        "user_wKGjgdwvgNqEiJyejXWHN"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  // navigate back to homepage after form emails
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  // styles variables
  const cardStyles = {
    padding: 4,
    borderRadius: 5,
    bgcolor: "secondary.light",
  };
  const formTitleDisplayStyles = {
    display: "flex",
    justifyContent: "center",
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)",
    borderRadius: "4px 25px 4px 25px",
  };

  const formInputContainerStyles = {
    bgcolor: "secondary.light",
    marginTop: 3,
    borderRadius: 4,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)",
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
          <Typography variant="h4"> Contact Beyond Service </Typography>
        </CardContent>
        <CardContent sx={formInputContainerStyles}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Name"
              id="contactName"
              name="name"
              required
            />
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Contact Phone"
              type="tel"
              id="contactPhone"
              name="phone"
              required
            />
            <TextField
              sx={textFieldStyles}
              id="serviceInquirySelection"
              fullWidth
              select
              label="Service Category"
              value={serviceInquiry}
              onChange={handleServiceChange}
              name="service"
              helperText="Select the service category you're inquiring about"
              required
            >
              {servicesOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              multiline
              sx={textFieldStyles}
              rows={5}
              label="Message"
              id="fullWidth"
              name="message"
              required
            />
            <Button
              variant="contained"
              type="submit"
              sx={submitButtonStyles}
              onClick={handleClickOpen}
            >
              <SendIcon /> Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thanks for reaching out!"}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We'll get back to you as soon as we can ☺️
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
