import React from "react";

export default function TopDebtors() {
  // Array of debtor objects to map over
  const debtors = [
    { id: 1, name: "García Family", unit: "B2 · 3ºA", amount: 1250, months: 3 },
    { id: 2, name: "López, M.", unit: "B1 · 2ºC", amount: 840, months: 2 },
    { id: 3, name: "Pereira, J.", unit: "B3 · 1ºB", amount: 520, months: 1 },
    { id: 4, name: "Ortega Bros.", unit: "Local 02", amount: 2100, months: 4 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
      <h3 className="font-semibold text-slate-800 mb-1">Top Debtors</h3>
      <div className="space-y-3">
        {debtors.map((debtor) => (
          <div
            key={debtor.id}
            className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div>
              <p className="font-medium text-slate-800">{debtor.name}</p>
              <p className="text-xs text-slate-500">{debtor.unit}</p>
            </div>
            <div className="text-right flex flex-col items-end">
              <p className="font-bold text-red-600">€{debtor.amount}</p>
              <span className="text-[10px] font-medium bg-red-50 text-red-600 px-2 py-0.5 rounded-full mt-1 border border-red-100">
                {debtor.months} mo
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
