
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 min-w-0">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0">
        <img 
          src="/lovable-uploads/9fe4bf5c-153e-4db8-a758-19dbd5b2bf54.png" 
          alt="CCEA Logo" 
          className="w-8 h-8 object-contain"
        />
      </div>
      <div className="hidden sm:block min-w-0">
        <div className="text-xl font-semibold text-gray-900 leading-tight">CCEA</div>
        <div className="text-sm text-gray-600 leading-tight">Civic and Citizenship Education Alliance</div>
      </div>
    </Link>
  );
};

export default NavigationLogo;
