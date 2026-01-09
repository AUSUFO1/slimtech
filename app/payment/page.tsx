
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Copy } from "lucide-react";
import BackgroundSlider from "@/app/component/form/BackgroundSlider";

interface ApplicationData {
  email: string;
  fullName: string;
  track?: string;
}

export default function PaymentPage() {
  const router = useRouter();
  const [step, setStep] = useState<"details" | "pin" | "loading" | "success">("details");
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  const [pin, setPin] = useState(["", "", "", ""]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: ""
  });

  useEffect(() => {
    // Get application data from sessionStorage
    const storedData = sessionStorage.getItem('applicationData');
    if (storedData) {
      setApplicationData(JSON.parse(storedData));
    } else {
      // If no data, redirect back to form
      router.push('/form');
    }
  }, [router]);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePinChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`pin-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleConfirmPin = () => {
    if (pin.every(digit => digit !== "")) {
      setStep("loading");
      
      // Simulate payment processing
      setTimeout(() => {
        setStep("success");
      }, 2000);
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Move to PIN entry
    setStep("pin");
  };

  const handleClose = () => {
    router.push("/home");
  };

  const handleSuccessClose = () => {
    sessionStorage.removeItem('applicationData');
    router.push("/home");
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("0123456781");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!applicationData) {
    return null;
  }

  return (
    <section className="relative w-full flex flex-col md:flex-row" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Left Side - Background Slider (Desktop/Tablet only) */}
      <BackgroundSlider
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      {/* Right Side - Payment Form Container */}
      <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 relative" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="md:hidden absolute inset-0">
        {/* Background image */}
        <img
            src="/images/enrollment-bg.jpeg"
            alt="Community"
            className="w-full h-full object-cover"
        />

        {/* Black overlay */}
        <div
            className="absolute inset-0"
            style={{ backgroundColor: '#00030CCC' }}
        />
        </div>
        {/* Payment Content */}
        <div className="relative z-10 w-full max-w-md p-8 md:p-0 my-8">
          
          {/* Payment Details Step */}
          {step === "details" && (
            <div>
              <div className="flex justify-between items-center mt-10 mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white md:text-gray-900">
                  Complete Your Onboarding
                </h2>
                <button
                  onClick={handleClose}
                  className="md:text-gray-400 md:hover:text-gray-600 transition-colors w-5 h-5 md:w-auto md:h-auto flex items-center justify-center bg-white md:bg-transparent rounded"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600 md:text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

             <p className="text-sm text-white md:text-gray-600 mb-6">
  You're one step away from securing your spot in the SlimTech Mentorship Program.
</p>


<div className="space-y-3 mb-6">
  <div className="flex gap-2  text-sm">
    <span className="font-semibold text-white md:text-gray-700">
      Program:
    </span>
    <span className="text-white md:text-gray-900">
      SlimTech Mentorship Bootcamp
    </span>
  </div>

  <div className="flex gap-2  text-sm">
    <span className="font-semibold text-white md:text-gray-700">
      Track:
    </span>
    <span className="font-bold text-white md:text-gray-900">
      {applicationData.track || "Not Selected"}
    </span>
  </div>

  <div className="flex gap-2  text-sm">
    <span className="font-semibold text-white md:text-gray-700">
      Duration:
    </span>
    <span className="text-white md:text-gray-900">
      9 Months + Community
    </span>
  </div>

  <div className="flex gap-2 text-sm">
    <span className="font-semibold text-white md:text-gray-700">
      Cohort:
    </span>
    <span className="text-white md:text-gray-900">
      Cohort 1
    </span>
  </div>

  {/* Fee */}
  <div className="flex gap-2 pt-4 mt-4s border-gray-200">
    <span className="text-base font-bold text-white md:text-gray-900">
      Tuition Fee:
    </span>
    <span className="text-2xl font-bold text-white md:text-gray-900">
      ₦99,000
    </span>
  </div>

  <p className="text-xs text-white md:text-gray-500 pt-2">
    Tuition Fee: ₦99,000
Note: Based on what users suggested on X (Twitter) the payment is ₦99,000 but an extra fee of 50,000 is required if you wish to continue with community & career follow-up 
  </p>
</div>


             {/* What's Included */}
<div className="mb-6 bg-white md:bg-white rounded-lg p-6 backdrop-blur-sm md:border md:border-gray-200">
  <p className="text-sm font-semibold text-brand-dark md:text-gray-700 mb-3">
    This payment includes:
  </p>

  <ul className="space-y-2">
    <li className="flex items-start gap-2 text-sm text-brand-dark md:text-gray-600">
      <span className="text-green-500 mt-0.5">✓</span>
      <span>Mentorship sessions & guided learning</span>
    </li>

    <li className="flex items-start gap-2 text-sm text-brand-dark md:text-gray-600">
      <span className="text-green-500 mt-0.5">✓</span>
      <span>Real-world project reviews</span>
    </li>

    <li className="flex items-start gap-2 text-sm text-brand-dark md:text-gray-600">
      <span className="text-green-500 mt-0.5">✓</span>
      <span>Portfolio development support</span>
    </li>
  </ul>
</div>

              {/* Payment Method Selection */}
              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white md:text-gray-700 mb-3">Pay With:</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="w-4 h-4 text-accent-yellow focus:ring-accent-yellow"
                      />
                      <span className="text-sm text-white md:text-gray-700">Card</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={() => setPaymentMethod("bank")}
                        className="w-4 h-4 text-accent-yellow focus:ring-accent-yellow"
                      />
                      <span className="text-sm text-white md:text-gray-700">Bank Transfer</span>
                    </label>
                  </div>
                </div>

                {/* Card Details Form */}
                {paymentMethod === "card" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={cardDetails.cardNumber}
                        onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                        className="w-full px-4 py-3 bg-white/90 md:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-accent-yellow text-gray-900"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">Expiration Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardDetails.expirationDate}
                          onChange={(e) => setCardDetails({...cardDetails, expirationDate: e.target.value})}
                          className="w-full px-4 py-3 bg-white/90 md:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-accent-yellow text-gray-900"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white md:text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                          className="w-full px-4 py-3 bg-white/90 md:bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-accent-yellow text-gray-900"
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Bank Transfer Details */}
                {paymentMethod === "bank" && (
                  <div className="bg-white/90 md:bg-white border border-gray-300 rounded-lg p-6 space-y-4">
                    <div className="text-center border-b border-gray-200 pb-4">
                      <p className="text-sm text-gray-600 mb-2">Transfer ₦99,000 to:</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Polaris Bank</p>
                        <p className="text-3xl font-bold text-gray-900 tracking-wider">0123456781</p>
                        <button 
                          type="button"
                          onClick={handleCopyAccount}
                          className="inline-flex items-center gap-2 text-sm text-accent-yellow hover:text-brand-hover mt-3 font-medium transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                          {copied ? "Copied!" : "Copy Account Number"}
                        </button>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-600">Expires in <span className="font-semibold text-red-500">10:00</span> minutes</p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-accent-yellow hover:bg-brand-hover text-white font-semibold py-4 rounded-full transition-colors"
                >
                  {paymentMethod === "card" ? "Pay ₦99,000" : "Confirm Payment"}
                </button>

                <p className="text-xs text-white/80 md:text-gray-500 text-center">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
              </form>
            </div>
          )}

          {/* PIN Entry Step */}
          {step === "pin" && (
            <div className="flex flex-col items-center justify-center min-h-125">
              <h2 className="text-2xl font-bold text-white md:text-gray-900 mb-2">Enter Pin</h2>
              <p className="text-sm text-white md:text-gray-600 mb-8">Enter your 4-digit card pin to confirm this payment</p>
              
              <div className="flex gap-4 mb-8">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    id={`pin-${index}`}
                    type="password"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    className="w-14 h-14 text-center text-2xl border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-accent-yellow text-gray-900"
                  />
                ))}
              </div>

              <button
                onClick={handleConfirmPin}
                disabled={!pin.every(digit => digit !== "")}
                className="w-full max-w-xs bg-accent-yellow hover:bg-brand-hover text-white font-semibold py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Payment
              </button>

              <p className="text-xs text-white/80 md:text-gray-500 text-center mt-6 max-w-sm">
                Your personal data will be used to process your order, support your experience throughout this website.
              </p>
            </div>
          )}

          {/* Loading Step */}
          {step === "loading" && (
            <div className="flex flex-col items-center justify-center min-h-125">
              <h2 className="text-2xl font-bold text-white md:text-gray-900 mb-8">Processing Payment...</h2>
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-white/30 md:border-gray-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-accent-yellow border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          {/* Success Step */}
          {step === "success" && (
            <div className="flex flex-col items-center justify-center min-h-125 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-white md:text-gray-900 mb-2">Payment Successful</h2>
              
              <p className="text-xl md:text-4xl font-bold text-white md:text-gray-900 my-6 px-4">
                Welcome Onboard • Fasten Your Seatbelt
              </p>

              <button
                onClick={handleSuccessClose}
                className="mt-8 bg-accent-yellow hover:bg-brand-hover text-white font-semibold py-3 px-8 rounded-full transition-colors"
              >
                HomePage
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}