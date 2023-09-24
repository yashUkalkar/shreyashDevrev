import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { auth } from "../../firebase";

import { HomeHeader } from "./HomeHeader";

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (!auth.currentUser) navigate("/auth", { state: { from: location } });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        overflowX: "hidden",
        padding: "5px",
      }}
    >
      <HomeHeader />
    </div>
  );
};
