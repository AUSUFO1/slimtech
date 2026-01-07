interface BackgroundSliderProps {
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export default function BackgroundSlider({
  currentSlide,
  onSlideChange,
}: BackgroundSliderProps) {
  const slides = [
    {
      image: "/images/enrollment-bg.jpeg",
      text: "Join a community of creatives at Slim Mentorship building meaningful, real-world projects.",
    },
    {
      image: "/images/enrollment-bg1.jpeg",
      text: "Supporting new tech talent with structure, mentorship, and a clearer path into real roles.",
    },
    {
      image: "/images/enrollment-bg2.jpeg",
      text: "This is more than a school. It is a movement of people rising together.",
    },
  ];

  return (
    <div className="hidden md:flex md:w-1/2 lg:w-1/2 relative bg-linear-to-br from-teal-600 to-blue-900 overflow-hidden">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white text-center h-full">
        {/* Slider Text */}
        <div className="max-w-md">
          {slides.map((slide, index) => (
            <p
              key={index}
              className={`text-2xl lg:text-3xl font-medium leading-relaxed transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              {slide.text}
            </p>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}