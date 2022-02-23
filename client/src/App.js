import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// pages imports
import Layout from "./components/navigation/Layout";
import HomePage from "./pages/HomePage";
import MeetTeamPage from "./pages/MeetTeamPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProjectGalleryPage from "./pages/ProjectGalleryPage";
// mui theme imports
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { darkTheme } from "./assets/theme";

// switch for theme change
import { Switch } from "@mui/material";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Layout>
        {" "}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Switch
            color="success"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
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
