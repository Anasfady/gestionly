import { useState } from "react";

export default function BillingDashboard() {
  // Toggle state for our Add Invoice form
  const [showForm, setShowForm] = useState(false);

  // Hardcoded MVP data
  const invoices = [
    {
      id: "INV-1042",
      unit: "B1 · 1ºA",
      concept: "Monthly fee · Nov",
      amount: "€145",
      status: "Paid",
    },
    {
      id: "INV-1043",
      unit: "B1 · 1ºB",
      concept: "Monthly fee · Nov",
      amount: "€132",
      status: "Pending",
    },
    {
      id: "INV-1044",
      unit: "B2 · 3ºA",
      concept: "Derrama elevator",
      amount: "€320",
      status: "Overdue",
    },
    {
      id: "INV-1045",
      unit: "Local 02",
      concept: "Monthly fee · Nov",
      amount: "€410",
      status: "Paid",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-emerald-100 text-emerald-700";
      case "Pending":
        return "bg-slate-100 text-slate-700";
      case "Overdue":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Billing</h1>
          <p className="text-slate-500 text-sm">
            Invoices issued to the building
          </p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-400 transition shadow-sm flex items-center"
        >
          {showForm ? (
            "Cancel"
          ) : (
            <>
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              Add invoice
            </>
          )}
        </button>
      </div>

      {/* Add Invoice Form (Hidden by default) */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-200 mb-8 animate-fade-in">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Draft new invoice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Target Unit *
                </label>
                <select className="w-full border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-brand-500 bg-white text-slate-700">
                  <option value="" disabled selected>
                    Select a unit
                  </option>
                  <option>B1 · 1ºA (García Family)</option>
                  <option>B1 · 1ºB (Pereira, J.)</option>
                  <option>B2 · 3ºA (López, M.)</option>
                  <option>Local 02 (Retail Corp)</option>
                  <option>-- Apply to ALL Units --</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Concept / Description *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Monthly maintenance fee"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-brand-500 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Amount (€) *
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-brand-500 text-slate-800"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-brand-500 text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-brand-500 text-slate-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Initial Status
                </label>
                <select className="w-full border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-brand-500 bg-white text-slate-700">
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Overdue</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Optional notes for the owner..."
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-brand-500 text-slate-800"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 bg-gray-100 hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button className="bg-brand-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-600 transition shadow-sm flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                ></path>
              </svg>
              Save & Generate PDF
            </button>
          </div>
        </div>
      )}

      {/* CONDITIONAL RENDER: 
        Only show the Table if the Form is CLOSED (!showForm) 
      */}
      {!showForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Invoices · November
              </h2>
              <p className="text-slate-500 text-sm">
                24 issued · €18,420 collected
              </p>
            </div>
            {/* Small filter dropdown placeholder */}
            <select className="border border-gray-200 rounded-lg p-2 text-sm outline-none bg-gray-50 text-slate-600">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Paid</option>
              <option>Overdue</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-sm text-slate-500">
                  <th className="p-4 font-medium pl-6">Invoice</th>
                  <th className="p-4 font-medium">Unit</th>
                  <th className="p-4 font-medium">Concept</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700">
                {invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-b border-gray-50 hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 pl-6 font-mono text-slate-600 text-xs">
                      {invoice.id}
                    </td>
                    <td className="p-4 font-medium">{invoice.unit}</td>
                    <td className="p-4 text-slate-500">{invoice.concept}</td>
                    <td className="p-4 font-medium">{invoice.amount}</td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${getStatusStyle(
                          invoice.status,
                        )}`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <button
                        className="text-slate-400 hover:text-brand-500 transition"
                        title="Download PDF"
                      >
                        <svg
                          className="w-5 h-5 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
