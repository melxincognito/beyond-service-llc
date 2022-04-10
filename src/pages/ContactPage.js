import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ContactForm from "../components/forms/ContactForm";
import { Box } from "@mui/material";

export default function ContactPage() {
  const spacerStyles = {
    margin: "0 0 -50px 0",
    height: "100px",
    bgcolor: "primary.dark",
  };
  return (
    <div>
      <AnimatePresence>
        <motion.div
          transition={{ delay: 0.17 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ContactForm />
          <hr size="1" width="100%" color="gray" />
          <Box id="spacer" sx={spacerStyles}>
            {" "}
          </Box>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
