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
    <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0">
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
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="bg-white rounded-2xl p-1 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-2xl p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-0">
                      {platform.accounts}
                    </Badge>
                  </div>

                  {/* Platform Name & Price */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <p className={`text-xl font-semibold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent mb-4`}>
                    {platform.price}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white transition-all`}
                  >
                    View Accounts
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Secure Checkout</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Verified accounts with lifetime warranty
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Fast Delivery</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Account details sent within minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group hover:-translate-y-1 transition-transform">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Premium Quality</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Hand-picked accounts with real engagement
                  </p>
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