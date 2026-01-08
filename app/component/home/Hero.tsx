"use client";

import Image from "next/image";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-100 sm:min-h-175
        flex items-center justify-center
        mt-10 lg:mt-22
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-100"
          sizes="(max-width: 640px) 500px,
                 (max-width: 1024px) 700px,
                 1440px"
        
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 53.29%, rgba(255,255,255,0.5) 76.65%, #FFFFFF 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-container px-6">
        <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight">
          We Don’t Just Train You.
          <br />
          We <span className="text-brand-cyan">Mentor</span> You Into a{" "}
          <span className="text-brand-cyan">Builder</span>
        </h1>

        <p className="mt-4 text-base md:text-2xl lg:text-xl text-gray-100 max-w-2xl mx-auto">
          Mentorship-driven learning focused on practical execution, industry thinking,
          accountability, and real-world outcomes.
        </p>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center">
 <Button navigateTo="/form">Catch a flight here</Button>        </div>
      </div>
    </section>
  );
}
