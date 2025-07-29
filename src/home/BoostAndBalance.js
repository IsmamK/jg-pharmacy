"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';

const BoostAndBalance = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: "Turkish MACUN Honey with Themra Epimedium (240 gm)",
      discount: 28,
      originalPrice: 5490,
      discountedPrice: 3969,
      rating: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NjEyNVwvNjYxMjUtNjYxMjUtNHAydGpjLmpwZWciLCJlZGl0cyI6W119",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Natural Beetroot Powder",
      discount: 60,
      originalPrice: 1200,
      discountedPrice: 484,
      rating: 4,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82MTAyM1wvNjEwMjMtSEFWQVNVLU5VVFJJVElPTi0xLTctbmZ4b3d4LnBuZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Khaas Food Black Seed Honey",
      discount: 11,
      originalPrice: 1460,
      discountedPrice: 1300,
      rating: 1,
      image: "https://www.khaasfood.com/wp-content/uploads/2021/03/black-seed-honey-500-1.webp",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Organic Maca Powder, 12 Ounce",
      discount: 9,
      originalPrice: 3590,
      discountedPrice: 3270,
      rating: 0,
      image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/BetterBody_Foods_Organic_Maca_Powder_Non-Non_Brand-c0428-465443.png",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "Green Harvest Sundarban Honey 600g",
      discount: 14,
      originalPrice: 740,
      discountedPrice: 637,
      rating: 1,
      image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Green_Harvest_Sundarban_Honey_600_gm_GHH-Green_Harvest-0663d-390649.png",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Organic Honey-Forest 500gm",
      discount: 7,
      originalPrice: 1250,
      discountedPrice: 1157,
      rating: 0,
      image: "https://www.barsanamagic.com/cdn/shop/files/1_Photo_Front_Pack_d6470f3c-dd09-4299-b4cf-95ef7a6ccbb4.png?v=1734323006",
      deliveryTime: "12-24h"
    },
    {
      id: 7,
      name: "D-Loss Slimming Tea",
      discount: 38,
      originalPrice: 1790,
      discountedPrice: 1110,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/71y+ZQhXk5L._SL1500_.jpg",
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
    <div className="px-8 py-12 ">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Boost & Balance 💊</h2>
            <p className="text-green-600 font-medium">Natural wellness products</p>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 text-sm font-medium shadow-md hover:shadow-lg">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                {/* Product Image - Slightly reduced height */}
                <div className="h-36 relative bg-amber-50 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-3 group-hover:scale-105 transition duration-300"
                    unoptimized
                  />
                </div>
                
                {/* Product Details - Optimized spacing */}
                <div className="p-3 flex-grow flex flex-col">
                  {/* Title - Single line with ellipsis */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.name}
                  </h3>
                  
                  {/* Discount & Delivery - More compact */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">
                      {product.discount}% OFF
                    </span>
                    <span className="text-gray-500 text-xs">{product.deliveryTime}</span>
                  </div>
                  
                  {/* Rating - Smaller size */}
                  <div className="flex items-center mb-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-2.5 h-2.5 ${i < product.rating ? 'text-amber-400' : 'text-gray-200'}`}
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
                  
                  {/* Price & Add Button - Compact layout */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="min-w-0">
                      <span className="text-gray-400 line-through text-xs block">৳{product.originalPrice}</span>
                      <span className="text-green-600 font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        ৳{product.discountedPrice}
                      </span>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white p-1.5 rounded-full transition duration-300 flex-shrink-0 ml-2">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoostAndBalance;