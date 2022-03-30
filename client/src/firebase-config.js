// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAbI1LE_svOtcAKGEi9qf7dY5gQbwYolws",

  authDomain: "beyond-service-development.firebaseapp.com",

  databaseURL:
    "https://beyond-service-development-default-rtdb.firebaseio.com/",

  projectId: "beyond-service-development",

  storageBucket: "beyond-service-development.appspot.com",

  messagingSenderId: "577328982458",

  appId: "1:577328982458:web:a3f225cb43d678aee71583",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
