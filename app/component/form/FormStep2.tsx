interface FormData {
  priorExperience: string;
  hasLaptop: string;
  whyJoin: string;
  howDidYouHear: string[];
}

interface FormStep2Props {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
  onCheckboxChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export default function FormStep2({
  formData,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  onBack,
}: FormStep2Props) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {/* Prior Experience */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Do you have any prior experience either through courses, bootcamps, or
          self-learning?
        </label>
        <select
          value={formData.priorExperience}
          onChange={(e) => onInputChange("priorExperience", e.target.value)}
          required
          className="w-full px-4 py-3 bg-[#F5F5F5] border-[0.7px] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none"
        >
          <option value="">Select option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Has Laptop */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Do you have a working laptop and internet?
        </label>
        <select
          value={formData.hasLaptop}
          onChange={(e) => onInputChange("hasLaptop", e.target.value)}
          required
          className="w-full px-4 py-3 bg-[#F5F5F5] border-[0.7px] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none"
        >
          <option value="">Select option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Why Join */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          In 2 sentences, why do you want to join Slim Tech Mentorship?
        </label>
        <textarea
          rows={4}
          value={formData.whyJoin}
          onChange={(e) => onInputChange("whyJoin", e.target.value)}
          required
          className="w-full px-4 py-3 bg-[#F5F5F5] border-[0.7px] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
        />
      </div>

      {/* How Did You Hear */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-3">
          How Did You Hear About Slim Tech Mentorship?
        </label>
        <div className="space-y-2">
          {["X (Twitter)", "WhatsApp", "Friend", "Other"].map((option) => (
            <label key={option} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.howDidYouHear.includes(option)}
                onChange={() => onCheckboxChange(option)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-white md:text-gray-700">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="space-y-4">
        <button
          type="submit"
          className="w-auto min-w-99px h-125 px-7 py-3 bg-accent-yellow text-white rounded-full font-medium hover:bg-[#e5a520] transition-colors"
        >
          Get onboard!
        </button>
        <button
          type="button"
          onClick={onBack}
          className="w-full text-sm text-white md:text-gray-600 hover:text-gray-900 transition-colors"
        >
          Return to previous page
        </button>
      </div>
    </form>
  );
}