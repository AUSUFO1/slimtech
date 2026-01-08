"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  navigateTo?: string; 
  type?: "button" | "submit" | "reset"; // Form button type
  disabled?: boolean; // Disabled state
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className,
  navigateTo,
  type = "button",
  disabled = false
}) => {
  const router = useRouter();

  const handleClick = () => {
    // If there's a custom onClick, call it first
    if (onClick) {
      onClick();
    }
    
    // Then navigate if navigateTo is provided
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
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
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;