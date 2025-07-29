"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';

const SpiceUp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: "Durex Play Intense Little Devil Ring",
      discount: 14,
      originalPrice: 3500,
      discountedPrice: 2999,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/713-Aswj6YL._UF1000,1000_QL80_.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Durex Devil Vibrating Ring",
      discount: 34,
      originalPrice: 6445,
      discountedPrice: 4235,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/71oeBOj+iqL._UF350,350_QL80_.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Love Kiss Grape Lubricant 25ml",
      discount: 47,
      originalPrice: 850,
      discountedPrice: 450,
      rating: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83ODQyNFwvNzg0MjQtMS1uY3lodGcuanBlZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Trojan Delay Spray 60ml",
      discount: 27,
      originalPrice: 5500,
      discountedPrice: 4000,
      rating: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83OTAzMlwvNzkwMzItVW50aXRsZWQtZGVzaWduLTkxLWw5ZDk3OC5wbmciLCJlZGl0cyI6W119",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "Durex Play Slim Vibrator",
      discount: 29,
      originalPrice: 6500,
      discountedPrice: 4621,
      rating: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83OTI3OFwvNzkyNzgtZHVyZXgtdmlicmF0b3JlLWZsZXNzaWJpbGUtaWNlYnJlYWtlci1zbGltLXZpYnJhdG9yLTd3aW1qaS5qcGVnIiwiZWRpdHMiOltdfQ==",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Durex Play Intense Vibe Bullet",
      discount: 8,
      originalPrice: 3500,
      discountedPrice: 3222,
      rating: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83ODQyOFwvNzg0MjgtYnVsbGV0LTItd3MyZGN4LnBuZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    },
    {
      id: 7,
      name: "OLO Dotted Condom - 10Pcs",
      discount: 20,
      originalPrice: 1210,
      discountedPrice: 968,
      rating: 0,
      image: "https://m.media-amazon.com/images/I/61t18yWHiBL._SL1500_.jpg",
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

//   bg-gradient-to-br from-red-50 to-amber-50

  return (
    <div className="px-8 py-12 ">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Spice Up 🌶️</h2>
            <p className="text-red-600 font-medium">Explore intimate wellness</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 text-sm font-medium">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                {/* Image Section */}
                <div className="h-40 relative bg-gray-50 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-4 group-hover:scale-105 transition duration-300"
                    unoptimized
                  />
                </div>
                
                {/* Text Content */}
                <div className="p-3 flex-grow flex flex-col">
                  {/* Title - Single line with ellipsis */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.name}
                  </h3>
                  
                  {/* Discount and Delivery */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-0.5 rounded-full">
                      {product.discount}% OFF
                    </span>
                    <span className="text-gray-500 text-xs">{product.deliveryTime}</span>
                  </div>
                  
                  {/* Price Section */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 line-through text-xs">৳{product.originalPrice}</span>
                        <span className="text-red-600 font-bold text-base ml-1">
                          ৳{product.discountedPrice}
                        </span>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpiceUp;