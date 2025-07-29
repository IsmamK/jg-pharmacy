"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';

const FeaturedBrand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const brands = [
    {
      id: 1,
      name: "Incepta Pharmaceuticals Ltd.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMh02pQhI6H3Gg3kuxy1jjAF_AIqLmTXAXg&s",
    },
    {
      id: 2,
      name: "Opsonin Pharma Limited",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFu0vqqaZtto5icqAY55ULH-dDQW1NJ38Kw&s",
    },
    {
      id: 3,
      name: "Square Pharmaceuticals PLC.",
      logo: "https://medex.com.bd/storage/images/company_logos/Y8zd1lJszraDVx1lyPH6eifSgNXkaN.png",
    },
    {
      id: 4,
      name: "Beximco Pharmaceuticals Ltd.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEjEO296K7US0Gikd6e_huEjOCAS8X6S-o8g&s",
    },
    {
      id: 5,
      name: "Drug International Ltd.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHnii5RnAOIEg8qUPbBVfhjDYFhP2Zk4YVw&s",
    }
  ];

  const visibleBrands = brands.slice(currentIndex, currentIndex + 4);
  const canScrollNext = currentIndex + 4 < brands.length;

  const scrollNext = () => {
    if (canScrollNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="px-8 py-12 ">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Featured Brands</h2>
            <p className="text-indigo-600 font-medium">Trusted pharmaceutical companies</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 text-sm font-medium shadow-md hover:shadow-lg">
            See All
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button 
              onClick={scrollPrev}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition duration-300 border border-gray-200"
              aria-label="Previous brands"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div 
            ref={carouselRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 transition-transform duration-300"
          >
            {visibleBrands.map((brand) => (
              <div 
                key={brand.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 overflow-hidden group flex flex-col items-center p-4"
              >
                {/* Brand Logo */}
                <div className="h-20 w-full relative mb-3">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    layout="fill"
                    objectFit="contain"
                    className="transition duration-300"
                    unoptimized
                  />
                </div>
                
                {/* Brand Name */}
                <h3 className="text-center text-sm font-medium text-gray-800 line-clamp-2">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollNext && (
            <button 
              onClick={scrollNext}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition duration-300 border border-gray-200"
              aria-label="Next brands"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrand;