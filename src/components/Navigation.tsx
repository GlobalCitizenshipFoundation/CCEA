
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import NavigationLogo from './navigation/NavigationLogo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    membership: false,
    team: false,
    content: false,
    governance: false
  });
  const location = useLocation();

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavigationLogo />
          </div>

          <DesktopNavigation 
            dropdowns={dropdowns}
            toggleDropdown={toggleDropdown}
          />

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <MobileNavigation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dropdowns={dropdowns}
          toggleDropdown={toggleDropdown}
          isActive={isActive}
          isDropdownActive={isDropdownActive}
        />
      </div>
    </nav>
  );
};

export default Navigation;
