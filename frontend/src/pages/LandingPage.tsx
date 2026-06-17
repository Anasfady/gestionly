import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  // Optional: If using Unicorn Studio, you would load their script here or in index.html
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://cdn.unicorn.studio/v1.2.0/unicornStudio.umd.js";
  //   script.onload = () => window.UnicornStudio.init();
  //   document.body.appendChild(script);
  // }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-x-hidden selection:bg-brand-500 selection:text-white">
      {/* ========================================
        CUSTOM CSS FOR ADVANCED ANIMATIONS
        ======================================== */}
      <style>{`
        /* Staggered Blur-in Animation */
        .animate-blur-in {
          opacity: 0;
          filter: blur(12px);
          transform: translateY(20px);
          animation: blurIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes blurIn {
          to { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }

        /* Abstract Gradient Mesh (Fallback for Unicorn Studio) */
        .bg-mesh {
          background-color: #020617;
          background-image: 
            radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.15) 0, transparent 50%), 
            radial-gradient(at 50% 0%, rgba(16, 185, 129, 0.1) 0, transparent 50%), 
            radial-gradient(at 100% 0%, rgba(99, 102, 241, 0.15) 0, transparent 50%);
        }

        /* 1px Border Beam Button (UIVerse Style) */
        .btn-beam-wrapper {
          position: relative;
          display: inline-flex;
          border-radius: 9999px;
          overflow: hidden;
          padding: 1.5px; /* Size of the beam border */
          cursor: pointer;
        }
        .btn-beam-wrapper::before {
          content: "";
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: conic-gradient(transparent, transparent, transparent, #3b82f6, #10b981, transparent);
          animation: spin 2.5s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-beam-wrapper:hover::before {
          opacity: 1;
        }
        .btn-beam-content {
          position: relative;
          background: #020617; /* Core BG color to mask the center */
          color: white;
          padding: 0.875rem 2.5rem;
          border-radius: 9999px;
          font-weight: 600;
          z-index: 10;
          display: flex;
          align-items: center;
          transition: background 0.3s ease;
        }
        .btn-beam-wrapper:hover .btn-beam-content {
          background: #0f172a;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* Secondary Glassmorphism Button */
        .btn-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 0.875rem 2.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }
        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
        }
      `}</style>

      {/* ========================================
        HERO SECTION
        ======================================== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-mesh">
        {/* Unicorn Studio Embed Target */}
        <div
          data-us-project="INSERT_YOUR_ID"
          className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        ></div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20">
          <div className="flex items-center space-x-2 animate-blur-in">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Icon icon="solar:buildings-bold" className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Gestionly</span>
          </div>
          <div className="space-x-6 animate-blur-in delay-100 hidden md:flex items-center">
            <a
              href="#about"
              className="text-sm font-medium text-slate-300 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 hover:text-white transition"
            >
              Contact
            </a>

            <Link
              to="/login"
              className="text-sm font-medium text-slate-300 hover:text-white transition"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-sm font-bold bg-white text-slate-900 px-5 py-2.5 rounded-full hover:bg-slate-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center"
            >
              Sign up
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto mt-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-8 animate-blur-in delay-100">
            <Icon
              icon="solar:star-fall-bold-duotone"
              className="mr-2 w-4 h-4"
            />
            The Digital Property Manager
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-blur-in delay-200 leading-tight">
            Run your community <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-emerald-300 to-emerald-400">
              with total transparency.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto animate-blur-in delay-300">
            Gestionly bridges the gap between Presidents, Owners, and Tenants.
            Automate coefficient-based billing, hold immutable digital votes,
            and track maintenance tickets instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-blur-in delay-400">
            {/* Primary Pill Button with Border Beam */}
            <Link to="/president" className="btn-beam-wrapper group">
              <span className="btn-beam-content">
                Get Started Free
                <Icon
                  icon="solar:arrow-right-line-duotone"
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>

            {/* Secondary Glass Button */}
            <a href="#about" className="btn-glass group">
              Explore Platform
              <Icon
                icon="ph:caret-down-bold"
                className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform text-slate-400"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================
        FEATURES SECTION
        ======================================== */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-blur-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Complete control, zero friction.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Built specifically for the complexities of Spanish property law
              (LPH) and multi-unit financial distributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition duration-500 group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon
                  icon="solar:wallet-money-bold-duotone"
                  className="w-8 h-8 text-blue-400"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100">
                Automated Billing
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instantly distribute community expenses (derramas) based on
                legal property coefficients. Track top debtors in real-time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl"></div>
              <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Icon
                  icon="solar:box-minimalistic-bold-duotone"
                  className="w-8 h-8 text-brand-400"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100 relative z-10">
                Immutable Voting
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                Achieve quorum instantly. Owners can review contractor quotes
                and cast legally-weighted votes directly from their smartphones.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition duration-500 group">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon
                  icon="solar:shield-warning-bold-duotone"
                  className="w-8 h-8 text-emerald-400"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100">
                Incident Tracking
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Give tenants a voice without giving them access to financials.
                Let them report damages, while you track the repair workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
        CONTACT SECTION
        ======================================== */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#0b1121] border border-slate-800 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">
                  Ready to modernize your building?
                </h2>
                <p className="text-slate-400 mb-10 text-lg">
                  Contact our team to get your community onboarded in under 10
                  minutes using our bulk CSV import.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center text-slate-300 font-medium">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        icon="ph:envelope-simple-duotone"
                        className="w-5 h-5 text-brand-400"
                      />
                    </div>
                    hello@gestionly.com
                  </div>
                  <div className="flex items-center text-slate-300 font-medium">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        icon="ph:map-pin-duotone"
                        className="w-5 h-5 text-brand-400"
                      />
                    </div>
                    Madrid, Spain
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Community or Admin Name"
                    className="w-full bg-[#020617] border border-slate-800 rounded-2xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#020617] border border-slate-800 rounded-2xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="How many units in your building?"
                    className="w-full bg-[#020617] border border-slate-800 rounded-2xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition resize-none"
                  ></textarea>
                </div>

                <button className="btn-beam-wrapper w-full group mt-2">
                  <span className="btn-beam-content w-full justify-center">
                    Send Inquiry
                    <Icon
                      icon="ph:paper-plane-tilt-bold"
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
        FOOTER
        ======================================== */}
      <footer className="bg-[#020617] pt-20 pb-10 border-t border-slate-800 relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                <Icon icon="solar:buildings-bold" className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Gestionly
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              Designed to ensure legal compliance with property laws while
              maximizing community participation and transparency.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-200">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li>
                <a href="#" className="hover:text-brand-400 transition">
                  Owner Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition">
                  Admin Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-200">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li>
                <a href="#" className="hover:text-brand-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition">
                  Data Security (GDPR)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
          <p className="text-sm text-slate-600 font-medium mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gestionly. All rights reserved.
          </p>
          <div className="flex space-x-4 text-slate-600">
            <a href="#" className="hover:text-brand-400 transition">
              <Icon icon="ph:twitter-logo-fill" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-brand-400 transition">
              <Icon icon="ph:linkedin-logo-fill" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
