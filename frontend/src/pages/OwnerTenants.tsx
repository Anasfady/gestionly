import { useState } from "react";

export default function OwnerTenants() {
  // 1. New state to toggle the form visibility
  const [showForm, setShowForm] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);

  // Simulate sending an invite
  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    setInviteSent(true);

    // Show the success state for 2 seconds, then close the form automatically
    setTimeout(() => {
      setInviteSent(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Tenants</h1>
          <p className="text-slate-500 text-sm">Manage tenants for your unit</p>
        </div>

        {/* 2. The Toggle Button */}
        <button
          onClick={() => {
            setShowForm(!showForm);
            setInviteSent(false); // Reset success state if they cancel
          }}
          className="bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-400 transition shadow-sm flex items-center"
        >
          {showForm ? "Cancel" : "+ Invite tenant"}
        </button>
      </div>

      {/* 3. CONDITIONAL RENDER: Invite Tenant Form */}
      {showForm && (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-3xl mb-8 animate-fade-in">
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 text-slate-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              ></path>
            </svg>
            <h2 className="text-lg font-semibold text-slate-800">
              Invite tenant
            </h2>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            Send an invite via email or phone
          </p>

          <form onSubmit={handleSendInvite} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full name *
              </label>
              <input
                type="text"
                required
                placeholder="Juan Pérez"
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-brand-500 text-slate-800 placeholder-slate-400 bg-gray-50/50"
              />
            </div>

            {/* Email and Phone Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="juan@example.com"
                    className="w-full border border-gray-200 rounded-lg pl-10 p-3 outline-none focus:border-brand-500 text-slate-800 placeholder-slate-400 bg-gray-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="+34 600 000 000"
                    className="w-full border border-gray-200 rounded-lg pl-10 p-3 outline-none focus:border-brand-500 text-slate-800 placeholder-slate-400 bg-gray-50/50"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100 mt-6">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 bg-gray-100 hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition shadow-sm flex items-center ${
                  inviteSent
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-brand-500 hover:bg-brand-600 text-white"
                }`}
              >
                {inviteSent ? (
                  <>
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
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Invitation Sent
                  </>
                ) : (
                  "Send invitation"
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 4. CONDITIONAL RENDER: Active Tenants Ledger */}
      {!showForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-4xl animate-fade-in">
          <div className="p-6 border-b border-gray-50">
            <h2 className="text-lg font-bold text-slate-800">Active Tenants</h2>
            <p className="text-slate-500 text-sm mt-1">
              People currently registered to your properties
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs text-slate-500 uppercase">
                <tr>
                  <th className="p-4 font-semibold pl-6">Tenant Name</th>
                  <th className="p-4 font-semibold">Unit</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 pl-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mr-3">
                      CM
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Carlos M.</p>
                      <p className="text-xs text-slate-500">
                        carlos.m@example.com
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-700">
                    B1 · 1ºB
                  </td>
                  <td className="p-4 text-sm">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100">
                      Active
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="text-slate-400 hover:text-rose-500 transition text-sm font-medium">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
