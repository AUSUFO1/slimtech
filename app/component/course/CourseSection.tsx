"use client";

import Button from "../common/Button";

interface CourseCardProps {
  title: string;
  image: string;
  isCenterCard?: boolean;
}

export default function CourseTracksSection() {
  const courses = [
    { title: "ARTIFICIAL INTELLIGENCE", image: "/images/courses/ai.jpeg" },
    { title: "FRONTEND ENGINEERING", image: "/images/courses/frontend.jpeg", isCenterCard: true },
    { title: "GRAPHICS DESIGN", image: "/images/courses/graphics.jpeg" },
    { title: "UI/UX DESIGN", image: "/images/courses/uiux.jpeg" },
    { title: "BACKEND ENGINEERING", image: "/images/courses/backend.jpeg", isCenterCard: true },
    { title: "DATA ANALYTICS", image: "/images/courses/data-analytics.jpeg" },
    { title: "DIGITAL MARKETING", image: "/images/courses/virtual-assistance.jpeg" },
    { title: "MOBILE APP DEVELOPMENT", image: "/images/courses/mobile.jpeg" },
  ];

  return (
    <section className="relative w-full bg-white px-5 sm:px-8 lg:px-5 py-6 md:py-8 lg:py-10">
      <div className="max-w-350 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-brand-cyan font-bold tracking-tight mb-4"
            style={{
              fontSize: "20px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
            }}
          >
            See Our Courses
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight px-4">
            Check Out Our Course Tracks
          </h3>
        </div>

        {/* Course Grid - Simple grid for mobile/tablet, Figma layout for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-6">
          {courses.map((course) => {
            // Push Mobile App Development to the right on large screens
            const isMobileApp = course.title === "MOBILE APP DEVELOPMENT";
            
            // Add negative margin-top for specific cards on large screens
            const isUIUX = course.title === "UI/UX DESIGN";
            const isDataAnalytics = course.title === "DATA ANALYTICS";
            const isVirtualAssistance = course.title === "DIGITAL MARKETING";
            
            let additionalClasses = "";
            if (isMobileApp) {
              additionalClasses = "lg:col-start-3 lg:-mt-90";
            } else if (isVirtualAssistance) {
              additionalClasses = "lg:-mt-90";
            } else if (isUIUX || isDataAnalytics) {
              additionalClasses = "lg:-mt-45";
            }
            
            return (
              <CourseCard
                key={course.title}
                title={course.title}
                image={course.image}
                isCenterCard={course.isCenterCard}
                className={additionalClasses}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ title, image, isCenterCard = false, className = "" }: CourseCardProps & { className?: string }) {
  return (
    <div
      className={`group relative rounded-[20px] overflow-hidden transition-all duration-300 border-[0.75px] border-gray-200 shadow-sm hover:shadow-lg 
      ${isCenterCard ? "h-auto lg:h-117.5" : "h-auto lg:h-73.25"}
      ${className}`}
      style={{
        maxWidth: "427px",
        width: "100%",
        backgroundColor: "#F5F5F5EE",
      }}
    >
      {/* Course Title - Centered */}
      <div className="p-4 sm:p-5 text-center">
        <h4 className="text-brand-cyan font-bold text-sm sm:text-base md:text-lg tracking-wide uppercase">
          {title}
        </h4>
      </div>

      {/* Course Image */}
      <div 
        className={`relative w-full overflow-hidden bg-gray-100 mx-auto ${
          isCenterCard 
            ? "h-50 sm:h-60 md:h-65 lg:h-71" 
            : "h-45 sm:h-50 md:h-40 lg:h-37"
        }`}
        style={{
          maxWidth: "368px",
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Apply Now Button */}
      <div className="p-4 sm:p-5 flex justify-center">
        <Button navigateTo="/form" className="w-auto min-w-35">
  Apply Now!
</Button>
      </div>
    </div>
  );
}