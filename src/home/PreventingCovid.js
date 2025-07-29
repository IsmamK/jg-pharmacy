"use client"

import { useState } from 'react';
import Image from 'next/image';

const PreventingCovid = () => {
  const [showAll, setShowAll] = useState(false);
  
  const products = [
    {
      id: 1,
      name: "3-Layer Surgical Mask (50 Pack)",
      discount: 34,
      originalPrice: 300,
      discountedPrice: 197.91,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61IcVPo9ntS.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 2,
      name: "Digital Thermometer LCD",
      discount: 30,
      originalPrice: 150,
      discountedPrice: 105,
      rating: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFe-qhhO7Sgx7Nm1FB9QMOwvvn1AcvrlRAA&s",
      deliveryTime: "12-24h"
    },
    {
      id: 3,
      name: "Black Surgical Mask (50 Pack)",
      discount: 26,
      originalPrice: 350,
      discountedPrice: 260,
      rating: 3,
      image: "https://images1.dentalkart.com/media/catalog/product/y/h/yhfdhhjff.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 4,
      name: "Blue Surgical Mask (50 Pack)",
      discount: 30,
      originalPrice: 400,
      discountedPrice: 280,
      rating: 4,
      image: "https://cdn.vectorstock.com/i/1000v/51/42/blue-surgical-face-mask-isolated-vector-31285142.jpg",
      deliveryTime: "12-24h"
    },
    {
      id: 5,
      name: "B-Care Surgical Mask (50 Pack)",
      discount: 30,
      originalPrice: 450,
      discountedPrice: 315,
      rating: 5,
      image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yODE3N1wvMjgxNzctRmFjZS1NYXNrLVN1cmdpY2FsLTMtTGF5ZXJzLVdpdGgtTm9zZS1QaW4tNTAtcy1QYWNrLUctTWFzay1jb3B5LWtyMmN1ZS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
      deliveryTime: "12-24h"
    },
    {
      id: 6,
      name: "Portable Nebulizer Machine",
      discount: 20,
      originalPrice: 1500,
      discountedPrice: 1200,
      rating: 4,
      image: "https://images.othoba.com/images/thumbs/0700605_portable-mini-handheld-mesh-nebulizer-machine-ultrasonic-steam-inhaler-nebulizer-machine-for-child-a.webp",
      deliveryTime: "12-24h"
    }
  ];

  const visibleProducts = showAll ? products : products.slice(0, 5);

  return (
    <div className="px-8 py-10 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto">
        {/* Header with vibrant accent */}
        <div className="mb-8 text-center">
          <div className="inline-block px-6 py-2 bg-blue-600 rounded-full mb-4">
            <h2 className="text-xl font-bold text-white">COVID-19 Protection</h2>
          </div>
          <p className="text-lg text-blue-100 font-medium">Essential safety products at discounted prices</p>
        </div>

        {/* Product Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {visibleProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="h-40 relative bg-blue-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-3 hover:scale-105 transition duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                    <span className="text-gray-500 text-xs font-medium">{product.deliveryTime}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs ml-1">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 line-through text-xs">৳{product.originalPrice}</span>
                      <span className="text-blue-600 font-bold text-base ml-1">৳{product.discountedPrice}</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
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

export default PreventingCovid;