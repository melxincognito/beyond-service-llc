import React, { Component } from "react";
import { Box, Button, Card, CardContent } from "@mui/material";
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
    const cardStyles = {
      padding: 3,
      borderRadius: 2,
      bgcolor: "secondary.light",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    };
    const formTitleDisplayStyles = {
      display: "flex",
      justifyContent: "center",
      bgcolor: "secondary.light",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
      borderRadius: "4px 25px 4px 25px",
    };
    return (
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Card sx={cardStyles}>
          <CardContent sx={formTitleDisplayStyles}>AdminDashboard</CardContent>
          <CardContent sx={{ display: "flex", gap: 3 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "secondary.main" }}
              onClick={this.updatePendingReviewsContent}
            >
              {" "}
              Pending Reviews
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "secondary.main" }}
              onClick={this.updateApprovedReviewsContent}
            >
              {" "}
              Approved Reviews
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "secondary.main" }}
              onClick={this.updateDiscardedReviewContent}
            >
              {" "}
              Discarded Reviews
            </Button>
          </CardContent>
          <hr size="1" width="90%" color="gray" />{" "}
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
                alignContent: "center",
                width: "90%",
                height: "100%",
                bgcolor: "pink",
                margin: "2rem auto",
                padding: "2rem 1rem",
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
              }}
            >
              <div>{this.state.content}</div>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
}
