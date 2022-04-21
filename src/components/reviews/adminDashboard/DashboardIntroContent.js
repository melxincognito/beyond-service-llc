import React from "react";
import { Box, Typography } from "@mui/material";

export default function DashboardIntroContent() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        justifyItems: "center",
        gap: 7,
      }}
    >
      <Box>
        <Typography> Welcome to the admin dashboard. </Typography>
      </Box>
      <Box>
        <Typography>
          {" "}
          Manage reviews by clicking on the buttons to the right{" "}
        </Typography>
      </Box>
    </div>
  );
}
