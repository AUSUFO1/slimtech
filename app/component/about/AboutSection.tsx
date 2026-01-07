"use client";

import ImageFrame from "./ImageFrame";
import CyanStatsBadge from "./CyanStatsBadge";
import CoordinatorModal from "./CoordinatorModal";
import AboutCommitment from "./AboutCommitment";

export default function AboutSection() {
  return (
    <section className="relative w-full max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-6 items-center lg:items-start">
        
        <div className="relative flex items-center justify-center w-full min-h-100 sm:min-h-125 md:min-h-125 lg:min-h-137.5 lg:mt-30">
          
          <div className="relative w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]">
            <ImageFrame
              src="/images/about/about1.jpeg"
              alt="About section image"
            />
          </div>

          {/* Cyan Stats Badge - Top Right */}
          <div className="absolute top-0 right-0 sm:top-5 sm:right-60 md:top-2 md:right-95  lg:top-3 lg:right-5">
            <CyanStatsBadge className="" />
          </div>

          {/* Coordinator Modal - Bottom Left */}
          <div className="absolute -bottom-5 left-0 sm:bottom-2 sm:left-2 md:bottom-1 md:left-4 lg:bottom-3 lg:left-6">
            <CoordinatorModal />
          </div>

        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2
            className="text-brand-cyan font-bold tracking-tight"
            style={{
              fontSize: "20px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
              marginTop: "15px",
            }}
          >
            About us:
          </h2>

          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
            Guiding you from learning to employment.
          </h3>

          <p className="text-gray-600 md:text-lg leading-relaxed">
            Slim Tech Mentorship School was created to help people at every stage of life
            find real direction in the world of technology. We believe learning tech is not
            just about courses and certificates.
          </p>

          <p className="text-gray-600">
            Slim Tech Mentorship School was founded on X (formerly Twitter). What began as
            conversations and mentorship has now grown into a full ecosystem of learning.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-brand-dark">
              What We Offer:
            </h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              {[
                "Practical learning",
                "Strong mentorship",
                "Real-world projects",
                "Collaboration and community",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand-dark font-bold">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600">
            Every learner is seen as a partner in growth. We encourage big dreams, bold thinking, and consistent effort. No matter your age or background, Slim Tech Mentorship School gives you the tools, clarity, and support you need to grow.
          </p>
        </div>
      </div>
      <AboutCommitment />
    </section>
  );
}