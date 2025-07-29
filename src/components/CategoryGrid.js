import Link from 'next/link';
import Image from 'next/image';

const CategoryGrid = () => {
  const subCategories = [
    {
      id: 1,
      name: 'Vitamins & Supplements',
      image: '/vitamins.jpg',
      count: 42
    },
    {
      id: 2,
      name: 'Personal Care',
      image: '/personal-care.jpg',
      count: 36
    },
    {
      id: 3,
      name: 'Health Devices',
      image: '/health-devices.jpg',
      count: 28
    },
    {
      id: 4,
      name: 'Ayurvedic',
      image: '/ayurvedic.jpg',
      count: 54
    },
    {
      id: 5,
      name: 'Homeopathy',
      image: '/homeopathy.jpg',
      count: 19
    },
    {
      id: 6,
      name: 'Baby Care',
      image: '/baby-care.jpg',
      count: 31
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {subCategories.map(category => (
        <Link 
          href={`/medical/${category.name.toLowerCase().replace(/ /g, '-')}`} 
          key={category.id}
          className="group"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="relative h-40 bg-gray-100">
              <Image 
                src={category.image} 
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 group-hover:text-blue-600">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{category.count} products</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;