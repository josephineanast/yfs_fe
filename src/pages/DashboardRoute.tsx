import { Overview } from "./overview";
import { Admin } from "./admin";
import { Results } from "./results";
import { Route, Routes } from "react-router-dom";
import { Building } from "./building";

export const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/results" element={<Results />} />
      <Route path="/building" element={<Building />} />
    </Routes>
  );
};
