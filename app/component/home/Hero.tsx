"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative w-full
        min-h-100 sm:min-h-175
        flex items-center justify-center
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
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
        {/* Gradient Overlay with exact stops */}
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
        <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight">
          We Don’t Just Train You.
          <br />
          We <span className="text-brand-cyan">Mentor</span> You Into a{" "}
          <span className="text-brand-cyan">Builder</span>
        </h1>
        <p className="mt-4 text-base md:text-2xl lg:text-xl text-gray-100 max-w-2xl mx-auto">
          Mentorship-driven learning focused on practical execution, industry thinking,
          accountability, and real-world outcomes.
        </p>
            <div className="mt-4">
        <a
            href="#"
            className="
            inline-flex items-center justify-center
            w-51.26 h-12 
            bg-accent-yellow text-white
            rounded-[40px]
            px-7.25 py-3
            opacity-100
            shadow-md
            hover:bg-brand-dark hover:text-white
            transition-all duration-300
            text-sm sm:text-base md:text-xl lg:text-xl
            "
        >
            Catch a flight here
        </a>
        </div>

      </div>
    </section>
  );
}
