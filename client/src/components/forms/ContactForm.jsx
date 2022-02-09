import * as React from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

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
  };
  const textFieldStyles = {
    margin: "10px 0px",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent>
          <Typography> Contact Beyond Services </Typography>
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
        </CardContent>
      </Card>
    </>
  );
}
