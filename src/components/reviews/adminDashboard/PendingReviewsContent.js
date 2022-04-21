import * as React from "react";
import { Box, Typography } from "@mui/material";
import PendingClientReviewCard from "../PendingClientReviewCard";

import { getDocs } from "firebase/firestore";

import { pendingReviewsCollectionRef } from "../../../firebase-config";

let pendingReviews = [];

(function dothis() {
  getDocs(pendingReviewsCollectionRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      pendingReviews.push({ ...doc.data(), id: doc.id });
    });
    console.log(pendingReviews);
  });
})();

/*     
<PendingClientReviewCard
ClientName="Melanie"
ServiceCategory="beautiful"
ClientEmail="melanie@gmail.com"
ClientReview="This is going well"
/> 

*/

export default function PendingReviewsContent() {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        gap: 3,
      }}
    >
      <div>
        <Typography>
          {" "}
          Select whether you want to approve or discard submitted testimonials
          here
        </Typography>
      </div>
      <Box sx={{ display: "grid" }}>
        {pendingReviews.map((review, index) => (
          <div>
            <PendingClientReviewCard
              key={index}
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
