"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';

const PawsAndClaws = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: "Smartheart Cat Food Pilchard In Prawn Jelly - 400g",
      discount: 36,
      originalPrice: 360,
      discountedPrice: 230,
      rating: 0,
      image: "https://i.chaldn.com/_mpimage/smartheart-adult-cat-canned-food-pilchard-in-prawn-jelly-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D122232&q=best&v=1",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Meow Meow Cat Food Tuna Topping - 400g",
      discount: 29,
      originalPrice: 280,
      discountedPrice: 200,
      rating: 0,
      image: "https://media.mewmewshopbd.com/uploads/media-manager/2022/06/20221012223958Meow-Meow-Canned-Food-Tuna-and-Sardine-In-Jelly-400g-1732701357.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "CIAO Chu-ru Chicken Fillet & Squid",
      discount: 9,
      originalPrice: 258,
      discountedPrice: 234,
      rating: 0,
      image: "https://groovypet.online/wp-content/uploads/2020/10/ciao-chickenfillet-squid-1.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Bellotta Pouch Tuna Topping Saba 85gm",
      discount: 17,
      originalPrice: 90,
      discountedPrice: 75,
      rating: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVKOgv7rjbr9111kJtP498a7Ecym1X1EALg&s",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "WHISKAS Ocean Fish Adult 1.2KG",
      discount: 11,
      originalPrice: 900,
      discountedPrice: 798,
      rating: 0,
      image: "https://www.pettownbd.com/wp-content/uploads/2023/09/8853301400145-product-image-1.webp",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Wanpy Creamy Treat Hairball Control",
      discount: 34,
      originalPrice: 350,
      discountedPrice: 232,
      rating: 0,
      image: "https://mewmewshopbd.com/uploads/media-manager/2024/09/1727112797_wanpy-hairball-control-creamy-treat-with-codfish--chicken-514g-1732701400.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 7,
      name: "Bellotta Nutri Plus Grain Free Pouch",
      discount: 17,
      originalPrice: 110,
      discountedPrice: 91,
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
    <div className="px-8 py-12 bg-gradient-to-br from-blue-100 to-teal-50"> {/* px-8 = 32px */}
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Paws & Claws 🐾</h2>
            <p className="text-blue-600 font-medium">Premium pet care products</p>
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 transition-transform duration-300"
          >
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 overflow-hidden group flex flex-col"
              >
                {/* Product Image */}
                <div className="h-40 relative bg-blue-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-4 group-hover:scale-105 transition duration-300"
                    unoptimized
                  />
                </div>
                
                {/* Product Details */}
                <div className="p-4 flex-grow flex flex-col">
                  {/* Title - Single line with ellipsis */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.name}
                  </h3>
                  
                  {/* Discount & Delivery */}
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
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

export default PawsAndClaws;