import React from "react";
import BottomNavLabel from "./BottomNavLabel";
import NavBar from "./NavBar";
import { Container, Paper } from "@mui/material";

export default function Layout(props) {
  const paperStyle = {
    bgcolor: "#212121",
    padding: 1,
    marginTop: "-12px",
    width: "100%",
    marginLeft: "-8px",
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
