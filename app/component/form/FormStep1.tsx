import PhoneInput from "react-phone-number-input";
import Select from "react-select";

interface FormData {
  fullName: string;
  twitterHandle: string;
  email: string;
  phone: string;
  country: string;
  gender: string;
}

interface FormStep1Props {
  formData: FormData;
  countryOptions: Array<{ value: string; label: string }>;
  onInputChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
}

export default function FormStep1({
  formData,
  countryOptions,
  onInputChange,
  onNext,
}: FormStep1Props) {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Mary"
          value={formData.fullName}
          onChange={(e) => onInputChange("fullName", e.target.value)}
          required
          className="w-full px-4 py-3 bg-[#F5F5F5] border-[0.7px] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Twitter Handle */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          X (Twitter) Handle
        </label>
        <input
          type="text"
          placeholder="John Mary"
          value={formData.twitterHandle}
          onChange={(e) => onInputChange("twitterHandle", e.target.value)}
          className="w-full px-4 py-3 bg-[#F5F5F5] border-[0.7px] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="John.Maly@gmail.com"
          value={formData.email}
          onChange={(e) => onInputChange("email", e.target.value)}
          required
          className="w-full px-4 py-3 bg-[#F5F5F5] border-[0.7px] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Phone Number (WhatsApp Preferred)
        </label>
        <PhoneInput
          international
          defaultCountry="NG"
          value={formData.phone}
          onChange={(value) => onInputChange("phone", value || "")}
          className="phone-input-custom"
          required
        />
      </div>

      {/* Country of Residence */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Country of Residence
        </label>
        <Select
          instanceId="country-select"
          options={countryOptions}
          value={
            countryOptions.find((option) => option.value === formData.country) ||
            null
          }
          onChange={(option) => onInputChange("country", option?.value || "")}
          placeholder="Select or search country"
          isSearchable
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

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">
          Gender
        </label>
        <Select
          instanceId="gender-select"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" }
          ]}
          value={
            formData.gender
              ? { value: formData.gender, label: formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1) }
              : null
          }
          onChange={(option) => onInputChange("gender", option?.value || "")}
          placeholder="Select gender"
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

      {/* Next Button */}
      <button
        type="submit"
        className="w-auto min-w-99px h-125px px-7 py-3 bg-accent-yellow text-white rounded-full font-medium hover:bg-brand-dark transition-colors"
      >
        Next
      </button>
    </form>
  );
}