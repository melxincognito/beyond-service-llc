import React from "react";
import { Route, Routes } from "react-router-dom";
// pages imports
import Layout from "./components/navigation/Layout";
import HomePage from "./pages/HomePage";
import MeetTeamPage from "./pages/MeetTeamPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

import DummyProjectGallery from "./pages/DummyProjectGallery";
import DesktopProjectGallery from "./pages/DesktopProjectGallery";
import MobileProjectGallery from "./pages/MobileProjectGallery";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<MeetTeamPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/projectGalleryDesktop"
          element={<DesktopProjectGallery />}
        />
        <Route
          path="/projectGalleryMobile"
          element={<MobileProjectGallery />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dummyProjectGallery" element={<DummyProjectGallery />} />
      </Routes>
    </Layout>
  );
}
