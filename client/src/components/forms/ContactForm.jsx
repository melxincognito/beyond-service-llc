import * as React from "react";

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

// forms global variables
const servicesOptions = [
  { value: "Construction", label: "Construction" },
  { value: "Plumbing", label: "Plumbing" },
  { value: "Electrical", label: "Electrical" },
];

export default function ContactForm() {
  // form functionality variables

  const [serviceInquiry, setServiceInquiry] = React.useState("Construction");

  const handleServiceChange = (event) => {
    setServiceInquiry(event.target.value);
  };

  // styles variables
  const cardStyles = {
    padding: 4,
    borderRadius: 5,
  };
  const formTitleDisplayStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const textFieldStyles = {
    margin: "10px 0px",
  };

  const submitButtonStyles = {
    gap: 1,
    backgroundColor: "black",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent sx={formTitleDisplayStyles}>
          <Typography variant="h4"> Contact Beyond Services </Typography>
        </CardContent>

        <CardContent>
          <TextField
            fullWidth
            sx={textFieldStyles}
            label="Name"
            id="contactName"
            required
          />
          <TextField
            fullWidth
            sx={textFieldStyles}
            label="Contact Phone"
            type="tel"
            id="contactPhone"
            required
          />
          <TextField
            sx={textFieldStyles}
            id="serviceInquirySelection"
            fullWidth
            select
            label="Service Catefory"
            value={serviceInquiry}
            onChange={handleServiceChange}
            helperText="Select the service category you're inquiring about"
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
          />
          <Button variant="contained" sx={submitButtonStyles}>
            <SendIcon /> Submit
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
