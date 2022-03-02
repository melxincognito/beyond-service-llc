import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ContactForm from "../components/forms/ContactForm";

export default function ContactPage() {
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
