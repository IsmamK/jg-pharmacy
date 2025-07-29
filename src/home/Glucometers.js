"use client"

import { useState } from 'react';

const Glucometers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Insulin Syringe 100IU (Medica)",
      delivery: "12-24 Hours",
      rating: 43,
      price: "৳11",
      image: "https://rxpharmabd.com/wp-content/uploads/2025/01/images-67-3.jpeg"
    },
    {
      id: 2,
      name: "Blood Lancet Needles For Diabetes",
      discount: "13% OFF",
      delivery: "12-24 Hours",
      rating: 37,
      originalPrice: "৳80",
      discountedPrice: "৳70",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yNzQwM1wvMjc0MDMtQmxvb2QtTGFuY2V0LU5USS1jb3B5LWR4OWk1Ny5qcGVnIiwiZWRpdHMiOltdfQ=="
    },
    {
      id: 3,
      name: "Insulin Pen Needle (Novofine Pen Needle)",
      delivery: "12-24 Hours",
      rating: 20,
      price: "৳12.15",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC80MTU3NlwvNDE1NzYtSW5zdWxpbi1QZW4tTmVlZGxlLTMyZy1jb3B5LXdoam10cy5qcGVnIiwiZWRpdHMiOltdfQ=="
    },
    {
      id: 4,
      name: "Zerocal Box 150 Sachets",
      discount: "4% OFF",
      delivery: "12-24 Hours",
      rating: 26,
      originalPrice: "৳400",
      discountedPrice: "৳385",
      image: "https://img.drz.lazcdn.com/static/bd/p/1eb30819c76111d3011dc77d04567b87.jpg_720x720q80.jpg"
    },
    {
      id: 5,
      name: "Contour Plus Blood Glucose Strip 25's Pack",
      discount: "1% OFF",
      delivery: "12-24 Hours",
      rating: 25,
      originalPrice: "৳695",
      discountedPrice: "৳689",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvMzFcLzMxMjY5LUNvbnRvdXItUGx1cy1TdHJpcHMtMjUtcy1heXVkLmpwZWciLCJlZGl0cyI6W119"
    },
    {
      id: 6,
      name: "Zerocal Stevia 30's Pack",
      discount: "3% OFF",
      delivery: "12-24 Hours",
      rating: 14,
      originalPrice: "৳120",
      discountedPrice: "৳117",
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC80ODI1M1wvNDgyNTMtWmVyb2NhbC1TdGV2aWEtMzAtcy1QYWNrLWNvcHktZjNoZWR6LmpwZWciLCJlZGl0cyI6W119"
    },
    {
      id: 7,
      name: "Insulin Pen Needle 32g/4mm",
      discount: "12% OFF",
      delivery: "12-24 Hours",
      rating: 12,
      originalPrice: "৳12",
      discountedPrice: "৳10.56",
      image: "https://via.placeholder.com/150?text=Pen+Needle+32g"
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
    <div className="px-8 py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Glucometers & Diabetic Care</h2>
          <div className="flex space-x-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-white text-green-600 shadow-md hover:bg-green-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= products.length - 6}
              className={`p-2 rounded-full ${currentIndex >= products.length - 6 ? 'bg-gray-200 text-gray-400' : 'bg-white text-green-600 shadow-md hover:bg-green-50'}`}
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
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="text-xs text-green-600 mb-1">{product.delivery}</div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < Math.min(Math.floor(product.rating/8), 5) ? 'text-yellow-400' : 'text-gray-300'}`} 
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
                          <span className="text-lg font-bold text-green-600">{product.discountedPrice}</span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-green-600">{product.price}</span>
                      )}
                    </div>
                    <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
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

export default Glucometers;