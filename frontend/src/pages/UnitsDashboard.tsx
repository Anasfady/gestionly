import { useState } from "react";
export default function UnitsDashboard() {
  const [showForm, setShowForm] = useState(false);

  const units = [
    {
      id: 1,
      block: "B1",
      floor: "1",
      door: "A",
      type: "Apartment",
      coefficient: "4.2358",
      owner: "García Family",
      tenant: "",
    },
    {
      id: 2,
      block: "B1",
      floor: "1",
      door: "B",
      type: "Apartment",
      coefficient: "3.9842",
      owner: "Pereira, J.",
      tenant: "Carlos M.",
    },
    {
      id: 3,
      block: "B1",
      floor: "2",
      door: "A",
      type: "Apartment",
      coefficient: "4.2358",
      owner: "López, M.",
      tenant: "",
    },
    {
      id: 4,
      block: "B2",
      floor: "PB",
      door: "L1",
      type: "Commercial",
      coefficient: "6.1200",
      owner: "Retail Corp",
      tenant: "Bakery",
    },
    {
      id: 5,
      block: "B2",
      floor: "-1",
      door: "P03",
      type: "Parking",
      coefficient: "0.7500",
      owner: "García Family",
      tenant: "",
    },
    {
      id: 6,
      block: "B2",
      floor: "-1",
      door: "T05",
      type: "Storage",
      coefficient: "0.3200",
      owner: "López, M.",
      tenant: "",
    },
  ];

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "Apartment":
        return "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400";
      case "Commercial":
        return "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400";
      case "Parking":
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
      case "Storage":
        return "bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-400";
      default:
        return "bg-gray-50 text-gray-600 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-[#0B0E14] min-h-screen transition-colors duration-300">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors">
            Unit management
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors">
            Physical layout, weightage & residents
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-400 transition shadow-sm flex items-center"
        >
          {showForm ? "Cancel" : "+ Add Unit"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-[#161B26] p-6 rounded-xl shadow-sm border border-brand-200 dark:border-brand-800/50 mb-8 animate-fade-in transition-colors">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 transition-colors">
            Register new unit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-gray-100 dark:border-slate-800 pb-2 transition-colors">
                Physical Details
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                    Block
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. B1"
                    className="w-full bg-transparent dark:bg-[#0B0E14] text-slate-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg p-2 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                    Floor
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3"
                    className="w-full bg-transparent dark:bg-[#0B0E14] text-slate-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg p-2 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                    Door
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. A"
                    className="w-full bg-transparent dark:bg-[#0B0E14] text-slate-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg p-2 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                    Type
                  </label>
                  <select className="w-full bg-white dark:bg-[#0B0E14] text-slate-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg p-2 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors">
                    <option>Apartment</option>
                    <option>Commercial</option>
                    <option>Parking</option>
                    <option>Storage</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                    Coefficient (%)
                  </label>
                  <input
                    type="number"
                    placeholder="0.0000"
                    className="w-full bg-transparent dark:bg-[#0B0E14] text-slate-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg p-2 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-gray-100 dark:border-slate-800 pb-2 transition-colors">
                Residents
              </h3>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                  Owner Name *
                </label>
                <input
                  type="text"
                  placeholder="Legal owner's full name"
                  className="w-full bg-transparent dark:bg-[#0B0E14] text-slate-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg p-2 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                  Tenant Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Leave blank if owner-occupied"
                  className="w-full bg-transparent dark:bg-[#0B0E14] text-slate-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg p-2 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                />
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 transition-colors">
                  If filled, voting rights remain with the owner, but
                  notifications can go to the tenant.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-100 dark:border-slate-800 transition-colors">
            <button
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
            >
              Cancel
            </button>
            <button className="bg-brand-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-600 transition shadow-sm">
              Save Unit
            </button>
          </div>
        </div>
      )}

      {!showForm && (
        <div className="bg-white dark:bg-[#161B26] rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden animate-fade-in transition-colors">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#1a2130] border-b border-gray-100 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 transition-colors">
                  <th className="p-4 font-medium pl-6">Block</th>
                  <th className="p-4 font-medium">Floor</th>
                  <th className="p-4 font-medium">Door</th>
                  <th className="p-4 font-medium">Type</th>
                  <th className="p-4 font-medium">Coefficient</th>
                  <th className="p-4 font-medium">Owner</th>
                  <th className="p-4 font-medium">Tenant</th>
                  <th className="p-4 font-medium text-right pr-6">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700 dark:text-slate-300">
                {units.map((unit) => (
                  <tr
                    key={unit.id}
                    className="border-b border-gray-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="p-4 font-medium text-slate-800 dark:text-slate-200 pl-6">
                      {unit.block}
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">
                      {unit.floor}
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">
                      {unit.door}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${getTypeStyle(unit.type)}`}
                      >
                        {unit.type}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-slate-500 dark:text-slate-400">
                      {unit.coefficient}
                    </td>
                    <td className="p-4 text-slate-800 dark:text-slate-200">
                      {unit.owner}
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-500 italic">
                      {unit.tenant || "-"}
                    </td>
                    <td className="p-4 text-right pr-6">
                      <button className="text-slate-400 dark:text-slate-500 hover:text-brand-500 dark:hover:text-brand-400 transition">
                        <svg
                          className="w-4 h-4 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
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
