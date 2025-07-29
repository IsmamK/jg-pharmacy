"use client"

import { useState } from 'react';

const PetCare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Cat Mouse With Stimulating Sound",
      discount: "11% OFF",
      delivery: "12-24 Hours",
      rating: 5,
      originalPrice: "৳100",
      discountedPrice: "৳89",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NTY1OVwvNjU2NTktY2F0LW1vdXNlLTMyNTNuZi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ=="
    },
    {
      id: 2,
      name: "Helminticide L",
      discount: "30% OFF",
      delivery: "12-24 Hours",
      rating: 6,
      originalPrice: "৳1000",
      discountedPrice: "৳700",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXvm7wHlDVECXi93ZOYhGxmw6p5_oU1shVg&s"
    },
    {
      id: 3,
      name: "L Favourite Bentonite Cat Litter Lemon 5L",
      discount: "20% OFF",
      delivery: "12-24 Hours",
      rating: 5,
      originalPrice: "৳400",
      discountedPrice: "৳320",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MDEwN1wvNzAxMDctTGVtb24tMTAta2ctb2twYzl4LmpwZWciLCJlZGl0cyI6W119"
    },
    {
      id: 4,
      name: "L Favourite Bentonite Cat Litter Lavender 5L",
      discount: "20% OFF",
      delivery: "12-24 Hours",
      rating: 6,
      originalPrice: "৳400",
      discountedPrice: "৳320",
      image: "https://petzonebd.com/wp-content/uploads/2024/04/L-Favourite-Bentonite-Cat-Litter-Lavender.jpg"
    },
    {
      id: 5,
      name: "Zoi Cat Mix Flavor Food 1kg",
      discount: "24% OFF",
      delivery: "12-24 Hours",
      rating: 5,
      originalPrice: "৳560",
      discountedPrice: "৳425",
      image: "https://mewmewshopbd.com/uploads/media-manager/2021/08/20210816183326zoi-cat-e1605689179983-1732701344.png"
    },
    {
      id: 6,
      name: "Cat Collar - (Multi Color) Piece",
      discount: "31% OFF",
      delivery: "12-24 Hours",
      rating: 3,
      originalPrice: "৳118",
      discountedPrice: "৳81",
      image: "https://m.media-amazon.com/images/I/81ZdLA96HoL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 7,
      name: "Simple Litter box Scoop",
      discount: "17% OFF",
      delivery: "12-24 Hours",
      rating: 6,
      originalPrice: "৳73.13",
      discountedPrice: "৳60.70",
      image: "https://via.placeholder.com/150?text=Scoop"
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
          <h2 className="text-3xl font-bold text-gray-800">Pet Care</h2>
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
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="text-xs text-purple-600 mb-1">{product.delivery}</div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < Math.min(product.rating, 5) ? 'text-yellow-400' : 'text-gray-300'}`} 
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
                        <span className="text-lg font-bold text-purple-600">{product.originalPrice}</span>
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

export default PetCare;