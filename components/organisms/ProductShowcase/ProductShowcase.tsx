'use client';

import React from 'react';
import Button from '@/components/atoms/Button/Button';
import Badge from '@/components/atoms/Badge/Badge';
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Twitch,
  Music,
  Star,
  Shield,
  Zap
} from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      accounts: '50K+',
      price: 'Starting from $29',
      features: ['Verified Accounts', 'High Engagement', 'Real Followers']
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-gradient-to-r from-blue-400 to-blue-600',
      accounts: '25K+',
      price: 'Starting from $19',
      features: ['Blue Verified', 'Active Users', 'Quality Content']
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      accounts: '15K+',
      price: 'Starting from $49',
      features: ['Monetized Channels', 'Subscriber Base', 'Content Library']
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-gradient-to-r from-blue-600 to-blue-700',
      accounts: '30K+',
      price: 'Starting from $24',
      features: ['Business Pages', 'Ad Accounts', 'Page Likes']
    },
    {
      name: 'Twitch',
      icon: Twitch,
      color: 'bg-gradient-to-r from-purple-600 to-purple-700',
      accounts: '8K+',
      price: 'Starting from $39',
      features: ['Partner Status', 'Followers', 'Stream Setup']
    },
    {
      name: 'TikTok',
      icon: Music,
      color: 'bg-gradient-to-r from-pink-500 to-red-500',
      accounts: '20K+',
      price: 'Starting from $34',
      features: ['Creator Fund', 'Viral Content', 'Engagement']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Premium Social Media Accounts
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality, verified social media accounts across all major platforms. 
            Each account comes with our guarantee and 24/7 support.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                {/* Card Header */}
                <div className={`${platform.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{platform.name}</h3>
                        <p className="text-white/80">{platform.accounts} Available</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Popular
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {platform.price}
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-500 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">(4.9/5)</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full group-hover:scale-105 transition-transform duration-200"
                    variant="default"
                  >
                    View Accounts
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Secure</h3>
              <p className="text-gray-600">
                All accounts are thoroughly verified and come with lifetime warranty
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Delivery</h3>
              <p className="text-gray-600">
                Get your account details within minutes of purchase completion
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-picked accounts with high engagement and authentic followers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;