import * as React from "react";
import { Box, Container } from "@mui/material";

import { getDocs } from "firebase/firestore";
import { collectionRef } from "../firebase-config";
import CustomerReviewForm from "../components/forms/CustomerReviewForm";
import CustomerReviewCard from "../components/information/CustomerReviewCard";
let reviews = [];
(function dothis() {
  getDocs(collectionRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      reviews.push({ ...doc.data(), id: doc.id });
    });
    console.log(reviews);
  });
})();

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
  const [clientName, setClientName] = React.useState("Julio");
  const [clientReview, setClientReview] = React.useState(
    "This was the most amazing experience!"
  );
  const [clientService, setClientService] = React.useState("Cleaning");

  function clientReviewVi() {
    setClientReview(reviews[2].review);
    setClientName(reviews[2].name);
    setClientService(reviews[2].service);
    console.log(clientReview);
    console.log(clientName);
  }

  function setReviewOrian() {
    setClientReview(reviews[0].review);
    setClientName(reviews[0].name);
    setClientService(reviews[0].service);
    console.log(clientReview);
    console.log(clientName);
  }
  function setReviewMel() {
    setClientReview(reviews[1].review);
    setClientName(reviews[1].name);
    setClientService(reviews[1].service);
    console.log(clientReview);
    console.log(clientName);
  }
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

  return (
    <div>
      <Box sx={reviewContentContainerStyles}>
        {
          <CustomerReviewCard
            CustomerName={clientName}
            CustomerReview={clientReview}
            ServiceCategory={clientService}
          />
        }
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
          <CustomerReviewSelectionDesign
            onHandleClick={setReviewOrian}
            ImgLink="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
            CustomerName="Vi"
          />
          <CustomerReviewSelectionDesign
            onHandleClick={setReviewMel}
            ImgLink="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
            CustomerName="Mel"
          />
          <CustomerReviewSelectionDesign
            onHandleClick={clientReviewVi}
            ImgLink="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            CustomerName="Orian"
          />
          <CustomerReviewSelectionDesign
            onHandleClick={setReviewOrian}
            ImgLink="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
            CustomerName="Vi"
          />
          <CustomerReviewSelectionDesign
            onHandleClick={setReviewMel}
            ImgLink="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
            CustomerName="Mel"
          />
          <CustomerReviewSelectionDesign
            onHandleClick={clientReviewVi}
            ImgLink="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            CustomerName="Orian"
          />
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
