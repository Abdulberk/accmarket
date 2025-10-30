"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/atoms/Button/Button";
import Badge from "@/components/atoms/Badge/Badge";
import { useThemeColors } from "@/components/providers/ThemeProvider";
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
  Linkedin,
  ArrowRight
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
  const theme = useThemeColors();

  const allSocialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
      accounts: "50K+",
      price: "From $29",
      features: ["Verified Accounts", "High Engagement", "Real Followers"]
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "from-blue-400 to-blue-600",
      accounts: "25K+",
      price: "From $19",
      features: ["Blue Verified", "Active Users", "Quality Content"]
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      accounts: "15K+",
      price: "From $49",
      features: ["Monetized Channels", "Subscriber Base", "Content Library"]
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
      accounts: "30K+",
      price: "From $24",
      features: ["Business Pages", "Ad Accounts", "Page Likes"]
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      color: "from-pink-500 to-red-500",
      accounts: "20K+",
      price: "From $34",
      features: ["Creator Fund", "Viral Content", "Engagement"]
    },
    {
      name: "Twitch",
      icon: Twitch,
      color: "from-purple-600 to-purple-700",
      accounts: "8K+",
      price: "From $39",
      features: ["Partner Status", "Followers", "Stream Setup"]
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600",
      accounts: "12K+",
      price: "From $45",
      features: ["Premium Accounts", "Business Network", "Professional Content"]
    },
    {
      name: "VKontakte",
      icon: FaVk,
      color: "from-blue-500 to-blue-600",
      accounts: "18K+",
      price: "From $22",
      features: ["Russian Market", "Active Community", "High Engagement"]
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      color: "from-blue-400 to-blue-500",
      accounts: "15K+",
      price: "From $27",
      features: ["Premium Features", "Channel Access", "Bot Integration"]
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      color: "from-green-500 to-green-600",
      accounts: "10K+",
      price: "From $35",
      features: ["Business Accounts", "Verified Status", "API Access"]
    },
    {
      name: "Snapchat",
      icon: FaSnapchatGhost,
      color: "from-yellow-400 to-yellow-500",
      accounts: "9K+",
      price: "From $32",
      features: ["Creator Accounts", "Snap Ads", "Story Features"]
    },
    {
      name: "Reddit",
      icon: FaReddit,
      color: "from-orange-500 to-red-500",
      accounts: "7K+",
      price: "From $28",
      features: ["High Karma", "Aged Accounts", "Subreddit Access"]
    },
    {
      name: "Discord",
      icon: FaDiscord,
      color: "from-indigo-500 to-purple-600",
      accounts: "6K+",
      price: "From $25",
      features: ["Server Access", "Nitro Accounts", "Bot Integration"]
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      color: "from-red-500 to-red-600",
      accounts: "8K+",
      price: "From $30",
      features: ["Business Accounts", "High Followers", "Board Access"]
    },
    {
      name: "Quora",
      icon: FaQuora,
      color: "from-red-600 to-red-700",
      accounts: "4K+",
      price: "From $26",
      features: ["High Reputation", "Answer Views", "Topic Following"]
    },
    {
      name: "Odnoklassniki",
      icon: SiOdnoklassniki,
      color: "from-orange-400 to-orange-500",
      accounts: "5K+",
      price: "From $20",
      features: ["Russian Network", "Active Friends", "Group Access"]
    },
    {
      name: "Yelp",
      icon: FaYelp,
      color: "from-red-500 to-red-600",
      accounts: "3K+",
      price: "From $35",
      features: ["Business Reviews", "Elite Status", "Local Network"]
    },
    {
      name: "Yahoo Mail",
      icon: FaYahoo,
      color: "from-purple-600 to-purple-700",
      accounts: "12K+",
      price: "From $18",
      features: ["Aged Accounts", "Recovery Set", "Clean History"]
    },
    {
      name: "Hotmail",
      icon: FaMicrosoft,
      color: "from-blue-600 to-blue-700",
      accounts: "10K+",
      price: "From $20",
      features: ["Microsoft Account", "Outlook Access", "OneDrive Storage"]
    },
    {
      name: "Mail.ru",
      icon: SiMaildotru,
      color: "from-blue-500 to-blue-600",
      accounts: "8K+",
      price: "From $16",
      features: ["Russian Email", "Cloud Storage", "Social Integration"]
    },
    {
      name: "ProtonMail",
      icon: SiProtonmail,
      color: "from-purple-500 to-purple-600",
      accounts: "2K+",
      price: "From $45",
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
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-white text-sm font-medium" style={{ color: theme.secondary }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: theme.accentLight }}>
                  <svg className="w-4 h-4" fill={theme.accent} viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </div>
                Premium Social Media Accounts
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight" style={{ color: theme.primary }}>
            Choose Your Platform
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8" style={{ color: theme.textSecondary }}>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
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
                className="group relative"
              >
                {/* Modern Minimal Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 border border-gray-100/80 hover:border-gray-200/80 group-hover:shadow-[0_8px_40px_rgba(7,44,72,0.08)] hover:-translate-y-1"
                     style={{
                       boxShadow: '0 1px 3px rgba(7, 44, 72, 0.04)'
                     }}>
                  
                  {/* Clean Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent
                        className="w-7 h-7 transition-colors duration-300"
                        style={{
                          color: platform.color.includes('purple') ? '#8B5CF6' :
                                 platform.color.includes('blue') ? '#3B82F6' :
                                 platform.color.includes('red') ? '#EF4444' :
                                 platform.color.includes('green') ? '#10B981' :
                                 platform.color.includes('yellow') ? '#F59E0B' :
                                 platform.color.includes('pink') ? '#EC4899' :
                                 platform.color.includes('orange') ? '#F97316' :
                                 platform.color.includes('indigo') ? '#6366F1' :
                                 '#072C48'
                        }}
                      />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                        Available
                      </div>
                      <div className="text-sm font-semibold" style={{ color: '#072C48' }}>
                        {platform.accounts}
                      </div>
                    </div>
                  </div>

                  {/* Platform Name & Price */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: theme.primary }}>
                      {platform.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold" style={{ color: theme.primary }}>
                        {platform.price.replace('From ', '')}
                      </span>
                      <span className="text-sm" style={{ color: theme.textMuted }}>starting from</span>
                    </div>
                  </div>

                  {/* Clean Features List */}
                  <div className="space-y-3 mb-8">
                    {platform.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: theme.accent }}></div>
                        <span className="text-sm leading-relaxed" style={{ color: theme.textSecondary }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Minimal CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      className="w-full font-medium py-3 px-4 rounded-xl text-sm transition-all duration-300 group/btn"
                      style={{
                        backgroundColor: theme.primary,
                        color: 'white',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme.primaryLight;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.primary;
                        e.currentTarget.style.transform = 'translateY(0px)';
                      }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </div>

                {/* Subtle Background Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(to bottom right, ${theme.accent}10, ${theme.gradientFrom}10)`
                  }}
                ></div>
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
                className="flex items-center gap-3"
                style={{ color: theme.accent }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-t-transparent rounded-full"
                  style={{ borderColor: theme.accent, borderTopColor: 'transparent' }}
                />
                <span className="text-lg font-medium">Loading more platforms...</span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ backgroundColor: theme.accent }}></div>
                <p className="text-sm" style={{ color: theme.textMuted }}>Scroll down to load more platforms</p>
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
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-white text-sm font-medium" style={{ color: theme.secondary }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: theme.accentLight }}>
                      <svg className="w-4 h-4" fill={theme.accent} viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </div>
                    Why Choose AccsMarket
                  </div>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8" style={{ color: theme.primary }}>
                The Most Trusted
                <span
                  className="block bg-gradient-to-r bg-clip-text text-transparent font-medium"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`
                  }}
                >
                  Social Media Marketplace
                </span>
              </h3>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.textSecondary }}>
                Join thousands of satisfied customers who trust us for premium, verified social media accounts with guaranteed quality and instant delivery.
              </p>
            </div>

            {/* Elegant Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-light mb-2 group-hover:scale-105 transition-transform" style={{ color: theme.primary }}>
                  50K+
                </div>
                <div className="font-medium" style={{ color: theme.accent }}>Active Accounts</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-light mb-2 group-hover:scale-105 transition-transform" style={{ color: theme.primary }}>
                  99.9%
                </div>
                <div className="font-medium" style={{ color: theme.gradientFrom }}>Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-light mb-2 group-hover:scale-105 transition-transform" style={{ color: theme.primary }}>
                  10K+
                </div>
                <div className="font-medium" style={{ color: theme.accentDark }}>Happy Customers</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-light mb-2 group-hover:scale-105 transition-transform" style={{ color: theme.primary }}>
                  24/7
                </div>
                <div className="font-medium" style={{ color: theme.gradientTo }}>Support</div>
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
                  <h4 className="text-2xl font-medium mb-4" style={{ color: theme.primary }}>
                    100% Secure & Verified
                  </h4>
                  <p className="leading-relaxed mb-6 flex-grow" style={{ color: theme.textSecondary }}>
                    Every account is thoroughly verified and comes with lifetime warranty. Your investment is protected with our replacement guarantee.
                  </p>
                  <div className="flex items-center font-medium mt-auto" style={{ color: theme.accent }}>
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
                  <h4 className="text-2xl font-medium mb-4" style={{ color: theme.primary }}>
                    Lightning Fast Delivery
                  </h4>
                  <p className="leading-relaxed mb-6 flex-grow" style={{ color: theme.textSecondary }}>
                    Get instant access to your accounts within minutes. No waiting, no delays - just immediate delivery to your inbox.
                  </p>
                  <div className="flex items-center font-medium mt-auto" style={{ color: theme.accent }}>
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
                  <h4 className="text-2xl font-medium mb-4" style={{ color: theme.primary }}>
                    Premium Quality Only
                  </h4>
                  <p className="leading-relaxed mb-6 flex-grow" style={{ color: theme.textSecondary }}>
                    Hand-picked accounts with real engagement, authentic followers, and proven track records. Quality you can trust.
                  </p>
                  <div className="flex items-center font-medium mt-auto" style={{ color: theme.accent }}>
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