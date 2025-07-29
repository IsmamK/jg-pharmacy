"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';

const ShopYourGlow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: "Fogg Fine Bay Breeze 120ml",
      discount: 17,
      originalPrice: 520,
      discountedPrice: 430,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/61XZQXFQeVL._SL1500_.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "SHEGLAM Matte Allure Liquid Lipstick - Musing",
      discount: 43,
      originalPrice: 1220,
      discountedPrice: 699,
      rating: 2,
      image: "https://m.media-amazon.com/images/I/61j8o6H4WVL._SL1500_.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Livon Anti Hairfall Protein Shampoo 300ml",
      discount: 4,
      originalPrice: 475,
      discountedPrice: 455,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/61XZQXFQeVL._SL1500_.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Garnier Skin Active Brightening Vitamin C Cream Cleanser",
      discount: 39,
      originalPrice: 2670,
      discountedPrice: 1640,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/71qQ1gR2BTL._SL1500_.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "Maison Alhambra Euzonea EDP for Women",
      discount: 48,
      originalPrice: 2685,
      discountedPrice: 1404,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/61j8o6H4WVL._SL1500_.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Armaf Club de Nuit Precieux 1 Extrait De Parfum for Men",
      discount: 46,
      originalPrice: 9800,
      discountedPrice: 5330,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/61XZQXFQeVL._SL1500_.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 7,
      name: "SHEGLAM Matte Allure Liquid Lipstick - Vineyard",
      discount: 37,
      originalPrice: 1150,
      discountedPrice: 725,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/71qQ1gR2BTL._SL1500_.jpg",
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
    <div className="px-8 py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Shop Your Glow 🌟</h2>
            <p className="text-pink-600 font-medium">Discover beauty essentials</p>
          </div>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 text-sm font-medium">
            See All
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button 
              onClick={scrollPrev}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div 
            ref={carouselRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-transform duration-300"
          >
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full"
              >
                {/* Image Section - Reduced height slightly to accommodate text */}
                <div className="h-36 relative bg-gray-50 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-3 group-hover:scale-105 transition duration-300"
                    unoptimized
                  />
                </div>
                
                {/* Text Content - Optimized spacing */}
                <div className="p-3 flex-grow flex flex-col">
                  {/* Title - Now single line with ellipsis */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.name}
                  </h3>
                  
                  {/* Discount and Delivery - Compact layout */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="bg-pink-100 text-pink-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {product.discount}% OFF
                    </span>
                    <span className="text-gray-500 text-[10px]">{product.deliveryTime}</span>
                  </div>
                  
                  {/* Rating - Made more compact */}
                  <div className="flex items-center mb-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-2.5 h-2.5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-[10px] ml-1">({product.rating})</span>
                  </div>
                  
                  {/* Price and Add Button - More compact layout */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="min-w-0">
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-[10px] block">৳{product.originalPrice}</span>
                      )}
                      <span className="text-pink-600 font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        ৳{product.discountedPrice || product.originalPrice}
                      </span>
                    </div>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white p-1.5 rounded-full transition duration-300 flex-shrink-0 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {canScrollNext && (
            <button 
              onClick={scrollNext}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopYourGlow;