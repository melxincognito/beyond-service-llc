import React from "react";
import { Typography, Link, Box } from "@mui/material";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"© "}
      <Link color="inherit" href="/login-beyond-service-admin-dashboard">
        Beyond Service
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function BottomNavLabel() {
  return (
    <Box sx={{ bgcolor: "primary.dark", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Phoenix General Contractors
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Delivering only the best results to clients in Phoenix, Scottsdale &
        Paradise Valley
      </Typography>
      <Copyright />
    </Box>
  );
}
