import React from "react";

import NavBar from "./NavBar";
import { Container, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";
import ContactInformation from "../information/ContactInformation";
import LoginButton from "../userlogin/LoginButton";

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
    left: 0,
    right: 0,
    display: "grid",
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
          <Container
            maxWidth="xl"
            sx={{
              p: 2,
              bgcolor: "primary.dark",
              display: { xs: "flex", md: "none" },
            }}
          >
            {" "}
          </Container>
          <Container sx={layoutStyle}>
            <div style={themeToggleContainerStyles}>
              <LoginButton />
              <ContactInformation />
            </div>
            <div style={{ left: 0 }}>{props.children}</div>
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
}
