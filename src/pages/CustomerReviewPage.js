import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

import CustomerReviewForm from "../components/forms/CustomerReviewForm";
import CustomerReviewCard from "../components/information/CustomerReviewCard";

import { db } from "../firebase-config";
import { ref, onValue } from "firebase/database";

function CustomerReviewSelectionDesign(props) {
  return (
    <div>
      <Container
        sx={{
          margin: "5px auto",
          minWidth: "100%",
          display: "grid",
          justifyContent: "center",
          justifyItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
        onClick={props.onHandleClick}
      >
        {" "}
        <img
          src={props.ImgLink}
          alt={props.CustomerName}
          style={{
            width: "115px",
            height: "115px",
            borderRadius: "50%",
            boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
          }}
        />
        <Typography>
          {props.CustomerName.charAt(0).toUpperCase() +
            props.CustomerName.slice(1)}
        </Typography>
      </Container>{" "}
    </div>
  );
}

function FirebaseCustomerReviewContent() {
  const [reviews, setReviews] = React.useState([]);
  const [clientName, setClientName] = React.useState("");
  const [clientService, setClientService] = React.useState(
    "Click on the photo icons below to read though Beyond Service's customer testimonials"
  );
  const [clientReview, setClientReview] = React.useState("");
  React.useEffect(() => {
    onValue(ref(db, "LiveReviews/"), (snapshot) => {
      setReviews([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((review) => {
          setReviews((oldArray) => [...oldArray, review]);

          return review;
        });
      }
    });
  }, []);

  const changeReview = (name, service, review) => {
    setClientName(name);
    setClientService(service);
    setClientReview(review);
  };

  // styles variables
  const reviewContentContainerStyles = {
    padding: "1.5rem",

    backgroundColor: "#242424",
    marginTop: "2rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
    borderRadius: 2,
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.66)",
  };

  const headerStyles = {
    display: "flex",
    justifyContent: "center",
    margin: 1,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.3)",
    borderRadius: "4px 25px 4px 25px",
    bgcolor: "secondary.light",
    padding: 2,
  };

  return (
    <div style={{ display: "grid" }}>
      <Box sx={headerStyles}>
        <Typography variant="h4"> Customer Testimonials</Typography>
      </Box>
      <Box sx={reviewContentContainerStyles}>
        <div>
          <CustomerReviewCard
            CustomerName={clientName}
            CustomerReview={clientReview}
            ServiceCategory={clientService}
          />
        </div>
      </Box>{" "}
      <hr size="1" width="100%" color="gray" style={{ margin: "2rem 0" }} />
      <Box
        id="testimonialIconContainer"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <div
          id="testimonialIconContent"
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflowX: "scroll",
            justifyContent: "center",

            width: "100%",
            gap: 10,
            margin: 10,
          }}
        >
          {reviews.map((review, index) => (
            <div key={index}>
              <CustomerReviewSelectionDesign
                ImgLink={review.imgUrl}
                CustomerName={review.name}
                onHandleClick={() => {
                  changeReview(review.name, review.service, review.review);
                }}
              />
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}

export default function CustomerReviewPage() {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <div>
        <FirebaseCustomerReviewContent />
      </div>{" "}
      <hr size="1" width="100%" color="gray" />
      <div style={{ marginTop: "2rem" }}>
        <CustomerReviewForm />
      </div>
    </div>
  );
}
