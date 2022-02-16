import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function ServicesPage() {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h3"> Services</Typography>
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
    </>
  );
}
