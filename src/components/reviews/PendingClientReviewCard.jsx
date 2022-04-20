import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase-config";

export default function PendingClientReviewCard(props) {
  const [customerName] = React.useState(props.ClientName);
  const [customerEmail] = React.useState(props.ClientEmail);
  const [customerReview] = React.useState(props.ClientReview);

  const [serviceCategory] = React.useState(props.ServiceCategory);

  // approved service review
  const data = {
    id: uuidv4(),
    Name: customerName,
    Email: customerEmail,
    Review: customerReview,
    Service: serviceCategory,
  };
  const sendReview = (e) => {
    e.preventDefault();

    setDoc(doc(firestore, "ApprovedReviews", data.id), {
      name: data.Name,
      email: data.Email,
      review: data.Review,
      service: data.Service,
    });
    console.log("successfully saved");
  };

  // discard service review and send to rejected database

  const discardReview = (e) => {
    e.preventDefault();

    setDoc(doc(firestore, "DiscardedReviews", data.id), {
      name: data.Name,
      email: data.Email,
      review: data.Review,
      service: data.Service,
    });
    console.log("successfully discarded");
  };

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div>
        <p>Client Name: {props.ClientName} </p>
      </div>
      <div>
        <p> Service Category: {props.ServiceCategory}</p>
      </div>
      <div>
        {" "}
        <p> Contact Email: {props.ClientEmail} </p>
      </div>
      <div>
        <p> Review: {props.ClientReview}</p>
      </div>
      <div id="buttons ">
        <button onClick={sendReview}> Approve Review</button>
        <button onClick={discardReview}> Discard Review</button>
      </div>
    </div>
  );
}
