"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BackgroundSlider from "@/app/component/form/BackgroundSlider";
import PaymentDetails from "@/app/component/payment/PaymentDetails";

interface ApplicationData {
  email: string;
  fullName: string;
  track?: string;
}

export default function PaymentPage() {
  const router = useRouter();
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const BACKEND_URL = "https://oni-backend-zszu.onrender.com"; 
  const PAYMENT_AMOUNT = 10; 

  useEffect(() => {
    const storedData = sessionStorage.getItem('applicationData');
    if (storedData) {
      setApplicationData(JSON.parse(storedData));
    } else {
      router.push('/form');
    }
  }, [router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationData) {
      alert('Application data not found. Please start over.');
      router.push('/form');
      return;
    }

    setIsProcessing(true);

    try {
      const paymentPayload = {
        customer_email: applicationData.email,
        customer_name: applicationData.fullName,
        amount: PAYMENT_AMOUNT,
        currency: 'NGN',
        description: `SlimTech Mentorship Bootcamp - ${applicationData.track || 'General'}`,
        redirect_url: `${window.location.origin}/payment/callback`
      };

      console.log('Initiating payment:', paymentPayload);

      const response = await fetch(`${BACKEND_URL}/payment/initiate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentPayload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Payment initiation failed (HTTP ${response.status})`);
      }

      const data = await response.json();
      console.log('Payment initiated:', data);

      if (data.status === 'success' && data.data?.link && data.tx_ref) {
        sessionStorage.setItem('tx_ref', data.tx_ref);
        sessionStorage.setItem('payment_initiated', 'true');
        sessionStorage.setItem('payment_amount', PAYMENT_AMOUNT.toString());
        
        console.log('Redirecting to Flutterwave:', data.data.link);
        window.location.href = data.data.link;
      } else {
        throw new Error(data.message || 'Invalid response from payment gateway');
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred';
      
      alert(`Payment Initiation Failed\n\n${errorMessage}\n\nPlease try again or contact support if the problem persists.`);
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
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
      <BackgroundSlider
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 relative" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="md:hidden absolute inset-0">
          <img
            src="/images/enrollment-bg.jpeg"
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: '#00030CCC' }} />
        </div>

        <div className="relative z-10 w-full max-w-md p-8 md:p-0 my-8">
          <PaymentDetails
            applicationData={applicationData}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            isProcessing={isProcessing}
            copied={copied}
            onCopyAccount={handleCopyAccount}
            onSubmit={handlePayment}
            onClose={handleClose}
          />
        </div>
      </div>
    </section>
  );
}