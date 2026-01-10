interface PaymentSuccessProps {
  onClose: () => void;
}

export default function PaymentSuccess({ onClose }: PaymentSuccessProps) {
  return (
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
        onClick={onClose}
        className="mt-8 bg-accent-yellow hover:bg-brand-hover text-white font-semibold py-3 px-8 rounded-full transition-colors"
      >
        HomePage
      </button>
    </div>
  );
}