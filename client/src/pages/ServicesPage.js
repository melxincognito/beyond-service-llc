import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  const descriptionCardStyles = {
    bgcolor: "secondary.light",
    margin: 2,
    borderRadius: "4px 25px 4px 25px",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "space-around",
    color: "success.main",
  };

  const accordionColor = {
    bgcolor: "accordion.main",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent>
          <Box>
            <CardContent sx={headerCardStyles}>
              <Typography variant="h4"> Services</Typography>
            </CardContent>
            <CardContent sx={descriptionCardStyles}>
              <Typography variant="h6">
                {" "}
                We're able to provide our services to both residential &
                commercial customers
              </Typography>
            </CardContent>
          </Box>

          <CardContent>
            <Accordion sx={accordionColor}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1"
                id="panel1"
              >
                <Typography>A Track Homes </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>The A Track homes are here for clear</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={accordionColor}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2"
                id="panel2"
              >
                <Typography>Home Additions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Maybe you need a guest house in the back or you want to add a
                  jacuzzi in the back.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={accordionColor}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3"
                id="panel3"
              >
                <Typography>Framing</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Home Framing</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={accordionColor}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4"
                id="panel4"
              >
                <Typography>Home Renovations/Remodels</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Upgrade your existing home to be the home you've always
                  dreamed of.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={accordionColor}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5"
                id="panel5"
              >
                <Typography>Custom Luxury Bathrooms</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We can work with you from start to finish creating a luxury
                  bathroom for your home
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={accordionColor}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6"
                id="panel6"
              >
                <Typography>Plumbing</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>The plumbers can plumb the plumbing</Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </CardContent>
      </Card>
      <hr size="1" width="100%" color="gray" />
    </>
  );
}
