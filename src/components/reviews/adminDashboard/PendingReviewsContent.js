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

export default function PendingReviewsContent() {
  const getClientInfo = () => {
    pendingReviews.map((review) => {
      console.log(review.name);
    });
  };
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
      <Box sx={{ display: "flex", gap: 5 }}>
        <PendingClientReviewCard
          ClientName="Melanie"
          ServiceCategory="beautiful"
          ClientEmail="melanie@gmail.com"
          ClientReview="This is going well"
        />
        <PendingClientReviewCard
          ClientName="Vitoria"
          ServiceCategory="julia wingman"
          ClientEmail="vippppp@gmail.com"
          ClientReview="We Are amazing together"
        />
      </Box>
    </Box>
  );
}
