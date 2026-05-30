import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import PresidentDashboard from "./pages/PresidentDashboard.tsx";
import BillingDashboard from "./pages/BillingDashboard.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The DashboardLayout wraps around all our inner pages */}
        <Route path="/" element={<DashboardLayout />}>
          {/* The "index" route means this loads when the URL is exactly "/" */}
          <Route index element={<PresidentDashboard />} />

          {/* Placeholders for our future features */}
          <Route
            path="units"
            element={
              <div className="p-8 font-bold text-slate-800">
                Unit Management Coming Soon
              </div>
            }
          />
          <Route
            path="voting"
            element={
              <div className="p-8 font-bold text-slate-800">
                Voting System Coming Soon
              </div>
            }
          />
          <Route
            path="billing"
            element={
              <div className="p-8 font-bold text-slate-800">
                Billing & Invoices Coming Soon
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
