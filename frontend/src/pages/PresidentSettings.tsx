import { useState } from "react";
import { Icon } from "@iconify/react";

// Define the User Types
type Role = "Owner" | "Tenant" | "Employee";
type Status = "Active" | "Pending" | "No Access";

interface CommunityUser {
  id: number;
  name: string;
  role: Role;
  unit: string;
  status: Status;
  contact: string;
}

export default function PresidentSettings() {
  const [activeTab, setActiveTab] = useState<"access" | "profile" | "legal">(
    "access",
  );
  const [actionSimulated, setActionSimulated] = useState<string | null>(null);

  // Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Dynamic User State
  const [communityUsers, setCommunityUsers] = useState<CommunityUser[]>([
    {
      id: 1,
      name: "Juan Pérez",
      role: "Owner",
      unit: "B1 · 1ºA",
      status: "Active",
      contact: "juan@example.com",
    },
    {
      id: 2,
      name: "María García",
      role: "Tenant",
      unit: "B1 · 1ºB",
      status: "Pending",
      contact: "+34 600 123 456",
    },
    {
      id: 3,
      name: "Carlos Conserje",
      role: "Employee",
      unit: "Maintenance",
      status: "Active",
      contact: "carlos@gestionly.com",
    },
    {
      id: 4,
      name: "Familia López",
      role: "Owner",
      unit: "B2 · 3ºA",
      status: "No Access",
      contact: "Not provided",
    },
  ]);

  // New User Form State
  const [newUser, setNewUser] = useState({
    name: "",
    role: "Owner" as Role,
    unit: "",
    email: "",
    phone: "",
  });

  const handleSendCredentials = (method: "sms" | "email", name: string) => {
    setActionSimulated(
      `System generated a secure password and dispatched via ${method.toUpperCase()} to ${name}.`,
    );
    setTimeout(() => setActionSimulated(null), 4000);
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    // Format contact logic
    let contactInfo = "Not provided";
    if (newUser.email && newUser.phone) contactInfo = `${newUser.email}`;
    else if (newUser.email) contactInfo = newUser.email;
    else if (newUser.phone) contactInfo = newUser.phone;

    const userToAdd: CommunityUser = {
      id: Date.now(), // Generate random ID for prototype
      name: newUser.name,
      role: newUser.role,
      unit: newUser.role === "Employee" ? "Maintenance/Staff" : newUser.unit,
      status: "Pending", // Default to pending until they log in
      contact: contactInfo,
    };

    setCommunityUsers([userToAdd, ...communityUsers]); // Add to top of list
    setIsAddModalOpen(false); // Close Modal

    // Reset form
    setNewUser({ name: "", role: "Owner", unit: "", email: "", phone: "" });

    // Show success message
    setActionSimulated(
      `${userToAdd.name} added successfully. Ready to dispatch credentials.`,
    );
    setTimeout(() => setActionSimulated(null), 4000);
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-[#0B0E14] min-h-screen font-sans animate-fade-in relative transition-colors duration-300">
      {/* =========================================
          ADD USER MODAL (OVERLAY)
          ========================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 dark:bg-[#0B0E14]/80 backdrop-blur-sm transition-colors"
            onClick={() => setIsAddModalOpen(false)}
          ></div>
          <div className="bg-white dark:bg-[#161B26] border border-transparent dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg relative z-10 animate-fade-in overflow-hidden transition-colors">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50 dark:bg-[#1a2130] transition-colors">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center transition-colors">
                <Icon
                  icon="solar:user-plus-bold-duotone"
                  className="w-5 h-5 mr-2 text-brand-600 dark:text-brand-400"
                />
                Add New Stakeholder
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <Icon icon="ph:x-bold" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddUser} className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 transition-colors">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  placeholder="e.g. Elena Martínez"
                  className="w-full bg-white dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-lg p-3 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 transition-colors">
                    Role *
                  </label>
                  <select
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value as Role })
                    }
                    className="w-full bg-white dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-lg p-3 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                  >
                    <option value="Owner">Owner (Propietario)</option>
                    <option value="Tenant">Tenant (Inquilino)</option>
                    <option value="Employee">Employee (Staff)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 transition-colors">
                    Assigned Unit
                  </label>
                  <input
                    type="text"
                    required={newUser.role !== "Employee"}
                    disabled={newUser.role === "Employee"}
                    value={newUser.role === "Employee" ? "N/A" : newUser.unit}
                    onChange={(e) =>
                      setNewUser({ ...newUser, unit: e.target.value })
                    }
                    placeholder="e.g. B1 · 4ºA"
                    className="w-full bg-white dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-lg p-3 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors disabled:bg-gray-100 dark:disabled:bg-slate-800/50 disabled:text-gray-400 dark:disabled:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    placeholder="elena@example.com"
                    className="w-full bg-white dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-lg p-3 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={newUser.phone}
                    onChange={(e) =>
                      setNewUser({ ...newUser, phone: e.target.value })
                    }
                    placeholder="+34 600 000 000"
                    className="w-full bg-white dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-lg p-3 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end space-x-3 border-t border-gray-100 dark:border-slate-800 mt-4 transition-colors">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
                >
                  Add Stakeholder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors">
          Community Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-colors">
          Manage user access, edit personal data, and ensure LPH compliance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT NAVIGATION TABS */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => setActiveTab("access")}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === "access"
                  ? "bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 border border-brand-100 dark:border-brand-800/50"
                  : "text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-transparent"
              }`}
            >
              <Icon
                icon="solar:key-minimalistic-bold-duotone"
                className={`w-5 h-5 mr-3 ${
                  activeTab === "access"
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              />
              Access & Credentials
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === "profile"
                  ? "bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 border border-brand-100 dark:border-brand-800/50"
                  : "text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-transparent"
              }`}
            >
              <Icon
                icon="solar:user-id-bold-duotone"
                className={`w-5 h-5 mr-3 ${
                  activeTab === "profile"
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              />
              Personal Data
            </button>
            <button
              onClick={() => setActiveTab("legal")}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === "legal"
                  ? "bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 border border-brand-100 dark:border-brand-800/50"
                  : "text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-transparent"
              }`}
            >
              <Icon
                icon="solar:document-text-bold-duotone"
                className={`w-5 h-5 mr-3 ${
                  activeTab === "legal"
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              />
              Legal & Terms (Spain)
            </button>
          </nav>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="flex-1 max-w-4xl">
          {/* ACTION TOAST NOTIFICATION */}
          {actionSimulated && (
            <div className="mb-6 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-4 py-3 rounded-lg flex items-center shadow-sm animate-fade-in transition-colors">
              <Icon
                icon="solar:check-circle-bold-duotone"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm font-medium">{actionSimulated}</span>
            </div>
          )}

          {/* TAB 1: ACCESS & CREDENTIALS */}
          {activeTab === "access" && (
            <div className="bg-white dark:bg-[#161B26] rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden animate-fade-in transition-colors">
              <div className="p-6 border-b border-gray-100 dark:border-slate-800/80 bg-white dark:bg-[#161B26] flex justify-between items-center transition-colors">
                <div>
                  <h2 className="text-lg font-bold text-slate-800 dark:text-white transition-colors">
                    User Access Management
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-colors">
                    Generate and send secure login credentials to community
                    members.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center shadow-sm"
                >
                  <Icon
                    icon="solar:add-circle-bold-duotone"
                    className="w-4 h-4 mr-2"
                  />
                  Add User
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 dark:bg-[#1a2130] text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">
                    <tr>
                      <th className="p-4 pl-6 font-semibold">Name & Contact</th>
                      <th className="p-4 font-semibold">Role</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 pr-6 font-semibold text-right">
                        Dispatch Credentials
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800/50">
                    {communityUsers.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="p-8 text-center text-slate-500 dark:text-slate-400"
                        >
                          No users found. Add a user to begin.
                        </td>
                      </tr>
                    ) : (
                      communityUsers.map((user) => (
                        <tr
                          key={user.id}
                          className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors animate-fade-in"
                        >
                          <td className="p-4 pl-6">
                            <p className="font-bold text-slate-800 dark:text-slate-200 text-sm transition-colors">
                              {user.name}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
                              {user.contact}
                            </p>
                          </td>
                          <td className="p-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                                user.role === "Owner"
                                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20"
                                  : user.role === "Tenant"
                                    ? "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20"
                                    : "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20"
                              }`}
                            >
                              {user.role}
                            </span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors">
                              {user.unit}
                            </p>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <div
                                className={`w-2 h-2 rounded-full mr-2 transition-colors ${
                                  user.status === "Active"
                                    ? "bg-emerald-500"
                                    : user.status === "Pending"
                                      ? "bg-amber-400"
                                      : "bg-slate-300 dark:bg-slate-600"
                                }`}
                              ></div>
                              <span className="text-sm text-slate-600 dark:text-slate-300 font-medium transition-colors">
                                {user.status}
                              </span>
                            </div>
                          </td>
                          <td className="p-4 pr-6 text-right">
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() =>
                                  handleSendCredentials("email", user.name)
                                }
                                disabled={user.contact === "Not provided"}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-gray-200 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-500/50 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                              >
                                <Icon
                                  icon="solar:letter-bold-duotone"
                                  className="w-4 h-4 mr-1.5"
                                />
                                Email
                              </button>
                              <button
                                onClick={() =>
                                  handleSendCredentials("sms", user.name)
                                }
                                disabled={user.contact === "Not provided"}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border border-gray-200 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-500/50 rounded-lg text-xs font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                              >
                                <Icon
                                  icon="solar:smartphone-bold-duotone"
                                  className="w-4 h-4 mr-1.5"
                                />
                                SMS
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: PERSONAL DATA */}
          {activeTab === "profile" && (
            <div className="bg-white dark:bg-[#161B26] rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 animate-fade-in transition-colors">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white transition-colors">
                  Personal Data & Bank Info
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-colors">
                  Modify your administrator profile and receiving bank details.
                </p>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setActionSimulated("Profile data saved successfully.");
                  setTimeout(() => setActionSimulated(null), 3000);
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Ana Martín"
                      className="w-full bg-gray-50/50 dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 rounded-lg p-3 outline-none focus:border-brand-500 dark:focus:border-brand-500 text-slate-800 dark:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                      Role Title
                    </label>
                    <input
                      type="text"
                      defaultValue="Presidente de la Comunidad"
                      className="w-full bg-gray-50/50 dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 rounded-lg p-3 outline-none focus:border-brand-500 dark:focus:border-brand-500 text-slate-800 dark:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="ana.martin@gestionly.com"
                      className="w-full bg-gray-50/50 dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 rounded-lg p-3 outline-none focus:border-brand-500 dark:focus:border-brand-500 text-slate-800 dark:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+34 612 345 678"
                      className="w-full bg-gray-50/50 dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 rounded-lg p-3 outline-none focus:border-brand-500 dark:focus:border-brand-500 text-slate-800 dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-slate-800 transition-colors">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-4 transition-colors">
                    Community Bank Settings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Banco Santander"
                        className="w-full bg-gray-50/50 dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 rounded-lg p-3 outline-none focus:border-brand-500 dark:focus:border-brand-500 text-slate-800 dark:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                        IBAN (SEPA Mandate)
                      </label>
                      <input
                        type="text"
                        defaultValue="ES91 0000 0000 0000 0000"
                        className="w-full bg-gray-50/50 dark:bg-[#0B0E14] border border-gray-200 dark:border-slate-700 rounded-lg p-3 outline-none focus:border-brand-500 dark:focus:border-brand-500 font-mono text-slate-800 dark:text-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: LEGAL & COMPLIANCE */}
          {activeTab === "legal" && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white dark:bg-[#161B26] rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mr-4 shrink-0 transition-colors">
                    <Icon
                      icon="solar:scale-bold-duotone"
                      className="w-5 h-5 text-brand-600 dark:text-brand-400 transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-white transition-colors">
                      Ley de Propiedad Horizontal (LPH)
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
                      Ensure community governance settings are legally
                      compliant. Actions taken digitally carry legal weight
                      under Spanish law if accepted by owners.
                    </p>
                  </div>
                </div>
                <div className="ml-14 flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-slate-800/80 transition-colors">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
                    Require Owners to digitally sign LPH Terms upon first login
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-slate-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600 transition-colors"></div>
                  </label>
                </div>
              </div>

              <div className="bg-white dark:bg-[#161B26] rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mr-4 shrink-0 transition-colors">
                    <Icon
                      icon="solar:shield-check-bold-duotone"
                      className="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-white transition-colors">
                      Protección de Datos (LOPDGDD)
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
                      Control visibility and privacy to comply with Spanish Data
                      Protection laws. Tenant data is firewalled by default.
                    </p>
                  </div>
                </div>
                <div className="ml-14 mt-4 flex flex-col space-y-3">
                  <button className="text-sm text-left font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 hover:underline flex items-center transition-colors">
                    <Icon
                      icon="solar:document-add-bold-duotone"
                      className="mr-2"
                    />{" "}
                    View active Privacy Policy (Políticas de Privacidad)
                  </button>
                  <button className="text-sm text-left font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 hover:underline flex items-center transition-colors">
                    <Icon
                      icon="solar:download-square-bold-duotone"
                      className="mr-2"
                    />{" "}
                    Download Community Audit Log (.CSV)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
