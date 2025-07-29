"use client"

import { useRef, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const GroceryEssentials = () => {
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  const products = [
    {
      id: 1,
      name: "Snickers Milk Chocolate 50gm Bar",
      discount: 9,
      originalPrice: 110,
      discountedPrice: 100,
      reviews: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdamgPbVB4fgh_MQoPj2d4Ynve2DeytF6Erw&s",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Cadbury Dairy Milk Silk Fruit & Nut Chocolate Bar 55gm",
      originalPrice: 190,
      reviews: 2,
      image: "https://i.chaldn.com/_mpimage/cadbury-dairy-milk-silk-plain-chocolate-bar-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128496&q=best&v=1",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Nestlé Nescafé Classic Instant Coffee Pouch",
      discount: 2,
      originalPrice: 800,
      discountedPrice: 783,
      reviews: 11,
      image: "https://i.chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-pouch-pack-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D120413&q=best&v=1",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Kellogg's Chocos Chocolate Breakfast Cereal 385gm",
      discount: 1,
      originalPrice: 470,
      discountedPrice: 464,
      reviews: 1,
      image: "https://i.chaldn.com/_mpimage/kelloggs-chocos-chocolate-breakfast-cereal-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169114&q=best&v=1&m=400",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "Nutella Chocolate Hazelnut Bread Spread 350gm",
      originalPrice: 750,
      reviews: 2,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNDhcLzQ4OTcyLTEtZzlhdXBzLmpwZWciLCJlZGl0cyI6W119",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Khaas Food Prunes (আলুবোখারা) Chutney",
      discount: 4,
      originalPrice: 260,
      discountedPrice: 250,
      reviews: 0,
      image: "https://www.khaasfood.com/wp-content/uploads/2019/12/prunes-chutney-h-300x300.webp",
      deliveryTime: "12-24h"
    },
    {
      id: 7,
      name: "Pringles Original Potato Chips 134gm",
      discount: 9,
      originalPrice: 350,
      image: "https://m.media-amazon.com/images/I/81S7H3+0VQL._SL1500_.jpg",
      deliveryTime: "12-24h",
      reviews: 3
    }
  ];


  const handleScroll = () => {
    const container = scrollRef.current;
    const cardWidth = 256; // Width of each card
    const gap = 24; // Gap between cards
    const scrollAmount = 6 * (cardWidth + gap); // Scroll exactly 6 cards
    
    container.scrollLeft += scrollAmount;

    setTimeout(() => {
      setShowArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }, 300);
  };

  return (
    <div className="px-8 py-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-amber-800">Grocery Essentials</h2>
          </div>
          <button className="flex items-center text-amber-600 font-medium hover:text-amber-800 transition-colors">
            See all <FiChevronRight className="ml-1" />
          </button>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Product Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth hide-scrollbar"
          >
            <div className="flex space-x-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-amber-50"
                >
                  {/* Product Image */}
                  <div className="relative h-40 bg-amber-50 flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full object-contain transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                      </div>
                    )}
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
                            className={`w-3 h-3 ${i < Math.floor(product.reviews) ? 'text-amber-400' : 'text-gray-300'}`} 
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
                        {product.originalPrice && (
                          <>
                            {product.discountedPrice ? (
                              <>
                                <p className="text-xs text-gray-400 line-through">৳{product.originalPrice}</p>
                                <p className="text-base font-bold text-amber-600">৳{product.discountedPrice}</p>
                              </>
                            ) : (
                              <p className="text-base font-bold text-amber-600">৳{product.originalPrice}</p>
                            )}
                          </>
                        )}
                      </div>
                      <button className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded-md text-sm transition-colors">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {showArrow && (
            <button 
              onClick={handleScroll}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-amber-50 z-10 transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-amber-600 text-xl" />
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

export default GroceryEssentials;