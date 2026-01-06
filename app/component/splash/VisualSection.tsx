import Image from 'next/image'
import Rocket from '../icon/Rocket'
import GearLeft from '../icon/GearLeft'
import GearRight from '../icon/GearRight'

export default function VisualSection() {
  return (
    <section className="relative w-full mb-8 sm:mb-12 lg:mb-16">
      <div className="relative flex items-center justify-center min-h-37.5 sm:min-h-62.5 md:min-h-87.5 lg:min-h-112.5">

        {/* Rocket Icon */}
        <div className="absolute left-3 top-1/3 md:left-20 md:top-1/3 lg:left-32 -translate-y-1/2 z-20
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
        <div className="absolute -left-10 -top-2 md:-left-8 md:-top--7 lg:-left-16 lg:-top-8 z-0 opacity-35">
          <GearLeft className="w-45 h-45 md:w-75 md:h-75 lg:w-100 lg:h-100 text-brand-cyan" />
        </div>

        {/* Gear Right - Background, visible on mobile */}
        <div className="absolute -right-10 -top-2 md:-right-4 md:-top-2 lg:-right-6 lg:-bottom-14 z-0 opacity-35">
          <GearRight className="w-45 h-45 md:w-75 md:h-75 lg:w-100 lg:h-100 text-brand-cyan" />
        </div>

      </div>
    </section>
  )
}
