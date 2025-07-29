"use client"

import { useState } from 'react';

const HomeCareComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Bashundhara Toilet Tissue Regular White',
      discount: '7% OFF',
      originalPrice: '৳28',
      discountedPrice: '৳26',
      rating: 93,
      image: 'https://images.othoba.com/images/thumbs/0481787_bashundhara-toilet-tissue-regular-white.jpeg'
    },
    {
      id: 2,
      name: 'Naphthalene Balls (Super)',
      discount: '1% OFF',
      originalPrice: '৳80',
      discountedPrice: '৳79',
      rating: 63,
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/339970578/KP/PB/YO/12631688/100g-naphthalene-balls.jpeg'
    },
    {
      id: 3,
      name: 'Godrej Magic Ready To Mix Hand Wash (Neem & Aloevera) 9gm',
      discount: '3% OFF',
      originalPrice: '৳30',
      discountedPrice: '৳29',
      rating: 66,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC80NjkzNlwvNDY5MzYtbWFnaWMtaGFuZC13YXNoLTIwMG1sLWNvcHktMXpmY2x5LmpwZWciLCJlZGl0cyI6W119'
    },
    {
      id: 4,
      name: 'Good Knight Power Activ + Refill',
      discount: '1% OFF',
      originalPrice: '৳130',
      discountedPrice: '৳129',
      rating: 44,
      image: 'https://i.chaldn.com/_mpimage/godrej-good-knight-power-activ-refill-45-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D49823&q=best&v=1'
    },
    {
      id: 5,
      name: 'Bashundhara Paper Napkin 100\'s Box',
      discount: '4% OFF',
      originalPrice: '৳75',
      discountedPrice: '৳72',
      rating: 15,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNTFcLzUxNTE4LUJhc2h1bmRoYXJhLUhhbmQtVG93ZWwtV2hpdGUtMTUwLXBjcy1YLTEtcGx5LXdob3QucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ=='
    },
    {
      id: 6,
      name: 'Bashundhara Hand Towel (White)',
      discount: '',
      originalPrice: '৳55',
      discountedPrice: '',
      rating: 19,
      image: 'https://i.chaldn.com/_mpimage/bashundhara-hand-towel-white-200-x-1-ply-box-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D175820&q=best&v=1'
    },
    {
      id: 7,
      name: 'Savlon Antiseptic Liquid 112ml',
      discount: '',
      originalPrice: '',
      discountedPrice: '',
      rating: 24,
      image: '/savlon.jpg'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 6 >= products.length ? 0 : prevIndex + 6
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 6);

  return (
    <div className="px-8 py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Home Care Essentials</h2>
          <button className="text-teal-600 font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-8">
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs text-gray-500">12-24 Hours</span>
                  </div>
                  <div className="flex items-center">
                    {product.originalPrice && (
                      <span className="text-gray-400 text-xs line-through mr-2">
                        {product.originalPrice}
                      </span>
                    )}
                    {product.discountedPrice ? (
                      <span className="text-teal-600 font-bold">
                        {product.discountedPrice}
                      </span>
                    ) : product.originalPrice ? (
                      <span className="text-teal-600 font-bold">
                        {product.originalPrice}
                      </span>
                    ) : null}
                  </div>
                  <button className="mt-3 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>

          {products.length > 6 && (
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-3 hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCareComponent;