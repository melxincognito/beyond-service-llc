import React from "react";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function ContactForm() {
  const cardStyles = {
    padding: 4,
  };
  const textFieldStyles = {
    margin: "1px 0px",
  };

  return (
    <>
      <Card sx={cardStyles}>
        {" "}
        <TextField fullWidth sx={textFieldStyles} label="Name" id="fullWidth" />
        <TextField
          fullWidth
          sx={textFieldStyles}
          label="Contact Phone"
          id="fullWidth"
        />
        <TextField
          fullWidth
          sx={textFieldStyles}
          rows="3"
          label="Message"
          id="fullWidth"
        />
      </Card>
    </>
  );
}
