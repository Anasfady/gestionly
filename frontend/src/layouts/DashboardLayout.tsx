import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTheme } from "../contexts/ThemeContext";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // DYNAMIC ROLE DETECTION
  const isPresident = location.pathname.startsWith("/president");

  const isActive = (path: string) => {
    if (path === "/president" || path === "/owner")
      return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const presidentLinks = [
    {
      name: "Dashboard",
      path: "/president",
      icon: <Icon icon="solar:widget-5-bold-duotone" />,
    },
    {
      name: "Units",
      path: "/president/units",
      icon: <Icon icon="solar:buildings-bold-duotone" />,
    },
    {
      name: "Voting",
      path: "/president/voting",
      icon: <Icon icon="solar:box-minimalistic-bold-duotone" />,
    },
    {
      name: "Billing",
      path: "/president/billing",
      icon: <Icon icon="solar:wallet-money-bold-duotone" />,
    },
    {
      name: "Settings",
      path: "/president/settings",
      icon: <Icon icon="solar:settings-bold-duotone" />,
    },
  ];

  const ownerLinks = [
    {
      name: "Dashboard",
      path: "/owner",
      icon: <Icon icon="solar:widget-5-bold-duotone" />,
    },
    {
      name: "Voting",
      path: "/owner/voting",
      icon: <Icon icon="solar:box-minimalistic-bold-duotone" />,
    },
    {
      name: "My Tenants",
      path: "/owner/tenants",
      icon: <Icon icon="solar:users-group-two-rounded-bold-duotone" />,
    },
    {
      name: "Incidents",
      path: "/owner/incidents",
      icon: <Icon icon="solar:shield-warning-bold-duotone" />,
    },
    {
      name: "My Invoices",
      path: "/owner/my-invoices",
      icon: <Icon icon="solar:wallet-money-bold-duotone" />,
    },
  ];

  const currentLinks = isPresident ? presidentLinks : ownerLinks;

  const profileInfo = isPresident
    ? {
        name: "Ana Martín",
        role: "President",
        initials: "AM",
        color: "bg-brand-900 dark:bg-brand-600",
      }
    : {
        name: "MFR",
        role: "Owner",
        initials: "MF",
        color: "bg-slate-800 dark:bg-slate-600",
      };

  const handleSignOut = () => {
    setIsProfileOpen(false);
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#0B0E14] font-sans transition-colors duration-300">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-[#161B26] border-r border-gray-200 dark:border-slate-800 flex flex-col transition-colors duration-300">
        <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-slate-800">
          <div className="bg-brand-600 text-white p-1.5 rounded-lg mr-3 shadow-sm">
            <Icon icon="solar:buildings-bold" className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 dark:text-white text-lg leading-tight">
              Gestionly
            </h1>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
              Property Mgmt
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          <p className="px-2 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
            {isPresident ? "Admin Menu" : "Owner Menu"}
          </p>

          {currentLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  active
                    ? "bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 font-semibold shadow-sm border border-brand-100 dark:border-brand-800/50"
                    : "text-slate-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-slate-200 border border-transparent"
                }`}
              >
                <span
                  className={`text-xl mr-3 transition-colors ${active ? "text-brand-600 dark:text-brand-400" : "text-slate-400 dark:text-slate-500"}`}
                >
                  {link.icon}
                </span>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white dark:bg-[#161B26] border-b border-gray-200 dark:border-slate-800 flex items-center justify-end px-8 z-20 transition-colors duration-300">
          <div className="flex items-center space-x-6 relative">
            {/* THEME TOGGLE BUTTON */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-slate-400 hover:text-brand-500 dark:text-slate-500 dark:hover:text-brand-400 bg-gray-50 dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 rounded-full transition-all"
              title="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-bold-duotone" className="w-5 h-5" />
              ) : (
                <Icon icon="solar:moon-bold-duotone" className="w-5 h-5" />
              )}
            </button>

            {/* Notification Bell */}
            <div className="relative cursor-pointer group">
              <Icon
                icon="solar:bell-bing-bold-duotone"
                className="w-6 h-6 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors"
              />
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-[#161B26]">
                3
              </span>
            </div>

            {/* Profile Dropdown Toggle */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer select-none"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div
                  className={`w-9 h-9 ${profileInfo.color} text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 shadow-sm border-2 border-white dark:border-slate-700 ring-1 ring-gray-200 dark:ring-slate-800`}
                >
                  {profileInfo.initials}
                </div>
                <div className="hidden md:block text-left mr-1">
                  <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                    {profileInfo.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                    {profileInfo.role}
                  </p>
                </div>
                <Icon
                  icon="ph:caret-down-bold"
                  className={`w-3 h-3 text-slate-400 dark:text-slate-500 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                />
              </div>

              {/* DROPDOWN MENU */}
              {isProfileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsProfileOpen(false)}
                  ></div>
                  <div className="absolute top-12 right-0 w-56 bg-white dark:bg-[#161B26] border border-gray-100 dark:border-slate-800 rounded-2xl shadow-xl py-2 mt-2 z-40 animate-fade-in">
                    <div className="px-5 py-2 mb-1">
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        My account
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <Link
                        to={
                          isPresident ? "/president/profile" : "/owner/profile"
                        }
                        className="px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-700 dark:hover:text-brand-400 transition-colors flex items-center"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to={
                          isPresident
                            ? "/president/settings"
                            : "/owner/settings"
                        }
                        className="px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-700 dark:hover:text-brand-400 transition-colors flex items-center"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Settings
                      </Link>
                    </div>

                    {/* =========================================
                        NEW: SWITCH ROLE BUTTON
                        ========================================= */}
                    <div className="border-t border-gray-100 dark:border-slate-800 mt-1 pt-1">
                      <Link
                        to={isPresident ? "/owner" : "/president"}
                        className="w-full text-left px-5 py-2.5 text-sm font-bold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors flex items-center"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Icon
                          icon="solar:transfer-horizontal-bold-duotone"
                          className="mr-2 w-4 h-4"
                        />
                        Switch to {isPresident ? "Owner" : "Admin"} View
                      </Link>
                    </div>

                    <div className="border-t border-gray-100 dark:border-slate-800 mt-1 pt-1">
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-5 py-2.5 text-sm font-medium text-rose-500 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors flex items-center"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* PAGE CONTENT TARGET */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#0B0E14] transition-colors duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
