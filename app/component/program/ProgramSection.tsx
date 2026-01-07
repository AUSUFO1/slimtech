"use client";

import LogoMedium from "../icon/LogoMedium";
import ProgramFlow from "../icon/ProgramFlow";

export default function ProgramSection() {
  return (
    <section className="relative w-full bg-[#F5F5F5] px-3 sm:px-8 lg:px-10 py-6 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-brand-cyan font-bold tracking-tight mb-4"
            style={{
              fontSize: "20px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
            }}
          >
            Program Structure
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight px-4">
            The Slim Mentorship Phase Flow
          </h3>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Logo Section - Left Side */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="w-32 sm:w-40 md:w-48 lg:w-full max-w-50">
              <LogoMedium />
            </div>
          </div>

          {/* Program Flow - Right Side */}
          <div className="lg:col-span-9 lg:mr-20 flex justify-center lg:justify-start">
            <div className="w-full max-w-137">
              <ProgramFlow className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}