"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const CollectionPage = () => {
  const router = useRouter();
  const { category } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Sample data - in a real app, you would fetch this based on the category
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

  const filteredProducts =
    selectedFilter === "all"
      ? sampleData.cards
      : sampleData.cards.filter(
          (product) =>
            product.subcategory === selectedFilter ||
            product.supervision === selectedFilter
        );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleProductClick = (slug) => {
    router.push(`/${sampleData.category}/individualsProduct/${slug}/`);
  };

  const subcategories = [
    ...new Set(sampleData.cards.map((p) => p.subcategory)),
  ];
  const supervisions = [
    ...new Set(sampleData.cards.map((p) => p.supervision)),
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">
            {category ? category.replace("-", " ") : "Loading"} Collection
          </h1>
          <p className="text-gray-600 mt-2">
            {sampleData.cards.length} products available
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedFilter === "all"
                  ? "bg-[#2177b3] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Products
            </button>

            {subcategories.map((subcat) => (
              <button
                key={subcat}
                onClick={() => setSelectedFilter(subcat)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedFilter === subcat
                    ? "bg-[#2177b3] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {subcat}
              </button>
            ))}

            {supervisions.map((supervision) => (
              <button
                key={supervision}
                onClick={() => setSelectedFilter(supervision)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedFilter === supervision
                    ? "bg-[#2177b3] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {supervision}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                />
                {product.offer && (
                  <div className="absolute top-2 right-2 bg-[#2177b3] text-white text-xs font-bold px-2 py-1 rounded">
                    {product.offer}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {product.cardName}
                  </h3>
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
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-[#2177b3]">
                      ${product.discountPrice}
                    </span>
                    {product.productPrice && (
                      <span className="text-xs text-gray-500 line-through ml-2">
                        ${product.productPrice}
                      </span>
                    )}
                  </div>
                  <button
                    className="text-[#2177b3] hover:text-blue-700 text-sm font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to cart logic here
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
