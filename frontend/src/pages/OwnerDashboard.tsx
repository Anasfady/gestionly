import { Link } from "react-router-dom";

export default function OwnerDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Welcome back, MFR
          </h1>
          <p className="text-slate-500 text-sm">Owner · Edificio Las Acacias</p>
        </div>
        <button className="bg-white border border-gray-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-brand-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Community Rules
        </button>
      </div>

      {/* 1. Personalized KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Debt / Unpaid (Alert State) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-rose-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Unpaid Balance
          </p>
          <div className="flex items-baseline space-x-2">
            <h2 className="text-3xl font-bold text-rose-600">€320</h2>
          </div>
          <p className="text-sm text-slate-500 mt-1">1 overdue invoice</p>
        </div>

        {/* Next Payment */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Next Payment
          </p>
          <h2 className="text-3xl font-bold text-slate-800">€145</h2>
          <p className="text-sm text-slate-500 mt-1">Due Dec 1st</p>
        </div>

        {/* Units Owned */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                My Properties
              </p>
              <h2 className="text-3xl font-bold text-slate-800">2</h2>
              <p className="text-sm text-slate-500 mt-1">1 Apt, 1 Parking</p>
            </div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <svg
                className="w-6 h-6"
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

        {/* Active Incidents */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Open Tickets
              </p>
              <h2 className="text-3xl font-bold text-slate-800">1</h2>
              <p className="text-sm text-amber-500 font-medium mt-1">
                In progress
              </p>
            </div>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Voting (Takes up 2/3 space) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-slate-800">
                Urgent Votes
              </h2>
              <Link
                to="/voting"
                className="text-sm font-medium text-brand-500 hover:text-brand-600"
              >
                See all votes &rarr;
              </Link>
            </div>
            <div className="p-6 bg-brand-50/50">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-brand-100 text-brand-700 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                    Closes in 4 days
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Replace lobby flooring
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 max-w-xl">
                    Three contractor quotes attached. Estimated cost per
                    coefficient point: €38. Please review the PDF before casting
                    your vote.
                  </p>
                  <div className="flex space-x-3">
                    <button className="bg-brand-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-600 transition shadow-sm">
                      Vote Now
                    </button>
                    <button className="bg-white border border-gray-200 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition shadow-sm flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        ></path>
                      </svg>
                      View Quotes
                    </button>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="w-24 h-24 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
                    <svg
                      className="absolute inset-0 w-full h-full transform -rotate-90 text-brand-500"
                      viewBox="0 0 36 36"
                    >
                      <path
                        strokeDasharray="58, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="text-center">
                      <span className="block text-xl font-bold text-slate-800">
                        58%
                      </span>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider">
                        Turnout
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tenants & Incidents (Takes up 1/3 space) */}
        <div className="space-y-6">
          {/* Tenants Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-800">
                My Tenants
              </h2>
              <Link
                to="/tenants"
                className="text-sm font-medium text-brand-500 hover:text-brand-600"
              >
                Manage
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex items-center p-3 border border-gray-50 rounded-lg bg-slate-50">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mr-3">
                  CM
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Carlos M.
                  </p>
                  <p className="text-xs text-slate-500">Renting B1 · 1ºB</p>
                </div>
              </div>
              <button className="w-full py-2 border-2 border-dashed border-gray-200 rounded-lg text-sm font-medium text-slate-500 hover:bg-gray-50 hover:text-slate-700 transition">
                + Register new tenant
              </button>
            </div>
          </div>

          {/* Incidents Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Incidents
              </h2>
              <Link
                to="/incidents"
                className="text-sm font-medium text-brand-500 hover:text-brand-600"
              >
                History
              </Link>
            </div>
            <div className="space-y-3">
              <div className="p-3 border border-gray-100 rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-sm font-medium text-slate-800">
                    Garage door jammed
                  </p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                    In Progress
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Reported Oct 24 · Block B2
                </p>
              </div>
              <button className="w-full py-2.5 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition shadow-sm">
                Report Incident
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
