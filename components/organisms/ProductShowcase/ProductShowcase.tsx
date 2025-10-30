"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  CheckCircle,
  Linkedin
} from "lucide-react";
import {
  FaTelegram,
  FaWhatsapp,
  FaSnapchatGhost,
  FaReddit,
  FaVk,
  FaTiktok,
  FaDiscord,
  FaPinterest,
  FaQuora,
  FaYelp,
  FaYahoo,
  FaMicrosoft
} from "react-icons/fa";
import {
  SiTelegram,
  SiOdnoklassniki,
  SiProtonmail,
  SiMaildotru
} from "react-icons/si";
import { Mail } from "lucide-react";

const ProductShowcase: React.FC = () => {
  const [visiblePlatforms, setVisiblePlatforms] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const isLoadMoreInView = useInView(loadMoreRef);

  const allSocialPlatforms = [
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
      name: "TikTok",
      icon: FaTiktok,
      color: "from-pink-500 to-red-500",
      accounts: "20K+",
      price: "Starting from $34",
      features: ["Creator Fund", "Viral Content", "Engagement"]
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
      name: "LinkedIn",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600",
      accounts: "12K+",
      price: "Starting from $45",
      features: ["Premium Accounts", "Business Network", "Professional Content"]
    },
    {
      name: "VKontakte",
      icon: FaVk,
      color: "from-blue-500 to-blue-600",
      accounts: "18K+",
      price: "Starting from $22",
      features: ["Russian Market", "Active Community", "High Engagement"]
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      color: "from-blue-400 to-blue-500",
      accounts: "15K+",
      price: "Starting from $27",
      features: ["Premium Features", "Channel Access", "Bot Integration"]
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      color: "from-green-500 to-green-600",
      accounts: "10K+",
      price: "Starting from $35",
      features: ["Business Accounts", "Verified Status", "API Access"]
    },
    {
      name: "Snapchat",
      icon: FaSnapchatGhost,
      color: "from-yellow-400 to-yellow-500",
      accounts: "9K+",
      price: "Starting from $32",
      features: ["Creator Accounts", "Snap Ads", "Story Features"]
    },
    {
      name: "Reddit",
      icon: FaReddit,
      color: "from-orange-500 to-red-500",
      accounts: "7K+",
      price: "Starting from $28",
      features: ["High Karma", "Aged Accounts", "Subreddit Access"]
    },
    {
      name: "Discord",
      icon: FaDiscord,
      color: "from-indigo-500 to-purple-600",
      accounts: "6K+",
      price: "Starting from $25",
      features: ["Server Access", "Nitro Accounts", "Bot Integration"]
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      color: "from-red-500 to-red-600",
      accounts: "8K+",
      price: "Starting from $30",
      features: ["Business Accounts", "High Followers", "Board Access"]
    },
    {
      name: "Quora",
      icon: FaQuora,
      color: "from-red-600 to-red-700",
      accounts: "4K+",
      price: "Starting from $26",
      features: ["High Reputation", "Answer Views", "Topic Following"]
    },
    {
      name: "Odnoklassniki",
      icon: SiOdnoklassniki,
      color: "from-orange-400 to-orange-500",
      accounts: "5K+",
      price: "Starting from $20",
      features: ["Russian Network", "Active Friends", "Group Access"]
    },
    {
      name: "Yelp",
      icon: FaYelp,
      color: "from-red-500 to-red-600",
      accounts: "3K+",
      price: "Starting from $35",
      features: ["Business Reviews", "Elite Status", "Local Network"]
    },
    {
      name: "Yahoo Mail",
      icon: FaYahoo,
      color: "from-purple-600 to-purple-700",
      accounts: "12K+",
      price: "Starting from $18",
      features: ["Aged Accounts", "Recovery Set", "Clean History"]
    },
    {
      name: "Hotmail",
      icon: FaMicrosoft,
      color: "from-blue-600 to-blue-700",
      accounts: "10K+",
      price: "Starting from $20",
      features: ["Microsoft Account", "Outlook Access", "OneDrive Storage"]
    },
    {
      name: "Mail.ru",
      icon: SiMaildotru,
      color: "from-blue-500 to-blue-600",
      accounts: "8K+",
      price: "Starting from $16",
      features: ["Russian Email", "Cloud Storage", "Social Integration"]
    },
    {
      name: "ProtonMail",
      icon: SiProtonmail,
      color: "from-purple-500 to-purple-600",
      accounts: "2K+",
      price: "Starting from $45",
      features: ["Encrypted Email", "Privacy Focused", "Secure Communication"]
    }
  ];

  const loadMorePlatforms = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisiblePlatforms(prev => Math.min(prev + 3, allSocialPlatforms.length));
      setIsLoading(false);
    }, 1000);
  };

  // Auto-load more when scroll reaches the load more section
  React.useEffect(() => {
    if (isLoadMoreInView && visiblePlatforms < allSocialPlatforms.length && !isLoading) {
      loadMorePlatforms();
    }
  }, [isLoadMoreInView, visiblePlatforms, isLoading]);

  const socialPlatforms = allSocialPlatforms.slice(0, visiblePlatforms);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-cyan-50/20 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-1 rounded-full bg-white border border-gray-200">
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-white text-sm font-medium" style={{ color: '#3F5B6F' }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: '#C7FFFF' }}>
                  <svg className="w-4 h-4" fill="#39B9EB" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </div>
                Premium Social Media Accounts
              </div>
            </div>
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

        {/* Enhanced Platform Grid with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Enhanced Card with Better Shadow */}
                <div className="bg-white rounded-3xl p-8 transition-all duration-500 border border-gray-100/50"
                     style={{
                       boxShadow: '0 4px 20px rgba(6, 182, 212, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)'
                     }}>
                  
                  {/* Enhanced Header */}
                  <div className="flex items-center justify-between mb-8">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>
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
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 group-hover:shadow-lg"
                      style={{ backgroundColor: '#072C48' }}
                    >
                      View {platform.name} Accounts
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </Button>
                  </motion.div>
                </div>

                {/* Subtle Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Loading More Indicator */}
        {visiblePlatforms < allSocialPlatforms.length && (
          <div ref={loadMoreRef} className="flex justify-center mb-20">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 text-cyan-600"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-cyan-600 border-t-transparent rounded-full"
                />
                <span className="text-lg font-medium">Loading more platforms...</span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-2 h-2 bg-cyan-500 rounded-full mx-auto mb-2"></div>
                <p className="text-gray-500 text-sm">Scroll down to load more platforms</p>
              </motion.div>
            )}
          </div>
        )}

        {/* Light & Elegant Why Choose Us Section */}
        <div className="relative py-24 bg-gradient-to-b from-white via-cyan-50/30 to-blue-50/40">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            
            {/* Elegant Header Section */}
            <div className="text-center mb-20">
              <div className="flex justify-center mb-8">
                <div className="p-1 rounded-full bg-white border border-gray-200">
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-white text-sm font-medium" style={{ color: '#3F5B6F' }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: '#C7FFFF' }}>
                      <svg className="w-4 h-4" fill="#39B9EB" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </div>
                    Why Choose AccsMarket
                  </div>
                </div>
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