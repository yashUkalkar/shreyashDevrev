import { useLocation, Navigate, Outlet } from "react-router-dom";

import { auth } from "../firebase";

export const ProtectedRoutes = () => {
  const user = auth.currentUser;

  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/email" state={{ from: location }} replace />
  );
};
