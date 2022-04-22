import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCe7SzIqXxQRAt6gD5ob9bonljpAPnkBE",

  authDomain: "beyond-service-llc.firebaseapp.com",

  projectId: "beyond-service-llc",

  storageBucket: "beyond-service-llc.appspot.com",

  messagingSenderId: "585088843386",

  appId: "1:585088843386:web:928ffe90a9c48ef79485c3",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const pendingReviewsCollectionRef = collection(
  firestore,
  "PendingReviews"
);

export const approvedReviewsCollectionRef = collection(
  firestore,
  "ApprovedReviews"
);
export const discardedReviewsCollectionRef = collection(
  firestore,
  "DiscardedReviews"
);

export const auth = getAuth(app);
