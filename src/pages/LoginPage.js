import * as React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SignUpForm from "../SignUpForm";

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  let navigate = useNavigate();
  const login = () => {
    let path = `/beyond-service-admin-dashboard`;
    navigate(path);
  };

  const showPasswordLogin = () => {
    var x = document.getElementById("loginPasswordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      await login();
    } catch (error) {
      alert(error.message);
    }
  };

  // styles variables

  const cardStyles = {
    padding: 5,
    borderRadius: 2,
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ display: "grid", justifyContent: "center", gap: "5rem" }}
      >
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
        <SignUpForm />
      </motion.div>
    </AnimatePresence>
  );
}
