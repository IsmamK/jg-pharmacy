"use client"

import { useRef, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const BogoBeyond = () => {
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  const products = [
    {
      id: 1,
      name: "Natura Clear & Glow Face Wash 100 ml - Buy1 Get1",
      discount: 54,
      originalPrice: 380,
      discountedPrice: 175,
      reviews: 6,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83OTc4MVwvNzk3ODEtNzk3ODEtaXJvd2ZzLnBuZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Prome Orange Powder Drinks combo 250gm free with 2.25kg pack",
      discount: 20,
      originalPrice: 1500,
      discountedPrice: 1200,
      reviews: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82MzIxNFwvNjMyMTQtV2hhdHNBcHAtSW1hZ2UtMjAyNS0wMy0wMy1hdC0zLWw4YzB0ai5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Revive Daily Moisturizer Sunscreen SPF 50+ PA++++ 50ml (Buy 1 & Get 1 Free)",
      discount: 14,
      originalPrice: 700,
      discountedPrice: 599,
      reviews: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC84MDY0OVwvODA2NDktUmV2aXZlLURhaWx5LU1vaXN0dXJpemVyLVN1bnNjcmVlbi01MC1tbC1GUkVFLVNlbm9yYS1GZWF0aGVyLUxpZ2h0LTgtUGFkcy1qM2tlMzAuanBlZyIsImVkaXRzIjpbXX0=",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Bongo Shaad Meat Masala With Roast Masala Combo (Buy 2 Get 1 Free)",
      discount: 36,
      originalPrice: 285,
      discountedPrice: 181.70,
      reviews: 0,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83ODQ0M1wvNzg0NDMtQm9uZ28tU2hhYWQtTWVhdC1NYXNhbGEtV2l0aC1Sb3N0LU1hc2FsYS1Db21iby1CdXktMi1HZXQtMS1GcmVlLXlkeTNhYy5wbmciLCJlZGl0cyI6W119",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "Karkuma Organic Healthy Gut Bundle Package (Bundle of 3)",
      discount: 4,
      originalPrice: 2400,
      discountedPrice: 2301,
      reviews: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr__TNkX9iJsh4c2i0zexw4tUYiO5lmfumHQ&s",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Taaqa Lemon 6pc combo 15tk discount",
      discount: 6,
      originalPrice: 180,
      discountedPrice: 169,
      reviews: 0,
      image: "https://images.unsplash.com/photo-1559842044-facb1a587ee4",
      deliveryTime: "12-24h"
    },
    {
      id: 7,
      name: "Doodles Instant Noodles (Masala Twist) Gift Pack 12pcs (1 Free)",
      discount: 2,
      originalPrice: 255,
      discountedPrice: 249,
      reviews: 10,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      deliveryTime: "12-24h"
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
    <div className="px-8 py-12 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-purple-800">BOGO & Beyond</h2>
          </div>
          <button className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
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
                  className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-50 flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative h-40 bg-purple-50 flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full object-contain transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-3 min-h-[3.5rem]">
                      {product.name}
                    </h3>
                    
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
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        {product.originalPrice && (
                          <>
                            {product.discountedPrice ? (
                              <>
                                <p className="text-xs text-gray-400 line-through">৳{product.originalPrice}</p>
                                <p className="text-base font-bold text-purple-600">৳{product.discountedPrice}</p>
                              </>
                            ) : (
                              <p className="text-base font-bold text-purple-600">৳{product.originalPrice}</p>
                            )}
                          </>
                        )}
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-sm transition-colors">
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
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-purple-50 z-10 transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-purple-600 text-xl" />
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

export default BogoBeyond;