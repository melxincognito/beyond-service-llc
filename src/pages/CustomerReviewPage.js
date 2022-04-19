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
    setClientReview(reviews[3].review);
    setClientName(reviews[3].name);
    console.log(clientReview);
  }
  function setReviewOrian() {
    setClientReview(reviews[0].review);
    setClientName(reviews[0].name);
  }
  function setReviewMel() {
    setClientReview(reviews[1].review);
    setClientName(reviews[1].name);
  }

  return (
    <div>
      <div
        style={{
          height: "200px",
          backgroundColor: "black",
          marginTop: "2rem",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          justifyItems: "center",
        }}
      >
        {
          <CustomerReviewCard
            CustomerName={clientName}
            CustomerReview={clientReview}
          />
        }
      </div>{" "}
      <button onClick={dothis}>Make</button>
      <button onClick={dothat}> Console log array</button>
      <button onClick={clientReviewFunc}> Set review Vi</button>
      <button onClick={setReviewMel}> Set Review Mel</button>
      <button onClick={setReviewOrian}> Set Review Orian</button>
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
