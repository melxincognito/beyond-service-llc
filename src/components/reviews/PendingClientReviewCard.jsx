import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase-config";

export default function PendingClientReviewCard(props) {
  const [approvedCustomerName] = React.useState(props.ClientName);
  const [approvedCustomerEmail] = React.useState(props.ClientEmail);
  const [approvedCustomerReview] = React.useState(props.ClientReview);

  const [approvedServiceReview] = React.useState(props.ServiceCategory);

  // approved service review
  const data = {
    id: uuidv4(),
    Name: approvedCustomerName,
    Email: approvedCustomerEmail,
    Review: approvedCustomerReview,
    Service: approvedServiceReview,
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
  const [discardedCustomerName] = React.useState(props.ClientName);
  const [discardedCustomerEmail] = React.useState(props.ClientEmail);
  const [discardedCustomerReview] = React.useState(props.ClientReview);
  const [discardedServiceReview] = React.useState(props.ServiceCategory);

  const discardedData = {
    id: uuidv4(),
    Name: discardedCustomerName,
    Email: discardedCustomerEmail,
    Review: discardedCustomerReview,
    Service: discardedServiceReview,
  };

  const discardReview = (e) => {
    e.preventDefault();

    setDoc(doc(firestore, "DiscardedReviews", data.id), {
      name: discardedData.Name,
      email: discardedData.Email,
      review: discardedData.Review,
      service: discardedData.Service,
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
