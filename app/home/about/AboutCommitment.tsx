"use client";

import ImageFrame from "./ImageFrame";

export default function AboutCommitment() {
  return (
    <section className="relative w-full max-w-container mx-auto px-5 sm:px-8 lg:px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-6 items-center lg:items-start relative">
        
        {/* Text column - LEFT side */}
        <div className="space-y-6">
          <h3
            className="text-brand-cyan font-bold tracking-tight"
            style={{
              fontFamily: "Red Hat Display, sans-serif",
              fontSize: "20px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
            }}
          >
            Our commitment to you
          </h3>

          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
            At Slim Mentorship, our mission is simple and deliberate
          </h2>

          <p 
            className="text-gray-700"
            style={{
              fontFamily: "Red Hat Display, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
            }}
          >
            We help new tech professionals and aspirants stay consistent, focused, and supported throughout their job search, while significantly reducing the time it typically takes to get hired.
          </p>

          <p 
            className="text-gray-700"
            style={{
              fontFamily: "Red Hat Display, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
            }}
          >
            Through mentorship, practical experience, and clear guidance, we help you stand out and improve your chances of landing real opportunities.
          </p>
        </div>

        {/* Image column - RIGHT side */}
        <div className="relative w-full flex flex-col justify-center md:items-center lg:items-center">
          <ImageFrame
            src="/images/about/about2.jpg"
            alt="Our commitment image"
          />
        </div>
      </div>
    </section>
  );
}