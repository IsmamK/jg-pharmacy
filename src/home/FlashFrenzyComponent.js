"use client"

import { useState } from 'react';

const FlashFrenzyComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Silicone Feeding Spoon For Baby',
      discount: '15% OFF',
      originalPrice: '৳399',
      discountedPrice: '৳340',
      rating: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OtYnHoNczAvzW3-2YarxQc8DjoxKsdKzqw&s'
    },
    {
      id: 2,
      name: 'Johnson\'s Baby Moisture Wash for Soft Skin',
      discount: '21% OFF',
      originalPrice: '৳1440',
      discountedPrice: '৳1136',
      rating: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0VmFyaWFudC1wdl9pbWFnZXNcLzUyNzA2XC81MjcwNi1iYWJ5X21vaXN0dXJlX3dhc2hfNTAwbWxfMzgxMzcxMTc3MzU2Xy1tOXN6a2IuanBlZyIsImVkaXRzIjpbXX0='
    },
    {
      id: 3,
      name: 'Neocare Belt System Baby Diaper XL 4\'s Pack',
      discount: '15% OFF',
      originalPrice: '৳160',
      discountedPrice: '৳136',
      rating: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC80MDM3MlwvNDAzNzItTmVvY2FyZS1CZWx0LURpYXBlci1YTC0xMS0yNS1LZy00LVBjcy1jb3B5LXVteTA5dC5qcGVnIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 4,
      name: 'PP Baby Feeding Polypropylene Bottle(Smart Care) 150ml',
      discount: '',
      originalPrice: '৳260',
      discountedPrice: '',
      rating: 0,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eFy2tyHEwrOZHku4K-ZRfb489HW7i1D6JA&s'
    },
    {
      id: 5,
      name: 'Tommee Tippee Manual Breast Pump(Made For Me)',
      discount: '10% OFF',
      originalPrice: '৳5000',
      discountedPrice: '৳4512',
      rating: 0,
      image: 'https://mehnurbabyshop.com/cdn/shop/products/TommeeTippeeMadeforMeManualBreastPump.jpg?v=1674575174'
    },
    {
      id: 6,
      name: 'Molfix Diapers Jumbo Ex.Large 6 (16+kg) 48 Pcs',
      discount: '5% OFF',
      originalPrice: '৳2530',
      discountedPrice: '৳2403.50',
      rating: 0,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQrwSdslcQC0mZ5Cz-hRfdq9R5OSx4ZDJAw&s'
    },
    {
      id: 7,
      name: 'Babi Milk Sweety Pink Plus Baby Powder (380gm)',
      discount: '11% OFF',
      originalPrice: '৳590',
      discountedPrice: '৳526',
      rating: 0,
      image: '/baby-powder.jpg'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 6 >= products.length ? 0 : prevIndex + 6
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 6);

  return (
    <div className="px-8 py-12 bg-gradient-to-r from-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold text-gray-800 mr-3">Flash Frenzy</h2>
            <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full animate-pulse">🔥</span>
          </div>
          <button className="text-pink-600 font-medium hover:underline flex items-center">
            View All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-8">
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-pink-50 to-yellow-50 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      {product.discount}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                    12-24H
                  </div>
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
                  <button className="mt-3 w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white py-2 px-4 rounded-lg text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg">
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

export default FlashFrenzyComponent;