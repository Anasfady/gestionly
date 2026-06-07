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
        return "bg-blue-50 text-blue-700";
      case "Commercial":
        return "bg-purple-50 text-purple-700";
      case "Parking":
        return "bg-slate-100 text-slate-700";
      case "Storage":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Unit management</h1>
          <p className="text-slate-500 text-sm">
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
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-200 mb-8 animate-fade-in">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Register new unit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b pb-2">
                Physical Details
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Block
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. B1"
                    className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Floor
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3"
                    className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Door
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. A"
                    className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-brand-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Type
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-brand-500 bg-white">
                    <option>Apartment</option>
                    <option>Commercial</option>
                    <option>Parking</option>
                    <option>Storage</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Coefficient (%)
                  </label>
                  <input
                    type="number"
                    placeholder="0.0000"
                    className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-brand-500"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b pb-2">
                Residents
              </h3>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Owner Name *
                </label>
                <input
                  type="text"
                  placeholder="Legal owner's full name"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Tenant Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Leave blank if owner-occupied"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-brand-500"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  If filled, voting rights remain with the owner, but
                  notifications can go to the tenant.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 bg-gray-100 hover:bg-gray-200 transition"
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm text-slate-500">
                <th className="p-4 font-medium">Block</th>
                <th className="p-4 font-medium">Floor</th>
                <th className="p-4 font-medium">Door</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Coefficient</th>
                <th className="p-4 font-medium">Owner</th>
                <th className="p-4 font-medium">Tenant</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              {units.map((unit) => (
                <tr
                  key={unit.id}
                  className="border-b border-gray-50 hover:bg-slate-50 transition-colors"
                >
                  <td className="p-4 font-medium">{unit.block}</td>
                  <td className="p-4">{unit.floor}</td>
                  <td className="p-4">{unit.door}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${getTypeStyle(unit.type)}`}
                    >
                      {unit.type}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-slate-500">
                    {unit.coefficient}
                  </td>
                  <td className="p-4">{unit.owner}</td>
                  <td className="p-4 text-slate-500 italic">
                    {unit.tenant || "-"}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-brand-500 transition">
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
      )}
    </div>
  );
}
