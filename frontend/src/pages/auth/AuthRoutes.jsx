import { Routes, Route } from "react-router-dom";

import { AuthDashboard } from "./AuthDashboard";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthDashboard />} />
    </Routes>
  );
};
