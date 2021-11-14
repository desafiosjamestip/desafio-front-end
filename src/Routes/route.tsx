import { Route, Routes } from "react-router-dom";
import Display from "../Pages/Display";
import Forms from "../Pages/Forms";

import Dashboard from "../Pages/Dashboard";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Display />} />
      <Route path="/cadastro" element={<Forms />} />
      <Route path="/produtos" element={<Dashboard />} />
    </Routes>
  );
};

export default PageRoutes;
