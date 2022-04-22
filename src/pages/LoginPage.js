import * as React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] =
    React.useState("");
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
    var y = document.getElementById("signupConfirmPasswordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
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

  const validatePassword = () => {
    let isValid = true;
    if (registerPassword !== "" && registerConfirmPassword !== "") {
      if (registerPassword !== registerConfirmPassword) {
        isValid = false;
        alert("Passwords does not match");
      }
    }
    return isValid;
  };
  // styles variables

  const cardStyles = {
    padding: 3,
    borderRadius: 2,
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={{ display: "grid", justifyContent: "center", gap: "5rem" }}>
      <Card id="loginCard" sx={cardStyles}>
        <CardContent
          sx={{
            display: "grid",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div
            id="header"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography variant="h5"> Login </Typography>
          </div>

          <hr size="1" width="100%" color="gray" />

          <TextField
            variant="outlined"
            label="Email"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />

          <TextField
            id="loginPasswordInput"
            variant="outlined"
            label="Password"
            type="password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />

          <div style={{ display: "inline-block" }}>
            <input type="checkbox" onClick={showPasswordLogin} />{" "}
            <label>Show password</label>
          </div>

          <Button variant="contained" onClick={loginUser}>
            {" "}
            Log in
          </Button>
          <label>
            {" "}
            Forgot password?{" "}
            <a href="/forgotPassword" target="_blank">
              Click here{" "}
            </a>
          </label>
        </CardContent>
      </Card>

      <Card id="signUpCard" sx={cardStyles}>
        <CardContent
          sx={{
            display: "grid",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5"> Sign Up </Typography>
          </div>

          <hr size="1" width="100%" color="gray" />

          <TextField
            variant="outlined"
            label="Email"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />

          <TextField
            variant="outlined"
            id="signupPasswordInput"
            label="Password"
            type="password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            id="signupConfirmPasswordInput"
            label="Confirm Password"
            type="password"
            onChange={(e) => {
              setRegisterConfirmPassword(e.target.value);
            }}
          />
          <div style={{ display: "inline-block" }}>
            <input type="checkbox" onClick={showPasswordSignUp} />{" "}
            <label>Show password</label>
          </div>

          <Button variant="contained" onClick={registerUser}>
            {" "}
            Sign Up
          </Button>
        </CardContent>
      </Card>

      <div>
        <h4> user logged in: </h4>
        <p> {user?.email}</p>
      </div>
      <button onClick={logoutUser}> Sign out</button>
    </div>
  );
}
