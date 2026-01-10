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
  interestedTracks: string[];
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
    interestedTracks: [],
    howDidYouHear: [],
  });

  useEffect(() => {
    const countryNames = getNames();
    const options = countryNames.map((country) => ({
      value: country,
      label: country,
    }));
    setCountryOptions(options);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === "interestedTracks") {
      setFormData((prev) => ({ ...prev, [field]: [value] }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
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
    router.push("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    // Store complete form data in sessionStorage (NOT in database)
    // This data will be submitted to Formspree ONLY after payment confirmation
    sessionStorage.setItem('enrollmentFormData', JSON.stringify(formData));
    
    // Store minimal data needed for payment
    sessionStorage.setItem('applicationData', JSON.stringify({
      email: formData.email,
      fullName: formData.fullName,
      track: formData.interestedTracks[0] || "Software Engineering"
    }));
    
    console.log("Form data saved locally. Redirecting to payment...");
    
    // Redirect to payment page (form NOT submitted yet)
    router.push("/payment");
  };

  return (
    <section className="relative w-full flex flex-col md:flex-row">
      <BackgroundSlider
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 md:bg-white relative">
        <div className="md:hidden absolute inset-0">
          <img
            src="/images/enrollment-bg.jpeg"
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#00030CCC' }}
          />
        </div>

        <div className="relative z-10 w-full max-w-md p-8 md:p-0 my-8">
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

          {currentStep === 1 && (
            <FormStep1
              formData={formData}
              countryOptions={countryOptions}
              onInputChange={handleInputChange}
              onNext={handleNext}
            />
          )}

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
  );
}