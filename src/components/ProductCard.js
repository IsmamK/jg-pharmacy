import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaRegHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.slug}`}>
        <div className="relative h-48 bg-gray-100 group">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform"
          />
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50">
            <FaRegHeart className="text-gray-400 hover:text-red-500" />
          </button>
          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-medium text-gray-800 hover:text-blue-600 line-clamp-2 h-12">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'} />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        
        <div className="mt-3">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
          )}
        </div>
        
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;