export default function CountdownTimer({ 
  countdown 
}: { 
  countdown: { 
    days: number;
    hours: number; 
    minutes: number; 
    seconds: number 
  } 
}) {
  return (
    <div className="-translate-y-12 md:-translate-y-10 lg:-translate-y-28 bg-card rounded-[20px] border border-gray-800 opacity-100 px-6 py-4 md:px-8 md:py-10 lg:px-10 lg:py-8 flex justify-center w-max mx-auto">
      <div className="flex gap-8 md:gap-10 lg:gap-12 h-full">
        
        {/* DAYS */}
        <div className="flex flex-col justify-between h-full text-center">
          <div className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-white tabular-nums leading-none">
            {String(countdown.days).padStart(2, '0')}
          </div>
          <div className="text-[11px] md:text-[12px] lg:text-[14px] text-white uppercase tracking-wider font-semibold mt-1 md:mt-2 lg:mt-3">
            DAYS
          </div>
        </div>

        {/* HOURS */}
        <div className="flex flex-col justify-between h-full text-center">
          <div className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-white tabular-nums leading-none">
            {String(countdown.hours).padStart(2, '0')}
          </div>
          <div className="text-[11px] md:text-[12px] lg:text-[14px] text-white uppercase tracking-wider font-semibold mt-1 md:mt-2 lg:mt-3">
            HOURS
          </div>
        </div>

        {/* MINUTES */}
        <div className="flex flex-col justify-between h-full text-center">
          <div className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-white tabular-nums leading-none">
            {String(countdown.minutes).padStart(2, '0')}
          </div>
          <div className="text-[11px] md:text-[12px] lg:text-[14px] text-white uppercase tracking-wider font-semibold mt-1 md:mt-2 lg:mt-3">
            MINUTES
          </div>
        </div>

        {/* SECONDS */}
        <div className="flex flex-col justify-between h-full text-center">
          <div className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-white tabular-nums leading-none">
            {String(countdown.seconds).padStart(2, '0')}
          </div>
          <div className="text-[11px] md:text-[12px] lg:text-[14px] text-white uppercase tracking-wider font-semibold mt-1 md:mt-2 lg:mt-3">
            SECONDS
          </div>
        </div>
      </div>
    </div>
  )
}