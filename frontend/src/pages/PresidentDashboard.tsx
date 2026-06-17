import { Icon } from "@iconify/react";

export default function PresidentDashboard() {
  return (
    <div className="p-8 animate-fade-in transition-colors duration-300">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors">
          President dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-colors">
          Edificio Las Acacias · 24 units
        </p>
      </div>

      {/* 4 Top KPI Cards - REDUCED PADDING (p-5 instead of p-6) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card 1: Total Collected */}
        <div className="bg-white dark:bg-[#161B26] border border-gray-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm transition-colors">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Total Collected
            </p>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Icon icon="solar:graph-up-bold-duotone" className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white transition-colors">
            €18,420
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            this month
          </p>
        </div>

        {/* Card 2: Total Pending */}
        <div className="bg-white dark:bg-[#161B26] border border-gray-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm transition-colors">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Total Pending
            </p>
            <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Icon
                icon="solar:danger-circle-bold-duotone"
                className="w-5 h-5"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white transition-colors">
            €4,970
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            21% outstanding
          </p>
        </div>

        {/* Card 3: Active Owners */}
        <div className="bg-white dark:bg-[#161B26] border border-gray-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm transition-colors">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Active Owners
            </p>
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Icon
                icon="solar:users-group-rounded-bold-duotone"
                className="w-5 h-5"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white transition-colors">
            22
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            2 vacant
          </p>
        </div>

        {/* Card 4: Units */}
        <div className="bg-white dark:bg-[#161B26] border border-gray-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm transition-colors">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Units
            </p>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Icon icon="solar:buildings-2-bold-duotone" className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white transition-colors">
            24
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            3 commercial · 6 parking
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Financial Overview Section */}
        <div className="lg:col-span-2 bg-white dark:bg-[#161B26] border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-colors">
          <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6 transition-colors">
            Financial Overview
          </h3>

          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors">
                Collection rate
              </span>
              <span className="font-bold text-slate-800 dark:text-white transition-colors">
                79%
              </span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-3 transition-colors overflow-hidden">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: "79%" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-xl p-5 transition-colors">
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-1 font-medium">
                Collected
              </p>
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                €18,420
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20 rounded-xl p-5 transition-colors">
              <p className="text-xs text-rose-600 dark:text-rose-400 mb-1 font-medium">
                Pending
              </p>
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-400">
                €4,970
              </p>
            </div>
          </div>
        </div>

        {/* Top Debtors Section */}
        <div className="bg-white dark:bg-[#161B26] border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-colors">
          <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6 transition-colors">
            Top Debtors
          </h3>

          <div className="space-y-4">
            {/* Debtor 1 - INCREASED FONT SIZES */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-50 dark:border-slate-800/50 transition-colors">
              <div>
                <p className="font-bold text-base text-slate-800 dark:text-white transition-colors">
                  García Family
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">
                  B2 · 3ºA
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-base text-rose-600 dark:text-rose-400 transition-colors">
                  €1250
                </p>
                <span className="text-[11px] font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 px-2 py-0.5 rounded transition-colors">
                  3 mo
                </span>
              </div>
            </div>

            {/* Debtor 2 */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-50 dark:border-slate-800/50 transition-colors">
              <div>
                <p className="font-bold text-base text-slate-800 dark:text-white transition-colors">
                  López, M.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">
                  B1 · 2ºC
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-base text-rose-600 dark:text-rose-400 transition-colors">
                  €840
                </p>
                <span className="text-[11px] font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 px-2 py-0.5 rounded transition-colors">
                  2 mo
                </span>
              </div>
            </div>

            {/* Debtor 3 */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-50 dark:border-slate-800/50 transition-colors">
              <div>
                <p className="font-bold text-base text-slate-800 dark:text-white transition-colors">
                  Pereira, J.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">
                  B3 · 1ºB
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-base text-rose-600 dark:text-rose-400 transition-colors">
                  €520
                </p>
                <span className="text-[11px] font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 px-2 py-0.5 rounded transition-colors">
                  1 mo
                </span>
              </div>
            </div>

            {/* Debtor 4 */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-base text-slate-800 dark:text-white transition-colors">
                  Ortega Bros.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">
                  Local 02
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-base text-rose-600 dark:text-rose-400 transition-colors">
                  €2100
                </p>
                <span className="text-[11px] font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 px-2 py-0.5 rounded transition-colors">
                  4 mo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
