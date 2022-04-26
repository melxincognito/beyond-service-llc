import * as React from "react";
import LoginPage from "./pages/LoginPage";
import { Outlet } from "react-router-dom";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [usario, setUsario] = React.useState(null);

  let user = { loggedIn: false };

  onAuthStateChanged(auth, (currentUser) => {
    setUsario(currentUser);

    return usario;
  });

  if (usario === null) {
    user.loggedIn = false;
  } else {
    user.loggedIn = true;
  }

  console.log("User Logged in? " + user.loggedIn);
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoutes;
