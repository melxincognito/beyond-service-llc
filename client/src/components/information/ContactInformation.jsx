import React from "react";
import { Paper, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function ContactInformation() {
  const contactPhonePaperStyles = {
    bgcolor: "primary.main",
    color: "white",
    padding: "0 6px",
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <>
      <Paper id="contactPhone" sx={contactPhonePaperStyles}>
        <Typography variant="overline">
          <LocalPhoneIcon fontSize="xxsmall" /> Call us at (480)000-0000
        </Typography>
      </Paper>
    </>
  );
}
