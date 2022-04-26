import * as React from "react";
import LoginPage from "./pages/LoginPage";
import { Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { isLoggedIn: false };

  return user && user.isLoggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoutes;
