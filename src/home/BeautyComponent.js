"use client"

import { useState } from 'react';

const BeautyComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Freedom Sanitary Napkin Heavy Flow Cotton 8 Pads',
      offer: 'Buy 1 Get 1 Free',
      discount: '50% OFF',
      originalPrice: '৳240',
      discountedPrice: '৳120',
      rating: 165,
      image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Freedom_Sanitary_Napkin_Heavy_Flow_Cotto-Freedom-d33cd-262614.jpg'
    },
    {
      id: 2,
      name: 'AXIS-Y Dark Spot Correcting Glow Serum 5ml',
      offer: '',
      discount: '41% OFF',
      originalPrice: '৳450',
      discountedPrice: '৳264',
      rating: 75,
      image: 'https://bk.shajgoj.com/storage/2024/01/AXIS-Y-Dark-Spot-Correcting-Glow-Serum.jpg'
    },
    {
      id: 3,
      name: 'Kirkland 5% Minoxidil Extra Strength Hair Loss Treatment 60ml',
      offer: '',
      discount: '33% OFF',
      originalPrice: '৳1490',
      discountedPrice: '৳999',
      rating: 43,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC81MTc4N1wvNTE3ODcta2lya2xhbmQtbWlub3hpZGlsLTEtMS1tN3d6NWUuanBlZyIsImVkaXRzIjpbXX0='
    },
    {
      id: 4,
      name: 'Dental Floss (SmartCure)',
      offer: '',
      discount: '56% OFF',
      originalPrice: '৳150',
      discountedPrice: '৳66',
      rating: 93,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yODIyMlwvMjgyMjItRGVudGFsLUZsb3NzLTItY29weS1hdmJheGkuanBlZyIsImVkaXRzIjpbXX0='
    },
    {
      id: 5,
      name: 'The Ordinary Niacinamide 10%+Zinc1% Serum 30ml',
      offer: '',
      discount: '37% OFF',
      originalPrice: '৳2000',
      discountedPrice: '৳1270',
      rating: 66,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWyi0IsArcoghdLJqUhBe4bpo1VuFDodfYcA&s'
    },
    {
      id: 6,
      name: 'Beauty Glazed Nose Pore Cleansing Strips',
      offer: '',
      discount: '66% OFF',
      originalPrice: '৳70',
      discountedPrice: '৳24',
      rating: 60,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0VmFyaWFudC1wdl9pbWFnZXNcLzM0NjM4XC8zNDYzOC1iZWF1dHktZ2xhemVkLWY3bGlnaC5qcGVnIiwiZWRpdHMiOltdfQ=='
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 6 >= products.length ? 0 : prevIndex + 6
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 6);

  return (
    <div className="px-8 py-12 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Beauty Essentials</h2>
          <button className="text-pink-600 font-medium hover:underline">
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
                <div className="relative h-48">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.offer && (
                    <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.offer}
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
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-pink-100 text-pink-800 font-semibold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">12-24 Hours</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 text-xs line-through mr-2">
                      {product.originalPrice}
                    </span>
                    <span className="text-pink-600 font-bold">
                      {product.discountedPrice}
                    </span>
                  </div>
                  <button className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
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

export default BeautyComponent;