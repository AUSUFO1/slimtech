"use client";
import Footer1 from "../component/icon/Footer1";
import Footer2 from "../component/icon/Footer2";

export default function FooterIllustration() {
  return (
    <div className="relative flex justify-center lg:justify-start min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
      {/* Container for all floating elements */}
      <div className="relative w-full max-w-[600px]">
        
        {/* Main Laptop/Person Image */}
        <div className="absolute top-[30px] sm:top-[40px] lg:top-[51px] left-[50px] sm:left-[150px] lg:left-[219px] w-[250px] sm:w-[300px] lg:w-[339px] h-auto rounded-[10px] overflow-hidden">
          <img
            src="/images/footer.jpg"
            alt="Person working on laptop"
            className="w-full h-auto object-contain"
            style={{ aspectRatio: '339/351' }}
          />
        </div>

        <div 
          className="absolute top-[170px] sm:top-[180px] lg:top-[191px] left-[65px] sm:left-[170px] lg:left-[348px] flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-[10px] shadow-lg z-10"
          style={{ backgroundColor: 'white' }}
        >
          <Footer2 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            style={{ color: '#06B6D4' }}
          />
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap text-gray/600">Portfolio</span>
        </div>

        <div 
          className="absolute top-[40px] sm:top-[50px] lg:top-[91px] right-[20px] sm:right-[50px] lg:right-[80px] flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-[10px] shadow-lg z-10"
          style={{ backgroundColor: 'white'}}
        >
          <Footer1 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            style={{ color: '#06B6D4' }}
          />
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap text-gray/600">Roadmap</span>
        </div>
      </div>
    </div>
  );
}