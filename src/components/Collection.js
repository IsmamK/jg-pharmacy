"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductSection = ({
  id,
  showSeeAll = true,
  showRating = true,
  showDiscount = true,
  showDelivery = true,
  showOriginalPrice = true,
}) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Sample data with collections and categories
  const sampleData = {
    collections: "Top Deals of the Week",
    category: "hardire",
    cards: [
      {
        id: 1,
        subcategory : 'Hardwire',
        sub_subcategory : '',
        supervision: 'featured-product',
        slug : 'wireless-earphone',
        offer: "50% OFF",
        hours: "Ends in 12h",
        image:
          "https://getbyweb.com/wp-content/uploads/2024/09/Fogg-Fine-Bay-Breeze.webp",
        cardName: "Wireless Headphones",
        productPrice: 120.0,
        discountPrice: 60.0,
        ratings: 4.5,
      },
      {
        id: 2,
        subcategory : 'Hardwire',
        sub_subcategory : '',
        supervision: 'featured-product',
        slug : 'Organic-Green-Tea',
        offer: "Buy 1 Get 1 Free",
        hours: "Ends in 6h",
        image:
          "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82NTU3M1wvNjU1NzMtMTY2OTM1NDk5OGI4MzliZTY1ZWQ2M2IyOWNhNjE4M2QxYzQ4MDlhYTk5LWpqNWVnYy53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
        cardName: "Organic Green Tea",
        productPrice: 25.0,
        discountPrice: 25.0,
        ratings: 4.8,
      },
      {
        id: 3,
        subcategory : 'Hardwire',
        sub_subcategory : '',
        supervision: 'featured-product',
        slug : 'Smart-LED-Bulb',
        offer: "30% OFF",
        hours: "Ends in 3h",
        image:
          "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82OTUzMFwvNjk1MzAtTGl2b24tQW50aS1IYWlyZmFsbC1Qcm90ZWluLVNoYW1wb28tMzAwbWwtRlJFRS1QYXJhY2h1dGUtU2tpblB1cmUtU2tpbi1Mb3Rpb24tTmF0dXJhbC1XaGl0ZS0xMDBtbC03N250dnEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
        cardName: "Smart LED Bulb",
        productPrice: 40.0,
        discountPrice: 28.0,
        ratings: 4.2,
      },
      {
        id: 4,
        subcategory : 'Hardwire',
        sub_subcategory : '',
        supervision: 'featured-product',
        slug : 'Fitness-Tracker-Band',
        offer: "20% OFF",
        hours: "Ends in 24h",
        image:
          "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC82ODE5OFwvNjgxOTgtNzFWdEVRemtES0wtYWN4OWt2LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDAsImZpdCI6Im91dHNpZGUifX19",
        cardName: "Fitness Tracker Band",
        productPrice: 75.0,
        discountPrice: 60.0,
        ratings: 4.6,
      },
      {
        id: 5,
        subcategory : 'Hardwire',
        sub_subcategory : '',
        supervision: 'featured-product',
        slug : 'Bluetooth-Speaker',
        offer: "60% OFF",
        hours: "Ends in 2h",
        image:
          "https://www.jiomart.com/images/product/original/rvtjpeg3uk/fogg-fine-breeze-no-gas-mild-fragrance-body-spray-for-women-everyday-deodorant-120ml-product-images-orvtjpeg3uk-p603975624-4-202308191228.jpg?im=Resize=(420,420)",
        cardName: "Bluetooth Speaker",
        productPrice: 100.0,
        discountPrice: 40.0,
        ratings: 4.7,
      },
      {
        id: 6,
        subcategory : 'Hardwire',
        sub_subcategory : '',
        supervision: 'featured-product',
        slug : 'Laptop-Stand',
        offer: "25% OFF",
        hours: "Ends in 8h",
        image:
          "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83ODQzMlwvNzg0MzItMTcxODI1NjU4ODNhZTVkYWQzMDM1MGVlN2FmYjI2MTk5ZGExYTZmNzdhLWl4aWx4My5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
        cardName: "Laptop Stand",
        productPrice: 50.0,
        discountPrice: 37.5,
        ratings: 4.3,
      },
      {
        id: 7,
        subcategory : 'Hardwire',
        sub_subcategory : '',
        supervision: 'featured-product',
        slug : 'Portable-Charger',
        offer: "15% OFF",
        hours: "Ends in 18h",
        image:
          "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83ODk3MVwvNzg5NzEtV2hhdHNBcHAtSW1hZ2UtMjAyNS0wMy0yNS1hdC0xNC0xYnF6MGkuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0Ijoib3V0c2lkZSJ9fX0=",
        cardName: "Portable Charger",
        productPrice: 60.0,
        discountPrice: 51.0,
        ratings: 4.4,
      },
    ],
  };

  // Handle product click
  const handleProductClick = (slug) => {
    router.push(`/${sampleData.category}/individualsProduct/${slug}/`);
  };

  // Handle see all click
  const handleSeeAllClick = () => {
    router.push(`/collections/${sampleData.category}`);
  };

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { collections, cards: products } = sampleData;
  const productsPerPage = isMobile ? 3 : 6;
  const visibleProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  const handleNext = () => {
    if (currentIndex + productsPerPage < products.length) {
      setCurrentIndex(prev => prev + productsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - productsPerPage);
    }
  };

  if (!isClient) {
    return null;
  }

  // Design 1 - Modern Blue Theme (#2177b3)
  if (id === 1) {
    return (
      <div className="px-4 md:px-8 py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {collections}
              </h2>
              <div className="flex space-x-2 mt-2">
                <span className="text-xs bg-[#2177b3] text-white px-2 py-1 rounded-full">
                  {sampleData.category}
                </span>
              </div>
            </div>
            {showSeeAll && (
              <button 
                className="text-[#2177b3] hover:text-blue-800 font-medium flex items-center text-sm md:text-base"
                onClick={handleSeeAllClick}
              >
                See all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#2177b3]/20 cursor-pointer group"
                  onClick={() => handleProductClick(product.slug)}
                >
                  <div className="p-3 flex flex-col h-full">
                    <div className="relative h-40 w-full rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center mb-3">
                      <Image
                        src={product.image}
                        alt={product.cardName}
                        width={300}
                        height={300}
                        className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/300x300?text=Product+Image";
                        }}
                      />
                      {showDiscount && product.offer && (
                        <div className="absolute top-2 left-2 bg-[#2177b3] text-white text-xs font-bold px-2 py-1 rounded-full">
                          {product.offer}
                        </div>
                      )}
                      {product.supervision && (
                        <div className="absolute top-2 right-2 bg-white text-[#2177b3] text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                          {product.supervision}
                        </div>
                      )}
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                        {product.cardName}
                      </h3>
                      {showDelivery && product.hours && (
                        <p className="text-xs text-gray-500 mb-2">{product.hours}</p>
                      )}

                      {showRating && (
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(product.ratings) ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs text-gray-500 ml-1">
                            ({product.ratings})
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-2">
                      <div className="flex items-end">
                        <span className="text-lg font-bold text-[#2177b3]">
                          ${product.discountPrice}
                        </span>
                        {showOriginalPrice && product.productPrice && (
                          <span className="text-xs text-gray-500 line-through ml-2">
                            ${product.productPrice}
                          </span>
                        )}
                      </div>
                      <button 
                        className="mt-2 w-full bg-[#2177b3] hover:bg-blue-700 text-white py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle add to cart logic here
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {products.length > productsPerPage && (
              <div className="flex justify-center mt-6 space-x-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-[#2177b3] text-white'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex + productsPerPage >= products.length}
                  className={`p-2 rounded-full ${currentIndex + productsPerPage >= products.length ? 'bg-gray-200 text-gray-400' : 'bg-[#2177b3] text-white'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Design 2 - Minimal Card Style
  if (id === 2) {
    return (
      <div className="px-4 md:px-8 py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {collections}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {products.length} products available
              </p>
            </div>
            <button 
              className="text-[#2177b3] hover:text-blue-800 font-medium flex items-center text-sm md:text-base"
              onClick={handleSeeAllClick}
            >
              Browse all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => handleProductClick(product.slug)}
              >
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.cardName}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x400?text=Product+Image";
                    }}
                  />
                  {showDiscount && product.offer && (
                    <div className="absolute top-2 right-2 bg-[#2177b3] text-white text-xs font-bold px-2 py-1 rounded">
                      {product.offer}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                      {product.cardName}
                    </h3>
                    {showRating && (
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs text-gray-500 ml-1">
                          {product.ratings}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-[#2177b3]">
                        ${product.discountPrice}
                      </span>
                      {showOriginalPrice && product.productPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">
                          ${product.productPrice}
                        </span>
                      )}
                    </div>
                    <button 
                      className="text-[#2177b3] hover:text-blue-700 text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle add to cart logic here
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {products.length > productsPerPage && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleSeeAllClick}
                className="px-6 py-2 bg-[#2177b3] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ProductSection;