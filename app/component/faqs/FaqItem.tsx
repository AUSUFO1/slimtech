"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm bg-[#F4FCFF]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-brand-dark"
      >
        {question}
        <span
          className="
            text-brand-cyan 
            font-bold 
            text-2xl 
            w-[25.6px] 
            h-6
            flex items-center justify-center
          "
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
