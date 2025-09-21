import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-10 w-auto max-w-[120px]',
    md: 'h-14 w-auto max-w-[160px]',
    lg: 'h-18 w-auto max-w-[200px]',
    xl: 'h-24 w-auto max-w-[240px]'
  };

  const logoSrc = {
    full: '/images/logo.svg',
    icon: '/images/logo-icon.svg',
    white: '/images/logo-white.svg'
  };

  return (
    <img
      src={logoSrc[variant]}
      alt="PetWellBot - AI Pet Health Assistant"
      className={`${sizeClasses[size]} ${className}`}
      style={{ minWidth: variant === 'icon' ? '50px' : '120px' }}
      onError={(e) => {
        // Fallback if SVG fails to load
        console.log('Logo failed to load:', logoSrc[variant]);
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  );
};

export default Logo;