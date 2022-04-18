import * as React from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase-config";
import { v4 as uuidv4 } from "uuid";

export default function CustomerReviewPage() {
  const [customerName, setCustomerName] = React.useState("");
  const [customerEmail, setCustomerEmail] = React.useState("");
  const [customerReview, setCustomerReview] = React.useState("");

  const data = {
    id: uuidv4(),
    name: customerName,
    email: customerEmail,
    review: customerReview,
  };

  const sendReview = (e) => {
    e.preventDefault();
    setDoc(doc(firestore, "reviews", data.id), {
      name: data.name,
      email: data.email,
      review: data.review,
    });
  };

  return (
    <div>
      CustomerReviewPage
      <div>
        <form style={{ display: "grid" }} onSubmit={sendReview}>
          <input
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="name"
          />
          <input
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="email"
          />
          <textarea
            onChange={(e) => setCustomerReview(e.target.value)}
            rows="4"
            placeholder="review"
          />

          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
}
