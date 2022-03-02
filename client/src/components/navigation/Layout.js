import React, { useState } from "react";
import BottomNavLabel from "./BottomNavLabel";
import NavBar from "./NavBar";
import { Container, Paper, Switch } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../../assets/theme";
import { darkTheme } from "../../assets/theme";
import ContactInformation from "../information/ContactInformation";

export default function Layout(props) {
  // set dark/light mode state and toggle function
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  // styles variables
  const paperStyle = {
    position: "fixed",
    bgcolor: "primary.dark",
    marginTop: "2em",
    width: "100%",
    height: "100%",
    //marginLeft: "-8px",
    overflow: "scroll",
  };

  const layoutStyle = {
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: 3,
    marginTop: "5rem",
    marginBottom: "1rem",
  };
  const themeToggleContainerStyles = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 7,
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Paper sx={paperStyle}>
          <NavBar />
          <Container sx={layoutStyle}>
            <div style={themeToggleContainerStyles}>
              <Switch
                color="success"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <ContactInformation />
            </div>
            {props.children}
          </Container>
          <BottomNavLabel />{" "}
        </Paper>
      </ThemeProvider>
    </>
  );
}
