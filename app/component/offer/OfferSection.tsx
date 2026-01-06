"use client";

import React from "react";

const OfferSection = () => {
  return (
    <section
      className="
        max-w-container 
        mx-auto 
        py-12 
        px-4 
        bg-[#F5F5F5]
      "
    >
      {/* Small header */}
      <h3
        className="
          font-red-hat 
          font-bold 
          text-[20px] 
          leading-[150%] 
          tracking-[0] 
          text-center 
          text-brand-cyan
        "
      >
        What We Offer
      </h3>

      {/* Main header */}
      <h2
        className="
          font-bold 
          text-2xl md:text-5xl lg:text-6xl
          leading-[100%] 
          tracking-[0] 
          text-center 
          text-brand-dark 
          mt-4
        "
      >
        Why SlimTech Mentorship is Different?
      </h2>
    </section>
  );
};

export default OfferSection;
