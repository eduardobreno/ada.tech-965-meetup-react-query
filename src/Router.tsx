import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}
