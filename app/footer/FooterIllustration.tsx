"use client";
import Footer1 from "../component/icon/Footer1";
import Footer2 from "../component/icon/Footer2";

export default function FooterIllustration() {
  return (
    <div className="relative flex justify-center lg:justify-start min-h-75 sm:min-h-87.5 lg:min-h-100">
      {/* Container for all floating elements */}
      <div className="relative w-full max-w-100 sm:max-w-112.5 lg:max-w-125">
        
        {/* Main Laptop/Person Image */}
        <div className="absolute top-5 sm:top-7.5 lg:top-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-25 w-50 sm:w-60 lg:w-70">
          <div className="relative w-full" style={{ paddingBottom: '103.5%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0 rounded-[10px] overflow-hidden"
              style={{ pointerEvents: 'none' }}
              title="Footer illustration"
            />
            <img
              src="/images/footer.jpg"
              alt="Person working on laptop"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>

        {/* Portfolio Badge - Bottom Left */}
        <div 
          className="absolute bottom-51 sm:bottom-60 lg:bottom-65 left-2.5 sm:left-[20px :left-[30px] flex items-center gap-2 px-3 py-2 rounded-[10px] shadow-lg z-10"
          style={{ backgroundColor: 'white' }}
        >
          <Footer2 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            style={{ color: '#06B6D4' }}
          />
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap text-gray-600">Portfolio</span>
        </div>

        {/* Roadmap Badge - Top Right */}
        <div 
          className="absolute top-2.5 sm:top-3.75 lg:top-5 right-2.5 sm:right-5 lg:right-7.5 flex items-center gap-2 px-3 py-2 rounded-[10px] shadow-lg z-10"
          style={{ backgroundColor: 'white'}}
        >
          <Footer1 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            style={{ color: '#06B6D4' }}
          />
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap text-gray-600">Roadmap</span>
        </div>
      </div>
    </div>
  );
}