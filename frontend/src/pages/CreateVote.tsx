export default function VotingDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Create community vote
        </h1>
        <p className="text-slate-500 text-sm">
          Open a new vote for the building
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-3xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Replace lobby flooring"
              className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-brand-500 text-slate-800 placeholder-slate-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Provide context for neighbors..."
              className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-brand-500 text-slate-800 placeholder-slate-300"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Category
              </label>
              <select className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-brand-500 bg-white text-slate-600">
                <option value="" disabled selected>
                  Choose category
                </option>
                <option value="derramas">Derramas</option>
                <option value="maintenance">Maintenance</option>
                <option value="rules">Rules change</option>
                <option value="services">Services</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Voting type
              </label>
              <select className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-brand-500 bg-white text-slate-600">
                <option value="" disabled selected>
                  Choose type
                </option>
                <option value="binary">Binary (Yes / No)</option>
                <option value="multiple">Multiple Choice</option>
              </select>
            </div>
          </div>

          {/* Attachments Dropzone */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Attachments
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-slate-50 flex flex-col items-center justify-center transition hover:bg-slate-100 cursor-pointer">
              <svg
                className="w-6 h-6 text-slate-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                ></path>
              </svg>
              <p className="text-sm text-slate-500 mb-3">
                Upload documents (quotes, proposals)
              </p>
              <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">
                Choose files
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
            <button className="px-5 py-2.5 rounded-lg font-medium text-slate-600 bg-gray-100 hover:bg-gray-200 transition">
              Save draft
            </button>
            <button className="px-5 py-2.5 rounded-lg font-medium text-white bg-brand-500 hover:bg-brand-600 transition shadow-sm">
              Publish vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
