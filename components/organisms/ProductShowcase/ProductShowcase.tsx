"use client";

import React from "react";
import Button from "@/components/atoms/Button/Button";
import Badge from "@/components/atoms/Badge/Badge";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  Twitch, 
  Music,
  Star,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react";

const ProductShowcase: React.FC = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
      accounts: "50K+",
      price: "Starting from $29",
      features: ["Verified Accounts", "High Engagement", "Real Followers"]
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "from-blue-400 to-blue-600",
      accounts: "25K+",
      price: "Starting from $19",
      features: ["Blue Verified", "Active Users", "Quality Content"]
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      accounts: "15K+",
      price: "Starting from $49",
      features: ["Monetized Channels", "Subscriber Base", "Content Library"]
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
      accounts: "30K+",
      price: "Starting from $24",
      features: ["Business Pages", "Ad Accounts", "Page Likes"]
    },
    {
      name: "Twitch",
      icon: Twitch,
      color: "from-purple-600 to-purple-700",
      accounts: "8K+",
      price: "Starting from $39",
      features: ["Partner Status", "Followers", "Stream Setup"]
    },
    {
      name: "TikTok",
      icon: Music,
      color: "from-pink-500 to-red-500",
      accounts: "20K+",
      price: "Starting from $34",
      features: ["Creator Fund", "Viral Content", "Engagement"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-cyan-50/20 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2 animate-pulse"></span>
            Premium Social Media Accounts
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight" style={{ color: '#072C48' }}>
            Choose Your Platform
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8" style={{ color: '#2C3E43' }}>
            High-quality, verified social media accounts across all major platforms.
            Each account comes with our guarantee and 24/7 support.
          </p>
          
          {/* New: Platform Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>50,000+ Active Accounts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>99.9% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Enhanced Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Enhanced Card with Better Shadow */}
                <div className="bg-white rounded-3xl p-8 transition-all duration-500 group-hover:-translate-y-3 border border-gray-100/50"
                     style={{
                       boxShadow: '0 4px 20px rgba(6, 182, 212, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)'
                     }}>
                  
                  {/* Enhanced Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Available</div>
                      <div className="text-lg font-bold" style={{ color: '#072C48' }}>
                        {platform.accounts}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Platform Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2" style={{ color: '#072C48' }}>
                      {platform.name}
                    </h3>
                    <p className={`text-2xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent mb-3`}>
                      {platform.price}
                    </p>
                    <div className="text-sm text-gray-500">
                      Starting price • Instant delivery
                    </div>
                  </div>

                  {/* Enhanced Features */}
                  <div className="space-y-3 mb-8">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <Button
                    className="w-full text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                    style={{ backgroundColor: '#072C48' }}
                  >
                    View {platform.name} Accounts
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>

                {/* Subtle Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Light & Elegant Why Choose Us Section */}
        <div className="relative py-24 bg-gradient-to-b from-white via-cyan-50/30 to-blue-50/40">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            
            {/* Elegant Header Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2 animate-pulse"></span>
                Why Choose AccsMarket
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8" style={{ color: '#072C48' }}>
                The Most Trusted
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent font-medium">
                  Social Media Marketplace
                </span>
              </h3>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#2C3E43' }}>
                Join thousands of satisfied customers who trust us for premium, verified social media accounts with guaranteed quality and instant delivery.
              </p>
            </div>

            {/* Elegant Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-light mb-2 group-hover:scale-105 transition-transform" style={{ color: '#072C48' }}>
                  50K+
                </div>
                <div className="text-cyan-600 font-medium">Active Accounts</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-light mb-2 group-hover:scale-105 transition-transform" style={{ color: '#072C48' }}>
                  99.9%
                </div>
                <div className="text-blue-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-light mb-2 group-hover:scale-105 transition-transform" style={{ color: '#072C48' }}>
                  10K+
                </div>
                <div className="text-cyan-700 font-medium">Happy Customers</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-light mb-2 group-hover:scale-105 transition-transform" style={{ color: '#072C48' }}>
                  24/7
                </div>
                <div className="text-blue-700 font-medium">Support</div>
              </div>
            </div>

            {/* Light & Elegant Feature Cards - Equal Height */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="group relative h-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-cyan-100/50 group-hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h4 className="text-2xl font-medium mb-4" style={{ color: '#072C48' }}>
                    100% Secure & Verified
                  </h4>
                  <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#2C3E43' }}>
                    Every account is thoroughly verified and comes with lifetime warranty. Your investment is protected with our replacement guarantee.
                  </p>
                  <div className="flex items-center text-cyan-600 font-medium mt-auto">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Lifetime Warranty Included
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative h-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-cyan-100/50 group-hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h4 className="text-2xl font-medium mb-4" style={{ color: '#072C48' }}>
                    Lightning Fast Delivery
                  </h4>
                  <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#2C3E43' }}>
                    Get instant access to your accounts within minutes. No waiting, no delays - just immediate delivery to your inbox.
                  </p>
                  <div className="flex items-center text-cyan-600 font-medium mt-auto">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Average Delivery: 2 Minutes
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative h-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-cyan-100/50 group-hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Star className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h4 className="text-2xl font-medium mb-4" style={{ color: '#072C48' }}>
                    Premium Quality Only
                  </h4>
                  <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#2C3E43' }}>
                    Hand-picked accounts with real engagement, authentic followers, and proven track records. Quality you can trust.
                  </p>
                  <div className="flex items-center text-cyan-600 font-medium mt-auto">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    99.9% Customer Satisfaction
                  </div>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;