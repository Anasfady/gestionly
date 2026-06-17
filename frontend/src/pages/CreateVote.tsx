export default function CreateVote() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-[#0B0E14] min-h-screen transition-colors duration-300">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors">
          Create community vote
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors">
          Open a new vote for the building
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white dark:bg-[#161B26] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 max-w-3xl transition-colors">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
              Title
            </label>
            <input
              type="text"
              placeholder="Replace lobby flooring"
              className="w-full border border-gray-200 dark:border-slate-700 rounded-lg p-2.5 outline-none focus:border-brand-500 dark:focus:border-brand-500 text-slate-800 dark:text-white placeholder-slate-300 dark:placeholder-slate-600 bg-white dark:bg-[#0B0E14] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Provide context for neighbors..."
              className="w-full border border-gray-200 dark:border-slate-700 rounded-lg p-2.5 outline-none focus:border-brand-500 dark:focus:border-brand-500 text-slate-800 dark:text-white placeholder-slate-300 dark:placeholder-slate-600 bg-white dark:bg-[#0B0E14] transition-colors"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                Category
              </label>
              <select className="w-full border border-gray-200 dark:border-slate-700 rounded-lg p-2.5 outline-none focus:border-brand-500 dark:focus:border-brand-500 bg-white dark:bg-[#0B0E14] text-slate-600 dark:text-slate-300 transition-colors">
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
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
                Voting type
              </label>
              <select className="w-full border border-gray-200 dark:border-slate-700 rounded-lg p-2.5 outline-none focus:border-brand-500 dark:focus:border-brand-500 bg-white dark:bg-[#0B0E14] text-slate-600 dark:text-slate-300 transition-colors">
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
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">
              Attachments
            </label>
            <div className="border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl p-8 text-center bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
              <svg
                className="w-6 h-6 text-slate-400 dark:text-slate-500 mb-2 transition-colors"
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
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 transition-colors">
                Upload documents (quotes, proposals)
              </p>
              <button className="bg-white dark:bg-[#161B26] border border-gray-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-gray-50 dark:hover:bg-slate-800/80 transition-colors">
                Choose files
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100 dark:border-slate-800 transition-colors">
            <button className="px-5 py-2.5 rounded-lg font-medium text-slate-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition">
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
