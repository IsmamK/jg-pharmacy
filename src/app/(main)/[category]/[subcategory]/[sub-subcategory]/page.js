"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaStar, FaRegStar, FaStarHalfAlt, FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SubSubCategoryPage() {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  
  // Extract category, subcategory, and sub-subcategory from URL
  const category = pathParts[0];
  const subcategory = pathParts[1];
  const subSubcategory = pathParts[2];
  
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Amoxicillin",
      price: 12.99,
      discountPrice: 9.99,
      rating: 4.5,
      reviews: 128,
      image: "/Amoxilin.webp",
      description: "Broad-spectrum antibiotic for bacterial infections",
      benefits: [
        "Treats various infections",
        "Effective against many bacteria",
        "Fast-acting formula"
      ]
    },
    {
      id: 2,
      name: "Azithromycin",
      price: 18.50,
      discountPrice: 15.99,
      rating: 4.2,
      reviews: 95,
      image: "/Azithromycin.jpeg",
      description: "Macrolide antibiotic for respiratory infections",
      benefits: [
        "Short treatment course",
        "Effective for pneumonia",
        "Minimal side effects"
      ]
    },
    {
      id: 3,
      name: "Ciprofloxacin",
      price: 22.75,
      discountPrice: 19.99,
      rating: 4.0,
      reviews: 87,
      image: "/Ciprofloxacin.jpg",
      description: "Fluoroquinolone antibiotic for UTIs and more",
      benefits: [
        "Broad-spectrum coverage",
        "Effective for complex infections",
        "Convenient dosing"
      ]
    },
    {
      id: 4,
      name: "Doxycycline",
      price: 15.25,
      discountPrice: 12.49,
      rating: 4.3,
      reviews: 112,
      image: "/Doxycycline.jpg",
      description: "Tetracycline antibiotic for various infections",
      benefits: [
        "Versatile uses",
        "Long-lasting effects",
        "Well-tolerated"
      ]
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2177b3] to-[#1a5d8a] shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-2 text-sm text-white/90 mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${category}`} className="hover:text-white transition-colors capitalize">{category.replace("-", " ")}</Link>
            <span>/</span>
            <Link href={`/${category}/${subcategory}`} className="hover:text-white transition-colors capitalize">{subcategory.replace("-", " ")}</Link>
            <span>/</span>
            <span className="font-medium text-white capitalize">{subSubcategory.replace("-", " ")}</span>
          </div>
          <h1 className="text-4xl font-bold text-white capitalize">{subSubcategory.replace("-", " ")}</h1>
          <p className="text-white/90 mt-2">Premium quality medications for your health and wellness</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 25px -5px rgba(33, 119, 179, 0.2), 0 10px 10px -5px rgba(33, 119, 179, 0.1)"
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-60 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.discountPrice ? `Save ${Math.round((1 - product.discountPrice / product.price) * 100)}%` : "Popular"}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-[#2177b3] hover:text-white transition-colors shadow-sm">
                    <FaHeart />
                  </button>
                  <button className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-[#2177b3] hover:text-white transition-colors shadow-sm">
                    <FaShare />
                  </button>
                </div>
                <div className="relative w-full h-40">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <Link href={`/${category}/individualsProduct/${product.name.toLowerCase().replace(" ", "-")}`}>
                  <h3 className="font-bold text-xl text-gray-800 hover:text-[#2177b3] transition-colors mb-1">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                </div>
                
                {/* Price */}
                <div className="mb-4 flex items-center">
                  {product.discountPrice ? (
                    <>
                      <span className="text-2xl font-bold text-[#2177b3]">${product.discountPrice}</span>
                      <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-[#2177b3]">${product.price}</span>
                  )}
                </div>
                
                {/* Benefits */}
                <ul className="mb-5 space-y-2">
                  {product.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#2177b3] mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-[#2177b3] to-[#1a5d8a] hover:from-[#1a5d8a] hover:to-[#144b75] text-white py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                  <Link 
                    href={`/${category}/individualsProduct/${product.name.toLowerCase().replace(" ", "-")}`}
                    className="bg-white border border-[#2177b3] text-[#2177b3] hover:bg-[#f0f7ff] py-3 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md flex items-center justify-center"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Info Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#2177b3] to-[#1a5d8a] rounded-3xl p-10 text-white shadow-xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">About {subSubcategory.replace("-", " ")}</h2>
              <p className="text-lg mb-8 text-white/90">
                Our {subSubcategory.replace("-", " ")} collection features premium medications that are rigorously tested 
                and approved by health authorities. We prioritize your well-being by offering only the most 
                effective and safe treatment options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3">Quality Assurance</h3>
                <p className="text-white/80">All medications undergo strict quality control and are sourced from FDA-approved manufacturers.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3">Expert Support</h3>
                <p className="text-white/80">24/7 access to licensed pharmacists for personalized medication advice.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3">Fast & Discreet</h3>
                <p className="text-white/80">Free express shipping with plain packaging for your privacy.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2177b3] mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our pharmacists are ready to help you find the right medication for your needs. 
            Contact us anytime for personalized advice.
          </p>
          <button className="bg-gradient-to-r from-[#2177b3] to-[#1a5d8a] hover:from-[#1a5d8a] hover:to-[#144b75] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
            Chat with a Pharmacist
          </button>
        </div>
      </div>
    </div>
  );
}