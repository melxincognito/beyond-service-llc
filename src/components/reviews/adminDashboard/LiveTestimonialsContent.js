import * as React from "react";
import { Box, Typography } from "@mui/material";
import LiveTestimonialsCard from "../LiveTestimonialsCard";
import { db } from "../../../firebase-config";
import { ref, onValue } from "firebase/database";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveTestimonials() {
  const [liveTestimonials, setLiveTestimonials] = React.useState([]);

  // importing the database to get the approved reviews
  React.useEffect(() => {
    onValue(ref(db, "LiveReviews/"), (snapshot) => {
      setLiveTestimonials([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((review) => {
          setLiveTestimonials((oldArray) => [...oldArray, review]);
          return review;
        });
      }
    });
  }, []);

  console.log(liveTestimonials);

  // styles variables

  const contentContainerStyles = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
  };

  const headerLabelContainerStyles = {
    backgroundColor: "white",
    color: "black",
    borderRadius: 2,
    padding: "0 1rem",
    margin: "0 0 1rem 0",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.8)",
  };

  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box sx={contentContainerStyles}>
          <Box id="headerLabel" sx={headerLabelContainerStyles}>
            <Typography variant="h6"> Live Testimonials </Typography>
          </Box>
          <Box id="headerContentContainer">
            <Typography>
              {" "}
              Manage testimonials currently displayed on your live website here
            </Typography>
          </Box>
          <Box
            id="reviewContentContainer"
            sx={{ display: "grid", gap: 5, padding: 6 }}
          >
            {liveTestimonials.map((review, index) => (
              <div key={index}>
                <LiveTestimonialsCard
                  ClientName={review.name}
                  ServiceCategory={review.service}
                  ClientEmail={review.email}
                  ClientReview={review.review}
                  ClientId={review.id}
                  ClientImgUrl={review.imgUrl}
                />
              </div>
            ))}
          </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
