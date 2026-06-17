export default function OwnerVoting() {
  // Simulate an immutable vote state for the UI
  const [hasVoted, setHasVoted] = useState(false);
  const [voteChoice, setVoteChoice] = useState<
    "Yes" | "No" | "Delegated" | null
  >(null);

  const handleVote = (choice: "Yes" | "No") => {
    setVoteChoice(choice);
    setHasVoted(true);
  };

  const handleDelegate = () => {
    setVoteChoice("Delegated");
    setHasVoted(true);
  };

  // Mock data for the historical voting section
  const votingHistory = [
    {
      id: "V-102",
      title: "Approve 2026 Budget",
      date: "Oct 12, 2025",
      result: "Approved (82%)",
      myVote: "Yes",
      statusColor:
        "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
    },
    {
      id: "V-101",
      title: "Change pool operating hours",
      date: "Sep 05, 2025",
      result: "Rejected (65% No)",
      myVote: "Delegated",
      statusColor:
        "text-rose-600 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 border-rose-100 dark:border-rose-500/20",
    },
    {
      id: "V-100",
      title: "Emergency roof repair (Derrama)",
      date: "Aug 20, 2025",
      result: "Approved (95%)",
      myVote: "Yes",
      statusColor:
        "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 dark:bg-[#0B0E14] min-h-screen font-sans transition-colors duration-300">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors">
          Active vote
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors">
          Cast or delegate your vote
        </p>
      </div>

      {/* ACTIVE VOTE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Left Column: Action Card */}
        <div className="lg:col-span-2 bg-white dark:bg-[#161B26] rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white transition-colors">
                Replace lobby flooring
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 transition-colors">
                Derramas · closes in 4 days
              </p>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
              Open
            </span>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-sm mb-6 transition-colors">
            Three contractor quotes attached. Estimated cost per coefficient
            point: €38.
          </p>

          {/* Attachment */}
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-700 rounded-xl mb-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-3 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white transition-colors">
                  contractor-quote.pdf
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
                  2 pages · 480 KB
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white dark:bg-[#161B26] border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition shadow-sm">
              Preview
            </button>
          </div>

          {/* Voting Actions (Conditional based on state) */}
          {!hasVoted ? (
            <>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => handleVote("Yes")}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex justify-center items-center shadow-sm"
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Vote Yes
                </button>
                <button
                  onClick={() => handleVote("No")}
                  className="w-full py-3 bg-white dark:bg-[#161B26] border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition flex justify-center items-center shadow-sm"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-slate-400 dark:text-slate-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Vote No
                </button>
              </div>

              <div className="bg-gray-50 dark:bg-slate-800/30 border border-gray-100 dark:border-slate-800 rounded-xl p-4 transition-colors">
                <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-3 transition-colors">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  Delegate your vote
                </label>
                <div className="flex space-x-3">
                  <select className="flex-1 border border-gray-200 dark:border-slate-700 rounded-lg p-2.5 text-sm outline-none text-slate-600 dark:text-slate-300 bg-white dark:bg-[#0B0E14] shadow-sm transition-colors">
                    <option value="" disabled selected>
                      Choose neighbor
                    </option>
                    <option>President (Ana Martín)</option>
                    <option>López, M. (B1 · 2ºC)</option>
                  </select>
                  <button
                    onClick={handleDelegate}
                    className="px-5 py-2.5 bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-slate-600 transition"
                  >
                    Delegate
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-xl p-6 text-center transition-colors">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors">
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
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-emerald-800 dark:text-emerald-400 font-bold text-lg mb-1 transition-colors">
                Vote Successfully Cast
              </h3>
              <p className="text-emerald-600 dark:text-emerald-500 text-sm transition-colors">
                {voteChoice === "Delegated"
                  ? "You have successfully delegated your vote."
                  : `Your coefficient weight has been legally recorded as a "${voteChoice}" vote.`}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Real-time Stats */}
        <div className="bg-white dark:bg-[#161B26] rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-1 transition-colors">
            Participation
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 transition-colors">
            Real-time
          </p>

          <div className="space-y-6">
            {/* Total Voters */}
            <div>
              <div className="flex justify-between text-sm font-medium text-slate-800 dark:text-slate-300 mb-2 transition-colors">
                <span>Voters</span>
                <span>14 / 24</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2.5 mb-1 transition-colors">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "58%" }}
                ></div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
                58% participation
              </p>
            </div>

            <div className="border-t border-gray-100 dark:border-slate-800 pt-6 space-y-4 transition-colors">
              {/* Yes Bar */}
              <div>
                <div className="flex justify-between text-sm font-medium text-slate-800 dark:text-slate-300 mb-2 transition-colors">
                  <span>Yes</span>
                  <span>42%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 transition-colors">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: "42%" }}
                  ></div>
                </div>
              </div>

              {/* No Bar */}
              <div>
                <div className="flex justify-between text-sm font-medium text-slate-800 dark:text-slate-300 mb-2 transition-colors">
                  <span>No</span>
                  <span>16%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 transition-colors">
                  <div
                    className="bg-rose-500 h-2 rounded-full"
                    style={{ width: "16%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VOTING HISTORY SECTION */}
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white transition-colors">
            Voting History
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors">
            Past decisions and your recorded selections
          </p>
        </div>

        <div className="bg-white dark:bg-[#161B26] rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden transition-colors">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#1a2130] border-b border-gray-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">
                  <th className="p-4 font-semibold pl-6">Motion</th>
                  <th className="p-4 font-semibold">Date Closed</th>
                  <th className="p-4 font-semibold">Final Result</th>
                  <th className="p-4 font-semibold text-right pr-6">
                    Your Vote
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700 dark:text-slate-300">
                {votingHistory.map((history) => (
                  <tr
                    key={history.id}
                    className="border-b border-gray-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="p-4 pl-6 font-medium text-slate-800 dark:text-slate-200 transition-colors">
                      {history.title}
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 transition-colors">
                      {history.date}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border transition-colors ${history.statusColor}`}
                      >
                        {history.result}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right font-medium text-slate-800 dark:text-slate-200 transition-colors">
                      {history.myVote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
