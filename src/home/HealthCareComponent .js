"use client"

import { useState } from 'react';

const HealthCareComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Alcohol Pad',
      discount: '8% OFF',
      originalPrice: '৳80',
      discountedPrice: '৳74',
      rating: 85,
      image: 'https://labtexbd.com/wp-content/uploads/2021/11/Alcohol-Pad-100-Pcs-for-Disinfection-in-Bangladesh.jpg'
    },
    {
      id: 2,
      name: 'One Time Bandage Box',
      discount: '6% OFF',
      originalPrice: '৳100',
      discountedPrice: '৳94',
      rating: 81,
      image: 'https://images.othoba.com/images/thumbs/0657995_100-pcs-getwell-first-aid-strip-tape-one-time-bandage.webp'
    },
    {
      id: 3,
      name: 'Digital Thermometer LCD',
      discount: '30% OFF',
      originalPrice: '৳150',
      discountedPrice: '৳105',
      rating: 67,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yNzU5N1wvMjc1OTctamV2ZS1EaWdpdGFsLVRoaXJtb21ldGVyLWNvcHktNDllZzU2LmpwZWciLCJlZGl0cyI6W119'
    },
    {
      id: 4,
      name: 'Electric Hot Water Bag Heat Pillow And Pain Remover – Multicolor',
      discount: '20% OFF',
      originalPrice: '৳300',
      discountedPrice: '৳240',
      rating: 58,
      image: 'https://img.drz.lazcdn.com/static/bd/p/272da2c354e001822e9fd79c6cc727fd.jpg_720x720q80.jpg'
    },
    {
      id: 5,
      name: 'Insulin Syringe 100IU (Medica)',
      discount: '',
      originalPrice: '৳11',
      discountedPrice: '',
      rating: 43,
      image: 'https://rxpharmabd.com/wp-content/uploads/2025/01/images-67-3.jpeg'
    },
    {
      id: 6,
      name: 'Blood Lancet Needles For Diabetes',
      discount: '13% OFF',
      originalPrice: '৳80',
      discountedPrice: '৳70',
      rating: 37,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yNzQwM1wvMjc0MDMtQmxvb2QtTGFuY2V0LU5USS1jb3B5LWR4OWk1Ny5qcGVnIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 7,
      name: 'Vicks Inhaler Keychain',
      discount: '1% OFF',
      originalPrice: '৳150',
      discountedPrice: '৳149',
      rating: 40,
      image: '/vicks-inhaler.jpg'
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
          <h2 className="text-3xl font-bold text-gray-800">Healthcare Essentials</h2>
          <button className="text-indigo-600 font-medium hover:underline">
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
                <div className="relative h-48 bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
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
                    {product.originalPrice && product.discountedPrice ? (
                      <>
                        <span className="text-gray-400 text-xs line-through mr-2">
                          {product.originalPrice}
                        </span>
                        <span className="text-indigo-600 font-bold">
                          {product.discountedPrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-indigo-600 font-bold">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
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
              aria-label="Next products"
            >
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthCareComponent;