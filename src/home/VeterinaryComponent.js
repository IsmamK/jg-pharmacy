"use client"

import { useState } from 'react';

const VeterinaryComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Renamycin (Vet)',
      discount: '6% OFF',
      originalPrice: '৳17',
      discountedPrice: '৳16',
      rating: 2,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NjMwM1wvNjYzMDMtMTQtcmVuYW15Y2luLVZldC1jb3B5LTFnamxvdy5qcGVnIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 2,
      name: 'A-Mectin Vet Pour On Drop',
      discount: '2% OFF',
      originalPrice: '৳45',
      discountedPrice: '৳44',
      rating: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDT8N09w9GTZlUuzFemyMb4pj2XxxgRXkHg&s'
    },
    {
      id: 3,
      name: 'Doxy-A Vet',
      discount: '',
      originalPrice: '৳27.30',
      discountedPrice: '',
      rating: 4,
      image: 'https://www.acmeglobal.com/wp-content/uploads/2023/02/doxy-a-vet-100gram.png'
    },
    {
      id: 4,
      name: 'Zis-Vet 100ml',
      discount: '2% OFF',
      originalPrice: '৳45',
      discountedPrice: '৳44',
      rating: 7,
      image: 'https://www.acmeglobal.com/wp-content/uploads/2021/02/Zis-VET-1liter.png'
    },
    {
      id: 5,
      name: 'Lisovit Powder 10gm',
      discount: '2% OFF',
      originalPrice: '৳85',
      discountedPrice: '৳83',
      rating: 6,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83NTQ2OVwvNzU0NjktVW50aXRsZWQtZGVzaWduLTc4LW1wNWZwbi5wbmciLCJlZGl0cyI6W119'
    },
    {
      id: 6,
      name: 'Renasol AD3E 100ml (Vet)',
      discount: '4% OFF',
      originalPrice: '৳220',
      discountedPrice: '৳212',
      rating: 7,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NjMwNVwvNjYzMDUtMS1SZW5hc29sLUFEMy1FLTEwMG1sLVN5cnVwLWNvcHktZTN6OTRkLmpwZWciLCJlZGl0cyI6W119'
    },
    {
      id: 7,
      name: 'PB-71 Powder 10gm Pack',
      discount: '4% OFF',
      originalPrice: '৳50',
      discountedPrice: '',
      rating: 0,
      image: '/pb-71.jpg'
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
          <h2 className="text-3xl font-bold text-gray-800">Veterinary Care</h2>
          <button className="text-teal-600 font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-8">
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gray-50 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
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
                        <span className="text-gray-400 text-xs line-through mr-2">
                          {product.originalPrice}
                        </span>
                        <span className="text-teal-600 font-bold">
                          {product.discountedPrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-teal-600 font-bold">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="mt-3 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 shadow-sm hover:shadow-md">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>

          {products.length > 6 && (
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="Next products"
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

export default VeterinaryComponent;