import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{ backgroundColor: "black", color: "white" }}
        onClick={routeChange}
      >
        Login
      </Button>
    </>
  );
}
