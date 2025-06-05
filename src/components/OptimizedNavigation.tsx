
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { preloadRoute } from '@/utils/lazyLoader';

const OptimizedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Preload routes on hover for better UX
  const handleLinkHover = (routeImport: () => Promise<any>) => {
    preloadRoute(routeImport);
  };

  const navigationItems = [
    { 
      name: 'About', 
      path: '/about',
      preload: () => import('../pages/About')
    },
    { 
      name: 'Articles', 
      path: '/articles',
      preload: () => import('../pages/Articles')
    },
    { 
      name: 'Events', 
      path: '/events',
      preload: () => import('../pages/Events')
    },
    { 
      name: 'Resources', 
      path: '/resources',
      preload: () => import('../pages/Resources')
    },
    { 
      name: 'Members', 
      path: '/members',
      preload: () => import('../pages/Members')
    },
    { 
      name: 'Membership', 
      path: '/membership',
      preload: () => import('../pages/Membership')
    },
    { 
      name: 'Contact', 
      path: '/contact',
      preload: () => import('../pages/Contact')
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">CCEA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onMouseEnter={() => handleLinkHover(item.preload)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default OptimizedNavigation;
