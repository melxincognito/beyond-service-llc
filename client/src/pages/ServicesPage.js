import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function ServicesPage() {
  const cardStyles = {
    borderRadius: 5,
    display: "flex-box",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    bgcolor: "secondary.light",
  };
  const headerCardStyles = {
    display: "flex",
    justifyContent: "center",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)",
    borderRadius: "4px 25px 4px 25px",
    bgcolor: "secondary.light",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent>
          <CardContent sx={headerCardStyles}>
            <Typography variant="h4"> Services</Typography>
          </CardContent>

          <Typography>
            {" "}
            We are able to provide our services to both commercial and
            residential customers!
          </Typography>
          <Typography>
            {" "}
            a track homes, home additions, home renovations. We can also do
            whole homes, including custom luxury homes.{" "}
          </Typography>
          <Typography> We are also able to offer plumbing services</Typography>
        </CardContent>
      </Card>
      <hr size="1" width="100%" color="gray" />
    </>
  );
}
