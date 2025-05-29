
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { navigationItems } from './NavigationItems';

interface DropdownState {
  membership: boolean;
  team: boolean;
  content: boolean;
}

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dropdowns: DropdownState;
  toggleDropdown: (dropdown: keyof DropdownState) => void;
  isActive: (path: string) => boolean;
  isDropdownActive: (items: any[]) => boolean;
}

const MobileNavigation = ({ 
  isOpen, 
  setIsOpen, 
  dropdowns, 
  toggleDropdown, 
  isActive, 
  isDropdownActive 
}: MobileNavigationProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
        {navigationItems.map((item) => (
          <div key={item.name}>
            {item.dropdown ? (
              <div>
                <button
                  onClick={() => toggleDropdown(item.dropdown as keyof DropdownState)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isDropdownActive(item.items || [])
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  aria-label={`${item.name} menu`}
                  aria-expanded={dropdowns[item.dropdown as keyof DropdownState]}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </div>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${
                    dropdowns[item.dropdown as keyof DropdownState] ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {dropdowns[item.dropdown as keyof DropdownState] && (
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
          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/membership">Join Alliance</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
