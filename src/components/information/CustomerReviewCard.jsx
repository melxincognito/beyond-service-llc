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
        <h1>
          {" "}
          {props.CustomerName.charAt(0).toUpperCase() +
            props.CustomerName.slice(1)}
        </h1>
      </div>
      <div>
        <p>{props.ServiceCategory} </p>
      </div>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          overflowX: "scrollable",
        }}
      >
        {" "}
        <p style={{ fontStyle: "italic" }}>
          {" "}
          "{" "}
          {props.CustomerReview.charAt(0).toUpperCase() +
            props.CustomerReview.slice(1)}{" "}
          "{" "}
        </p>
      </div>
    </div>
  );
}
