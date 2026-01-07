"use client";
import FooterIllustration from "./FooterIllustration"; 
import Logo from "../component/icon/Logo";
import Button from "../component/common/Button";

export default function Footer() {
  return (
    <footer className="relative w-full -mt-15 bg-brand-dark overflow-hidden">
      {/* Footer Content */}
      <div className="relative z-10 w-full max-w-container mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* TOP SECTION - Newsletter & Illustration */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* LEFT - Illustration Component */}
            <FooterIllustration />

            {/* RIGHT - Newsletter Subscription */}
            <div className="text-white space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Subscribe to our Newsletter
              </h2>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                Join our community of techies and receive regular updates on the latest tech trends, news, courses, and special promotions. Don't miss out on the opportunity to level up your tech skills and achieve your goals.
              </p>
              
              {/* Email Input & Button */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-transparent border border-accent-yellow text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan transition-colors"
                />
                <Button className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              
              {/* Terms Text */}
              <p className="text-xs text-white">
                By clicking Subscribe you're confirming that you agree with our{" "}
                <a href="#" className="underline hover:text-brand-cyan transition-colors">
                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - Footer Links */}
        <div className="border-t border-gray-700 py-8 sm:py-10 lg:py-3 lg:-mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:py-8 gap-8 text-white">
            
            {/* Logo Column */}
            <div className="space-y-2">
              <Logo />
            </div>

            {/* Support Column */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold">SUPPORT</h4>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <a href="#" className="hover:text-brand-cyan transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-cyan transition-colors">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-cyan transition-colors">
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
                  <a href="#" className="hover:text-brand-cyan transition-colors">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>

            {/* Get Started Column */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold">GET STARTED</h4>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <a href="#" className="hover:text-brand-cyan transition-colors">
                    Signup
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-cyan transition-colors">
                    Sign in
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