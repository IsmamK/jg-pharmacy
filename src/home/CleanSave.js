"use client"

import { useRef, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const CleanSave = () => {
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  const products = [
    {
      id: 1,
      name: "Germnil Bleaching Powder 400g",
      discount: 9,
      originalPrice: 70,
      discountedPrice: 64,
      reviews: 1,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MzA0MlwvNzMwNDItR2VybW5pbC1CbGVhY2hpbmctUG93ZGVyLTQwMGctY29weS1qaXpuOGIuanBlZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Air Wicker Freshmatic Automatic Spray Air Freshener Strawberry",
      discount: 43,
      originalPrice: 650,
      discountedPrice: 368,
      reviews: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83ODE3NVwvNzgxNzUtQWlyLVdpY2tlci1GcmVzaG1hdGljLUF1dG9tYXRpYy1TcHJheS1BaXItRnJlc2hlbmVyLVN0cmF3YmVycnktY29weS11d3ZvZTcuanBlZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Imperial Leather Cotton Clouds & White Cashmere Moisturising Antibacterial Hand Wash",
      discount: 44,
      originalPrice: 625,
      discountedPrice: 347,
      reviews: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNTRcLzU0Mjk3LUltcGVyaWFsLUxlYXRoZXItTW9pc3R1cmlzaW5nLUhhbmR3YXNoLXdpdGgtQ290dG9uLUNsb3Vkcy1XaGl0ZS1DYXNobWVyZS0zMjVtbC14cjJ6LmpwZWciLCJlZGl0cyI6W119",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Lifebuoy Handwash (Soap) Lemon Fresh Refill 170ml (Bundle of 3)",
      discount: 8,
      originalPrice: 255,
      discountedPrice: 234,
      reviews: 5,
      image: "https://images.deliveryhero.io/image/darkstores/nv-global-catalog/bd/b1ee4e0d-4dc3-40ba-ae20-daa230d59fae.jpg?height=480",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "Proclean Mop Bucket (MB-9814 Ash Color)",
      discount: 27,
      originalPrice: 600,
      discountedPrice: 441,
      reviews: 0,
      image: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Proclean_Mop_Bucket_Ash_Color-Proclean-39358-464774.png",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Zen Garden Strawberry Handwash",
      discount: 43,
      originalPrice: 1020,
      discountedPrice: 578,
      reviews: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NTM4MVwvNjUzODEtemVuLXN0cmF3YmVycnktMi1tc2RiYWYuanBlZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    }
  ];

  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollAmount = 300; // Adjust scroll amount as needed
    
    container.scrollLeft += scrollAmount;

    // Hide arrow if we reach the end
    setTimeout(() => {
      setShowArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }, 300);
  };

  return (
    <div className="px-8 py-12 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-blue-800">Clean & Save 🧹</h2>
          </div>
          <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
            See all <FiChevronRight className="ml-1" />
          </button>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Product Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth space-x-6 py-4 hide-scrollbar"
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Product Image */}
                <div className="relative h-40 bg-gray-50 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-12">{product.name}</h3>
                  
                  {/* Delivery Time */}
                  <p className="text-xs text-gray-500 mb-2">{product.deliveryTime}</p>
                  
                  {/* Ratings */}
                  <div className="flex items-center mb-3">
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
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>

                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 line-through">৳{product.originalPrice}</p>
                      <p className="text-base font-bold text-blue-600">৳{product.discountedPrice}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showArrow && (
            <button 
              onClick={handleScroll}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-blue-600 text-xl" />
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

export default CleanSave;