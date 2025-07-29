"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaShoppingCart, FaHeart, FaRegHeart, FaShare, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

// Product data with local image paths
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    slug: "wireless-bluetooth-headphones",
    price: 89.99,
    image: "/images/headphones.jpg", // Changed to local path
    category: "Electronics",
    subcategory: "Audio",
    subSubcategory: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    ratings: 4.5,
    reviews: [
      {
        user: "JohnDoe",
        rating: 5,
        comment: "Excellent sound quality! The noise cancellation is better than I expected."
      }
    ],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone"
    ],
    colors: ["Black", "Silver"],
    stock: 15
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    slug: "organic-cotton-t-shirt",
    price: 24.99,
    image: "/images/tshirt.jpg", // Changed to local path
    category: "Clothing",
    subcategory: "Men's Fashion",
    subSubcategory: "Casual Wear",
    description: "100% organic cotton t-shirt with eco-friendly dyes.",
    ratings: 4.2,
    reviews: [
      {
        user: "EcoWarrior",
        rating: 5,
        comment: "Love the sustainable materials!"
      }
    ],
    features: [
      "100% organic cotton",
      "Eco-friendly dyes",
      "Reinforced stitching"
    ],
    sizes: ["S", "M", "L"],
    colors: ["White", "Black"],
    stock: 42
  }
];

const ProductPage = ({ params }) => {
  console.log(params)
  console.log(params.category)
  console.log(params.slug)
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.slug === params.items) || products[0];

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  // Calculate discounted price (example 10% off)
  const discountedPrice = product.price * 0.9;

  // Render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} inline-block`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <IoIosArrowForward className="mx-2 text-xs" />
          <Link href={`/${product.category.toLowerCase()}`} className="hover:text-blue-600 transition-colors capitalize">
            {product.category}
          </Link>
          <IoIosArrowForward className="mx-2 text-xs" />
          <span className="text-blue-600 font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized // Remove this if you configure images in next.config.js
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <span>No Image Available</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md z-10">
                  10% OFF
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${selectedImage === i-1 ? 'border-blue-600' : 'border-gray-200 hover:border-blue-300'}`}
                    onClick={() => setSelectedImage(i-1)}
                  >
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Image {i}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="text-2xl text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                  </button>
                </div>
                
                <div className="flex items-center mt-3 space-x-4">
                  <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                    {renderStars(product.ratings)}
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {product.ratings.toFixed(1)} ({product.reviews.length} reviews)
                    </span>
                  </div>
                  <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    In Stock ({product.stock} available)
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-gray-500 text-sm">Category:</span>
                  <div className="flex space-x-2 mt-1">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{product.category}</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">{product.subcategory}</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{product.subSubcategory}</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-blue-600">
                    {formatPrice(discountedPrice)}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded">
                    Save {formatPrice(product.price - discountedPrice)}
                  </span>
                  <span className="text-xs text-gray-500">
                    Free shipping on orders over $50
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg">
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center">
                  <FaShare className="text-gray-500 hover:text-blue-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="px-6">
              <div className="flex overflow-x-auto scrollbar-hide">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`border-b-2 py-4 px-4 text-sm font-medium whitespace-nowrap ${activeTab === 'description' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`border-b-2 py-4 px-4 text-sm font-medium whitespace-nowrap ${activeTab === 'reviews' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Reviews ({product.reviews.length})
                </button>
              </div>
            </div>

            <div className="px-6 pb-8">
              {/* Description Tab */}
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Product Description</h3>
                  <p className="text-gray-700 mb-6">{product.description}</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
                      <div className="flex items-center mt-1">
                        {renderStars(product.ratings)}
                        <span className="ml-2 text-sm text-gray-600">
                          {product.ratings.toFixed(1)} out of 5
                        </span>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Write a Review
                    </button>
                  </div>

                  <div className="space-y-6">
                    {product.reviews.map((review, i) => (
                      <div key={i} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                              {review.user.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium text-gray-900">{review.user}</h4>
                              <div className="flex items-center">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="mt-3 text-gray-700">{review.comment}</p>
                      </div>
                    ))}

                    {product.reviews.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;