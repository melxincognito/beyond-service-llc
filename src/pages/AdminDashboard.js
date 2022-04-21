import React, { Component } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
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
    const contentSelectorCardStyles = {
      padding: 3,
      borderRadius: 2,
      bgcolor: "secondary.light",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
      display: "block",
      height: "24rem",
      width: "30%",
    };

    const contentCardStyles = {
      padding: 3,
      borderRadius: 2,
      bgcolor: "secondary.light",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
      width: "100%",
      display: "grid",
      justifyContent: "center",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center",
      height: "100%",

      margin: "20",
    };

    const formTitleDisplayStyles = {
      display: "flex",
      justifyContent: "center",
      bgcolor: "secondary.light",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
      borderRadius: "4px 25px 4px 25px",
    };

    const contentContainerStyles = {
      display: "grid",
      justifyContent: "center",
      justifyItems: "center",
      alignItems: "center",
      alignContent: "center",
      width: "90%",
      height: "100%",
      bgcolor: "#424242",
      color: "white",
      margin: "2rem auto",
      padding: "2rem 1rem",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
      borderRadius: 2,
    };
    return (
      <Box sx={{ display: "grid", gap: 5, marginTop: 2 }}>
        <Card sx={formTitleDisplayStyles}>
          <CardContent>
            <Typography variant="h4">AdminDashboard </Typography>
          </CardContent>
        </Card>

        <Box sx={{ display: "flex", gap: 7, justifyContent: "center" }}>
          <Card sx={contentSelectorCardStyles}>
            <CardContent sx={{ display: "grid", gap: 3 }}>
              <hr size="1" width="90%" color="gray" />
              <Button
                variant="contained"
                sx={{ backgroundColor: "secondary.main" }}
                onClick={this.updatePendingReviewsContent}
              >
                {" "}
                Pending Testimonials
              </Button>
              <hr size="1" width="90%" color="gray" />
              <Button
                variant="contained"
                sx={{ backgroundColor: "secondary.main" }}
                onClick={this.updateApprovedReviewsContent}
              >
                {" "}
                Approved Testimonials
              </Button>
              <hr size="1" width="90%" color="gray" />
              <Button
                variant="contained"
                sx={{ backgroundColor: "secondary.main" }}
                onClick={this.updateDiscardedReviewContent}
              >
                {" "}
                Discarded Testimonials
              </Button>
              <hr size="1" width="90%" color="gray" />
            </CardContent>
          </Card>

          <Card sx={contentCardStyles}>
            <CardContent>
              <Box sx={contentContainerStyles}>
                <div>{this.state.content}</div>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    );
  }
}
