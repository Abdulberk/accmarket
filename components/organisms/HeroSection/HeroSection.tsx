import React from 'react';
import { Button, Icon, Badge } from '@/components/atoms';
import { SearchBar } from '@/components/molecules';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const stats = [
    { label: 'Active Accounts', value: '50K+', icon: 'user' },
    { label: 'Happy Customers', value: '10K+', icon: 'star' },
    { label: 'Success Rate', value: '99.9%', icon: 'shield' },
    { label: 'Platforms', value: '15+', icon: 'check' }
  ];

  const platforms = [
    { name: 'Facebook', icon: 'facebook', color: 'bg-blue-500' },
    { name: 'Instagram', icon: 'instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'Twitter', icon: 'twitter', color: 'bg-sky-500' },
    { name: 'TikTok', icon: 'user', color: 'bg-black' }
  ];

  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="info" size="lg" className="bg-blue-100 text-blue-700 px-4 py-2">
              🚀 #1 Premium Account Marketplace
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Social Media
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Accounts Marketplace
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get verified, high-quality social media accounts with instant delivery. 
            Trusted by thousands of businesses and marketers worldwide.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar 
              placeholder="Search for Facebook, Instagram, Twitter accounts..." 
              showFilters={true}
              className="shadow-lg"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="xl" className="shadow-lg hover:shadow-xl">
              <Icon name="search" size="sm" />
              Browse Accounts
            </Button>
            <Button variant="outline" size="xl" className="shadow-lg hover:shadow-xl">
              <Icon name="shield" size="sm" />
              How It Works
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex justify-center items-center gap-6 mb-16">
            <span className="text-sm font-medium text-gray-500">Available on:</span>
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer",
                  platform.color
                )}
                title={platform.name}
              >
                <Icon name={platform.icon} size="sm" />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Icon name={stat.icon} size="sm" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;