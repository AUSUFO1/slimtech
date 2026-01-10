"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, XCircle, Clock, Loader2 } from "lucide-react";

interface PaymentSuccessProps {
  onClose: () => void;
}

function PaymentSuccess({ onClose }: PaymentSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-green-500" />
      </div>

      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        Payment Successful
      </h2>

      <p className="text-xl md:text-4xl font-bold text-gray-9=700 my-6 px-4">
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

function PaymentFailed({ onRetry, onClose }: { onRetry: () => void; onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <XCircle className="w-10 h-10 text-red-500" />
      </div>

      <h1 className="text-2xl font-bold md:text-gray-700 mb-2">
        Payment Failed
      </h1>
      <p className="mt-4 px-4  md:text-gray-700">
        Something went wrong. Please try again or contact support.
      </p>

      <div className="flex gap-4 mt-8">
        <button
          onClick={onRetry}
          className="bg-accent-yellow hover:bg-brand-hover text-white font-semibold py-3 px-8 rounded-full transition-colors"
        >
          Retry Verification
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
        >
          HomePage
        </button>
      </div>
    </div>
  );
}

function PaymentPending({ onRetry, onClose }: { onRetry: () => void; onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
        <Clock className="w-10 h-10 text-yellow-500" />
      </div>

      <h1 className="text-2xl font-bold text-gray-700 mb-2">
        Payment Pending
      </h1>
      <p className="mt-4 px-4 text-gray-700">
        Your payment is being processed. This may take a few moments.
      </p>

      <div className="flex gap-4 mt-8">
        <button
          onClick={onRetry}
          className="bg-accent-yellow hover:bg-brand-hover text-white font-semibold py-3 px-8 rounded-full transition-colors"
        >
          Check Again
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
        >
          HomePage
        </button>
      </div>
    </div>
  );
}

export default function CallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"checking" | "success" | "failed" | "pending" | "submitting">("checking");
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const BACKEND_URL = "https://oni-backend-dudi.onrender.com";
  const FORMSPREE_URL = "https://formspree.io/f/xpqwvjav";
  const MAX_ATTEMPTS = 3;
  const VERIFICATION_TIMEOUT = 30000;

  const submitEnrollmentForm = async () => {
    setStatus("submitting");
    
    const enrollmentDataString = sessionStorage.getItem('enrollmentFormData');
    
    if (!enrollmentDataString) {
      setSubmissionError('Enrollment data not found. Your payment was successful. Please contact support.');
      return false;
    }

    try {
      const enrollmentData = JSON.parse(enrollmentDataString);
      
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(enrollmentData),
      });

      if (response.ok) {
        sessionStorage.removeItem('enrollmentFormData');
        return true;
      } else {
        setSubmissionError('Failed to submit enrollment form. Your payment was successful. Please contact support.');
        return false;
      }
    } catch (error) {
      setSubmissionError('Network error while submitting form. Your payment was successful. Please contact support.');
      return false;
    }
  };

  const verifyPayment = async (retryDelay = 0) => {
    if (retryDelay > 0) {
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }

    const txRef = sessionStorage.getItem('tx_ref') || 
                  new URLSearchParams(window.location.search).get('tx_ref');

    if (!txRef) {
      setStatus('failed');
      return;
    }

    setStatus('checking');
    setVerificationAttempts(prev => prev + 1);

    const timeoutId = setTimeout(() => {
      if (verificationAttempts < MAX_ATTEMPTS) {
        setStatus('pending');
      } else {
        setStatus('failed');
      }
    }, VERIFICATION_TIMEOUT);

    try {
      const response = await fetch(`${BACKEND_URL}/payment/verify?id=${txRef}`);
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Verification failed (HTTP ${response.status})`);
      }

      const data = await response.json();
      const paymentStatus = data.flutterwaveResponse?.status;

      if (paymentStatus === 'successful') {
        const formSubmitted = await submitEnrollmentForm();
        
        if (formSubmitted) {
          setStatus('success');
          sessionStorage.removeItem('tx_ref');
          sessionStorage.removeItem('applicationData');
          sessionStorage.removeItem('payment_initiated');
          sessionStorage.removeItem('payment_amount');
        } else {
          setStatus('success');
        }
      } else if (paymentStatus === 'pending') {
        if (verificationAttempts < MAX_ATTEMPTS) {
          setStatus('pending');
        } else {
          setStatus('failed');
        }
      } else {
        setStatus('failed');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (verificationAttempts < MAX_ATTEMPTS) {
        setStatus('pending');
      } else {
        setStatus('failed');
      }
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  const handleRetry = () => {
    verifyPayment(1000);
  };

  const handleClose = () => {
    sessionStorage.clear();
    router.push("/home");
  };

  if (status === "checking" || status === "submitting") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <Loader2 className="h-16 w-16 text-gray-900 animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-white md:text-gray-900 mb-2">
          {status === "checking" ? "Verifying Payment..." : "Completing Enrollment..."}
        </h2>
        <p className="text-white md:text-gray-700">
          {status === "checking" 
            ? "Please wait while we confirm your transaction" 
            : "Please wait while we finalize your enrollment"}
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        {submissionError && (
          <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded-lg max-w-md">
            <p className="text-sm text-yellow-800 font-semibold mb-2">
              Important Notice
            </p>
            <p className="text-sm text-yellow-800">
              {submissionError}
            </p>
          </div>
        )}
        <PaymentSuccess onClose={handleClose} />
      </div>
    );
  }

  if (status === "pending") {
    return <PaymentPending onRetry={handleRetry} onClose={handleClose} />;
  }

  return <PaymentFailed onRetry={handleRetry} onClose={handleClose} />;
}