// components/AdminSidebar.js
import { useState } from 'react';
import Link from 'next/link';
import {
  FaTachometerAlt as DashboardIcon,
  FaBook as CatalogIcon,
  FaUsers as CustomersIcon,
  FaShoppingCart as OrdersIcon,
  FaUserTie as StaffIcon,
  FaStore as StoreIcon,
  FaGlobe as InternationalIcon,
  FaFile as PagesIcon,
  FaCog as SettingsIcon,
  FaBox as ProductsIcon,
  FaTags as CategoriesIcon,
  FaSlidersH as AttributesIcon,
  FaTicketAlt as CouponsIcon,
  FaLanguage as LanguagesIcon,
  FaMoneyBillWave as CurrenciesIcon,
  FaEye as ViewStoreIcon,
  FaPalette as CustomizationIcon,
  FaCogs as StoreSettingsIcon,
  FaChevronDown as ChevronDown,
  FaChevronRight as ChevronRight
} from 'react-icons/fa';

const AdminSidebar = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');
  const [expandedMenus, setExpandedMenus] = useState({
    catalog: false,
    international: false,
    onlineStore: false
  });

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const menuStructure = [
    {
      name: 'Dashboard',
      icon: DashboardIcon,
      section: 'Main Navigation',
      link: '/dashboard'
    },
    {
      name: 'Catalog',
      icon: CatalogIcon,
      section: 'Main Navigation',
      subItems: [
        { name: 'Products', icon: ProductsIcon, link: '/catalog/product' },
        { name: 'Categories', icon: CategoriesIcon, link: '/catalog/category' },
        { name: 'Attributes', icon: AttributesIcon, link: '/catalog/attributes' },
        { name: 'Coupons', icon: CouponsIcon, link: '/catalog/coupons' }
      ]
    },
    {
      name: 'Customers',
      icon: CustomersIcon,
      section: 'Main Navigation',
      link: '/customers'
    },
    {
      name: 'Orders',
      icon: OrdersIcon,
      section: 'Main Navigation',
      link: '/orders'
    },
    {
      name: 'Our Staff',
      icon: StaffIcon,
      section: 'Main Navigation',
      link: '/staff'
    },
    {
      name: 'International',
      icon: InternationalIcon,
      section: 'System',
      subItems: [
        { name: 'Languages', icon: LanguagesIcon, link: '/international/languages' },
        { name: 'Currencies', icon: CurrenciesIcon, link: '/international/currencies' }
      ]
    },
    {
      name: 'Online Store',
      icon: StoreIcon,
      section: 'System',
      subItems: [
        { name: 'View Store', icon: ViewStoreIcon, link: '/online-store/view-store' },
        { name: 'Store Customization', icon: CustomizationIcon, link: '/online-store/customization' },
        { name: 'Store Settings', icon: StoreSettingsIcon, link: '/online-store/settings' }
      ]
    },
    {
      name: 'Pages',
      icon: PagesIcon,
      section: 'System',
      link: '/pages'
    },
    {
      name: 'Settings',
      icon: SettingsIcon,
      section: 'System',
      link: '/settings'
    }
  ];

  const sections = [...new Set(menuStructure.map((item) => item.section))];

  return (
    <div className="w-64 bg-white shadow-xl fixed h-screen transition-all duration-300 overflow-y-auto border-r border-gray-200">
      {/* Company Logo */}
      <div className="p-5 border-b border-gray-200 flex justify-center bg-white">
        <div className="w-32 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-800 font-bold">
          Company Logo
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-4">
        {sections.map((section) => (
          <div key={section}>
            <h3 className="text-gray-500 text-xs uppercase font-semibold px-5 py-3 tracking-wider">
              {section}
            </h3>
            <ul>
              {menuStructure
                .filter((item) => item.section === section)
                .map((item) => (
                  <li key={item.name}>
                    {item.link ? (
                      <Link href={item.link} passHref>
                        <div
                          className={`flex items-center px-5 py-3 cursor-pointer border-l-4 ${
                            activeLink === item.name
                              ? 'bg-blue-50 border-blue-500 text-blue-600'
                              : 'border-transparent hover:text-blue-500 text-black'
                          }`}
                          onClick={() => setActiveLink(item.name)}
                        >
                          <item.icon className="mr-3 text-lg" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <div
                          className={`flex items-center justify-between px-5 py-3 cursor-pointer border-l-4 ${
                            activeLink.startsWith(item.name)
                              ? 'bg-blue-50 border-blue-500 text-blue-600'
                              : 'border-transparent hover:text-blue-500 text-black'
                          }`}
                          onClick={() =>
                            toggleMenu(item.name.toLowerCase().replace(' ', ''))
                          }
                        >
                          <div className="flex items-center">
                            <item.icon className="mr-3 text-lg" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          {expandedMenus[item.name.toLowerCase().replace(' ', '')] ? (
                            <ChevronDown className="text-gray-400 text-sm" />
                          ) : (
                            <ChevronRight className="text-gray-400 text-sm" />
                          )}
                        </div>
                        {expandedMenus[item.name.toLowerCase().replace(' ', '')] && (
                          <ul className="bg-gray-50">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.name}>
                                <Link href={subItem.link} passHref>
                                  <div
                                    className={`flex items-center px-5 py-3 pl-12 cursor-pointer ${
                                      activeLink === `${item.name} ${subItem.name}`
                                        ? 'bg-blue-100 text-blue-600'
                                        : 'hover:text-blue-500 text-black'
                                    }`}
                                    onClick={() =>
                                      setActiveLink(`${item.name} ${subItem.name}`)
                                    }
                                  >
                                    <subItem.icon className="mr-3 text-base" />
                                    <span>{subItem.name}</span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
