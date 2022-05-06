import React from "react";
import { Box, Typography } from "@mui/material";

export default function DashboardIntroContent() {
  return (
    <Box
      sx={{
        display: "grid",
        textAlign: "center",
        gap: 4,
      }}
    >
      <Box>
        <Typography> Welcome to the Admin Dashboard. </Typography>
      </Box>
      <Box>
        <Typography>
          {" "}
          Manage customer testimonials by clicking on the buttons to the left{" "}
        </Typography>
      </Box>
    </Box>
  );
}
