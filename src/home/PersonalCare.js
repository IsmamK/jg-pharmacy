"use client"

import { useState } from 'react';

const PersonalCare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Freedom Sanitary Napkin Heavy Flow Cotton 8 Pads Buy 1 Get 1 Free (১টি কিনলে ১টি ফ্রি)",
      discount: "50% OFF",
      delivery: "12-24 Hours",
      rating: 165,
      originalPrice: "৳240",
      discountedPrice: "৳120",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NjM2OVwvNjYzNjktV2hhdHNBcHAtSW1hZ2UtMjAyNC0wNi0zMC1hdC0xOS1xaWE1djAuanBlZyIsImVkaXRzIjpbXX0="
    },
    {
      id: 2,
      name: "Dental Floss (SmartCure)",
      discount: "56% OFF",
      delivery: "12-24 Hours",
      rating: 93,
      originalPrice: "৳150",
      discountedPrice: "৳66",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yODIyMlwvMjgyMjItRGVudGFsLUZsb3NzLTItY29weS1hdmJheGkuanBlZyIsImVkaXRzIjpbXX0="
    },
    {
      id: 3,
      name: "Skin'O Glow Your Skin Strawberry Scented Shower Gel 220ml",
      discount: "29% OFF",
      delivery: "12-24 Hours",
      rating: 76,
      originalPrice: "৳250",
      discountedPrice: "৳178",
      image: "https://dressup.com.bd/wp-content/uploads/2024/12/strawberry-shower-gel_1.webp"
    },
    {
      id: 4,
      name: "Joya Regular Wings 8's Pack",
      discount: "3% OFF",
      delivery: "12-24 Hours",
      rating: 45,
      originalPrice: "৳70",
      discountedPrice: "৳68",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yNzYwNFwvMjc2MDQtSm95YS1SZWd1bGFyLVdpbmdzLTgtUy1QYWNrLUdvb2dsZS1TZWFyY2gtZjFoN3dmLnBuZyIsImVkaXRzIjpbXX0="
    },
    {
      id: 5,
      name: "Sensodyne Daily Care Toothbrush",
      discount: "34% OFF",
      delivery: "12-24 Hours",
      rating: 58,
      originalPrice: "৳70",
      discountedPrice: "৳46.20",
      image: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/6788c9666f7fc1c255730a99_Sensodyne-Daily-Care-Soft-Toothbrush_1_550.webp"
    },
    {
      id: 6,
      name: "Mediplus DS Tooth Paste 140gm",
      delivery: "12-24 Hours",
      rating: 39,
      price: "৳135",
      image: "https://i.chaldn.com/_mpimage/mediplus-ds-toothpaste-140-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130669&q=best&v=1"
    },
    {
      id: 7,
      name: "Joya Sanitary Napkin Belt 15's Pack",
      discount: "1% OFF",
      delivery: "12-24 Hours",
      rating: 26,
      originalPrice: "৳110",
      discountedPrice: "৳108.90",
      image: "https://via.placeholder.com/150?text=Napkin+Belt"
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
    <div className="px-8 py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Personal Care</h2>
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-white text-purple-600 shadow-md hover:bg-purple-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= products.length - 6}
              className={`p-2 rounded-full ${currentIndex >= products.length - 6 ? 'bg-gray-200 text-gray-400' : 'bg-white text-purple-600 shadow-md hover:bg-purple-50'}`}
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
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-purple-100">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="text-xs text-purple-600 mb-1">{product.delivery}</div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < Math.min(Math.floor(product.rating/33), 5) ? 'text-yellow-400' : 'text-gray-300'}`} 
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
                          <span className="text-lg font-bold text-purple-600">{product.discountedPrice}</span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-purple-600">{product.price}</span>
                      )}
                    </div>
                    <button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
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

export default PersonalCare;