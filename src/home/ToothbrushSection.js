"use client"
import React, { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ToothbrushSection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const products = [
    {
      id: 1,
      name: 'Systema Easy Access Toothbrush',
      discount: '25% OFF',
      time: '12-24 Hours',
      originalPrice: '৳120',
      discountedPrice: '৳90',
      reviews: 5,
      image: 'https://images.deliveryhero.io/image/nv/Bangladesh/Pandamart/Poneer%20Roy/8941175080232.jpg?height=480'
    },
    {
      id: 2,
      name: 'Systema Power Clean Toothbrush',
      discount: '25% OFF',
      time: '12-24 Hours',
      originalPrice: '৳120',
      discountedPrice: '৳90',
      reviews: 3,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NDg1MVwvNjQ4NTEtUG93ZXItQ2xlYW5fMS1hd2hlYWEucG5nIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 3,
      name: 'Systema Classic Comfort Toothbrush',
      discount: '24% OFF',
      time: '12-24 Hours',
      originalPrice: '৳90',
      discountedPrice: '৳68',
      reviews: 4,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NDg0M1wvNjQ4NDMtU2xpZGVfMS1sMnRkMnIucG5nIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 4,
      name: 'Systema Charcoal Guard Toothbrush 3 Pack Combo',
      discount: '16% OFF',
      time: '12-24 Hours',
      originalPrice: '৳360',
      discountedPrice: '৳303.60',
      reviews: 0,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NDg0NlwvNjQ4NDYtU2xpZGVfMS1zc2N0MDQucG5nIiwiZWRpdHMiOltdfQ=='
    },
    {
      id: 5,
      name: 'Systema Classic Comfort Toothbrush 3 Pack Combo',
      discount: '14% OFF',
      time: '12-24 Hours',
      originalPrice: '৳270',
      discountedPrice: '৳231',
      reviews: 1,
      image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83OTQzNFwvNzk0MzQtV2hhdHNBcHAtSW1hZ2UtMjAyNS0wNC0yMC1hdC0xNy10bHZuZGsuanBlZyIsImVkaXRzIjpbXX0='
    },
    {
      id: 6,
      name: 'Systema Easy Access Toothbrush 3 Pack Combo',
      discount: '16% OFF',
      time: '12-24 Hours',
      originalPrice: '৳360',
      discountedPrice: '৳303.60',
      reviews: 0,
      image: 'https://kartasupermall.com/wp-content/uploads/2024/07/66fe3abf3c499c17f5f391990a09f46f-800x800.jpg'
    },
    {
      id: 7,
      name: 'Systema Power Clean Toothbrush 3 Pack',
      discount: '15% OFF',
      time: '12-24 Hours',
      originalPrice: '৳350',
      discountedPrice: '৳297.50',
      reviews: 2,
      image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
      id: 8,
      name: 'Systema Sensitive Care Toothbrush',
      discount: '20% OFF',
      time: '12-24 Hours',
      originalPrice: '৳150',
      discountedPrice: '৳120',
      reviews: 7,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
    }
  ];

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300; // Adjust scroll amount as needed
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    // Update arrow visibility after scroll
    setTimeout(() => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }, 300);
  };

  return (
    <div className="px-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-2">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">Keep your smile fresh with Systema</h2>
            <p className="text-gray-600 text-sm">No. 1 toothbrush in Japan.</p>
          </div>
          <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm">
            See all <FiChevronRight className="ml-1" />
          </button>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-gray-600 text-xl" />
            </button>
          )}

          {/* Product Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth space-x-4 py-2 px-2 hide-scrollbar"
            onScroll={() => {
              const container = scrollRef.current;
              setShowLeftArrow(container.scrollLeft > 0);
              setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-52 bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative bg-gray-50 h-40 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    {product.discount}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 leading-tight">{product.name}</h3>
                  
                  {/* Ratings */}
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.reviews) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="text-xs text-gray-400 line-through">{product.originalPrice}</p>
                      <p className="text-base font-bold text-blue-600">{product.discountedPrice}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs font-medium transition-all transform hover:scale-105">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-gray-600 text-xl" />
            </button>
          )}
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ToothbrushSection;