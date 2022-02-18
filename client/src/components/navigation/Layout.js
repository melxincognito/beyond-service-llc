import React from "react";
import BottomNavLabel from "./BottomNavLabel";
import NavBar from "./NavBar";
import { Container, Paper } from "@mui/material";

export default function Layout(props) {
  const paperStyle = {
    position: "fixed",
    bgcolor: "primary.dark",
    marginTop: "-12px",
    width: "100%",
    height: "100%",
    marginLeft: "-8px",
    overflow: "scroll",
  };

  const layoutStyle = {
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: 3,
    marginTop: "5rem",
    marginBottom: "1rem",
  };
  return (
    <>
      <Paper sx={paperStyle}>
        <NavBar />
        <Container sx={layoutStyle}>{props.children}</Container>
        <BottomNavLabel />{" "}
      </Paper>
    </>
  );
}
