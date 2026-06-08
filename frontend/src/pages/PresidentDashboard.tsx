import KPIGrid from "../components/Dashboard/KPIGrid";
import FinancialOverview from "../components/Dashboard/FinancialOverview";
import TopDebtors from "../components/Dashboard/TopDebtors";
import VisualMap from "../components/Dashboard/VisualMap";

export default function PresidentDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            President dashboard
          </h1>
          <p className="text-slate-500 text-sm">
            Edificio Las Acacias · 24 units
          </p>
        </div>
      </div>

      {/* 1. Top KPI Row */}
      <KPIGrid />

      {/* 2. Middle Row: Overview & Debtors */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <FinancialOverview />
        </div>
        <div>
          <TopDebtors />
        </div>
      </div>

      {/* 3. Bottom Row: Building Map */}
      <VisualMap />
    </div>
  );
}
