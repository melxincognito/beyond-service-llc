import React from "react";
import BottomNavLabel from "./BottomNavLabel";
import NavBar from "./NavBar";
import { Container } from "@mui/material";

export default function Layout(props) {
  const layoutStyle = {
    alignContent: "center",
    justifyContent: "center",
    padding: 3,
    marginTop: "9rem",
    marginBottom: "5rem",
  };
  return (
    <>
      <NavBar />
      <Container sx={layoutStyle}>{props.children}</Container>
      <BottomNavLabel />
    </>
  );
}
