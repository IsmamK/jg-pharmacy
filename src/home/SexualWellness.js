"use client"

import { useState } from 'react';

const SexualWellness = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'Saffron Time Develop',
      discount: '10% OFF',
      originalPrice: '৳1989.90',
      discountedPrice: '৳1800',
      deliveryTime: '12-24 Hours',
      reviews: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83ODcyNVwvNzg3MjUtVW50aXRsZWQtMTAwMC14LTEwMDAtcHgtMTAwMC14LTEwMDAtcHgtMTAwMC14LTEwMDAtcHgtNDAwLXgtNDAwLXB4LTE4MDAteC05NDUtcHgtMTAwMC14LTEwMDAtcHgtNDAwLXgtNDAwLXB4LTE4MDAteC05NDUtcHgtMTAwMC14LTEwMDAtcHgtMTUwMC14LTE1MDAtcHgtNDAwLXgtNDAwLXB4LTE4MDAteC0xMS16cWF5czgucG5nIiwiZWRpdHMiOltdfQ==',
    },
    {
      id: 2,
      name: 'Durex Play Intense Vibe Bullet Vibrating',
      discount: '8% OFF',
      originalPrice: '৳3500',
      discountedPrice: '৳3222',
      deliveryTime: '12-24 Hours',
      reviews: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83ODQyOFwvNzg0MjgtMDQtMjAyNS0wMy0xNlQxNTA3NTItNGh0OHFhLmpwZWciLCJlZGl0cyI6W119',
    },
    {
      id: 3,
      name: 'Durex Play Intense Little Devil Ring',
      discount: '14% OFF',
      originalPrice: '৳3500',
      discountedPrice: '৳2999',
      deliveryTime: '12-24 Hours',
      reviews: 0,
      image: 'https://m.media-amazon.com/images/I/713-Aswj6YL._UF1000,1000_QL80_.jpg',
    },
    {
      id: 4,
      name: 'Biomanix Plus',
      discount: '23% OFF',
      originalPrice: '৳1800',
      discountedPrice: '৳1387.50',
      deliveryTime: '12-24 Hours',
      reviews: 3,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNDFcLzQxNjczLTE5NDcyMTI0NDgtNGY1d3Z6LnBuZyIsImVkaXRzIjpbXX0=',
    },
    {
      id: 5,
      name: 'Durex Extra Time Condom 10s Pack',
      discount: '12% OFF',
      originalPrice: '৳680',
      discountedPrice: '৳596',
      deliveryTime: '12-24 Hours',
      reviews: 20,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNDBcLzQwOTk0LUR1cmV4LUV4dHJhLVRpbWUtQ29uZG9tLWpyZzYuanBlZyIsImVkaXRzIjpbXX0=',
    },
    {
      id: 6,
      name: 'Durex Play Single Speed Vibrating Bullet',
      discount: '40% OFF',
      originalPrice: '৳2815',
      discountedPrice: '৳1690',
      deliveryTime: '12-24 Hours',
      reviews: 11,
      image: 'https://images.othoba.com/images/thumbs/0672327_durex-play-single-speed-vibrating-bullet-for-women.webp',
    },
    {
      id: 7,
      name: 'Vigogel',
      discount: '8% OFF',
      originalPrice: '৳250',
      deliveryTime: '12-24 Hours',
      reviews: 11,
      image: 'https://via.placeholder.com/300x300?text=Vigogel',
    }
  ];

  const visibleProducts = products.slice(currentIndex, currentIndex + 6);
  const canScrollNext = currentIndex + 6 < products.length;

  const scrollNext = () => {
    if (canScrollNext) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="px-8 py-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Sexual Wellness</h2>
          <button className="text-purple-600 hover:text-purple-800 font-medium">
            See all
          </button>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="h-40 w-full flex items-center justify-center p-4 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Discount & Delivery */}
                  <div className="flex justify-between items-center mb-1">
                    {product.discount && (
                      <span className="text-xs font-semibold bg-purple-100 text-purple-600 px-2 py-1 rounded">
                        {product.discount}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">
                      {product.deliveryTime}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Reviews */}
                  <div className="flex items-center mb-2">
                    <span className="text-xs text-gray-500">
                      {product.reviews} review{product.reviews !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center">
                    {product.discountedPrice ? (
                      <>
                        <span className="text-lg font-bold text-gray-900">
                          {product.discountedPrice}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white py-2 text-sm font-medium rounded-lg transition-colors duration-200">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next products"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SexualWellness;