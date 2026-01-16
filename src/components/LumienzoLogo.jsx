import React from 'react';

export default function LumienzoLogo({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24',
    '3xl': 'w-32 h-32'
  };

  return (
    <img 
      src="/logo.png" 
      alt="Lumienzo" 
      className={`${sizes[size]} object-contain ${className}`}
    />
  );
}
