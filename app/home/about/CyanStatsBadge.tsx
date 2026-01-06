// app/components/about/CyanStatsBadge.tsx
"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

type Props = {
  className?: string; 
};

export default function CyanStatsBadge({ className = "" }: Props) {
  return (
    <div
      className={`
        ${className}
        relative
        bg-brand-cyan/90
        text-white
        flex flex-col justify-between
      `}
      style={{
        width: '152px',
        height: '84px',
        borderRadius: '20px',
        paddingTop: '15px',
        paddingRight: '12px',
        paddingBottom: '15px',
        paddingLeft: '12px',
        gap: '4px',
        transform: 'rotate(-5.92deg)',
        opacity: 1,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Label */}
      <div className="text-[12px] sm:text-[13px] font-semibold leading-none">
        2k+ Registered users
      </div>

      {/* Avatars row (4 png images first, then plus icon last) */}
      <div className="flex items-center gap-[4px]">
        {/* User images */}
        <span className="inline-flex h-6 w-6 overflow-hidden rounded-full ring-1 ring-white/30">
          <Image
            src="/images/about/user1.jpg"
            alt="User 1"
            width={24}
            height={24}
            className="object-cover"
            priority
          />
        </span>
        <span className="inline-flex h-6 w-6 overflow-hidden rounded-full ring-1 ring-white/30">
          <Image
            src="/images/about/user2.jpg"
            alt="User 2"
            width={24}
            height={24}
            className="object-cover"
          />
        </span>
        <span className="inline-flex h-6 w-6 overflow-hidden rounded-full ring-1 ring-white/30">
          <Image
            src="/images/about/user3.jpg"
            alt="User 3"
            width={24}
            height={24}
            className="object-cover"
          />
        </span>
        <span className="inline-flex h-6 w-6 overflow-hidden rounded-full ring-1 ring-white/30">
          <Image
            src="/images/about/user4.jpg"
            alt="User 4"
            width={24}
            height={24}
            className="object-cover"
          />
        </span>

        {/* Plus icon circle - NOW LAST */}
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <Plus className="w-3.5 h-3.5 text-brand-dark" strokeWidth={2.5} />
        </span>
      </div>
    </div>
  );
}