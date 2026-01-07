"use client";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ImageFrame({ src, alt }: Props) {
  return (
    <div
      className="
        relative
        w-full
        max-w-full
        aspect-400/450
        overflow-hidden
        rounded-2xl
        sm:w-89.25 
        sm:h-95.75 
        sm:aspect-auto
        md:w-105
        md:h-112.5
        lg:w-120
        lg:h-128.75
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 357px,
               (max-width: 1024px) 420px,
               480px"
      />
    </div>
  );
}