import * as React from "react";
import { Box, Typography } from "@mui/material";
import PendingClientReviewCard from "../PendingClientReviewCard";
import { set, ref, onValue, remove, update } from "firebase/database";
import { db } from "../../../firebase-config";
import { getDocs } from "firebase/firestore";

import { pendingReviewsCollectionRef } from "../../../firebase-config";

//let pendingReviews = [];

/*(function importPendingReviewsFirebase() {
  getDocs(pendingReviewsCollectionRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      pendingReviews.push({ ...doc.data(), id: doc.id });
    });
    console.log(pendingReviews);
  });
})();
*/

export default function PendingReviewsContent() {
  const [pendingReviews, setPendingReviews] = React.useState([]);

  React.useEffect(() => {
    onValue(ref(db, "PendingReviews/"), (snapshot) => {
      setPendingReviews([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((review) => {
          setPendingReviews((oldArray) => [...oldArray, review]);
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
    textAlign: "center",
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
    <Box sx={contentContainerStyles}>
      <Box id="headerLabel" sx={headerLabelContainerStyles}>
        <Typography variant="h6"> Pending Testimonials</Typography>
      </Box>
      <Box id="headerContentContainer">
        <Typography>
          {" "}
          Select whether you want to approve or discard submitted testimonials
          here
        </Typography>
      </Box>

      <Box
        id="reviewContentContainer"
        sx={{ display: "grid", gap: 5, padding: 6 }}
      >
        {pendingReviews.map((review, index) => (
          <div key={index}>
            <PendingClientReviewCard
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
