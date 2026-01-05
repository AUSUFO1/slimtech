import Image from 'next/image'
import Rocket from '../icon/Rocket'
import GearLeft from '../icon/GearLeft'
import GearRight from '../icon/GearRight'

export default function VisualSection() {
  return (
    <section className="relative w-full mb-8 sm:mb-12 lg:mb-16">
      <div className="relative flex items-center justify-center min-h-37.5 sm:min-h-62.5 md:min-h-87.5 lg:min-h-112.5">

        {/* Rocket Icon */}
        <div className="absolute left-3 md:left-15 lg:left-30 top-1/2 -translate-y-1/2 z-20
                        w-25 h-25  md:w-50 md:h-50 lg:w-70 lg:h-70">
          <Rocket />
        </div>

        {/* Tablet Mockup */}
        <div className="relative z-10 w-full max-w-[70%] sm:max-w-[50%] md:max-w-[60%] lg:max-w-[55%] aspect-675/459 mt-5 mb-5 mx-auto">
          <Image
            src="/images/tablet-mockup.png"
            alt="Tablet Mockup"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Gear Left - Background, visible on mobile */}
        <div className="absolute -left-8 -top-3 md:-left-8 md:-top--7 lg:-left-14 lg:-top-14 z-0 opacity-35">
          <GearLeft className="w-30 h-30 md:w-60 md:h-60 lg:w-100 lg:h-100 text-brand-cyan" />
        </div>

        {/* Gear Right - Background, visible on mobile */}
        <div className="absolute -right-8 -bottom--1 md:-left--8 md:-top-2 lg:-right-14 lg:-bottom-14 z-0 opacity-35">
          <GearRight className="w-30 h-30 md:w-60 md:h-60 lg:w-100 lg:h-100 text-brand-cyan" />
        </div>

      </div>
    </section>
  )
}
