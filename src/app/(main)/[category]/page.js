"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useEffect, useState } from 'react';
import { FaArrowRight, FaStar, FaShoppingCart, FaPills, FaFlask, FaTint, FaTablets, FaPrescriptionBottle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

// Category data mapping with image URLs
const categoryDataMap = {
  medicine: {
    name: "Medicine",
    icon: <FaPills className="text-3xl text-[#2177b3]" />,
    description: "Find all your medical needs from our extensive collection of prescription and over-the-counter medications.",
    subcategories: [
      { 
        name: "Prescription", 
        icon: <FaPrescriptionBottle className="text-2xl text-[#2177b3]" />,
        count: 42 
      },
      { 
        name: "OTC", 
        icon: <FaTablets className="text-2xl text-[#2177b3]" />,
        count: 36 
      },
      { 
        name: "Antibiotics", 
        icon: <FaPills className="text-2xl text-[#2177b3]" />,
        count: 28 
      },
      { 
        name: "Pain Relief", 
        icon: <FaTablets className="text-2xl text-[#2177b3]" />,
        count: 19 
      },
      { 
        name: "Vitamins", 
        icon: <FaPills className="text-2xl text-[#2177b3]" />,
        count: 15 
      },
      { 
        name: "Supplements", 
        icon: <FaTablets className="text-2xl text-[#2177b3]" />,
        count: 23 
      },
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Napa 500mg Tablet",
        image: "/medicine/napa-1.webp",
        discount: 9,
        deliveryTime: "12-24 Hours",
        description: "For fever and pain relief",
        originalPrice: 12,
        discountedPrice: 10.91,
        rating: 4.5,
        slug: "napa-500mg-tablet"
      },
      {
        id: 2,
        name: "Sergel 20mg Capsule",
        image: "/medicine/ecosprin.jpg",
        discount: 8,
        deliveryTime: "12-24 Hours",
        description: "For gastric problems",
        originalPrice: 70,
        discountedPrice: 64.64,
        rating: 4.2,
        slug: "sergel-20mg-capsule"
      },
      {
        id: 3,
        name: "Ecosprin 75mg Tablet",
        image: "/medicine/sergel.jpg",
        discount: 8,
        deliveryTime: "12-24 Hours",
        description: "Blood thinner medication",
        originalPrice: 8,
        discountedPrice: 7.34,
        rating: 4.7,
        slug: "ecosprin-75mg-tablet"
      },
      {
        id: 4,
        name: "Seclo 20mg Capsule",
        image: "/medicine/sergel.jpg",
        discount: 7,
        deliveryTime: "12-24 Hours",
        description: "For acid reflux",
        originalPrice: 15,
        discountedPrice: 13.95,
        rating: 4.1,
        slug: "seclo-20mg-capsule"
      },
    ]
  },
  "lab-test": {
    name: "Lab Test",
    icon: <FaFlask className="text-3xl text-[#2177b3]" />,
    description: "Book diagnostic tests and health checkups from certified labs with accurate results.",
    subcategories: [
      { 
        name: "Blood Tests", 
        icon: <FaTint className="text-2xl text-[#2177b3]" />,
        count: 18 
      },
      { 
        name: "Urine Tests", 
        icon: <FaTint className="text-2xl text-[#2177b3]" />,
        count: 12 
      },
      { 
        name: "Diabetes Tests", 
        icon: <FaTint className="text-2xl text-[#2177b3]" />,
        count: 8 
      },
      { 
        name: "Hormone Tests", 
        icon: <FaTint className="text-2xl text-[#2177b3]" />,
        count: 15 
      },
      { 
        name: "Allergy Tests", 
        icon: <FaTint className="text-2xl text-[#2177b3]" />,
        count: 10 
      },
      { 
        name: "Genetic Tests", 
        icon: <FaTint className="text-2xl text-[#2177b3]" />,
        count: 5 
      },
    ],
    featuredProducts: [
      {
        id: 1,
        name: "Complete Blood Count",
        image: "/lab-test/blood pressure.jpg",
        discount: 15,
        deliveryTime: "24-48 Hours",
        description: "Basic blood test panel",
        originalPrice: 500,
        discountedPrice: 425,
        rating: 4.8,
        slug: "complete-blood-count"
      },
      {
        id: 2,
        name: "Lipid Profile",
        image: "/lab-test/lipid.webp",
        discount: 10,
        deliveryTime: "24-48 Hours",
        description: "Cholesterol and triglyceride test",
        originalPrice: 600,
        discountedPrice: 540,
        rating: 4.6,
        slug: "lipid-profile"
      },
      {
        id: 3,
        name: "Thyroid Function Test",
        image: "/lab-test/thyroid.jpg",
        discount: 12,
        deliveryTime: "24-48 Hours",
        description: "TSH, T3, T4 levels",
        originalPrice: 800,
        discountedPrice: 704,
        rating: 4.7,
        slug: "thyroid-function-test"
      },
      {
        id: 4,
        name: "Hemoglobin A1C",
        image: "/lab-test/hemoglobin.jpg",
        discount: 5,
        deliveryTime: "24-48 Hours",
        description: "3-month glucose average",
        originalPrice: 400,
        discountedPrice: 380,
        rating: 4.5,
        slug: "hemoglobin-a1c"
      },
    ]
  }
};

