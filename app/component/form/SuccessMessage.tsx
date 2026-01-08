interface SuccessMessageProps {
  onClose: () => void;
}

export default function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-brand-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Welcome Aboard! 🎉
        </h3>
        <p className="text-gray-600 mb-6">
          Your application has been submitted successfully! We'll review your information and get back to you soon via email or WhatsApp.
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-accent-yellow text-white rounded-full font-medium hover:bg-[#e5a520] transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}