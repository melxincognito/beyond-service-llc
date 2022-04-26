import React from "react";
import { Route, Routes } from "react-router-dom";
// pages imports
import Layout from "./components/navigation/Layout";
import HomePage from "./pages/HomePage";
import MeetTeamPage from "./pages/MeetTeamPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import CustomerReviewPage from "./pages/CustomerReviewPage";
import DesktopProjectGallery from "./pages/DesktopProjectGallery";
import MobileProjectGallery from "./pages/MobileProjectGallery";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProtectedRoutes from "./PROTECTEDROUTES";

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
        <Route path="/customerTestimonials" element={<CustomerReviewPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route
          path="/login-beyond-service-admin-dashboard"
          element={<LoginPage />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/beyond-service-admin-dashboard"
            element={<AdminDashboard />}
          />
        </Route>
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
      </Routes>
    </Layout>
  );
}
