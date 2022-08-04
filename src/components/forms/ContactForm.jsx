import React, { useRef, useState } from "react";

import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
// form styling imports MUI
import {
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// forms global selections
const servicesOptions = [
  { value: "Construction", label: "Construction" },
  { value: "Plumbing", label: "Plumbing" },
  { value: "Electrical", label: "Electrical" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function formatPhoneNumber(value) {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

export default function ContactForm() {
  const [open, setOpen] = useState(false);

  const [serviceInquiry, setServiceInquiry] = useState("Construction");

  // state for formatting phone number input value
  const [inputValue, setInputValue] = useState("");

  const handleServiceChange = (event) => {
    setServiceInquiry(event.target.value);
  };

  // pop up functionality after form submittal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    routeChange();
  };
  // handling phone number input to format the number for better visibility
  const handleInput = (e) => {
    // this is where we'll call the phoneNumberFormatter function
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setInputValue(formattedPhoneNumber);
  };

  // form forwarding functions
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAIL_JS_USER_ID}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  // styles variables
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
          <Typography variant="h4"> Contact Us </Typography>
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
              Fill out the form below to message Beyond Service.{" "}
            </Typography>
          </Box>

          <form ref={form} onSubmit={sendEmail}>
            <div id="nameInputField">
              <TextField
                fullWidth
                sx={textFieldStyles}
                label="Name"
                id="contactName"
                name="name"
                required
              />
            </div>
            <div id="contactPhoneInputField">
              <TextField
                fullWidth
                sx={textFieldStyles}
                label="Contact Phone"
                type="tel"
                id="contactPhone"
                name="phone"
                onChange={(e) => handleInput(e)}
                value={inputValue}
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
                required
              />
            </div>{" "}
            <div id="serviceInquiryInputField">
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
            </div>
            <div id="preferredMethodOfContactField">
              <FormControl>
                <FormLabel id="radio-buttons-group-label">
                  Preferred method of contact:
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="radio-buttons-group-label"
                  name="contactMethod"
                >
                  <FormControlLabel
                    value="Phone"
                    control={<Radio />}
                    label="Phone Call"
                  />
                  <FormControlLabel
                    value="Text"
                    control={<Radio />}
                    label="Text"
                  />
                  <FormControlLabel
                    value="Email"
                    control={<Radio />}
                    label="E-mail"
                  />
                  <FormControlLabel
                    value="WhatsApp"
                    control={<Radio />}
                    label="WhatsApp"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div id="messageInputField">
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
            </div>
            <Button
              variant="contained"
              type="submit"
              sx={submitButtonStyles}
              onClick={handleClickOpen}
              fullWidth
            >
              <SendIcon /> Submit
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
