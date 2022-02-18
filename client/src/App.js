import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import HomePage from "./pages/HomePage";
import MeetTeamPage from "./pages/MeetTeamPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProjectGalleryPage from "./pages/ProjectGalleryPage";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { Switch } from "@mui/material";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const getDesignTokens = (mode) => ({
    palette: {
      primary: {
        ...amber,
        ...(mode === "dark" && {
          main: amber[300],
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });

  const setTheme = createTheme({
    palette: {
      mode: darkMode ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={setTheme}>
      <Layout>
        <Switch
          color="warning"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<MeetTeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projectGallery" element={<ProjectGalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
