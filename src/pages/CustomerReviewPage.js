import * as React from "react";
import { collection, getDocs } from "firebase/firestore";
import { collectionRef } from "../firebase-config";
import CustomerReviewForm from "../components/forms/CustomerReviewForm";
import CustomerReviewCard from "../components/information/CustomerReviewCard";
let reviews = [];

function FirebaseCustomerReviewContent() {
  const [clientName, setClientName] = React.useState("");
  const [clientReview, setClientReview] = React.useState("");
  function dothis() {
    getDocs(collectionRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        reviews.push({ ...doc.data(), id: doc.id });
      });
      console.log(reviews);
    });
  }

  function dothat() {
    reviews.map((item, index) => {
      console.log(item.review);
      console.log(index);
      console.log(item.name);
    });
  }

  function clientReviewFunc() {
    setClientReview(reviews[2].review);
    setClientName(reviews[2].name);
    console.log(clientReview);
  }

  return (
    <div>
      <div
        style={{
          height: "200px",
          backgroundColor: "black",
          marginTop: "2rem",
          color: "white",
        }}
      >
        {<h1 style={{ color: "white" }}> {clientName}</h1>}
        {<p style={{ color: "white" }}> {clientReview} </p>}
      </div>{" "}
      <button onClick={dothis}>Make</button>
      <button onClick={dothat}> Console log array</button>
      <button onClick={clientReviewFunc}> Set review</button>
    </div>
  );
}

function CustomerReviews() {
  return (
    <div style={{ backgroundColor: "black" }}>
      {reviews.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundcolor: "purple",
              height: "100px",
              width: "100px",
            }}
          >
            <h1> {item.name}</h1>
            <p> {item.review}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function CustomerReviewPage() {
  return (
    <div>
      <div>
        <CustomerReviewForm />
      </div>
      <div>
        <FirebaseCustomerReviewContent />
      </div>
      <div>
        <CustomerReviews />
      </div>
    </div>
  );
}
