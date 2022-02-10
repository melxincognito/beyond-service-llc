import React from "react";
import { Card, CardContent } from "@mui/material";
export default function MeetTeamPage() {
  const cardStyles = {
    borderRadius: 5,
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <Card sx={cardStyles}>
        Meet the Team
        <CardContent>
          <div>Jonathan Rodriguez - Director</div>
          <div> Juan Rodriguez - Field Manager </div>
        </CardContent>
      </Card>
    </div>
  );
}
