import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../../firebase-config";
import { Paper, Typography } from "@mui/material";

import "../TestimonialStyles.css";

export default function CurrentUserHeader() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const currentUserPaperStyles = {
    display: "flex",
    margin: 0,
    padding: "0 7px",
    backgroundColor: "pink",
    height: "4%",
    justifyContent: "flex-start",
    alignItems: "center",
    bgcolor: "#262121",
    color: "white",
    boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.33)",
  };

  return (
    <Paper id="currentUser" sx={currentUserPaperStyles}>
      <Typography> Hello, {user?.displayName}!</Typography>
    </Paper>
  );
}
