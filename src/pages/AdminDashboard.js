import React, { Component } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ApprovedReviewsContent from "../components/reviews/adminDashboard/ApprovedReviewsContent";
import PendingReviewsContent from "../components/reviews/adminDashboard/PendingReviewsContent";
import DiscardedReviewContent from "../components/reviews/adminDashboard/DiscardedReviewContent";
import DashboardIntroContent from "../components/reviews/adminDashboard/DashboardIntroContent";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import HomeIcon from "@mui/icons-material/Home";
import ChairIcon from "@mui/icons-material/Chair";
import KitchenIcon from "@mui/icons-material/Kitchen";
import CurrentUserHeader from "../components/reviews/adminDashboard/CurrentUserHeader";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  let navigate = useNavigate();
  const routeLogout = () => {
    let path = `/login-beyond-service-admin-dashboard`;
    navigate(path);
  };

  const logoutUser = async () => {
    await signOut(auth);
    await routeLogout();
  };

  return (
    <Button
      id="adminbtn"
      variant="contained"
      color="secondary"
      onClick={logoutUser}
    >
      Logout
    </Button>
  );
}

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

    const formTitleDisplayStyles = {
      display: "flex",
      justifyContent: "center",
      bgcolor: "secondary.light",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
      borderRadius: "4px 25px 4px 25px",
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
    };
    const contentContainerStyles = {
      display: "grid",
      justifyContent: "center",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      bgcolor: "#424242",
      color: "white",
      margin: "2rem 0",
      padding: "2rem 2rem",
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
      borderRadius: 2,
    };

    return (
      <>
        <CurrentUserHeader />{" "}
        <Box sx={{ display: "grid", gap: 5, margin: "2rem 0 6rem 0 " }}>
          <Card sx={formTitleDisplayStyles}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                justifyContent: "center",
                alignItems: "center",
                justifyItems: "center",
                alignContent: "center",
                margin: 0,
                height: "7rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  width: "33.3%",
                  verticalAlign: "top",
                  marginRight: "6rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gap: 3,
                  }}
                >
                  <LogoutButton />

                  <Button id="settingsbtn" variant="outlined" color="secondary">
                    {" "}
                    Settings
                  </Button>
                </div>
              </div>
              <div
                style={{
                  display: "inline-block",
                  width: "33.3%",
                  verticalAlign: "top",
                  marginRight: "7rem",
                }}
              >
                <Typography variant="h4">AdminDashboard </Typography>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "33.3%",
                  verticalAlign: "top",
                  marginLeft: "11rem",
                }}
              >
                <HomeIcon id="icon" />
                <ChairIcon id="iconCenter" />
                <KitchenIcon id="icon" />
              </div>
            </Box>
          </Card>
          <Box sx={{ display: "flex", gap: 7 }}>
            <Card sx={contentSelectorCardStyles}>
              <CardContent sx={{ display: "grid", gap: 3 }}>
                <hr size="1" width="90%" color="gray" />
                <Button
                  id="adminbtn"
                  variant="contained"
                  sx={{ backgroundColor: "secondary.main" }}
                  onClick={this.updatePendingReviewsContent}
                >
                  {" "}
                  Pending Testimonials
                </Button>
                <hr size="1" width="90%" color="gray" />
                <Button
                  id="adminbtn"
                  variant="contained"
                  sx={{ backgroundColor: "secondary.main" }}
                  onClick={this.updateApprovedReviewsContent}
                >
                  {" "}
                  Approved Testimonials
                </Button>
                <hr size="1" width="90%" color="gray" />
                <Button
                  id="adminbtn"
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
              <CardContent sx={contentContainerStyles}>
                {this.state.content}
              </CardContent>
            </Card>
          </Box>
        </Box>
      </>
    );
  }
}
