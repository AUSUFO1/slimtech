"use client";
import Button from "../common/Button";

export default function FaqActionModal() {
  return (
    <section
      className="
        relative 
        w-full 
        max-w-330 
        h-auto 
        min-h-136.5
        mx-auto 
        mt-20 
        bg-brand-cyan 
        rounded-t-[28px] 
        flex 
        flex-col 
        items-center 
        justify-center 
        px-6 
        py-12 
        text-center
      "
      style={{
        opacity: 1,
      }}
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
        Join a community of creatives at Slim Mentorship building meaningful, real-world projects.
      </h2>

      {/* Paragraph */}
      <p className="text-gray-100 md:text-lg leading-relaxed max-w-3xl mb-8">
       We’ve carefully stripped our program down to what actually matters—removing distractions, outdated theory, and unnecessary complexity, so you focus only on the skills and thinking needed to succeed in real-world work.
      </p>

      {/* Action Button */}
      <Button>Catch a flight here</Button>
    </section>
  );
}
