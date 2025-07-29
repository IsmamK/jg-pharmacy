"use client"

import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FlashSale = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Earbuds',
      discount: '66% OFF',
      time: '12-24 Hours',
      originalPrice: '৳500',
      discountedPrice: '৳169.50',
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
      id: 2,
      name: 'Smart Fitness Band',
      discount: '62% OFF',
      time: '12-24 Hours',
      originalPrice: '৳500',
      discountedPrice: '৳192',
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
      id: 3,
      name: 'Organic Skin Care Kit',
      discount: '60% OFF',
      time: '12-24 Hours',
      originalPrice: '৳9600',
      discountedPrice: '৳3872',
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
      id: 4,
      name: 'Electric Toothbrush',
      discount: '56% OFF',
      time: '12-24 Hours',
      originalPrice: '৳150',
      discountedPrice: '৳66',
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1558555645-44ca20fc1f17?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
      id: 5,
      name: 'Wireless Phone Charger',
      discount: '55% OFF',
      time: '12-24 Hours',
      originalPrice: '৳4300',
      discountedPrice: '৳1949',
      reviews: 73,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
      id: 6,
      name: 'Anti-Dandruff Shampoo',
      discount: '53% OFF',
      time: '12-24 Hours',
      originalPrice: '৳270',
      discountedPrice: '৳126.23',
      reviews: 184,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
      id: 7,
      name: 'Portable Bluetooth Speaker',
      discount: '52% OFF',
      time: '12-24 Hours',
      originalPrice: '৳950',
      discountedPrice: '৳456',
      reviews: 215,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
      id: 8,
      name: 'UV Protection Sunglasses',
      discount: '50% OFF',
      time: '12-24 Hours',
      originalPrice: '৳1200',
      discountedPrice: '৳600',
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
  ];

  const cardsPerPage = 5;
  const totalPages = Math.ceil(products.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const visibleProducts = products.slice(
    currentIndex * cardsPerPage,
    (currentIndex + 1) * cardsPerPage
  );

  return (
    <div className="px-10 py-8 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Flash Sale</h2>
          <div className="flex items-center mt-1">
            <span className="text-sm font-semibold bg-red-600 text-white px-2 py-1 rounded mr-2">🔥</span>
            <span className="text-sm font-semibold text-red-600">Up to 66% discount for limited time</span>
          </div>
        </div>
        <button className="text-red-600 font-semibold hover:underline flex items-center">
          See all <FiChevronRight className="ml-1" />
        </button>
      </div>
      
      <div className="relative">
        {products.length > cardsPerPage && (
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 transition-all hover:scale-110"
            aria-label="Previous products"
          >
            <FiChevronLeft className="text-gray-600 text-xl" />
          </button>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {visibleProducts.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover bg-gray-100 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-xs font-bold bg-red-600 text-white px-2 py-1 rounded">
                    {product.discount}
                  </span>
                </div>
                <div className="absolute top-2 right-2 text-xs text-gray-600 bg-white/90 px-2 py-1 rounded">
                  {product.time}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-12">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 line-through">{product.originalPrice}</p>
                    <p className="text-lg font-bold text-red-600">{product.discountedPrice}</p>
                  </div>
                  <button className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition-all group-hover:opacity-100 opacity-0 hover:scale-105">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {products.length > cardsPerPage && (
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 transition-all hover:scale-110"
            aria-label="Next products"
          >
            <FiChevronRight className="text-gray-600 text-xl" />
          </button>
        )}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-red-600 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlashSale;