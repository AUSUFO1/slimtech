"use client";
import Logo from "../component/icon/LogoSmall";
import Button from "../component/common/Button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen mt-16 md:mt-20 bg-white">
      {/* Header */}
      <header className="bg-brand-dark py-6 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
          <a href="/home">
            <Button className="text-sm">Back to Home</Button>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Slim Tech Mentorship School
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Effective Date: January 11, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            Slim Tech Mentorship School ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, register for our programs, or use any of our services.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">1.</span>
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect personal and technical information including your name, email, phone number, location, payment information, and website usage data.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">2.</span>
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use your data to manage enrollments, process payments, provide mentorship services, send updates, improve our platform, and ensure security.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">3.</span>
            Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to enhance your experience and analyze website usage. You may disable cookies in your browser settings.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">4.</span>
            How We Protect Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement strong security measures to protect your personal data and use secure payment gateways for transactions.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">5.</span>
            Sharing of Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your data. We only share information with trusted service providers and legal authorities when required.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">6.</span>
            Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your data only for as long as necessary to provide our services and meet legal obligations.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">7.</span>
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You may access, correct, delete your data, or withdraw consent at any time by contacting us.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">8.</span>
            Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are not responsible for the privacy practices of external websites linked from our platform.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">9.</span>
            Children's Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not knowingly collect data from children under 13 years old.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            <span className="text-accent-yellow mr-3">10.</span>
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy from time to time. Updates will be posted on our website.
          </p>
        </section>

        {/* Section 11 - Contact Information */}
        <section className="mb-10 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
            Contact Information
          </h2>
          <div className="space-y-2 text-gray-700">
            <p className="font-semibold text-brand-dark">Slim Tech Mentorship School</p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a 
                href="mailto:toksnetafrica@gmail.com" 
                className="text-brand-cyan hover:underline"
              >
                toksnetafrica@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Website:</span>{" "}
              <a 
                href="https://slimmentorship.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-cyan hover:underline"
              >
             https://slimmentorship.online
              </a>
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about our privacy policy?
          </p>
          <a href="mailto:toksnetafrica@gmail.com">
            <Button>Contact Us</Button>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-sm">
            © 2026 Slim Tech Mentorship School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}