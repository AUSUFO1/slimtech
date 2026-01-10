interface ApplicationData {
  email: string;
  fullName: string;
  track?: string;
}

interface PaymentDetailsProps {
  applicationData: ApplicationData;
  paymentMethod: "card" | "bank";
  setPaymentMethod: (method: "card" | "bank") => void;
  isProcessing: boolean;
  copied: boolean;
  onCopyAccount: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export default function PaymentDetails({
  applicationData,
  paymentMethod,
  setPaymentMethod,
  isProcessing,
  onSubmit,
  onClose
}: PaymentDetailsProps) {
  return (
    <div>
      <div className="flex justify-between items-center mt-10 mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-white md:text-gray-900">
          Complete Your Onboarding
        </h2>
        <button
          onClick={onClose}
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
        <div className="flex gap-2 text-sm">
          <span className="font-semibold text-white md:text-gray-700">Program:</span>
          <span className="text-white md:text-gray-900">SlimTech Mentorship Bootcamp</span>
        </div>

        <div className="flex gap-2 text-sm">
          <span className="font-semibold text-white md:text-gray-700">Track:</span>
          <span className="font-bold text-white md:text-gray-900">
            {applicationData.track || "Not Selected"}
          </span>
        </div>

        <div className="flex gap-2 text-sm">
          <span className="font-semibold text-white md:text-gray-700">Duration:</span>
          <span className="text-white md:text-gray-900">9 Months + Community</span>
        </div>

        <div className="flex gap-2 text-sm">
          <span className="font-semibold text-white md:text-gray-700">Cohort:</span>
          <span className="text-white md:text-gray-900">Cohort 1</span>
        </div>

        <div className="flex gap-2 pt-4 mt-4s border-gray-200">
          <span className="text-base font-bold text-white md:text-gray-900">Tuition Fee:</span>
          <span className="text-2xl font-bold text-white md:text-gray-900">₦99,000</span>
        </div>

        <p className="text-xs text-white md:text-gray-500 pt-2">
          Note: Based on what users suggested on X (Twitter) the payment is ₦99,000 but an extra fee of 50,000 is required if you wish to continue with community & career follow-up
        </p>

        <div className="flex gap-2 text-sm">
          <span className="font-semibold text-white md:text-gray-700">Payment Type:</span>
          <span className="text-white md:text-gray-900">One Time Payment</span>
        </div>
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
      <form onSubmit={onSubmit} className="space-y-6">
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

        {/* Card Payment */}
        {paymentMethod === "card" && (
          <div className="bg-white/90 md:bg-white border border-gray-300 rounded-lg p-6">
            <p className="text-sm text-gray-600 text-center">
              You will be redirected to Flutterwave to complete your payment securely.
            </p>
          </div>
        )}

        {/* Bank Transfer */}
        {paymentMethod === "bank" && (
          <div className="bg-white/90 md:bg-white border border-gray-300 rounded-lg p-6">
            <p className="text-sm text-gray-600 text-center">
              You will be redirected to Flutterwave to complete your payment securely.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-accent-yellow hover:bg-brand-hover text-white font-semibold py-4 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? "Processing..." : paymentMethod === "card" ? "Pay ₦99,000" : "Pay ₦99,000"}
        </button>

        <p className="text-xs text-white/80 md:text-gray-500 text-center">
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </p>
      </form>
    </div>
  );
}