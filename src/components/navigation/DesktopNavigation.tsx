
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { navigationItems } from './NavigationItems';

interface DropdownState {
  membership: boolean;
  team: boolean;
  content: boolean;
}

interface DesktopNavigationProps {
  dropdowns: DropdownState;
  toggleDropdown: (dropdown: keyof DropdownState) => void;
}

const DesktopNavigation = ({ dropdowns, toggleDropdown }: DesktopNavigationProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const isDropdownActive = (items: any[]) => {
    return items.some(item => isActive(item.href));
  };

  return (
    <div className="hidden lg:flex items-center space-x-1">
      {navigationItems.map((item) => (
        <div key={item.name} className="relative">
          {item.dropdown ? (
            <div className="relative">
              <button
                onClick={() => toggleDropdown(item.dropdown as keyof DropdownState)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isDropdownActive(item.items || [])
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                aria-label={`${item.name} menu`}
                aria-expanded={dropdowns[item.dropdown as keyof DropdownState]}
                aria-haspopup="true"
              >
                {item.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {dropdowns[item.dropdown as keyof DropdownState] && (
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
                      onClick={() => toggleDropdown(item.dropdown as keyof DropdownState)}
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
      <Button className="ml-4 bg-blue-600 hover:bg-blue-700" asChild>
        <Link to="/membership">Join Alliance</Link>
      </Button>
    </div>
  );
};

export default DesktopNavigation;
