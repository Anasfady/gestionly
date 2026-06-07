import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 1. DYNAMIC ROLE DETECTION
  const isPresident = location.pathname.startsWith("/president");

  // Helper to highlight the active menu link accurately
  const isActive = (path: string) => {
    // Exact match for the dashboard roots
    if (path === "/president" || path === "/owner")
      return location.pathname === path;
    // Partial match for sub-pages
    return location.pathname.startsWith(path);
  };

  // 2. SEPARATED MENUS (Updated Paths to match App.tsx)
  const presidentLinks = [
    {
      name: "Dashboard",
      path: "/president",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Units",
      path: "/president/units",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
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
      ),
    },
    {
      name: "Voting",
      path: "/president/voting",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
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
      ),
    },
    {
      name: "Billing",
      path: "/president/billing",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
  ];

  const ownerLinks = [
    {
      name: "Dashboard",
      path: "/owner",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      name: "Voting",
      path: "/owner/voting",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "My Tenants",
      path: "/owner/tenants",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      name: "Incidents",
      path: "/owner/incidents",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      name: "My Invoices",
      path: "/owner/my-invoices",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  const currentLinks = isPresident ? presidentLinks : ownerLinks;

  const profileInfo = isPresident
    ? {
        name: "Ana Martín",
        role: "President",
        initials: "AM",
        color: "bg-brand-900",
      }
    : { name: "MFR", role: "Owner", initials: "MF", color: "bg-slate-800" };

  const handleSwitchRole = () => {
    setIsProfileOpen(false);
    navigate(isPresident ? "/owner" : "/president");
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          {/* Sidebar Logo omitted for brevity, keep your original */}
          <h1 className="font-bold text-slate-800 text-lg">Gestionly</h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          <p className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            {isPresident ? "Admin Menu" : "Owner Menu"}
          </p>

          {currentLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center px-2 py-2.5 rounded-lg transition-colors ${isActive(link.path) ? "bg-brand-100 text-brand-900 font-medium" : "text-slate-500 hover:bg-gray-50 hover:text-slate-800"}`}
            >
              {React.cloneElement(link.icon, {
                className: `w-5 h-5 mr-3 ${isActive(link.path) ? "text-brand-600" : "text-slate-400"}`,
              })}
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          {/* Header Content */}
          <div
            className="ml-auto flex items-center cursor-pointer relative"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div
              className={`w-9 h-9 ${profileInfo.color} text-white rounded-full flex items-center justify-center font-bold text-sm mr-2`}
            >
              {profileInfo.initials}
            </div>

            {isProfileOpen && (
              <div className="absolute top-12 right-0 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2">
                <button
                  onClick={handleSwitchRole}
                  className="w-full text-left block px-4 py-2 text-sm font-medium text-brand-600 bg-brand-50"
                >
                  Switch to {isPresident ? "Owner" : "President"} View
                </button>
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
