"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getNames } from "country-list";
import "react-phone-number-input/style.css";
import BackgroundSlider from "./BackgroundSlider";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";

interface FormData {
  fullName: string;
  twitterHandle: string;
  email: string;
  phone: string;
  country: string;
  gender: string;
  priorExperience: string;
  hasLaptop: string;
  whyJoin: string;
  howDidYouHear: string[];
}

export default function EnrollmentForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countryOptions, setCountryOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    twitterHandle: "",
    email: "",
    phone: "",
    country: "",
    gender: "",
    priorExperience: "",
    hasLaptop: "",
    whyJoin: "",
    howDidYouHear: [],
  });

  // Get all countries
  useEffect(() => {
    const countryNames = getNames();
    const options = countryNames.map((country) => ({
      value: country,
      label: country,
    }));
    setCountryOptions(options);
  }, []);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      howDidYouHear: prev.howDidYouHear.includes(value)
        ? prev.howDidYouHear.filter((item) => item !== value)
        : [...prev.howDidYouHear, value],
    }));
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleClose = () => {
    router.push("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="relative w-full flex flex-col md:flex-row">
      {/* Left Side - Background Slider (Desktop/Tablet only) */}
      <BackgroundSlider
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      {/* Right Side - Form Container */}
      <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 md:bg-white relative">
        {/* Mobile Background Image with Overlay */}
        <div className="md:hidden absolute inset-0 bg-linear-to-br from-teal-600 to-blue-900">
          <img
            src="/images/enrollment-bg.jpeg"
            alt="Community"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Form Content */}
        <div className="relative z-10 w-full max-w-md p-8 md:p-0 my-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white md:text-gray-900">
              Let's get you boarded
            </h2>
            <button
              onClick={handleClose}
              className="text-white md:text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Step 1 - Personal Information */}
          {currentStep === 1 && (
            <FormStep1
              formData={formData}
              countryOptions={countryOptions}
              onInputChange={handleInputChange}
              onNext={handleNext}
            />
          )}

          {/* Step 2 - Additional Information */}
          {currentStep === 2 && (
            <FormStep2
              formData={formData}
              onInputChange={handleInputChange}
              onCheckboxChange={handleCheckboxChange}
              onSubmit={handleSubmit}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </section>
  );
}