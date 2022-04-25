import * as React from "react";
import { Box, Container } from "@mui/material";

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
        {props.CustomerName}
      </Container>{" "}
    </div>
  );
}

function FirebaseCustomerReviewContent() {
  const [clientName, setClientName] = React.useState("John");
  const [clientService, setClientService] = React.useState("jo@gmail.com");
  const [clientReview, setClientReview] = React.useState("ghello");

  const [reviews, setReviews] = React.useState([]);

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

  // styles variables
  const reviewContentContainerStyles = {
    height: "240px",
    backgroundColor: "primary.main",
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

  const changeReview = (name, service, review) => {
    setClientName(name);
    setClientService(service);
    setClientReview(review);
  };

  return (
    <div>
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          {" "}
          Click on the photo icons below to read though Beyond Service's
          customer testimonials
        </p>
      </div>
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
            width: "70%",
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
    <div>
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
