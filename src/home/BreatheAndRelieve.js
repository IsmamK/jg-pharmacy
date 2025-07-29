"use client"

import { useState, useRef } from 'react';

const BreatheAndRelieve = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: "Nebulizer Compressor Scian NB-219C",
      shortName: "Scian NB-219C",
      discount: 18,
      originalPrice: 2790,
      discountedPrice: 2289,
      rating: 1,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0VmFyaWFudC1wdl9pbWFnZXNcLzI3NTk5XC8yNzU5OS1TQ0lBTi1OQi0yMTlDLW1tNXJnNS5qcGVnIiwiZWRpdHMiOltdfQ==",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Nebulizer Mask (Child)",
      shortName: "Child Nebulizer Mask",
      discount: 9,
      originalPrice: 100,
      discountedPrice: 91,
      rating: 4,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNTBcLzUwODI1LU5lYnVsaXplci1NYXNrLUFkdWx0LTR0ZTUuanBlZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Nebulizer Compressor Omron (NE-C101)",
      shortName: "Omron NE-C101",
      discount: 1,
      originalPrice: 3600,
      discountedPrice: 3549,
      rating: 2,
      image: "https://www.medistorebd.com/wp-content/uploads/2021/11/New_NEC-concentrate.jpeg",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Oxygen Mask Child",
      shortName: "Child Oxygen Mask",
      discount: 59,
      originalPrice: 300,
      discountedPrice: 122,
      rating: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmqagDcb9J7XBHcE9YNUgBOMje6PUuz_-wQ&s",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "Nebulizer Life Care Compressor Machine",
      shortName: "Life Care Nebulizer",
      discount: 26,
      originalPrice: 2500,
      discountedPrice: 1858,
      rating: 8,
      image: "https://cdn.shopz.com.bd/2021/08/Life-Care-Compressor-Nebulizer-Machine-1.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Nebulizer Compressor Machine (Getwell)",
      shortName: "Getwell Nebulizer",
      discount: 10,
      originalPrice: 2800,
      discountedPrice: 2533,
      rating: 0,
      image: "https://echem.com.bd/assets/images/products/dnFBs289goPR.jpg",
      deliveryTime: "12-24h"
    }
  ];

  const visibleProducts = products.slice(currentIndex, currentIndex + 6);
  const canScrollNext = currentIndex + 6 < products.length;

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
    <div className="px-8 py-12 bg-gradient-to-br from-blue-50 to-teal-50"> {/* px-8 = 32px */}
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Breathe & Relieve</h2>
            <p className="text-blue-600 font-medium">Winter Comfort, Anytime Relief.</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium shadow-md hover:shadow-lg">
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
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div 
            ref={carouselRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 transition-transform duration-300"
          >
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="h-40 relative bg-blue-50 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
                    }}
                  />
                </div>
                
                {/* Product Details */}
                <div className="p-4 flex-grow flex flex-col">
                  {/* Title - Single line with ellipsis */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.shortName}
                  </h3>
                  
                  {/* Discount & Delivery */}
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">
                      {product.discount}% OFF
                    </span>
                    <span className="text-gray-500 text-xs">{product.deliveryTime}</span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs ml-1">({product.rating})</span>
                  </div>
                  
                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-gray-400 line-through text-xs">৳{product.originalPrice}</span>
                      <span className="text-blue-600 font-bold text-base ml-1">৳{product.discountedPrice}</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollNext && (
            <button 
              onClick={scrollNext}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition duration-300 border border-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreatheAndRelieve;