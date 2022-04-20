import React, { Component } from "react";
import { Box } from "@mui/material";
import ApprovedReviewsContent from "../components/reviews/ApprovedReviewsContent";
import PendingReviewsContent from "../components/reviews/PendingReviewsContent";
import DiscardedReviewContent from "../components/reviews/DiscardedReviewContent";

export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <PendingReviewsContent />,
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

        <div>{this.state.content}</div>
      </Box>
    );
  }
}
