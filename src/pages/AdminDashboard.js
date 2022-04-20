import * as React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import PendingClientReviewCard from "../components/reviews/PendingClientReviewCard";
import { getDocs } from "firebase/firestore";
import { collectionRef } from "../firebase-config";

let pendingReviews = [];

(function dothis() {
  getDocs(collectionRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      pendingReviews.push({ ...doc.data(), id: doc.id });
    });
    console.log(pendingReviews);
  });
})();

export default function AdminDashboard() {
  const getClientInfo = () => {
    pendingReviews.map((review) => {
      console.log(review.name);
    });
  };
  return (
    <>
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
          <Typography variant="h4"> Admin Dashboard</Typography>
        </div>
        <div>
          <button onClick={getClientInfo}> Click me</button>
        </div>
        <Card>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Typography> Pending Reviews: </Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", gap: 5 }}>
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
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
