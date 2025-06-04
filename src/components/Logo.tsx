
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 60" className="w-full h-full">
        <text x="10" y="40" className="fill-blue-600 text-2xl font-bold">CCEA</text>
      </svg>
    </div>
  );
};

export default Logo;
