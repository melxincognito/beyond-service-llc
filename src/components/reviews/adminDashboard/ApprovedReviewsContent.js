import * as React from "react";
import { Box, Typography } from "@mui/material";

import ApprovedClientReviewCard from "../ApprovedClientReviewCard";

import { getDocs } from "firebase/firestore";

import { approvedReviewsCollectionRef } from "../../../firebase-config";

let approvedReviews = [];

(function importApprovedReviewsFirebase() {
  getDocs(approvedReviewsCollectionRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      approvedReviews.push({ ...doc.data(), id: doc.id });
    });
    console.log(approvedReviews);
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

export default function ApprovedReviewsContent() {
  return (
    <Box sx={contentContainerStyles}>
      <Box id="headerLabel" sx={headerLabelContainerStyles}>
        <Typography variant="h6"> Approved Testimonials </Typography>
      </Box>

      <Box
        id="reviewContentContainer"
        sx={{ display: "grid", gap: 5, padding: 6 }}
      >
        {approvedReviews.map((review, index) => (
          <div key={index}>
            <ApprovedClientReviewCard
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
