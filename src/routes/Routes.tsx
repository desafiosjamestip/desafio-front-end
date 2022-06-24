import { Route, Routes } from "react-router-dom";
import { Insert } from "../pages";
import { Home } from "../pages/Home";
import { Stock } from "../pages/Stock";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/insert" element={<Insert />} />

      <Route path="/stock" element={<Stock />} />
    </Routes>
  );
}
