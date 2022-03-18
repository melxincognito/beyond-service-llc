import React from "react";
import BottomNavLabel from "./BottomNavLabel";
import NavBar from "./NavBar";
import { Container, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";
import ContactInformation from "../information/ContactInformation";

export default function Layout(props) {
  // styles variables
  const paperStyle = {
    position: "fixed",
    bgcolor: "primary.dark",
    marginTop: "2em",
    width: "100%",
    height: "100%",
    overflow: "scroll",
  };

  const layoutStyle = {
    marginTop: "6rem",
    marginBottom: "3rem",
  };
  const themeToggleContainerStyles = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 7,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper sx={paperStyle}>
          <NavBar />
          <Container sx={layoutStyle}>
            <div style={themeToggleContainerStyles}>
              <ContactInformation />
            </div>
            <div style={{ left: 0 }}>{props.children}</div>
          </Container>
          <BottomNavLabel />
        </Paper>
      </ThemeProvider>
    </>
  );
}
