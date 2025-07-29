"use client"

import { useState } from 'react';

const ElderlyCare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Thai Adult Diaper Belt System-L 10's Pack",
      discount: "16% OFF",
      delivery: "12-24 Hours",
      rating: 5,
      originalPrice: "৳690",
      discountedPrice: "৳577",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yOTAyOFwvMjkwMjgtVGhhaS1hZHVsdC1kaWFwZXItTC0xMHBzLXVheW9sZS5qcGVnIiwiZWRpdHMiOltdfQ==L"
    },
    {
      id: 2,
      name: "Thai Adult Diaper Belt System-M 10's Pack",
      discount: "16% OFF",
      delivery: "12-24 Hours",
      rating: 0,
      originalPrice: "৳690",
      discountedPrice: "৳577",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvMjlcLzI5MDI5LVRoYWlfQWR1bHRfQmVsdF9EaWFwZXJzXzEwX1Bjcy1UaGFpLTRkZTkzLTI2OTU1NC1yaHkyb2kuanBlZyIsImVkaXRzIjpbXX0="
    },
    {
      id: 3,
      name: "Thai Adult Diaper Pant System-L 10's Pack",
      discount: "14% OFF",
      delivery: "12-24 Hours",
      rating: 4,
      originalPrice: "৳775",
      discountedPrice: "৳667",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yOTAzMFwvMjkwMzAtVGhhaS1BZHVsdC1EaWFwZXItUGFudC1TeXN0ZW0tTC0xMC1zLVBhY2stY29weS1temV3N2UuanBlZyIsImVkaXRzIjpbXX0="
    },
    {
      id: 4,
      name: "Thai Adult Diaper Pant System-M 10's Pack",
      discount: "14% OFF",
      delivery: "12-24 Hours",
      rating: 4,
      originalPrice: "৳775",
      discountedPrice: "৳667",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjv5D-Mxk6EdwzA1937lQUDZ8PPp3HKaKEA&s"
    },
    {
      id: 5,
      name: "Smart Care Adult Diaper Pant Style 10pcs - Extra Large",
      discount: "24% OFF",
      delivery: "12-24 Hours",
      rating: 1,
      originalPrice: "৳1050",
      discountedPrice: "৳794",
      image: "https://images.othoba.com/images/thumbs/0656092_smart-care-adult-diaper-pant-style-extra-large-10pcs.jpeg"
    },
    {
      id: 6,
      name: "I.V. Catheter with Wings-24g",
      discount: "2% OFF",
      delivery: "12-24 Hours",
      rating: 1,
      originalPrice: "৳60",
      discountedPrice: "৳59",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvMjNcLzIzMjUzLUdsb25lby1nd3Ayb2IuanBlZyIsImVkaXRzIjpbXX0="
    },
    {
      id: 7,
      name: "Male External Catheter (U-Drain) L",
      discount: "22% OFF",
      delivery: "12-24 Hours",
      rating: 2,
      originalPrice: "৳50",
      discountedPrice: "৳39",
      image: "https://via.placeholder.com/150?text=U-Drain"
    }
  ];

  const handleNext = () => {
    if (currentIndex < products.length - 6) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="px-8 py-12 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Elderly Care</h2>
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-white text-teal-600 shadow-md hover:bg-teal-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= products.length - 6}
              className={`p-2 rounded-full ${currentIndex >= products.length - 6 ? 'bg-gray-200 text-gray-400' : 'bg-white text-teal-600 shadow-md hover:bg-teal-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-1/6 px-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="text-xs text-teal-600 mb-1">{product.delivery}</div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                    </div>
                    <div className="mt-auto">
                      {product.discountedPrice ? (
                        <div className="flex items-center">
                          <span className="text-gray-500 text-sm line-through mr-2">{product.originalPrice}</span>
                          <span className="text-lg font-bold text-teal-600">{product.discountedPrice}</span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-teal-600">{product.originalPrice}</span>
                      )}
                    </div>
                    <button className="mt-3 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderlyCare;