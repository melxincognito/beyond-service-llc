import React from "react";
import BottomNavLabel from "./BottomNavLabel";
import NavBar from "./NavBar";
import { Container } from "@mui/material";

export default function Layout(props) {
  const layoutStyle = {
    display: "flex-box",
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: 3,
    marginTop: "8rem",
    marginBottom: "1rem",
  };
  return (
    <>
      <NavBar />
      <Container sx={layoutStyle}>{props.children}</Container>
      <BottomNavLabel />
    </>
  );
}
