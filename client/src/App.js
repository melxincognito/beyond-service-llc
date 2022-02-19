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
import { Switch } from "@mui/material";

import theme from "./assets/theme";
import { darkTheme } from "./assets/theme";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
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
