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
        aspect-[400/450]
        overflow-hidden
        rounded-2xl
        sm:w-[357px] sm:h-[383px] sm:aspect-auto
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               357px"
      />
    </div>
  );
}
