"use client"

import { useState } from 'react';

const FragranceComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Hugo Boss EDT Natural Spray for Women',
      discount: '32% OFF',
      originalPrice: '৳7770',
      discountedPrice: '৳5253',
      rating: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NDIyNVwvNjQyMjUtMTE4NTgyMjQtMTE5NDkzNzExMjk3MDEwMS1hODQzNzAucG5nIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 2,
      name: 'Pure Black Deluxe Limited Edition EDT for Men',
      discount: '4% OFF',
      originalPrice: '৳1660',
      discountedPrice: '৳1599',
      rating: 2,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NjU4NFwvNjY1ODQtY3JlYXRpb24tbGFtaXMtcHVyZS1ibGFjay0xLWxla3lqaS5qcGVnIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 3,
      name: 'PARK AVENUE Signature Collection Alter Ego Premium Body Spray - For Men 150ml',
      discount: '4% OFF',
      originalPrice: '৳760',
      discountedPrice: '৳727',
      rating: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNjBcLzYwNzM5LVBBUkstQVZFTlVFLVNpZ25hdHVyZS1Db2xsZWN0aW9uLUFsdGVyLUVnby1QcmVtaXVtLUJvZHktU3ByYXktRm9yLU1lbi0xNTAtbWwtbWFwaC5qcGVnIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 4,
      name: 'Eiffel Tower Collection 121 Sexy Perfumed Body Spray for Women',
      discount: '16% OFF',
      originalPrice: '৳680',
      discountedPrice: '৳569',
      rating: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MzI5M1wvNzMyOTMtMTIxLVNleHktV29tZW4tRGVvZG9yYW50LVBlcmZ1bWUtQm9keS1TcHJheS0yMDAtTUwtQnktRWlmZmVsLVRvd2VyLWVhbmt2cS5qcGVnIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 5,
      name: 'Rasasi Blue Lady EDP 40ml + 30ml Deo Spray',
      discount: '33% OFF',
      originalPrice: '৳2250',
      discountedPrice: '৳1518',
      rating: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0VmFyaWFudC1wdl9pbWFnZXNcLzYzNTAyXC82MzUwMi0xMDAwMDU2NjIxLWJpdHpuaC53ZWJwIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 6,
      name: 'Axe Deodorant Body Spray Black Night Black Caramel & Vanilla 150ml',
      discount: '17% OFF',
      originalPrice: '৳725',
      discountedPrice: '৳604',
      rating: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNjBcLzYwMTAxLUF4ZS1EZW9kb3JhbnQtQm9keS1TcHJheS1CbGFjay1OaWdodC1CbGFjay1DYXJhbWVsLVZhbmlsbGEtMTUwbWwtMTUwbWwtd3NvOS5wbmciLCJlZGl0cyI6W119'
    },
    {
      id: 7,
      name: 'Dark Zone Pour Homme Perfume for Men 100ml',
      discount: '4% OFF',
      originalPrice: '৳1200',
      discountedPrice: '',
      rating: 0,
      image: '/dark-zone.jpg'
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
          <h2 className="text-3xl font-bold text-gray-800">Luxury Fragrances</h2>
          <button className="text-pink-600 font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-8">
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-110"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
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
                    {product.discountedPrice ? (
                      <>
                        <span className="text-gray-400 text-sm line-through mr-2">
                          {product.originalPrice}
                        </span>
                        <span className="text-pink-600 font-bold text-lg">
                          {product.discountedPrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-pink-600 font-bold text-lg">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {products.length > 6 && (
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-xl p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="Next products"
            >
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FragranceComponent;