"use client"

import { useState, useRef } from 'react';

const SummerMustHaves = () => {
  const products = [
    {
      id: 1,
      name: 'Vibe Perfume Spray 120ml - Perform',
      discount: '25% OFF',
      originalPrice: '৳480',
      discountedPrice: '৳360',
      deliveryTime: '12-24 Hours',
      reviews: 0,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    },
    {
      id: 2,
      name: 'Innsaei Hyaluronic Sunscreen 50ml',
      discount: '1% OFF',
      originalPrice: '৳690',
      discountedPrice: '৳683',
      deliveryTime: '12-24 Hours',
      reviews: 24,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    },
    {
      id: 3,
      name: 'Vibe Perfume Spray 120ml - Play',
      discount: '25% OFF',
      originalPrice: '৳480',
      discountedPrice: '৳360',
      deliveryTime: '12-24 Hours',
      reviews: 3,
      image: 'https://images.unsplash.com/photo-1615634262417-5d57d3a6ec58?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    },
    {
      id: 4,
      name: 'Loreal Paris Elvive Hydra Hyaluronic Moisture Boosting Shampoo',
      discount: '38% OFF',
      originalPrice: '৳1575',
      discountedPrice: '৳974',
      deliveryTime: '12-24 Hours',
      reviews: 0,
      image: 'https://images.unsplash.com/photo-1556228578-32252a0138b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    },
    {
      id: 5,
      name: 'Vibe Perfume Spray 120ml - Presence',
      discount: '25% OFF',
      originalPrice: '৳480',
      discountedPrice: '৳360',
      deliveryTime: '12-24 Hours',
      reviews: 0,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    },
    {
      id: 6,
      name: 'Tang Orange Flavoured Instant Drink Powder 750gm Bottle',
      discount: '5% OFF',
      originalPrice: '৳780',
      discountedPrice: '৳742',
      deliveryTime: '12-24 Hours',
      reviews: 2,
      image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    },
    {
      id: 7,
      name: 'Vibe Perfume Spray 120ml - Party',
      discount: '25% OFF',
      originalPrice: '৳480',
      discountedPrice: '৳360',
      deliveryTime: '12-24 Hours',
      reviews: 1,
      image: 'https://images.unsplash.com/photo-1615634262417-5d57d3a6ec58?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const productsPerPage = 6;

  const handleNext = () => {
    if (currentIndex + productsPerPage < products.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <div className="px-8 py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Summer Must-Haves</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            See all
          </button>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-transform duration-300"
          >
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4">
                  <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-2 py-1 rounded">
                      {product.discount}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {product.deliveryTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-1">
                    <span className="text-xs text-gray-500">
                      {product.reviews} review{product.reviews !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900">
                      {product.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm font-medium transition-colors duration-200">
                  ADD
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200"
            aria-label="Next products"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
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
        </div>
      </div>
    </div>
  );
};

export default SummerMustHaves;