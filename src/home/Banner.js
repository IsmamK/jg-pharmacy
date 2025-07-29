"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Summer Collection 2023",
      subtitle: "Up to 50% Off",
      description: "Discover our new arrivals with exclusive discounts",
      cta: "Shop Now",
      image: "/images/banner1.jpg",
      bgColor: "from-blue-100 to-blue-200",
      textColor: "text-blue-800"
    },
    {
      id: 2,
      title: "Limited Time Offer",
      subtitle: "Flash Sale - 24 Hours Only",
      description: "Grab your favorites before they're gone",
      cta: "Discover Deals",
      image: "/images/banner2.jpg",
      bgColor: "from-purple-100 to-purple-200",
      textColor: "text-purple-800"
    },
    {
      id: 3,
      title: "New Tech Gadgets",
      subtitle: "Premium Quality",
      description: "Cutting-edge technology at affordable prices",
      cta: "Explore Tech",
      image: "/images/banner3.jpg",
      bgColor: "from-amber-100 to-amber-200",
      textColor: "text-amber-800"
    }
  ];

  // Auto-advance slides only when not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="relative w-full overflow-hidden px-2 py-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[180px] lg:h-[350px] xs:h-[200px] sm:h-[250px] rounded-xl shadow-lg overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 flex items-center bg-gradient-to-br ${slide.bgColor} ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Mobile-optimized content */}
            <div className="w-full h-full relative flex flex-col justify-center px-4">
              {/* Text Content - Centered for mobile */}
              <div className="z-10 p-3 space-y-2 text-center">
                {/* <p className={`text-xs font-bold ${slide.textColor} animate-fadeIn`}>
                  {slide.subtitle}
                </p>
                <h2 className="text-lg xs:text-xl font-extrabold text-gray-900 leading-tight animate-fadeIn">
                  {slide.title}
                </h2>
                <p className={`text-xs ${slide.textColor} font-medium animate-fadeIn`}>
                  {slide.description}
                </p>
                <button className={`mt-2 px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r ${slide.bgColor.replace('from-', 'from-').replace('to-', 'to-')} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeIn`}>
                  {slide.cta}
                </button> */}
              </div>
              
              {/* Background Image - subtle overlay */}
              <div className="absolute inset-0 ">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-center  "
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
        
        {/* Dots indicator - bottom center */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-4 shadow-md' : 'bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation arrows - only appear on touch */}
        <button
          onClick={goToPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1 rounded-full shadow-md z-20 transition-all active:scale-110 md:hidden"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1 rounded-full shadow-md z-20 transition-all active:scale-110 md:hidden"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;