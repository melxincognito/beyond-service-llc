import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import HomePage from "./pages/HomePage";
import MeetTeamPage from "./pages/MeetTeamPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meetTheTeam" element={<MeetTeamPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
