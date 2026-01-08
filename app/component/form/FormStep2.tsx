import Select from "react-select";

interface FormData {
  priorExperience: string;
  hasLaptop: string;
  whyJoin: string;
  interestedTracks: string[];
  howDidYouHear: string[];
}

interface FormStep2Props {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
  onCheckboxChange: (value: string) => void;
  onTrackCheckboxChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export default function FormStep2({
  formData,
  onInputChange,
  onCheckboxChange,
  onTrackCheckboxChange,
  onSubmit,
  onBack,
}: FormStep2Props) {
  const yesNoOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" }
  ];

  return (
    <div className="space-y-6">
      {/* Prior Experience */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Do you have any prior experience either through courses, bootcamps, or
          self-learning?
        </label>
        <Select
          instanceId="prior-experience-select"
          options={yesNoOptions}
          value={
            formData.priorExperience
              ? yesNoOptions.find(opt => opt.value === formData.priorExperience)
              : null
          }
          onChange={(option) => onInputChange("priorExperience", option?.value || "")}
          placeholder="Select option"
          className="react-select-container"
          classNamePrefix="react-select"
          required
          styles={{
            control: (base) => ({
              ...base,
              padding: "0.375rem",
              backgroundColor: "#F5F5F5",
              borderColor: "#d1d5db",
              borderWidth: "0.7px",
              borderRadius: "0.5rem",
              "&:hover": {
                borderColor: "#d1d5db",
              },
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#F5F5F5" : "white",
              color: "#000",
              "&:active": {
                backgroundColor: "#F5F5F5",
              },
            }),
            menu: (base) => ({
              ...base,
              zIndex: 100,
            }),
          }}
        />
      </div>

      {/* Has Laptop */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Do you have a working laptop and internet?
        </label>
        <Select
          instanceId="has-laptop-select"
          options={yesNoOptions}
          value={
            formData.hasLaptop
              ? yesNoOptions.find(opt => opt.value === formData.hasLaptop)
              : null
          }
          onChange={(option) => onInputChange("hasLaptop", option?.value || "")}
          placeholder="Select option"
          className="react-select-container"
          classNamePrefix="react-select"
          required
          styles={{
            control: (base) => ({
              ...base,
              padding: "0.375rem",
              backgroundColor: "#F5F5F5",
              borderColor: "#d1d5db",
              borderWidth: "0.7px",
              borderRadius: "0.5rem",
              "&:hover": {
                borderColor: "#d1d5db",
              },
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#F5F5F5" : "white",
              color: "#000",
              "&:active": {
                backgroundColor: "#F5F5F5",
              },
            }),
            menu: (base) => ({
              ...base,
              zIndex: 100,
            }),
          }}
        />
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

      {/* Which Track Are You Interested In */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-3">
          Which Track Are You Interested In?
        </label>
        <div className="space-y-2">
          {[
            "Frontend Engineering",
            "Backend Engineering",
            "UI/UX Design",
            "Graphics Design",
            "Mobile App Development",
            "Artificial Intelligence",
            "Data Analytics",
            "Virtual Assistance"
          ].map((track) => (
            <label key={track} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interestedTracks.includes(track)}
                onChange={() => onTrackCheckboxChange(track)}
                className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-white md:text-gray-700">
                {track}
              </span>
            </label>
          ))}
        </div>
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
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
          className="w-auto min-w-99px h-125px px-7 py-3 bg-accent-yellow text-white rounded-full font-medium hover:bg-[#e5a520] transition-colors"
        >
          Get onboard!
        </button>
        <button
          type="button"
          onClick={onBack}
          className="w-full text-sm text-accent-yellow hover:text-gray-900 transition-colors"
        >
          Return to previous page
        </button>
      </div>
    </div>
  );
}