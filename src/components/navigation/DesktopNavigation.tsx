
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { navigationItems } from './NavigationItems';

interface DesktopNavigationProps {
  dropdowns: {
    membership: boolean;
    team: boolean;
    content: boolean;
    governance: boolean;
  };
  toggleDropdown: (dropdown: keyof DesktopNavigationProps['dropdowns']) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ dropdowns, toggleDropdown }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const isDropdownActive = (items: any[]) => {
    return items.some(item => {
      if (item.items) {
        return item.items.some((subItem: any) => isActive(subItem.href));
      }
      return isActive(item.href);
    });
  };

  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-6">
      {navigationItems.map((item) => {
        if (item.dropdown) {
          const dropdownKey = item.dropdown as keyof typeof dropdowns;
          return (
            <div key={item.name} className="relative">
              <Button
                variant="ghost"
                className={`flex items-center space-x-1 px-3 py-2 text-sm ${
                  isDropdownActive(item.items || []) ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600`}
                onClick={() => toggleDropdown(dropdownKey)}
                aria-haspopup="true"
                aria-expanded={dropdowns[dropdownKey]}
              >
                <span>{item.name}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns[dropdownKey] ? 'rotate-180' : ''}`} />
              </Button>
              
              {dropdowns[dropdownKey] && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    {item.items?.map((subItem, index) => {
                      if (subItem.items) {
                        // Handle nested items (like in CCEA Governance)
                        return (
                          <div key={index} className="px-3 py-2">
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                              {subItem.name}
                            </div>
                            {subItem.items.map((nestedItem: any, nestedIndex: number) => (
                              <Link
                                key={nestedIndex}
                                to={nestedItem.href}
                                className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                                  isActive(nestedItem.href)
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                                onClick={() => toggleDropdown(dropdownKey)}
                              >
                                <nestedItem.icon className="h-4 w-4 mr-3" />
                                {nestedItem.name}
                              </Link>
                            ))}
                          </div>
                        );
                      } else {
                        // Handle regular items
                        return (
                          <Link
                            key={index}
                            to={subItem.href}
                            className={`flex items-center px-4 py-2 text-sm transition-colors ${
                              isActive(subItem.href)
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={() => toggleDropdown(dropdownKey)}
                          >
                            <subItem.icon className="h-4 w-4 mr-3" />
                            {subItem.name}
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        } else {
          return (
            <Button
              key={item.name}
              variant="ghost"
              className={`flex items-center space-x-1 px-3 py-2 text-sm ${
                isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600`}
              asChild
            >
              <Link to={item.href}>
                <span>{item.name}</span>
              </Link>
            </Button>
          );
        }
      })}
    </div>
  );
};

export default DesktopNavigation;
