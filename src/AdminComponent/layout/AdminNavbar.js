import { useState, useEffect } from 'react';
import { FaSearch, FaSun, FaMoon, FaBell, FaEnvelope, FaCog, FaUserCircle } from 'react-icons/fa';

export default function AdminNavbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationCount] = useState(3);
  const [messageCount] = useState(5);
  const [showTooltip, setShowTooltip] = useState(null);

  // Apply dark mode class to body when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const icons = [
    { 
      icon: darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />, 
      name: 'theme', 
      tooltip: darkMode ? 'Light Mode' : 'Dark Mode' 
    },
    { 
      icon: <FaBell />, 
      name: 'notification', 
      tooltip: 'Notifications',
      badge: notificationCount,
      badgeColor: 'bg-red-500'
    },
    { 
      icon: <FaEnvelope />, 
      name: 'message', 
      tooltip: 'Messages',
      badge: messageCount,
      badgeColor: 'bg-blue-500'
    },
    { 
      icon: <FaUserCircle className="text-indigo-600 dark:text-indigo-300 text-2xl" />, 
      name: 'profile', 
      tooltip: 'Profile' 
    }
  ];

  return (
    <nav 
      className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between h-20"
      style={{
        transition: 'background-color 0.2s ease, border-color 0.2s ease'
      }}
    >
      {/* Left side - Logo and Settings */}
      <div className="flex items-center">
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-600 mr-4"></div>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            style={{
              animation: 'spin 4s linear infinite',
              transition: 'all 0.3s ease',
              height: '40px',
              width: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={() => setShowTooltip('settings')}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <FaCog />
            {showTooltip === 'settings' && (
              <span className="absolute top-full mt-2 px-2 py-1 text-xs bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded whitespace-nowrap">
                Settings
              </span>
            )}
          </button>
        </div>

      {/* Center - Search bar */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:placeholder-gray-400 dark:text-white"
            style={{
              transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease'
            }}
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Right side - Icons */}
      <div className="flex items-center space-x-4">
        {icons.map((item) => (
          <div key={item.name} className="relative">
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-gray-300"
              style={{
                transition: 'all 0.3s ease',
                height: '36px',
                width: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...(item.name === 'theme' && darkMode && { transform: 'rotate(12deg)' })
              }}
              onClick={item.name === 'theme' ? () => setDarkMode(!darkMode) : null}
              onMouseEnter={() => setShowTooltip(item.name)}
              onMouseLeave={() => setShowTooltip(null)}
            >
              {item.icon}
              {item.badge && (
                <span 
                  className={`absolute -top-1 -right-1 w-5 h-5 ${item.badgeColor} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                  style={{
                    animation: item.name === 'notification' ? 'pulse 1.5s infinite' : 'bounce 1s infinite'
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
            {showTooltip === item.name && (
              <span className="absolute top-full mt-2 px-2 py-1 text-xs bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded whitespace-nowrap">
                {item.tooltip}
              </span>
            )}
          </div>
        ))}

        <div className="flex items-center">
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-600 mr-4"></div>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-gray-300"
            style={{
              animation: 'spin 4s linear infinite',
              transition: 'all 0.3s ease',
              height: '40px',
              width: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={() => setShowTooltip('settings')}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <FaCog />
            {showTooltip === 'settings' && (
              <span className="absolute top-full mt-2 px-2 py-1 text-xs bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded whitespace-nowrap">
                Settings
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Inline style tag for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </nav>
  );
}