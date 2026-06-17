import { Link } from "react-router-dom";

export default function VotingDashboard() {
  // Hardcoded MVP data for the active/past votes
  const votes = [
    {
      id: 1,
      title: "Replace lobby flooring",
      category: "Derramas",
      status: "Active",
      participation: "58%",
      deadline: "Closes in 4 days",
    },
    {
      id: 2,
      title: "Approve 2026 Budget",
      category: "Maintenance",
      status: "Active",
      participation: "82%",
      deadline: "Closes in 2 days",
    },
    {
      id: 3,
      title: "Change pool hours",
      category: "Rules",
      status: "Closed",
      participation: "65%",
      deadline: "Ended on Oct 12",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 dark:bg-[#0B0E14] min-h-screen transition-colors duration-300">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors">
            Community voting
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors">
            Manage active and past votes
          </p>
        </div>

        {/* 👇 FIXED LINK PATH HERE 👇 */}
        <Link
          to="/president/voting/create"
          className="bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-400 transition shadow-sm flex items-center"
        >
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
          Create new vote
        </Link>
      </div>

      {/* Voting List */}
      <div className="bg-white dark:bg-[#161B26] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
        <div className="space-y-4">
          {votes.map((vote) => (
            <div
              key={vote.id}
              className="flex items-center justify-between p-4 border border-gray-100 dark:border-slate-800/80 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 dark:text-white transition-colors">
                  {vote.title}
                </h3>
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1 space-x-3 transition-colors">
                  <span>{vote.category}</span>
                  <span>•</span>
                  <span>{vote.deadline}</span>
                </div>
              </div>

              <div className="w-48 px-4 hidden md:block">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500 dark:text-slate-400 transition-colors">
                    Participation
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors">
                    {vote.participation}
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 transition-colors">
                  <div
                    className="bg-blue-500 h-1.5 rounded-full"
                    style={{ width: vote.participation }}
                  ></div>
                </div>
              </div>

              <div className="w-24 text-right">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                    vote.status === "Active"
                      ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 border border-gray-200 dark:border-slate-700"
                  }`}
                >
                  {vote.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
