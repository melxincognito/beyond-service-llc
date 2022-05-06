import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CustomerReviewCard(props) {
  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          display: "grid",
          justifyContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1>
            {" "}
            {props.CustomerName.charAt(0).toUpperCase() +
              props.CustomerName.slice(1)}
          </h1>
        </div>
        <div>
          <p>{props.ServiceCategory} </p>
        </div>
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            overflowX: "scrollable",
          }}
        >
          {" "}
          <p style={{ fontStyle: "italic" }}>
            {" "}
            "{" "}
            {props.CustomerReview.charAt(0).toUpperCase() +
              props.CustomerReview.slice(1)}{" "}
            "{" "}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
