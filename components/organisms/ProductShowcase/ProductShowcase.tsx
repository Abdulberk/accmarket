'use client';

import React, { useState } from 'react';
import { Button, Badge } from '@/components/atoms';
import { ProductCard } from '@/components/molecules';
import { cn } from '@/lib/utils';

interface ProductShowcaseProps {
  className?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Accounts', count: 1250 },
    { id: 'facebook', label: 'Facebook', count: 450 },
    { id: 'instagram', label: 'Instagram', count: 380 },
    { id: 'twitter', label: 'Twitter', count: 220 },
    { id: 'tiktok', label: 'TikTok', count: 200 }
  ];

  const mockProducts = [
    {
      id: '1',
      title: 'Premium Facebook Business Account',
      description: 'Verified business account with 10K+ followers, complete profile setup, and business manager access.',
      price: 89.99,
      originalPrice: 129.99,
      stock: 45,
      rating: 4.9,
      reviewCount: 234,
      platform: 'facebook' as const,
      features: ['Verified', 'Business Manager', '10K+ Followers', 'Complete Profile'],
      isPopular: true
    },
    {
      id: '2',
      title: 'Instagram Creator Account',
      description: 'High-engagement creator account with authentic followers and verified badge.',
      price: 149.99,
      stock: 23,
      rating: 4.8,
      reviewCount: 189,
      platform: 'instagram' as const,
      features: ['Creator Badge', '25K+ Followers', 'High Engagement', 'Authentic'],
      isNew: true
    },
    {
      id: '3',
      title: 'Twitter Blue Verified Account',
      description: 'Blue verified Twitter account with established presence and active community.',
      price: 199.99,
      stock: 12,
      rating: 4.7,
      reviewCount: 156,
      platform: 'twitter' as const,
      features: ['Blue Verified', '15K+ Followers', 'Active Community', 'Established']
    },
    {
      id: '4',
      title: 'TikTok Creator Fund Account',
      description: 'Monetized TikTok account eligible for creator fund with viral content history.',
      price: 299.99,
      stock: 8,
      rating: 4.9,
      reviewCount: 98,
      platform: 'tiktok' as const,
      features: ['Creator Fund', '100K+ Followers', 'Viral Content', 'Monetized'],
      isPopular: true
    },
    {
      id: '5',
      title: 'Facebook Page with Ads Account',
      description: 'Business page with connected ads account, perfect for marketing campaigns.',
      price: 179.99,
      stock: 31,
      rating: 4.6,
      reviewCount: 267,
      platform: 'facebook' as const,
      features: ['Ads Account', 'Business Page', '50K+ Likes', 'Marketing Ready']
    },
    {
      id: '6',
      title: 'Instagram Influencer Account',
      description: 'Lifestyle influencer account with high engagement rate and brand partnerships.',
      price: 399.99,
      stock: 5,
      rating: 5.0,
      reviewCount: 78,
      platform: 'instagram' as const,
      features: ['Influencer', '100K+ Followers', 'Brand Partnerships', 'High Engagement'],
      isNew: true,
      isPopular: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? mockProducts 
    : mockProducts.filter(product => product.platform === activeCategory);

  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="info" size="lg" className="mb-4">
            🔥 Featured Accounts
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Premium Social Media Accounts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hand-picked, verified accounts ready for immediate use. All accounts come with 
            lifetime support and money-back guarantee.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category.label}
              <Badge 
                variant={activeCategory === category.id ? "outline" : "default"}
                size="sm"
                className={activeCategory === category.id ? "bg-white/20 text-white border-white/30" : ""}
              >
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onBuyClick={(id) => console.log('Buy clicked for:', id)}
              className="hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl">
            Load More Accounts
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Showing {filteredProducts.length} of {categories.find(c => c.id === activeCategory)?.count || 0} accounts
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h3>
            <p className="text-gray-600">All accounts are verified and come with security guarantee</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Delivery</h3>
            <p className="text-gray-600">Get your account details within minutes of purchase</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer support for all your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;