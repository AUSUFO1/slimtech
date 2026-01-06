"use client";

import Image from "next/image";

export default function CoordinatorModal() {
  return (
    <div
      className="
        absolute
        bg-white
        shadow-md
        rounded-[18.45px]
        flex flex-col
        gap-[14.76px]
      "
      style={{
        width: "220.98px",
        top: "371.03px",
        paddingTop: "25.82px",
        paddingRight: "25.45px",
        paddingBottom: "25.82px",
        paddingLeft: "20.45px",
      }}
    >
      {/* Quote text */}
      <p className="text-[12px] text-gray-600 leading-snug">
        “Slim Mentorship was born from a simple realization: interest in tech is
        everywhere, but structured guidance is not. We built this program to
        remove confusion, focus learning, and help people develop skills that
        matter in the real world.”
      </p>

      {/* Coordinator info */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/about/jcode.jpg"
            alt="J.code Program Coordinator"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-gray-600">
            J.code
          </span>
          <span className="text-sm font-bold text-nowrap text-gray-600">
            Program Coordinator
          </span>
        </div>
      </div>
    </div>
  );
}
