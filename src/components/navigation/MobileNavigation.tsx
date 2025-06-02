
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { navigationItems } from './NavigationItems';

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dropdowns: {
    membership: boolean;
    team: boolean;
    content: boolean;
    governance: boolean;
  };
  toggleDropdown: (dropdown: keyof MobileNavigationProps['dropdowns']) => void;
  isActive: (path: string) => boolean;
  isDropdownActive: (items: any[]) => boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  setIsOpen,
  dropdowns,
  toggleDropdown,
  isActive,
  isDropdownActive
}) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigationItems.map((item) => {
          if (item.dropdown) {
            const dropdownKey = item.dropdown as keyof typeof dropdowns;
            return (
              <div key={item.name}>
                <Button
                  variant="ghost"
                  className={`w-full justify-between ${
                    isDropdownActive(item.items || []) ? 'text-blue-600' : 'text-gray-700'
                  } hover:text-blue-600`}
                  onClick={() => toggleDropdown(dropdownKey)}
                >
                  <div className="flex items-center">
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.name}
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns[dropdownKey] ? 'rotate-180' : ''}`} />
                </Button>
                
                {dropdowns[dropdownKey] && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.items?.map((subItem, index) => {
                      if (subItem.items) {
                        // Handle nested items (like in CCEA Governance)
                        return (
                          <div key={index} className="ml-2">
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                              {subItem.name}
                            </div>
                            {subItem.items.map((nestedItem: any, nestedIndex: number) => (
                              <Link
                                key={nestedIndex}
                                to={nestedItem.href}
                                className={`flex items-center px-2 py-2 text-sm rounded-md transition-colors ${
                                  isActive(nestedItem.href)
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                                onClick={() => setIsOpen(false)}
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
                            className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                              isActive(subItem.href)
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <subItem.icon className="h-4 w-4 mr-3" />
                            {subItem.name}
                          </Link>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <Button
                key={item.name}
                variant="ghost"
                className={`w-full justify-start ${
                  isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600`}
                asChild
              >
                <Link to={item.href} onClick={() => setIsOpen(false)}>
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.name}
                </Link>
              </Button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
