import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import PresidentDashboard from "./pages/PresidentDashboard";
import VotingDashboard from "./pages/VotingDashboard";
import CreateVote from "./pages/CreateVote";
import UnitsDashboard from "./pages/UnitsDashboard";
import BillingDashboard from "./pages/BillingDashboard";
import OwnerDashboard from "./pages/OwnerDashboard.tsx";
import OwnerVoting from "./pages/OwnerVoting.tsx";
import OwnerTenants from "./pages/OwnerTenants.tsx";
import OwnerIncidents from "./pages/OwnerIncidents.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* OWNER ZONE: Set as the index (home) route */}
          <Route index element={<OwnerDashboard />} />

          <Route path="owner">
            <Route index element={<OwnerDashboard />} />
            <Route path="voting" element={<OwnerVoting />} />
          </Route>
          <Route path="owner">
            <Route index element={<OwnerDashboard />} />
            <Route path="voting" element={<OwnerVoting />} />

            {/* New Tenants Route */}
            <Route path="tenants" element={<OwnerTenants />} />
            {/* Incidents Route */}
            <Route path="incidents" element={<OwnerIncidents />} />
          </Route>

          {/* PRESIDENT ZONE: Kept at /president */}
          <Route path="president">
            <Route index element={<PresidentDashboard />} />
            <Route path="units" element={<UnitsDashboard />} />
            <Route path="billing" element={<BillingDashboard />} />
            <Route path="voting">
              <Route index element={<VotingDashboard />} />
              <Route path="create" element={<CreateVote />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
