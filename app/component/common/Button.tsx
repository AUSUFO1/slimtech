"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-51.25 
        h-12
        rounded-[40px] 
        px-7.25 
        py-3
        gap-3
        bg-accent-yellow
        text-white
        transition-colors 
        duration-300 
        hover:bg-brand-hover
        hover:text-white
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
