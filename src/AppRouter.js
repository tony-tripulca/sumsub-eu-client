import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SumsubSdk from "./modules/sumsub-sdk/SumsubSdk";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<SumsubSdk />} />

      {/* Fallback */}
      <Route exact path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
