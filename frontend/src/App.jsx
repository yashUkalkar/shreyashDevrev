import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthRoutes } from "./pages/auth/AuthRoutes";

import { HomeRoutes } from "./pages/home/HomeRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route path="/*" element={<HomeRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
