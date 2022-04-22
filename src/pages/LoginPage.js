import * as React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [user, setUser] = React.useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  let navigate = useNavigate();
  const login = () => {
    let path = `/adminDashboard`;
    navigate(path);
  };

  const showPasswordSignUp = () => {
    var x = document.getElementById("signupPasswordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const showPasswordLogin = () => {
    var x = document.getElementById("loginPasswordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      alert(error.message);
    }
  };
  const logoutUser = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ display: "grid", justifyContent: "center", gap: "5rem" }}>
      <div style={{ display: "grid", justifyContent: "center", gap: "1rem" }}>
        <Typography variant="h6"> Login </Typography>
        <hr size="1" width="100%" color="gray" />
        <label> Email</label>
        <input
          placeholder="email.."
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <label> Password</label>
        <input
          id="loginPasswordInput"
          placeholder="password..."
          type="password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <div style={{ display: "inline-block" }}>
          <input type="checkbox" onClick={showPasswordLogin} />{" "}
          <label>Show password</label>
        </div>
        <button onClick={loginUser}> Login</button>
      </div>
      <div style={{ display: "grid", justifyContent: "center", gap: "1rem" }}>
        <Typography variant="h6"> Sign Up </Typography>
        <hr size="1" width="100%" color="gray" />
        <label> Email</label>
        <input
          placeholder="email..."
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <label> Password</label>
        <input
          id="signupPasswordInput"
          placeholder="password..."
          type="password"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <div style={{ display: "inline-block" }}>
          <input type="checkbox" onClick={showPasswordSignUp} />{" "}
          <label>Show password</label>
        </div>

        <button onClick={registerUser}> Sign up</button>
      </div>
      <div>
        <h4> user logged in: </h4>
        <p> {user?.email}</p>
      </div>
      <button onClick={logoutUser}> Sign out</button>
    </div>
  );
}
