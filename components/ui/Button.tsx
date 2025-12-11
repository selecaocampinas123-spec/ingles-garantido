import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-600/50 shadow-lg shadow-primary-600/50 hover:shadow-xl hover:shadow-primary-600/60',
    secondary: 'bg-dark-800 text-primary-400 border-2 border-primary-600/50 hover:bg-dark-700 hover:border-primary-600 focus:ring-primary-600/30',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
