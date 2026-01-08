"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getNames } from "country-list";
import "react-phone-number-input/style.css";
import BackgroundSlider from "./BackgroundSlider";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import SuccessMessage from "./SuccessMessage";

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
  interestedTracks: string[];
  howDidYouHear: string[];
}

export default function EnrollmentForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
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
    interestedTracks: [],
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

  const handleTrackCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interestedTracks: prev.interestedTracks.includes(value)
        ? prev.interestedTracks.filter((item) => item !== value)
        : [...prev.interestedTracks, value],
    }));
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleClose = () => {
    router.push("/home");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xpqwvjav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully:", formData);
        setShowSuccess(true);
      } else {
        console.error("Form submission failed");
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    router.push("/home");
  };

  return (
    <>
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
            <div className="flex justify-between items-center mt-10 mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white md:text-gray-900">
                Let's get you boarded
              </h2>
              <button
                onClick={handleClose}
                className="md:text-gray-400 md:hover:text-gray-600 transition-colors w-5 h-5 md:w-auto md:h-auto flex items-center justify-center bg-white md:bg-transparent rounded"
                aria-label="Close"
              >
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-600 md:text-current"
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
                onTrackCheckboxChange={handleTrackCheckboxChange}
                onSubmit={handleSubmit}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </section>

      {/* Success Message Modal */}
      {showSuccess && <SuccessMessage onClose={handleSuccessClose} />}
    </>
  );
}