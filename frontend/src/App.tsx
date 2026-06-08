import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import PresidentDashboard from "./pages/PresidentDashboard.tsx";
import VotingDashboard from "./pages/VotingDashboard.tsx";
import CreateVote from "./pages/CreateVote.tsx";
import UnitsDashboard from "./pages/UnitsDashboard.tsx";
import BillingDashboard from "./pages/BillingDashboard.tsx";
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
