import { Routes, Route } from "react-router-dom";

import { CartPage } from "./CartPage";

export const CartRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CartPage />} />
    </Routes>
  );
};
