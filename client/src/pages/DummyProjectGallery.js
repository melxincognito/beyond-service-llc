import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import RamadaGallery from "../components/photoGallery/RamadaGallery";
import BathroomGallery from "../components/photoGallery/BathroomGallery";

export default function DummyProjectGallery() {
  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 50,
            backgroundColor: "pink",
            overflowY: "scroll",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            justifyItems: "center",
            marginBottom: "10rem",
            padding: "2rem 5rem",
            margin: "auto",
          }}
        >
          <RamadaGallery />
          <BathroomGallery />
          <RamadaGallery />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
