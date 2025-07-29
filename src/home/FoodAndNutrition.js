"use client"

import { useState } from 'react';

const FoodAndNutrition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Olio Orolio Extra Virgin Olive Oil- 5000ml",
      discount: "18% OFF",
      delivery: "12-24 Hours",
      rating: 0,
      originalPrice: "৳10800",
      discountedPrice: "৳8823",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHfGl7_4MNDr8DGrb_wmc2uS3LE6TFONVCg&s"
    },
    {
      id: 2,
      name: "Nicotex Nicotine Gum Mint Plus Flavour",
      discount: "2% OFF",
      delivery: "12-24 Hours",
      rating: 8,
      originalPrice: "৳379.92",
      discountedPrice: "৳373.32",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzX_-Sc_NvOARZgNSiTHQQQ8MGzFKJlXCy2w&s"
    },
    {
      id: 3,
      name: "Food Care Oats 1kg",
      discount: "12% OFF",
      delivery: "12-24 Hours",
      rating: 29,
      originalPrice: "৳720",
      discountedPrice: "৳633.60",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC81ODgxNVwvNTg4MTUtb3RzLXJlbW92ZWJnLXByZXZpZXctMTJwaGs4LnBuZyIsImVkaXRzIjpbXX0="
    },
    {
      id: 4,
      name: "Happy Cow Instant Milk Powder 1Kg",
      discount: "5% OFF",
      delivery: "12-24 Hours",
      rating: 10,
      originalPrice: "৳750",
      discountedPrice: "৳712.50",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82ODYyOFwvNjg2MjgtSEFwcHktY293LTFrZy1jb3B5LWlkc3ZsZS5qcGVnIiwiZWRpdHMiOltdfQ=="
    },
    {
      id: 5,
      name: "Diploma Instant Full Cream Milk Powder 1kg",
      discount: "1% OFF",
      delivery: "12-24 Hours",
      rating: 0,
      originalPrice: "৳910",
      discountedPrice: "৳901",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfAxU-IpyuFkjc7zlr0UatySgMgL-LaQJRA&s"
    },
    {
      id: 6,
      name: "Quaker Oats Jar 900gm",
      discount: "11% OFF",
      delivery: "12-24 Hours",
      rating: 7,
      originalPrice: "৳699",
      discountedPrice: "৳620",
      image: "https://i.chaldn.com/_mpimage/quaker-oats-jar-450-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D120180&q=best&v=1"
    },
    {
      id: 7,
      name: "Diploma Instant Full Cream Milk Powder 500gm",
      discount: "1% OFF",
      delivery: "12-24 Hours",
      rating: 12,
      originalPrice: "৳480",
      discountedPrice: "৳475.20",
      image: "https://via.placeholder.com/150?text=Milk+500gm"
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
    <div className="px-8 py-12 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Food & Nutrition</h2>
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-white text-orange-600 shadow-md hover:bg-orange-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= products.length - 6}
              className={`p-2 rounded-full ${currentIndex >= products.length - 6 ? 'bg-gray-200 text-gray-400' : 'bg-white text-orange-600 shadow-md hover:bg-orange-50'}`}
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
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-orange-100">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="text-xs text-orange-600 mb-1">{product.delivery}</div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < Math.min(Math.floor(product.rating/6), 5) ? 'text-amber-400' : 'text-gray-300'}`} 
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
                          <span className="text-lg font-bold text-orange-600">{product.discountedPrice}</span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-orange-600">{product.originalPrice}</span>
                      )}
                    </div>
                    <button className="mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
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

export default FoodAndNutrition;