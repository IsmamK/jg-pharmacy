"use client"

import { useState } from 'react';

const Supplement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'Karkuma Joint Guard',
      discount: '5% OFF',
      originalPrice: '৳2169.90',
      discountedPrice: '৳2061',
      deliveryTime: '12-24 Hours',
      reviews: 27,
      image: 'https://organicnutrition.com.bd/cdn/shop/files/KJG_Eid-Ul_Adha_2025-01.jpg?v=1747502106',
    },
    {
      id: 2,
      name: 'Himalaya Confido',
      discount: '5% OFF',
      originalPrice: '৳789.60',
      discountedPrice: '৳750',
      deliveryTime: '12-24 Hours',
      reviews: 21,
      image: 'https://m.media-amazon.com/images/I/81nqiwwGcPL.jpg',
    },
    {
      id: 3,
      name: 'Karkuma Turmeric Immune Booster',
      discount: '10% OFF',
      originalPrice: '৳390',
      discountedPrice: '৳351',
      deliveryTime: '12-24 Hours',
      reviews: 32,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQXXeSgFfT0-i2taCNF7skGO32nf7yUShrA&s',
    },
    {
      id: 4,
      name: 'Himalaya ASHVAGANDHA',
      discount: '10% OFF',
      originalPrice: '৳789.60',
      discountedPrice: '৳710.40',
      deliveryTime: '12-24 Hours',
      reviews: 7,
      image: 'https://m.media-amazon.com/images/I/71YESObJgsL._UF1000,1000_QL80_.jpg',
    },
    {
      id: 5,
      name: 'Karkuma Organic Apple Cider Vinegar',
      discount: '10% OFF',
      originalPrice: '৳650',
      discountedPrice: '৳585',
      deliveryTime: '12-24 Hours',
      reviews: 26,
      image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Karkuma_Organic_Apple_Cider_Vinegar_480_-Karkuma-aab8a-270192.png',
    },
    {
      id: 6,
      name: 'Karkuma Organic Healthy Gut',
      discount: '5% OFF',
      originalPrice: '৳800',
      discountedPrice: '৳760',
      deliveryTime: '12-24 Hours',
      reviews: 21,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhqxDC7jT7urXABnjGBuWmwH4yRxUEyDqWg&s',
    },
    {
      id: 7,
      name: 'L-Gluta 5 Berry Plus',
      discount: '13% OFF',
      originalPrice: '৳949.80',
      deliveryTime: '12-24 Hours',
      reviews: 6,
      image: 'https://via.placeholder.com/300x300?text=L-Gluta',
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
          <h2 className="text-3xl font-bold text-gray-800">Supplement</h2>
          <button className="text-green-600 hover:text-green-800 font-medium">
            See all
          </button>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
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
                      <span className="text-xs font-semibold bg-green-100 text-green-600 px-2 py-1 rounded">
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
                  <button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 text-sm font-medium rounded-lg transition-colors duration-200">
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
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
              aria-label="Next products"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
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

export default Supplement;