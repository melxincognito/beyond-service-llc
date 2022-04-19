import React from "react";

export default function CustomerReviewCard(props) {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div>
        <h1> {props.CustomerName}</h1>
      </div>
      <div>
        <p>{props.ServiceCategory} </p>
      </div>
      <div>
        {" "}
        <p style={{ fontStyle: "italic" }}> " {props.CustomerReview} " </p>
      </div>
    </div>
  );
}
