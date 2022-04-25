import * as React from "react";
import { Box, Typography } from "@mui/material";
import DiscardedClientReviewCard from "../DiscardedClientReviewCard";
import { ref, onValue } from "firebase/database";
import { db } from "../../../firebase-config";

export default function DiscardedReviewContent() {
  const [discardedReviews, setDiscardedReviews] = React.useState([]);

  // importing the database to get the discarded reviews
  React.useEffect(() => {
    onValue(ref(db, "DiscardedReviews/"), (snapshot) => {
      setDiscardedReviews([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((review) => {
          setDiscardedReviews((oldArray) => [...oldArray, review]);
          return review;
        });
      }
    });
  }, []);

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
    <>
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
                ClientId={review.id}
              />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
}