const CategoryPage = ({ params }) => {
  // Unwrap the params promise
  const unwrappedParams = use(params);
  const { category } = unwrappedParams;
  
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate bubbles only on client side
    setBubbles(
      Array(20).fill().map(() => ({
        width: `${Math.random() * 20 + 5}px`,
        height: `${Math.random() * 20 + 5}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 15 + 10}s`,
        animationDelay: `${Math.random() * 5}s`
      }))
    );
  }, []);

  const categoryData = categoryDataMap[category] || {
    name: category.replace("-", " "),
    description: `Explore our ${category.replace("-", " ")} products and services.`,
    subcategories: [],
    featuredProducts: []
  };

  return (
    <div className="bg-gradient-to-b from-[#2177b3]/5 to-white min-h-screen">
      {/* Hero Banner with Gradient */}
      <div className="relative bg-gradient-to-r from-[#2177b3] to-[#2a8bd3] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Floating bubbles decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {bubbles.map((bubble, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: bubble.width,
                height: bubble.height,
                top: bubble.top,
                left: bubble.left,
                animation: `float ${bubble.animationDuration} linear infinite`,
                animationDelay: bubble.animationDelay
              }}
            />
          ))}
        </div>
        
        {/* Rest of your component remains the same */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="hover:underline flex items-center">
              Home
            </Link>
            <IoIosArrowForward className="text-xs" />
            <span className="font-medium capitalize">{categoryData.name}</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold capitalize mb-3">
                {categoryData.name}
              </h1>
              <p className="mt-2 max-w-2xl text-blue-100 text-lg">
                {categoryData.description}
              </p>
              <button className="mt-6 bg-white text-[#2177b3] hover:bg-gray-100 px-6 py-2 rounded-full font-medium shadow-md transition-all duration-300 transform hover:scale-105">
                Shop Now
              </button>
            </div>
            <div className="hidden md:block mt-6 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#2177b3]/30 rounded-full"></div>
                <div className="relative bg-white/20 p-6 rounded-full backdrop-blur-sm border-2 border-white/30">
                  {categoryData.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8">
        {/* Subcategories Section */}
        <section className="mb-12 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Shop by Category</h2>
            <Link
              href={`/${category}`}
              className="text-[#2177b3] hover:text-[#1a5a8a] flex items-center text-sm font-medium group"
            >
              View all categories
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categoryData.subcategories.map((subcategory, index) => (
              <Link
                key={index}
                href={`/${category}/${subcategory.name.toLowerCase().replace(" ", "-")}`}
                className="group relative bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#2177b3]/30 overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-[#2177b3] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <div className="flex justify-center relative z-10">
                  <div className="bg-[#2177b3]/10 p-3 rounded-xl group-hover:bg-[#2177b3]/20 transition-colors duration-300">
                    {subcategory.icon}
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mt-3 group-hover:text-[#2177b3] relative z-10">
                  {subcategory.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 relative z-10">
                  {subcategory.count} items
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <Link
              href={`/${category}`}
              className="text-[#2177b3] hover:text-[#1a5a8a] flex items-center text-sm font-medium group"
            >
              View all products
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryData.featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/${category}/individualsProduct/${product.slug}`}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2177b3]/30"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.discount > 0 && (
                    <span className="absolute top-3 right-3 bg-[#2177b3] text-white text-xs font-bold px-2 py-1 rounded-full z-20">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="p-4 relative z-20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                        {product.deliveryTime}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                  
                  <div className="flex items-center mt-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      {product.discountedPrice ? (
                        <>
                          <span className="text-gray-500 line-through text-sm">
                            ৳{product.originalPrice.toFixed(2)}
                          </span>
                          <span className="text-[#2177b3] font-bold ml-2">
                            ৳{product.discountedPrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-[#2177b3] font-bold">
                          ৳{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button className="bg-[#2177b3] hover:bg-[#1a5a8a] text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110">
                      <FaShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="mb-12 bg-gradient-to-r from-[#2177b3] to-[#2a8bd3] rounded-2xl p-6 text-white overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-white/5"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Special Health Package</h2>
            <p className="mb-4 max-w-lg">Get 20% off on your first order of medicine or lab tests. Use code <span className="font-bold">HEALTH20</span> at checkout.</p>
            <button className="bg-white text-[#2177b3] hover:bg-gray-100 px-6 py-2 rounded-full font-medium shadow-md transition-all duration-300 transform hover:scale-105">
              Claim Offer
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryPage;