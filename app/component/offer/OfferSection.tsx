"use client";

import { useState } from "react";
import OfferCard from "./OfferCard";
// Import icons
import Star from "../icon/Star";
import Star1 from "../icon/Star1";
import Star2 from "../icon/Star2";
import Star3 from "../icon/Star3";
import Star4 from "../icon/Star4";
import Star5 from "../icon/Star5";

const cardsData = [
  {
    icon: <Star />,
    title: "Mentorship Comes First",
    description: `Learning is guided by people, not just content. Every student receives direction, feedback, and accountability from experienced mentors, so you're never guessing what to do next.`,
  },
  {
    icon: <Star1 />,
    title: "Built Around Real Work",
    description: `We don't simulate learning, we practice it. From early on, students work on practical projects that reflect real-world expectations, not theoretical exercises.`,
  },
  {
    icon: <Star2 />,
    title: "Small Cohorts, Real Attention",
    description: `Quality mentorship doesn't scale infinitely. Slim Mentorship keeps cohorts intentionally small to ensure meaningful feedback and genuine progress.`,
  },
  {
    icon: <Star3 />,
    title: "Industry Thinking, Not Just Tools",
    description: `Tools change. Thinking lasts. We teach how professionals approach problems, make decisions and collaborate, not just how to use today's software.`,
  },
  {
    icon: <Star4 />,
    title: "Execution Over Consumption",
    description: `Watching videos doesn't build skill, doing does. Slim Mentorship emphasizes building, testing, refining, and improving so progress is measurable and tangible.`,
  },
  {
    icon: <Star5 />,
    title: "Accessible Tuition, Serious Value",
    description: `We've designed Slim Mentorship to be financially accessible without lowering standards. Our tuition reflects a focus on mentorship, real work and outcomes.`,
  },
];

const OfferSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="max-w-container mx-auto py-6 px-4 bg-[#F5F5F5]">
      {/* Headers */}
      <h3 className="font-red-hat font-bold text-[20px] leading-[150%] text-center text-brand-cyan">
        What We Offer
      </h3>
      <h2 className="font-red-hat font-bold text-[24px] md:text-[36px] lg:text-[48px]   leading-[100%] text-center text-brand-dark mt-4">
        Why SlimTech Mentorship is Different?
      </h2>

      {/* Cards Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6 justify-items-stretch">
        {cardsData.map((card, idx) => (
          <OfferCard 
            key={idx} 
            id={idx}
            icon={card.icon} 
            title={card.title} 
            description={card.description}
            isActive={activeCard === idx}
            onTouch={setActiveCard}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;