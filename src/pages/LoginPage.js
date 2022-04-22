import * as React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

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
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginUser = async () => {};
  const logoutUser = async () => {};

  const log = () => {
    alert("puta");
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
        <button onClick={login}> Login</button>
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
      <button> Sign out</button>
    </div>
  );
}
