import { useLocation, Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const location = useLocation();
  return sessionStorage.getItem("isSignedIn") ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};
