import { useState } from "react";

export default function OwnerIncidents() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data for the incidents ledger
  const incidents = [
    {
      id: "INC-084",
      title: "Garage door jammed",
      location: "Block B2 · Parking",
      date: "Oct 24, 2025",
      status: "In Progress",
      statusColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      id: "INC-071",
      title: "Hallway light flickering",
      location: "Block B1 · Floor 1",
      date: "Sep 12, 2025",
      status: "Resolved",
      statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: "INC-042",
      title: "Water leak in storage",
      location: "Storage T05",
      date: "Jan 05, 2025",
      status: "Resolved",
      statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to upload photos and save ticket
    setTimeout(() => {
      setIsSubmitting(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Incidents</h1>
          <p className="text-slate-500 text-sm">
            Report and track maintenance issues
          </p>
        </div>

        <button
          onClick={() => {
            setShowForm(!showForm);
            setIsSubmitting(false);
          }}
          className="bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-400 transition shadow-sm flex items-center"
        >
          {showForm ? "Cancel" : "+ Report incident"}
        </button>
      </div>

      {/* CONDITIONAL RENDER: Report Form */}
      {showForm && (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-3xl mb-8 animate-fade-in">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-800">Report damage</h2>
            <p className="text-sm text-slate-500">
              Send an incident to the building manager
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Title
              </label>
              <input
                type="text"
                required
                placeholder="Leaking pipe in kitchen"
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-brand-500 text-slate-800 placeholder-slate-400 bg-gray-50/50"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Location
              </label>
              <input
                type="text"
                required
                placeholder="Bathroom · Kitchen · Common area"
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-brand-500 text-slate-800 placeholder-slate-400 bg-gray-50/50"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe what happened..."
                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-brand-500 text-slate-800 placeholder-slate-400 bg-gray-50/50 resize-none"
              ></textarea>
            </div>

            {/* Photo Dropzone */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
              <svg
                className="w-8 h-8 text-slate-400 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <p className="text-sm font-medium text-slate-600">
                Drop photos here or click to upload
              </p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 bg-gray-100 hover:bg-gray-200 transition mr-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition shadow-sm flex items-center ${
                  isSubmitting
                    ? "bg-slate-400 cursor-not-allowed text-white"
                    : "bg-brand-500 hover:bg-brand-600 text-white"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit incident"
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* CONDITIONAL RENDER: Incident Ledger */}
      {!showForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-5xl animate-fade-in">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Incident History
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Your previously reported issues
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs text-slate-500 uppercase">
                <tr>
                  <th className="p-4 font-semibold pl-6">ID</th>
                  <th className="p-4 font-semibold">Incident Details</th>
                  <th className="p-4 font-semibold">Date Reported</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {incidents.map((incident) => (
                  <tr
                    key={incident.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 pl-6 font-mono text-slate-500 text-xs">
                      {incident.id}
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-slate-800">
                        {incident.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {incident.location}
                      </p>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      {incident.date}
                    </td>
                    <td className="p-4 text-sm">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${incident.statusColor}`}
                      >
                        {incident.status}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <button className="text-brand-500 hover:text-brand-600 transition text-sm font-medium">
                        View Details
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
