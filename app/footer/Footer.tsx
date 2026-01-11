"use client";
import { useState } from "react";
import FooterIllustration from "./FooterIllustration"; 
import Logo from "../component/icon/Logo";
import LogoSmall from "../component/icon/LogoSmall";
import Button from "../component/common/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert("Please enter your email");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpqwvjav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subscriptionType: "Newsletter" }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail("");
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative w-full -mt-15 bg-brand-dark overflow-hidden">
      {/* Background Airplane Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Airplane */}
        <div className="absolute -left-50 sm:-left-24 lg:-left-65 top-1/10 lg:top-70">
          <LogoSmall className="w-75 h-75 sm:w-100 sm:h-100 lg:w-105 lg:h-105" />
        </div>
        {/* Right Airplane */}
        <div className="absolute -right-32 sm:-right-8 lg:-right-20 top-1/3 sm:top-150 lg:top-8">
          <LogoSmall className="w-75 h-75 sm:w-100 sm:h-100 lg:w-125 lg:h-125" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 w-full max-w-container mx-auto px-5 sm:px-8 lg:px-6">
        
        {/* TOP SECTION - Newsletter & Illustration */}
        <div className="py-6 sm:py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            
            {/* LEFT - Illustration Component */}
            <FooterIllustration />

            {/* RIGHT - Newsletter Subscription */}
            <div className="text-white lg:-ml-30 space-y-6">
              <h2 className="text-xl -mt-10 md:mt-0 sm:text-2xl lg:text-3xl font-bold">
                Subscribe to our Newsletter
              </h2>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Join our community of techies and receive regular updates on the latest tech trends, news, courses, and special promotions. Don't miss out on the opportunity to level up your tech skills and achieve your goals.
              </p>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="text-brand-cyan font-semibold text-sm">
                  ✓ Subscribed successfully!
                </div>
              )}
              
              {/* Email Input & Button */}
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 h-12 py-3 px-5 rounded-full bg-transparent border border-accent-yellow text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan transition-colors disabled:opacity-50"
                  style={{ maxWidth: '359px' }}
                />
                <Button type="submit" className="whitespace-nowrap" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              
              {/* Terms Text */}
              <a href="#terms" className="text-xs text-white underline hover:text-brand-cyan transition-colors block" > By clicking Subscribe you're confirming that you agree with our Terms and Conditions </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - Footer Links */}
        <div className="border-t border-gray-700 py-8 sm:py-10 lg:py-3 lg:-mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:py-8 gap-8 lg:gap-12 xl:gap-16 text-white lg:max-w-225 xl:max-w-250">
            
            {/* Logo Column */}
            <div className="space-y-2">
              <Logo />
            </div>

            {/* Support Column */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold">SUPPORT</h4>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <a href="/privacy" className="hover:text-brand-cyan transition-colors">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold">SOCIALS</h4>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <a href="https://x.com/jcode_Code" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 text-center text-sm text-white">
            © 2026 Slim Mentorship. All rights reserved
          </div>
        </div>

      </div>
    </footer>
  );
}