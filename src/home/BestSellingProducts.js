"use client"
import { useState, useRef } from 'react';
import Image from 'next/image';

const BestSellingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: "Ceevit 250mg Tablet",
      shortName: "Ceevit 250mg",
      discount: 9,
      originalPrice: 19,
      discountedPrice: 17.27,
      rating: 4,
      image: "https://medex.com.bd/storage/images/packaging/ceevit-250-mg-chewable-tablet-85600762215-i1-5rURurnYyRdvhvswV3DY.webp",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Napa 500mg Tablet",
      shortName: "Napa 500mg",
      discount: 9,
      originalPrice: 12,
      discountedPrice: 10.91,
      rating: 4,
      image: "https://epharma.com.bd/storage/app/public/vqQvENBbQdDvmJAcsRexcu8ScPJXNceQlLpGF0Dn.webp",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Sergel 20mg Capsule",
      shortName: "Sergel 20mg",
      discount: 8,
      originalPrice: 70,
      discountedPrice: 64.64,
      rating: 4,
      image: "https://medex.com.bd/storage/images/packaging/sergel-20-mg-capsule-52083742307-i1-1zf66MWNieQiLLH3NXk6.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Ecosprin 75mg Tablet",
      shortName: "Ecosprin 75mg",
      discount: 8,
      originalPrice: 8,
      discountedPrice: 7.34,
      rating: 4,
      image: "https://medex.com.bd/storage/images/packaging/ecosprin-75-mg-tablet-30523333765-i1-MUzGtAslnSD2Qcm46bKm.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "Orsaline (SMC) 10.5gm powder",
      shortName: "Orsaline 10.5gm",
      discount: 9,
      originalPrice: 6,
      discountedPrice: 5.45,
      rating: 4,
      image: "https://i.chaldn.com/_mpimage/smc-orsaline-n-25-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61695&q=best&v=1",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Monas 10mg Tablet",
      shortName: "Monas 10mg",
      discount: 9,
      originalPrice: 262.50,
      discountedPrice: 238.61,
      rating: 4,
      image: "https://www.acmeglobal.com/wp-content/uploads/2025/03/1monas-4-4mg.png",
      deliveryTime: "12-24h"
    },
    {
      id: 7,
      name: "Pantonix 20mg Tablet",
      shortName: "Pantonix 20mg",
      discount: 9,
      originalPrice: 98,
      discountedPrice: 89.18,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/41v5B+9Z5UL._SL500_.jpg",
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
    <div className="px-8 py-12 "> {/* px-8 = 32px */}
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Best Selling Products</h2>
            <p className="text-blue-600 font-medium">Top-rated healthcare essentials</p>
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-transform duration-300"
          >
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="h-32 relative bg-blue-50 flex-shrink-0">
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
                <div className="p-3 flex-grow flex flex-col">
                  {/* Title - Single line with ellipsis */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.shortName}
                  </h3>
                  
                  {/* Discount & Delivery */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">
                      {product.discount}% OFF
                    </span>
                    <span className="text-gray-500 text-xs">{product.deliveryTime}</span>
                  </div>
                  
                  {/* Price Section */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 line-through text-xs">৳{product.originalPrice}</span>
                        <span className="text-blue-600 font-bold text-sm ml-1">
                          ৳{product.discountedPrice}
                        </span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-full transition duration-300">
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

export default BestSellingProducts;