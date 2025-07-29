// src/services/dummyApi.js

// Collections API
export const getCollections = () => {
  return {
    collections: [
      {
        id: 1,
        name: "Top Deals of the Week",
        subtitle: "Don't miss out on these exclusive offers!",
        type: "featured",
        productIds: [1, 2, 3, 4, 5, 6, 7]
      },
      {
        id: 2,
        name: "Best Sellers",
        subtitle: "Our most popular products",
        type: "bestsellers",
        productIds: [8, 9, 10, 11, 12]
      },
      {
        id: 3,
        name: "New Arrivals",
        subtitle: "Fresh products just for you",
        type: "new",
        productIds: [13, 14, 15, 16]
      }
    ]
  };
};

// Collection Products API
export const getCollectionProducts = (collectionId) => {
  const allProducts = {
    1: [
      {
        id: 1,
        name: "Wireless Headphones",
        slug: "wireless-headphones",
        price: 120.0,
        discountPrice: 60.0,
        discount: 50,
        image: "https://getbyweb.com/wp-content/uploads/2024/09/Fogg-Fine-Bay-Breeze.webp",
        rating: 4.5,
        reviews: 124,
        deliveryTime: "12-24 Hours"
      },
      // ... other products
    ],
    2: [
      // Best sellers products
    ],
    3: [
      // New arrivals products
    ]
  };
  
  return {
    collection: getCollections().collections.find(c => c.id === collectionId),
    products: allProducts[collectionId] || []
  };
};

// Individual Product API
export const getProductDetails = (productId) => {
  const products = {
    1: {
      id: 1,
      name: "Napa 500mg Tablet",
      slug: "napa-500mg-tablet",
      category: "medicine",
      subcategory1: "pain-relievers",
      subcategory2: "fever",
      subcategory3: "tablets",
      images: [
        "/napa-1.webp",
        "/napa-2.webp",
        "/napa-3.webp"
      ],
      discount: 9,
      deliveryTime: "12-24 Hours",
      description: "Napa 500mg Tablet is a pain-relieving medicine.",
      detailedDescription: "Contains Paracetamol as its active ingredient...",
      originalPrice: 12,
      discountedPrice: 10.91,
      rating: 4.5,
      reviews: 124,
      manufacturer: "Beximco Pharmaceuticals Ltd.",
      genericName: "Paracetamol",
      dosage: "1 tablet every 4-6 hours",
      sideEffects: "Rare side effects may include...",
      safetyInfo: [
        "Do not exceed the recommended dose",
        "Consult a doctor if symptoms persist"
      ],
      benefits: [
        "Effective relief from mild to moderate pain",
        "Reduces fever quickly"
      ],
      reviews: [
        {
          id: 1,
          user: "John Doe",
          rating: 5,
          date: "2023-05-15",
          comment: "Works great for my headaches!"
        },
        // ... more reviews
      ]
    },
    // ... other products
  };
  
  return products[productId] || null;
};