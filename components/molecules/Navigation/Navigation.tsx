'use client';

import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon/Icon';
import { cn } from '@/lib/utils';

interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  onItemClick?: (href: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  className,
  onItemClick 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={cn("relative", className)}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {items.map((item) => (
          <button
            key={item.href}
            onClick={() => onItemClick?.(item.href)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              item.isActive
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? "close" : "menu"} />
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 md:hidden">
          {items.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                onItemClick?.(item.href);
                setMobileMenuOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-2 text-sm font-medium transition-colors",
                item.isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;