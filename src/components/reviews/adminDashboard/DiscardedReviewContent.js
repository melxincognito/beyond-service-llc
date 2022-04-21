import * as React from "react";
import { Box, Typography } from "@mui/material";
import DiscardedClientReviewCard from "../DiscardedClientReviewCard";
import { getDocs } from "firebase/firestore";

import { discardedReviewsCollectionRef } from "../../../firebase-config";

let discardedReviews = [];

(function importDiscardedReviewsFirebase() {
  getDocs(discardedReviewsCollectionRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      discardedReviews.push({ ...doc.data(), id: doc.id });
    });
  });
})();

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

export default function DiscardedReviewContent() {
  return (
    <Box sx={contentContainerStyles}>
      <Box id="headerLabel" sx={headerLabelContainerStyles}>
        <Typography variant="h6"> Discarded Testimonials </Typography>
      </Box>

      <Box
        id="reviewContentContainer"
        sx={{ display: "grid", gap: 5, padding: 6 }}
      >
        {discardedReviews.map((review, index) => (
          <div key={index}>
            <DiscardedClientReviewCard
              ClientName={review.name}
              ServiceCategory={review.service}
              ClientEmail={review.email}
              ClientReview={review.review}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
}
