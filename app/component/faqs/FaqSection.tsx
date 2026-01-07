"use client";

import FaqItem from "./FaqItem";
import { faqs } from "./FaqData";
import FaqActionModal from "./FaqActionModal"; 

export default function FaqSection() {
  return (
    <section className="relative w-full max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-10">
      {/* Small header */}
      <h2
        className="text-brand-cyan font-bold tracking-tight text-center"
        style={{
          fontSize: "20px",
          lineHeight: "150%",
          letterSpacing: "-0.01em",
        }}
      >
        FAQs
      </h2>

      {/* Main header */}
      <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mt-4 text-center">
        Frequently Asked Questions
      </h3>

      {/* FAQ items */}
      <div className="mt-8 space-y-4">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* Action Modal */}
      <div className="mt-16">
        <FaqActionModal />
      </div>
    </section>
  );
}
