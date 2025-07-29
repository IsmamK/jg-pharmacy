"use client"

import { useState, useRef } from 'react';

const NewlyLaunched = () => {
  const products = [
    {
      id: 1,
      name: 'Migrafix 10mg tablet',
      shortName: 'Migrafix 10mg',
      discount: '10% OFF',
      originalPrice: '৳60',
      discountedPrice: '৳54',
      deliveryTime: '12-24 Hours',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    },
    {
      id: 2,
      name: 'Migrafix 5mg tablet',
      shortName: 'Migrafix 5mg',
      discount: '10% OFF',
      originalPrice: '৳35',
      discountedPrice: '৳31.50',
      deliveryTime: '12-24 Hours',
      image: 'https://flexipillstorage.blob.core.windows.net/meds-prescriptions/ea49d8d4-9860-494b-bd24-93200938fd6c_cswm',
    },
    {
      id: 3,
      name: 'Divanor 10mg tablet',
      shortName: 'Divanor 10mg',
      discount: '10% OFF',
      originalPrice: '৳400',
      discountedPrice: '৳360',
      deliveryTime: '12-24 Hours',
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yOTM3NVwvMjkzNzUtUmVwaGFzdG9uLWNvcHktdXI2ZjFsLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDAsImZpdCI6Im91dHNpZGUifX19',
    },
    {
      id: 4,
      name: 'Telmicon 40mg tablet',
      shortName: 'Telmicon 40mg',
      discount: '10% OFF',
      originalPrice: '৳100',
      discountedPrice: '৳90',
      deliveryTime: '12-24 Hours',
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83NzU0N1wvNzc1NDctdGVsbWljb24tODBtZy1xZmRyNjcuanBlZyIsImVkaXRzIjpbXX0=',
    },
    {
      id: 5,
      name: 'Bisobet 2.5mg tablet',
      shortName: 'Bisobet 2.5mg',
      discount: '10% OFF',
      originalPrice: '৳60',
      discountedPrice: '৳54',
      deliveryTime: '12-24 Hours',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqX35km6PcYuzPjwXZeXshy1OtDRA1RyI5Tg&s',
    },
    {
      id: 6,
      name: 'Bisobet 5mg tablet',
      shortName: 'Bisobet 5mg',
      discount: '10% OFF',
      originalPrice: '৳100',
      discountedPrice: '৳90',
      deliveryTime: '12-24 Hours',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380931005/MK/LG/SG/29765627/bisoprolol-fumarate-tablets-500x500.jpeg',
    },
    {
      id: 7,
      name: 'Migrafix 20mg tablet',
      shortName: 'Migrafix 20mg',
      discount: '10% OFF',
      originalPrice: '৳80',
      discountedPrice: '৳72',
      deliveryTime: '12-24 Hours',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
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
    <div className="px-8 py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Newly Launched Items</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            See all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="p-4 flex-grow">
                  <div className="relative h-40 rounded-lg mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain h-full w-full"
                      loading="lazy" // Lazy loading for better performance
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x200?text=Medicine+Image'; // Fallback image
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold bg-green-100 text-green-600 px-2 py-1 rounded">
                      {product.discount}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {product.deliveryTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">{product.shortName}</h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.name}</p>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900">
                      {product.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm font-medium transition-colors duration-200 mt-auto">
                  ADD
                </button>
              </div>
            ))}
          </div>

          {products.length > productsPerPage && (
            <button
              onClick={handleNext}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-blue-50"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default NewlyLaunched;