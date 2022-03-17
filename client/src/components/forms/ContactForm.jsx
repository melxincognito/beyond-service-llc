import * as React from "react";

// contact form forward imports
import { useRef } from "react";
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

export default function ContactForm() {
  // form functionality variables

  const [open, setOpen] = React.useState(false);

  const [serviceInquiry, setServiceInquiry] = React.useState("Construction");

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

  // form forwarding functions
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

  // navigate back to homepage after form forwards to email
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  // styles variables
  const cardStyles = {
    padding: 4,
    borderRadius: 2,
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
                    value="phone"
                    control={<Radio />}
                    label="Phone Call"
                  />
                  <FormControlLabel
                    value="text"
                    control={<Radio />}
                    label="Text"
                  />
                  <FormControlLabel
                    value="email"
                    control={<Radio />}
                    label="E-mail"
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
