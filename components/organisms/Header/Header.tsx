import React from 'react';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon/Icon';
import Navigation from '@/components/molecules/Navigation/Navigation';
import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const navigationItems = [
    { label: 'Home', href: '/', isActive: true },
    { label: 'Facebook', href: '/facebook' },
    { label: 'Instagram', href: '/instagram' },
    { label: 'Twitter', href: '/twitter' },
    { label: 'TikTok', href: '/tiktok' },
    { label: 'Support', href: '/support' }
  ];

  return (
    <header className={cn("bg-white border-b border-gray-200 sticky top-0 z-50", className)}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Icon name="shield" size="sm" />
                <span>Secure & Verified Accounts</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <Icon name="check" size="sm" />
                <span>24/7 Support</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">🎉 New accounts added daily!</span>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Icon name="user" size="sm" />
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">AccsMarket</h1>
                  <p className="text-xs text-gray-500">Premium Accounts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden lg:block">
            <Navigation items={navigationItems} />
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block w-80">
              <SearchBar placeholder="Search accounts..." />
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Icon name="user" size="sm" />
                Account
              </Button>
              
              <Button size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Navigation items={navigationItems} />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar placeholder="Search accounts..." />
        </div>
      </div>
    </header>
  );
};

export default Header;