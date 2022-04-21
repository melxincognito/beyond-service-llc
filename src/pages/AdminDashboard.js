import React, { Component } from "react";
import { Box } from "@mui/material";
import ApprovedReviewsContent from "../components/reviews/adminDashboard/ApprovedReviewsContent";
import PendingReviewsContent from "../components/reviews/adminDashboard/PendingReviewsContent";
import DiscardedReviewContent from "../components/reviews/adminDashboard/DiscardedReviewContent";
import DashboardIntroContent from "../components/reviews/adminDashboard/DashboardIntroContent";

export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <DashboardIntroContent />,
    };
  }

  updatePendingReviewsContent = () => {
    this.setState({ content: <PendingReviewsContent /> });
  };

  updateApprovedReviewsContent = () => {
    this.setState({ content: <ApprovedReviewsContent /> });
  };
  updateDiscardedReviewContent = () => {
    this.setState({ content: <DiscardedReviewContent /> });
  };
  render() {
    return (
      <Box sx={{ display: "grid", justifyContent: "center" }}>
        <div>AdminDashboard</div>
        <div style={{ display: "flex", gap: 3 }}>
          <button onClick={this.updatePendingReviewsContent}>
            {" "}
            Pending Reviews
          </button>
          <button onClick={this.updateApprovedReviewsContent}>
            {" "}
            Approved Reviews
          </button>
          <button onClick={this.updateDiscardedReviewContent}>
            {" "}
            Discarded Reviews
          </button>
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            alignContent: "center",
            width: "110%",
            height: "120%",
            bgcolor: "pink",
            margin: "5rem auto",
          }}
        >
          <div>{this.state.content}</div>
        </Box>
      </Box>
    );
  }
}
