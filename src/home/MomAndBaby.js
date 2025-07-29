"use client"

import { useState, useRef } from 'react';

const MomAndBaby = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  
  const products = [
    {
      id: 1,
      name: 'Fay Baby Cotton Buds 100 Pcs Zip Bag',
      discount: '4% OFF',
      originalPrice: '৳50',
      discountedPrice: '৳48',
      deliveryTime: '12-24 Hours',
      reviews: 14,
      image: 'https://www.hutbaar.com/uploads/all/kFeMWbJLUI5mOrBzWb0v51kHBtDRi6FzmJo3fQNz.jpg',
    },
    {
      id: 2,
      name: 'Bashundhara Wet Wipes For Baby Care 240s Jar',
      discount: '6% OFF',
      originalPrice: '৳300',
      discountedPrice: '৳281',
      deliveryTime: '12-24 Hours',
      reviews: 20,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNDlcLzQ5NDU1LUJhc2h1bmRoYXJhLVdldC1XaXBzLUZvci1CYWJ5LXMtQ2FyZS05Y2Z0LnBuZyIsImVkaXRzIjpbXX0=',
    },
    {
      id: 3,
      name: 'NeoCare Baby Wipes 120 Pieces (Wet)',
      discount: '1% OFF',
      originalPrice: '৳235',
      discountedPrice: '৳233',
      deliveryTime: '12-24 Hours',
      reviews: 14,
      image: 'https://cdn-ikpgilb.nitrocdn.com/tkZlehGqtsPzDJrdnMGIXksdKpacgSZZ/assets/images/optimized/rev-b793f36/veomix.com/wp-content/uploads/2023/12/Neocare-Wet-Wipes-for-Baby-120-Pcs-Veomix.jpg',
    },
    {
      id: 4,
      name: 'Neocare Wet Wipes 10s Pack',
      originalPrice: '৳40',
      deliveryTime: '12-24 Hours',
      reviews: 5,
      image: 'https://neocarebd.com/wp-content/uploads/2023/10/neocare-wipes-240s-canister-pack.png',
    },
    {
      id: 5,
      name: 'WOODWARD\'S Gripe Water 130ml',
      discount: '36% OFF',
      originalPrice: '৳275',
      discountedPrice: '৳175',
      deliveryTime: '12-24 Hours',
      reviews: 23,
      image: 'https://images.othoba.com/images/thumbs/0695723_woodwards-gripe-water-130ml-made-in-india.jpeg',
    },
    {
      id: 6,
      name: 'Face Mask Baby',
      originalPrice: '৳15',
      deliveryTime: '12-24 Hours',
      reviews: 14,
      image: 'https://bmama.com.sg/cdn/shop/products/10.png?v=1664202585&width=533',
    },
    {
      id: 7,
      name: 'Neocare Baby Diaper New Born 20s Pack',
      deliveryTime: '12-24 Hours',
      reviews: 14,
      image: 'https://via.placeholder.com/300x300?text=Baby+Diapers',
    },
  ];

  const visibleProducts = products.slice(currentIndex, currentIndex + 6);
  const canScrollNext = currentIndex + 6 < products.length;

  const scrollNext = () => {
    if (canScrollNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="px-8 py-12 bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Baby & Mom Care</h2>
          <button className="text-pink-600 hover:text-pink-800 font-medium">
            See all
          </button>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-transform duration-300"
          >
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="h-40 w-full flex items-center justify-center p-4">
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
                      <span className="text-xs font-semibold bg-pink-100 text-pink-600 px-2 py-1 rounded">
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
                  <button className="w-full mt-3 bg-pink-500 hover:bg-pink-600 text-white py-2 text-sm font-medium rounded-lg transition-colors duration-200">
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
                className="h-5 w-5 text-pink-600"
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

export default MomAndBaby;