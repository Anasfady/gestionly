import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function DashboardLayout() {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Helper function to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* App Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="bg-brand-900 text-white p-1.5 rounded-lg mr-3">
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
          <div>
            <h1 className="font-bold text-slate-800 text-lg leading-tight">
              Gestionly
            </h1>
            <p className="text-xs text-slate-500">Property mgmt</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <p className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Menu
          </p>

          <Link
            to="/"
            className={`flex items-center px-2 py-2.5 rounded-lg transition-colors ${isActive("/") ? "bg-gray-100 text-slate-800 font-medium" : "text-slate-600 hover:bg-gray-50"}`}
          >
            <svg
              className="w-5 h-5 mr-3 text-slate-500"
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
            Dashboard
          </Link>

          <Link
            to="/units"
            className={`flex items-center px-2 py-2.5 rounded-lg transition-colors ${isActive("/units") ? "bg-gray-100 text-slate-800 font-medium" : "text-slate-600 hover:bg-gray-50"}`}
          >
            <svg
              className="w-5 h-5 mr-3 text-slate-500"
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
            Units
          </Link>

          <Link
            to="/voting"
            className={`flex items-center px-2 py-2.5 rounded-lg transition-colors ${isActive("/voting") ? "bg-gray-100 text-slate-800 font-medium" : "text-slate-600 hover:bg-gray-50"}`}
          >
            <svg
              className="w-5 h-5 mr-3 text-slate-500"
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
            Voting
          </Link>

          <Link
            to="Billing"
            className={`flex items-center px-2 py-2.5 rounded-lg transition-colors ${isActive("/") ? "bg-brand-100 text-brand-900 font-medium" : "text-slate-600 hover:bg-gray-50"}`}
          >
            <svg
              className="w-5 h-5 mr-3 text-slate-500"
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
            Billing
          </Link>
        </nav>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10">
          {/* Left Side Header (Empty for now, could hold breadcrumbs or mobile menu toggle) */}
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-gray-400 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          {/* Right Side Header Controls - **THIS WRAPPER DIV WAS MISSING** */}
          <div className="flex items-center space-x-6 relative">
            {/* Notification Bell */}
            <div className="relative cursor-pointer">
              <svg
                className="w-6 h-6 text-slate-600 hover:text-slate-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                3
              </span>
            </div>

            {/* User Profile & Dropdown Toggle */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="w-9 h-9 bg-brand-900 text-white rounded-full flex items-center justify-center font-bold text-sm mr-2 shadow-sm">
                AM
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-slate-800 leading-tight">
                  Ana Martín
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  President
                </p>
              </div>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute top-12 right-0 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 mt-1">
                  <div className="px-4 py-2 border-b border-gray-50 mb-1">
                    <p className="text-sm font-semibold text-slate-800">
                      My account
                    </p>
                  </div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700 bg-brand-100 font-medium"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-gray-50"
                  >
                    Settings
                  </a>
                  <div className="border-t border-gray-50 mt-1 pt-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>{" "}
        </header>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
