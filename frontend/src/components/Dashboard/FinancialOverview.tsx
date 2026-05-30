import React from "react";

export default function FinancialOverview() {
  const collected = 18420;
  const pending = 4970;
  const total = collected + pending;
  const collectionRate = Math.round((collected / total) * 100);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
      <h3 className="font-semibold text-slate-800 mb-1">Financial Overview</h3>

      {/* Progress Bar Section */}
      <div className="mb-6">
        <div className="flex justify-between text-sm font-medium mb-2">
          <span className="text-slate-800">Collection rate</span>
          <span className="text-slate-500">{collectionRate}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${collectionRate}%` }}
          ></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
          <p className="text-xs text-slate-500 mb-1">Collected</p>
          <p className="text-2xl font-bold text-green-600">
            €{collected.toLocaleString()}
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
          <p className="text-xs text-slate-500 mb-1">Pending</p>
          <p className="text-2xl font-bold text-red-600">
            €{pending.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
