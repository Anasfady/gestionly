import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine initial mode based on URL
  const isSignupRoute = location.pathname.includes("signup");

  const [isLogin, setIsLogin] = useState(!isSignupRoute);
  const [isLoading, setIsLoading] = useState(false);

  // Multi-step Wizard State for President Onboarding
  const [signupStep, setSignupStep] = useState<number>(1);

  const handleToggleMode = (toLogin: boolean) => {
    setIsLogin(toLogin);
    setSignupStep(1); // Reset wizard if they switch back to login
  };

  // FIXED: Explicitly typed (prev: number) to satisfy strict TypeScript rules
  const handleNextStep = () =>
    setSignupStep((prev: number) => Math.min(prev + 1, 3));
  const handlePrevStep = () =>
    setSignupStep((prev: number) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate "Click, Load, Transform" animation sequence
    setTimeout(() => {
      setIsLoading(false);

      // In a real app, API handles auth and role detection here.
      // Since Sign Up is now ONLY for Presidents, we route accordingly.
      if (!isLogin) {
        navigate("/president");
      } else {
        // Defaulting to Owner for login simulation purposes
        navigate("/owner");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#070b14] flex items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* ========================================
          CUSTOM CSS FOR NEON GLOW EFFECTS 
          ======================================== */}
      <style>{`
        .bg-cyber {
          background-image: 
            radial-gradient(circle at 15% 50%, rgba(0, 226, 255, 0.08), transparent 25%),
            radial-gradient(circle at 85% 30%, rgba(0, 226, 255, 0.05), transparent 25%);
        }

        .neon-box {
          background: rgba(10, 15, 30, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 226, 255, 0.2);
          box-shadow: 0 0 30px rgba(0, 226, 255, 0.05), inset 0 0 20px rgba(0, 226, 255, 0.02);
          transition: all 0.4s ease;
        }

        .neon-text {
          color: #00e2ff;
          text-shadow: 0 0 10px rgba(0, 226, 255, 0.6), 0 0 20px rgba(0, 226, 255, 0.4);
        }

        .neon-input {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        .neon-input:focus {
          border-color: #00e2ff;
          box-shadow: 0 0 15px rgba(0, 226, 255, 0.3), inset 0 0 10px rgba(0, 226, 255, 0.1);
          outline: none;
        }

        .neon-btn {
          background: transparent;
          color: #00e2ff;
          border: 1px solid #00e2ff;
          box-shadow: 0 0 15px rgba(0, 226, 255, 0.2), inset 0 0 10px rgba(0, 226, 255, 0.1);
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }
        .neon-btn:hover:not(:disabled) {
          background: #00e2ff;
          color: #070b14;
          box-shadow: 0 0 25px rgba(0, 226, 255, 0.6), inset 0 0 15px rgba(0, 226, 255, 0.4);
        }
        
        .neon-btn-secondary {
          background: rgba(255,255,255,0.05);
          color: #94a3b8;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .neon-btn-secondary:hover {
          color: white;
          border-color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
        }

        @keyframes spin-glow {
          0% { transform: rotate(0deg); box-shadow: 0 0 10px #00e2ff; }
          50% { box-shadow: 0 0 30px #00e2ff, inset 0 0 10px #00e2ff; }
          100% { transform: rotate(360deg); box-shadow: 0 0 10px #00e2ff; }
        }
        .loader {
          border: 2px solid transparent;
          border-top-color: #00e2ff;
          border-radius: 50%;
          animation: spin-glow 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-cyber opacity-100 pointer-events-none"></div>

      <div className="neon-box w-full max-w-md p-8 rounded-2xl relative z-10 animate-fade-in">
        {/* Header Toggle: Login vs Sign Up */}
        <div className="flex justify-center space-x-6 mb-8 border-b border-white/5 pb-4">
          <button
            onClick={() => handleToggleMode(true)}
            className={`text-lg font-bold transition-colors ${isLogin ? "neon-text" : "text-slate-500 hover:text-slate-300"}`}
          >
            Sign In
          </button>
          <button
            onClick={() => handleToggleMode(false)}
            className={`text-lg font-bold transition-colors ${!isLogin ? "neon-text" : "text-slate-500 hover:text-slate-300"}`}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* =========================================
              LOGIN VIEW
              ========================================= */}
          {isLogin && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon
                      icon="ph:envelope-simple-duotone"
                      className="w-5 h-5 text-slate-500"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    className="neon-input w-full pl-10 pr-4 py-3 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon
                      icon="ph:lock-key-duotone"
                      className="w-5 h-5 text-slate-500"
                    />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="neon-input w-full pl-10 pr-4 py-3 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              SIGN UP VIEW (MULTI-STEP FOR PRESIDENTS)
              ========================================= */}
          {!isLogin && (
            <div className="animate-fade-in">
              {/* Progress Indicator */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <div
                    className={`h-1.5 w-8 rounded-full transition-colors ${signupStep >= 1 ? "bg-[#00e2ff] shadow-[0_0_8px_#00e2ff]" : "bg-slate-700"}`}
                  ></div>
                  <div
                    className={`h-1.5 w-8 rounded-full transition-colors ${signupStep >= 2 ? "bg-[#00e2ff] shadow-[0_0_8px_#00e2ff]" : "bg-slate-700"}`}
                  ></div>
                  <div
                    className={`h-1.5 w-8 rounded-full transition-colors ${signupStep >= 3 ? "bg-[#00e2ff] shadow-[0_0_8px_#00e2ff]" : "bg-slate-700"}`}
                  ></div>
                </div>
                <span className="text-xs text-[#00e2ff] font-medium tracking-wider uppercase">
                  Step {signupStep} of 3
                </span>
              </div>

              {/* STEP 1: Personal Contact */}
              {signupStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Admin Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Carlos Manager"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@gestionly.com"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Master Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Property Info */}
              {signupStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Community Name
                    </label>
                    <input
                      type="text"
                      placeholder="Edificio Girasoles"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Legal Tax ID (CIF)
                    </label>
                    <input
                      type="text"
                      placeholder="H-12345678"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Total Units / Properties
                    </label>
                    <input
                      type="number"
                      placeholder="24"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Address
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Calle Mayor 12, Madrid"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 3: Bank Info */}
              {signupStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-[#00e2ff]/10 border border-[#00e2ff]/20 rounded-lg p-4 mb-2 flex items-start">
                    <Icon
                      icon="solar:info-circle-bold-duotone"
                      className="text-[#00e2ff] w-5 h-5 mt-0.5 mr-3 shrink-0"
                    />
                    <p className="text-xs text-slate-300 leading-relaxed">
                      This information is required to automate SEPA Direct Debit
                      collections for your community fees.
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      placeholder="Banco Santander"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Community IBAN
                    </label>
                    <input
                      type="text"
                      placeholder="ES91 0000 0000 0000 0000"
                      className="neon-input w-full px-4 py-3 rounded-lg text-sm font-mono tracking-widest"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================
              ACTION BUTTONS
              ========================================= */}
          <div className="pt-6 flex space-x-4">
            {/* Show Back button only on steps 2 and 3 of Signup */}
            {!isLogin && signupStep > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="neon-btn-secondary w-1/3 py-4 rounded-lg flex items-center justify-center text-xs"
              >
                Back
              </button>
            )}

            {/* Main Primary Button */}
            <button
              type={!isLogin && signupStep < 3 ? "button" : "submit"}
              onClick={!isLogin && signupStep < 3 ? handleNextStep : undefined}
              disabled={isLoading}
              className={`neon-btn ${!isLogin && signupStep > 1 ? "w-2/3" : "w-full"} py-4 rounded-lg flex items-center justify-center relative overflow-hidden group`}
            >
              {isLoading ? (
                <div className="w-6 h-6 loader"></div>
              ) : (
                <span className="flex items-center text-sm">
                  {isLogin
                    ? "Access Dashboard"
                    : signupStep < 3
                      ? "Continue"
                      : "Initialize Protocol"}
                  <Icon
                    icon={
                      signupStep < 3 && !isLogin
                        ? "solar:arrow-right-line-duotone"
                        : "solar:login-3-bold-duotone"
                    }
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              )}
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            {isLogin
              ? "Owners: Obtain login credentials from your President."
              : "Need an Owner account? Request one from your President."}
          </p>
        </div>
      </div>
    </div>
  );
}
