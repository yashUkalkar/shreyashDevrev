import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthRoutes } from "./pages/auth/AuthRoutes";

import { HomeRoutes } from "./pages/home/HomeRoutes";
import { CartRoutes } from "./pages/cart/CartRoutes";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { ProtectedRoutes } from "./utils/ProtectedRoutes";

export const App = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        sessionStorage.setItem("isSignedIn", "true");
      } else sessionStorage.setItem("isSignedIn", "");
    });

    return () => {
      sessionStorage.setItem("isSignedIn", "");
    };
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/*" element={<HomeRoutes />} />
          <Route path="/cart/*" element={<CartRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
