import * as React from "react";
import LoginPage from "./pages/LoginPage";
import { Outlet } from "react-router-dom";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  let user = { loggedIn: true };

  onAuthStateChanged(auth, (currentUser) => {
    return user && user.loggedIn;
  });

  console.warn(user.loggedIn);
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoutes;
