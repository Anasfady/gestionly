import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout & Public
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import AuthPage from "./pages/AuthPage.tsx";

// President Pages
import PresidentDashboard from "./pages/PresidentDashboard.tsx";
import VotingDashboard from "./pages/VotingDashboard.tsx";
import CreateVote from "./pages/CreateVote.tsx";
import UnitsDashboard from "./pages/UnitsDashboard.tsx";
import BillingDashboard from "./pages/BillingDashboard.tsx";
import PresidentSettings from "./pages/PresidentSettings.tsx";

// Owner Pages
import OwnerDashboard from "./pages/OwnerDashboard.tsx";
import OwnerVoting from "./pages/OwnerVoting.tsx";
import OwnerTenants from "./pages/OwnerTenants.tsx";
import OwnerIncidents from "./pages/OwnerIncidents.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ZONE */}
        <Route path="/" element={<LandingPage />} />

        {/* AUTHENTICATION ROUTES */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />

        {/* PRIVATE APP ZONE */}
        <Route element={<DashboardLayout />}>
          {/* Owner Paths */}
          <Route path="owner">
            <Route index element={<OwnerDashboard />} />
            <Route path="voting" element={<OwnerVoting />} />
            <Route path="tenants" element={<OwnerTenants />} />
            <Route path="incidents" element={<OwnerIncidents />} />
          </Route>

          {/* President Paths */}
          <Route path="president">
            <Route index element={<PresidentDashboard />} />
            <Route path="units" element={<UnitsDashboard />} />
            <Route path="billing" element={<BillingDashboard />} />

            {/* Voting Routes */}
            <Route path="voting">
              <Route index element={<VotingDashboard />} />
              {/* This resolves to /president/voting/create */}
              <Route path="create" element={<CreateVote />} />
            </Route>

            <Route path="settings" element={<PresidentSettings />} />
          </Route>
        </Route>

        {/* 🚨 CATCH-ALL ROUTE (Prevents the Black Screen of Death) 🚨 */}
        {/* If a user types a URL that doesn't exist, send them back to the dashboard */}
        <Route path="*" element={<Navigate to="/president" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
