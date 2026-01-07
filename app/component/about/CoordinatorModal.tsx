"use client";

import Image from "next/image";

export default function CoordinatorModal() {
  return (
    <div
      className="
        relative
        bg-white
        shadow-md
        rounded-xl
        sm:rounded-[18.45px]
        flex flex-col
        gap-3
        sm:gap-[14.76px]
        w-45
        sm:w-[220.98px]
        p-5
        sm:pt-[25.82px]
        sm:pr-[25.45px]
        sm:pb-[25.82px]
        sm:pl-[20.45px]
      "
    >
      {/* Quote text */}
      <p className="text-[11px] sm:text-[13px] text-gray-600 leading-snug">
        "Slim Mentorship was born from a simple realization: interest in tech is
        everywhere, but structured guidance is not. We built this program to
        remove confusion, focus learning, and help people develop skills that
        matter in the real world."
      </p>

      {/* Coordinator info */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/about/jcode.jpg"
            alt="J.code Program Coordinator"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-xs sm:text-sm font-bold text-gray-600">
            J.code
          </span>
          <span className="text-xs sm:text-sm font-bold text-nowrap text-gray-600">
            Program Coordinator
          </span>
        </div>
      </div>
    </div>
  );
}