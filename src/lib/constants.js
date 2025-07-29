import { 
  FaHeartbeat, 
  FaFlask, 
  FaSmile, 
  FaClinicMedical,
  FaBaby,
  FaLeaf,
  FaHome,
  FaPills,
  FaUtensils,
  FaPaw,
  FaHeart,
  FaCapsules,
  FaSeedling
} from 'react-icons/fa';

export const categories = [
  {
    id: 'medical',
    name: 'Medicines',
    icon: <FaHeartbeat />,
    subCategories: [
      { 
        id: 'prescription', 
        name: 'Prescription', 
        link: '/shop/medical/prescription' 
      },
      { 
        id: 'otc', 
        name: 'Over-the-Counter', 
        link: '/shop/medical/otc' 
      },
    ],
  },
  {
    id: 'labtest',
    name: 'Lab Tests',
    icon: <FaFlask />,
    link: '/shop/labtest', // Direct link for categories without subcategories
  },
  {
    id: 'beauty',
    name: 'Beauty',
    icon: <FaSmile />,
    subCategories: [
      { 
        id: 'skincare', 
        name: 'Skin Care', 
        link: '/shop/beauty/skincare' 
      },
      { 
        id: 'haircare', 
        name: 'Hair Care', 
        link: '/shop/beauty/haircare' 
      },
    ],
  },
  // Add more categories as needed
];