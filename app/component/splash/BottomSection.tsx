import CountdownTimer from './CountdownTimer'

export default function BottomSection({ countdown }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 mt-6 sm:mt-8 lg:mt-1 relative">
      {/* Program Structure Box */}
      <div
        className="
          bg-brand-cyan/20
          backdrop-blur-sm
          text-slate-800
          rounded-2xl lg:rounded-3xl
          p-4 sm:p-5 lg:p-8
          w-full max-w-125
          mx-auto md:mx-0
          shadow-[0_8px_24px_rgba(255,255,255,0.25)]
          -translate-y-12 md:-translate-y-28 lg:-translate-y-40
        "
      >
        <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-3 lg:mb-4">
          Program Structure:
        </h3>

        <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            - Phase 1: Training (3 months)
          </p>
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            - Phase 2: Project & Portfolio (3 months)
          </p>
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            - Phase 3: Mentorship & Career Development (3 months)
          </p>
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            - Phase 4: Community & Follow Up (Ongoing)
          </p>
        </div>

        <div className="mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-lg text-slate-600">
          Program Coordinator:{' '}
          <a
            href="https://x.com/jcode_Code"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-cyan hover:underline"
          >
            J.code
          </a>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="flex justify-center md:justify-end items-start">
        <CountdownTimer countdown={countdown} />
      </div>
    </div>
  )
}
