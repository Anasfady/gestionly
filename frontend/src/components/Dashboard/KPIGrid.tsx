export default function KPIGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Total Collected */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
            Total Collected
          </p>
          <h2 className="text-2xl font-bold text-slate-800">€18,420</h2>
          <p className="text-xs text-slate-400 mt-1">this month</p>
        </div>
        <div className="bg-green-50 p-2 rounded-lg text-green-600 border border-green-100">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            ></path>
          </svg>
        </div>
      </div>

      {/* Total Pending */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
            Total Pending
          </p>
          <h2 className="text-2xl font-bold text-slate-800">€4,970</h2>
          <p className="text-xs text-slate-400 mt-1">21% outstanding</p>
        </div>
        <div className="bg-red-50 p-2 rounded-lg text-red-600 border border-red-100">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Active Owners */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
            Active Owners
          </p>
          <h2 className="text-2xl font-bold text-slate-800">22</h2>
          <p className="text-xs text-slate-400 mt-1">2 vacant</p>
        </div>
        <div className="bg-blue-50 p-2 rounded-lg text-blue-600 border border-blue-100">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Units */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
            Units
          </p>
          <h2 className="text-2xl font-bold text-slate-800">24</h2>
          <p className="text-xs text-slate-400 mt-1">
            3 commercial · 6 parking
          </p>
        </div>
        <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600 border border-indigo-100">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
