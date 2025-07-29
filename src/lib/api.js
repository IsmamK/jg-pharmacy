import { categories } from "@/lib/constants";

export async function getCategoryData(categoryId) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    return {
      id: categoryId,
      name: 'Category not found',
      description: 'This category does not exist',
      featuredProducts: []
    };
  }

  return {
    ...category,
    featuredProducts: Array(8).fill().map((_, i) => ({
      id: `${categoryId}-${i}`,
      name: `Product ${i+1} in ${category.name}`,
      price: (Math.random() * 100).toFixed(2),
      image: '/images/products/default.jpg',
    })),
  };
}