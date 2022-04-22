import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  let navigate = useNavigate();
  const login = () => {
    let path = `/adminDashboard`;
    navigate(path);
  };

  const log = () => {
    alert("puta");
  };
  return (
    <div style={{ display: "grid", justifyContent: "center", gap: "5rem" }}>
      <div style={{ display: "grid", justifyContent: "center", gap: "1rem" }}>
        <Typography variant="h6"> Login </Typography>
        <hr size="1" width="100%" color="gray" />
        <label> Email</label>
        <input />
        <label> Password</label>
        <input />
        <button onClick={login}> Login</button>
      </div>
      <div style={{ display: "grid", justifyContent: "center", gap: "1rem" }}>
        <Typography variant="h6"> Sign Up </Typography>
        <hr size="1" width="100%" color="gray" />
        <label> Email</label>
        <input />
        <label> Password</label>
        <input />
        <button onClick={log}> sign up</button>
      </div>
      <button> Sign out</button>
    </div>
  );
}
