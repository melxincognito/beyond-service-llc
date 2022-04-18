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
import { AnimatePresence, motion } from "framer-motion";
import BottomNavLabel from "../components/navigation/BottomNavLabel";

export default function ServicesPage() {
  const cardStyles = {
    borderRadius: 2,
    display: "flex-box",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };
  const headerCardStyles = {
    display: "flex",
    justifyContent: "center",
    margin: 1,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    borderRadius: "4px 25px 4px 25px",
    bgcolor: "secondary.light",
  };
  const descriptionCardStyles = {
    bgcolor: "secondary.light",
    margin: 1,
    borderRadius: "4px 25px 4px 25px",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "space-around",
    color: "success.main",
  };

  const accordionColor = {
    bgcolor: "accordion.main",
  };
  const spacerStyles = {
    margin: "0 0 -50px 0",
    height: "100px",
    bgcolor: "primary.dark",
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          transition={{ delay: 0.17 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
                {" "}
                <Accordion sx={accordionColor}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1"
                    id="panel1"
                  >
                    <Typography>AirBnb Remodels</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: "accordion.light" }}>
                    <Typography>
                      Upgrade an investment property to a more modern style for
                      AirBnb guests. We can help you with the design and
                      construction of your AirBnb remodel in order to maximize
                      your guest's enjoyment.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={accordionColor}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1"
                    id="panel1"
                  >
                    <Typography>Home Renovations/Remodels</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: "accordion.light" }}>
                    <Typography>
                      Upgrade your existing home to be the home you've always
                      dreamed of. Our team can remodel a part of your home or we
                      can gut the whole thing and make it like new. We'll go
                      over why you're not satisfied with your current home and
                      transform it to the home of your dreams.
                    </Typography>
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
                  <AccordionDetails sx={{ bgcolor: "accordion.light" }}>
                    <Typography>
                      As we progress in our lives we realize our homes may need
                      a little expanding. Beyond Service has you covered whether
                      you're in need of a guest home, a garage or a nursery
                      room. We'll make sure your new home addition blends
                      perfectly with your existing home.
                    </Typography>
                  </AccordionDetails>
                </Accordion>{" "}
                <Accordion sx={accordionColor}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3"
                    id="panel3"
                  >
                    <Typography>Custom Luxury Bathrooms</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: "accordion.light" }}>
                    <Typography>
                      We love helping our clients create the perfect bathroom to
                      suit their needs. Whether you're a single person or a
                      married couple, we'll work with you to help make the
                      perfect bathroom for your lifestyle.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={accordionColor}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4"
                    id="panel4"
                  >
                    <Typography>Plumbing</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: "accordion.light" }}>
                    <Typography>
                      Plumbing mistakes can be costly. Our team has extensive
                      knowledge in the plumbing industry. Whether we're working
                      on adding a new sink to the kitchen, a laundry room or a
                      custom bathroom, you can trust our team to handle your
                      pipes.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={accordionColor}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5"
                    id="panel5"
                  >
                    <Typography>HVAC (Heating & Air Conditioning)</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: "accordion.light" }}>
                    <Typography>
                      Anyone living in the Valley of the Sun knows how important
                      it is to have good air conditioning. Nobody wants to be
                      stuck withour it in the summer months. Beyond Service can
                      upgrade, fix and install HVAC systems to make sure your
                      house stays cool in the summer and warm in the winter all
                      while getting the proper ventilation throughout your
                      living areas.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={accordionColor}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6"
                    id="panel6"
                  >
                    <Typography>Framing</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: "accordion.light" }}>
                    <Typography>Home Framing</Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardContent>
          </Card>
          <hr size="1" width="100%" color="gray" />
          <Box id="spacer" sx={spacerStyles}></Box>
          <BottomNavLabel />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
