import React from "react";
import { Paper, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function ContactInformation() {
  const contactPhonePaperStyles = {
    bgcolor: "primary.main",
    color: "white",
    padding: "0 10px",
    display: "flex",
    justifyContent: "space-around",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
  };
  return (
    <>
      <a href="tel:6023211374" style={{ textDecoration: "none" }}>
        <Paper id="contactPhone" sx={contactPhonePaperStyles}>
          <Typography variant="overline" fontSize="small">
            <LocalPhoneIcon fontSize="xxsmall" /> Call us at (602) 321-1374
          </Typography>
        </Paper>
      </a>
    </>
  );
}
