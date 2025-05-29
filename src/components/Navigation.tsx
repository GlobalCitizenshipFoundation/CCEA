
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Users, 
  FileText, 
  Calendar, 
  BookOpen, 
  Mail, 
  UserCheck,
  Building,
  Shield,
  ChevronDown
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    membership: false,
    team: false,
    content: false
  });
  const location = useLocation();

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    {
      name: 'Members & Membership',
      icon: UserCheck,
      dropdown: 'membership',
      items: [
        { name: 'Membership Information', href: '/membership', icon: UserCheck },
        { name: 'All Members', href: '/members', icon: Users }
      ]
    },
    {
      name: 'Articles & Resources',
      icon: FileText,
      dropdown: 'content',
      items: [
        { name: 'Articles', href: '/articles', icon: FileText },
        { name: 'Resources', href: '/resources', icon: BookOpen }
      ]
    },
    { name: 'Events', href: '/events', icon: Calendar },
    {
      name: 'Team & Governance',
      icon: Building,
      dropdown: 'team',
      items: [
        { name: 'Our Team', href: '/team', icon: Building },
        { name: 'Governance', href: '/governance', icon: Shield }
      ]
    },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  const isActive = (path: string) => location.pathname === path;

  const isDropdownActive = (items: any[]) => {
    return items.some(item => isActive(item.href));
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-semibold text-gray-900">CCEA</span>
                <p className="text-sm text-gray-600">Civic and Citizenship Education Alliance</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.dropdown as keyof typeof dropdowns)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isDropdownActive(item.items || [])
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {dropdowns[item.dropdown as keyof typeof dropdowns] && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`flex items-center px-4 py-2 text-sm transition-colors ${
                              isActive(subItem.href)
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                            onClick={() => setDropdowns({ membership: false, team: false, content: false })}
                          >
                            <subItem.icon className="h-4 w-4 mr-3" />
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="ml-4 bg-blue-600 hover:bg-blue-700">
              <Link to="/membership">Join Alliance</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.dropdown as keyof typeof dropdowns)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isDropdownActive(item.items || [])
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 mr-3" />
                          {item.name}
                        </div>
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${
                          dropdowns[item.dropdown as keyof typeof dropdowns] ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {dropdowns[item.dropdown as keyof typeof dropdowns] && (
                        <div className="pl-6 space-y-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                                isActive(subItem.href)
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="h-4 w-4 mr-3" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/membership">Join Alliance</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
