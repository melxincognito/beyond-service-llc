import * as React from "react";
import { auth } from "./firebase-config";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default function SignUpForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signUpUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
      console.log("User created successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3> Sign up</h3>
      <input
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={signUpUser}>Sign up</button>
    </div>
  );
}
