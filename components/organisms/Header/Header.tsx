"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { useThemeColors } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useThemeColors();
  
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories", hasSubmenu: true },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ];

  const categories = [
    {
      name: "Facebook",
      icon: "facebook" as const,
      href: "/categories/facebook",
      color: "#1877F2",
      description: "Premium Facebook accounts with various features",
      subcategories: [
        { name: "Softregs", href: "/categories/facebook/softregs" },
        { name: "With Friends", href: "/categories/facebook/with-friends" },
        { name: "Aged", href: "/categories/facebook/aged" },
        { name: "With Friends & Age", href: "/categories/facebook/with-friends-age" },
        { name: "Ads Ready", href: "/categories/facebook/ads" }
      ]
    },
    {
      name: "Instagram",
      icon: "instagram" as const,
      href: "/categories/instagram",
      color: "#E4405F",
      description: "Verified Instagram accounts with followers",
      subcategories: [
        { name: "Verified", href: "/categories/instagram/verified" },
        { name: "Business", href: "/categories/instagram/business" },
        { name: "Creator", href: "/categories/instagram/creator" },
        { name: "Aged", href: "/categories/instagram/aged" },
        { name: "With Followers", href: "/categories/instagram/followers" }
      ]
    },
    {
      name: "Twitter",
      icon: "twitter" as const,
      href: "/categories/twitter",
      color: "#1DA1F2",
      description: "Blue verified Twitter accounts",
      subcategories: [
        { name: "Blue Verified", href: "/categories/twitter/blue" },
        { name: "Legacy Verified", href: "/categories/twitter/legacy" },
        { name: "Aged", href: "/categories/twitter/aged" },
        { name: "With Followers", href: "/categories/twitter/followers" },
        { name: "Monetized", href: "/categories/twitter/monetized" }
      ]
    },
    {
      name: "Gmail",
      icon: "gmail" as const,
      href: "/categories/gmail",
      color: "#EA4335",
      description: "Fresh and aged Gmail accounts",
      subcategories: [
        { name: "Fresh", href: "/categories/gmail/fresh" },
        { name: "Aged", href: "/categories/gmail/aged" },
        { name: "With Recovery", href: "/categories/gmail/recovery" },
        { name: "Phone Verified", href: "/categories/gmail/phone" },
        { name: "Business", href: "/categories/gmail/business" }
      ]
    },
    {
      name: "TikTok",
      icon: "tiktok" as const,
      href: "/categories/tiktok",
      color: "#000000",
      description: "Creator fund eligible accounts",
      subcategories: [
        { name: "Creator Fund", href: "/categories/tiktok/creator-fund" },
        { name: "Business", href: "/categories/tiktok/business" },
        { name: "With Followers", href: "/categories/tiktok/followers" },
        { name: "Live Enabled", href: "/categories/tiktok/live" },
        { name: "Aged", href: "/categories/tiktok/aged" }
      ]
    },
    {
      name: "LinkedIn",
      icon: "linkedin" as const,
      href: "/categories/linkedin",
      color: "#0A66C2",
      description: "Professional LinkedIn accounts",
      subcategories: [
        { name: "Premium", href: "/categories/linkedin/premium" },
        { name: "Business", href: "/categories/linkedin/business" },
        { name: "Sales Navigator", href: "/categories/linkedin/sales" },
        { name: "Aged", href: "/categories/linkedin/aged" },
        { name: "Recruiter", href: "/categories/linkedin/recruiter" }
      ]
    },
    {
      name: "YouTube",
      icon: "youtube" as const,
      href: "/categories/youtube",
      color: "#FF0000",
      description: "Monetized YouTube channels",
      subcategories: [
        { name: "Monetized", href: "/categories/youtube/monetized" },
        { name: "Aged", href: "/categories/youtube/aged" },
        { name: "With Subscribers", href: "/categories/youtube/subscribers" },
        { name: "Verified", href: "/categories/youtube/verified" },
        { name: "Gaming", href: "/categories/youtube/gaming" }
      ]
    },
    {
      name: "Telegram",
      icon: "telegram" as const,
      href: "/categories/telegram",
      color: "#0088CC",
      description: "Premium Telegram accounts",
      subcategories: [
        { name: "Premium", href: "/categories/telegram/premium" },
        { name: "Aged", href: "/categories/telegram/aged" },
        { name: "With Username", href: "/categories/telegram/username" },
        { name: "Business", href: "/categories/telegram/business" },
        { name: "Verified", href: "/categories/telegram/verified" }
      ]
    },
    {
      name: "Reddit",
      icon: "reddit" as const,
      href: "/categories/reddit",
      color: "#FF4500",
      description: "High karma Reddit accounts",
      subcategories: [
        { name: "High Karma", href: "/categories/reddit/karma" },
        { name: "Aged", href: "/categories/reddit/aged" },
        { name: "Verified Email", href: "/categories/reddit/email" },
        { name: "Premium", href: "/categories/reddit/premium" },
        { name: "Moderator", href: "/categories/reddit/moderator" }
      ]
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close categories menu when mobile menu opens
    if (!isMobileMenuOpen) {
      setIsCategoriesOpen(false);
    }
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full", className)}>
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-100"></div>
      
      {/* Header content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo Only */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo2.png"
                alt="AccsMarket Logo"
                width={115}
                quality={100}
                
                height={60}
                className="w-16 sm:w-20 h-16 sm:h-20 object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || (item.hasSubmenu && pathname.startsWith(item.href));
                
                if (item.hasSubmenu) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-gray-900 font-medium text-sm xl:text-base transition-colors relative group flex items-center gap-1"
                        onMouseEnter={() => setIsCategoriesOpen(true)}
                      >
                        {item.label}
                        <svg
                          className={cn(
                            "w-3 h-3 transition-transform",
                            isCategoriesOpen && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span
                          className={cn(
                            "absolute -bottom-1 left-0 h-0.5 transition-all",
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          )}
                          style={{
                            background: `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`
                          }}
                        ></span>
                      </Link>
                      
                      {/* Desktop Mega Menu */}
                      {isCategoriesOpen && (
                        <div
                          className="fixed inset-x-0 top-14 sm:top-16 z-50"
                          onMouseEnter={() => setIsCategoriesOpen(true)}
                          onMouseLeave={() => setIsCategoriesOpen(false)}
                        >
                          <div className="bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100">
                            <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 py-6 xl:py-8">
                              
                              {/* Enhanced Header Section */}
                              <div className="text-center mb-8 xl:mb-10">
                                <div className="flex justify-center mb-3 xl:mb-4">
                                  <div className="p-1 rounded-full bg-white border border-gray-200">
                                    <div className="inline-flex items-center px-3 xl:px-4 py-1 xl:py-2 rounded-full bg-white text-xs xl:text-sm font-medium" style={{ color: theme.secondary }}>
                                      <div className="w-5 xl:w-6 h-5 xl:h-6 rounded-full flex items-center justify-center mr-2 xl:mr-3" style={{ backgroundColor: theme.accentLight }}>
                                        <svg className="w-3 xl:w-4 h-3 xl:h-4" fill={theme.accent} viewBox="0 0 20 20">
                                          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                        </svg>
                                      </div>
                                      Premium Social Media Accounts
                                    </div>
                                  </div>
                                </div>
                                <h2 className="text-2xl xl:text-3xl font-medium mb-2 xl:mb-3 tracking-tight" style={{ color: theme.primary }}>
                                  Choose Your Platform
                                </h2>
                                <p className="text-base xl:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: theme.textSecondary }}>
                                  Premium verified accounts with guaranteed quality and instant delivery
                                </p>
                              </div>

                              {/* Enhanced Grid Layout - 3 Rows x 3 Columns */}
                              <div className="grid grid-cols-3 gap-4 xl:gap-6 mb-6 xl:mb-8">
                                {categories.map((category) => (
                                  <div key={category.href} className="group">
                                    {/* Enhanced Card Design */}
                                    <div className="bg-white rounded-xl xl:rounded-2xl p-4 xl:p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 group-hover:-translate-y-1"
                                         style={{
                                           boxShadow: '0 4px 20px rgba(6, 182, 212, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)'
                                         }}>
                                      
                                      {/* Enhanced Header */}
                                      <div className="flex items-center gap-2 xl:gap-3 mb-3 xl:mb-4">
                                        <div
                                          className="w-10 xl:w-12 h-10 xl:h-12 rounded-lg xl:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                                          style={{
                                            backgroundColor: category.color,
                                            boxShadow: `0 4px 20px ${category.color}30`
                                          }}
                                        >
                                          <Icon
                                            name={category.icon}
                                            size="sm"
                                            className="text-white"
                                          />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h3 className="text-base xl:text-lg font-semibold mb-1" style={{ color: theme.primary }}>
                                            {category.name}
                                          </h3>
                                          <p className="text-xs xl:text-sm" style={{ color: theme.textSecondary }}>
                                            {category.description}
                                          </p>
                                        </div>
                                      </div>

                                      {/* Enhanced Subcategories */}
                                      <div className="space-y-1 xl:space-y-2 mb-3 xl:mb-4">
                                        {category.subcategories.slice(0, 3).map((sub) => (
                                          <Link
                                            key={sub.href}
                                            href={sub.href}
                                            className="flex items-center justify-between px-2 xl:px-3 py-1 xl:py-2 rounded-lg hover:bg-gray-50 transition-all group/sub text-xs xl:text-sm"
                                          >
                                            <span
                                              className="font-medium transition-colors"
                                              style={{ color: theme.textSecondary }}
                                              onMouseEnter={(e) => {
                                                e.currentTarget.style.color = theme.accent;
                                              }}
                                              onMouseLeave={(e) => {
                                                e.currentTarget.style.color = theme.textSecondary;
                                              }}
                                            >
                                              {sub.name}
                                            </span>
                                            <span className="text-gray-400 group-hover/sub:text-gray-600 text-xs">
                                              {200 + (category.subcategories.indexOf(sub) * 50)}+
                                            </span>
                                          </Link>
                                        ))}
                                        {category.subcategories.length > 3 && (
                                          <div className="text-xs xl:text-sm text-gray-500 px-2 xl:px-3 py-1">
                                            +{category.subcategories.length - 3} more categories
                                          </div>
                                        )}
                                      </div>

                                      {/* Enhanced CTA */}
                                      <Link
                                        href={category.href}
                                        className="w-full inline-flex items-center justify-center px-3 xl:px-4 py-2 xl:py-3 rounded-lg xl:rounded-xl font-medium text-xs xl:text-sm transition-all hover:shadow-md"
                                        style={{
                                          backgroundColor: `${category.color}15`,
                                          color: category.color,
                                          border: `1px solid ${category.color}30`
                                        }}
                                      >
                                        View All {category.name}
                                        <svg className="w-3 xl:w-4 h-3 xl:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </Link>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Bottom CTA Section */}
                              <div className="text-center pt-4 xl:pt-6 border-t border-gray-100">
                                <p className="text-xs xl:text-sm mb-3 xl:mb-4" style={{ color: theme.textSecondary }}>
                                  Can&apos;t find what you&apos;re looking for?
                                </p>
                                <Button
                                  size="custom"
                                  customPadding="py-2 xl:py-3 px-4 xl:px-6 text-xs xl:text-sm rounded-lg xl:rounded-xl font-medium"
                                  className="text-white transition-all"
                                  style={{ backgroundColor: theme.primaryDark }}
                                >
                                  Contact Support
                                  <Icon name="arrow-right" size="sm" className="ml-2" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm xl:text-base transition-colors relative group"
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 transition-all",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                      style={{
                        background: `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`
                      }}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="font-medium px-3 xl:px-4 py-2 rounded-full transition-all text-sm xl:text-base"
                style={{ color: theme.primary }}
              >
                Sign in
              </Button>
              <Button
                size="sm"
                className="font-medium px-4 xl:px-6 py-2 rounded-full text-white shadow-sm hover:shadow-md transition-all text-sm xl:text-base"
                style={{ backgroundColor: theme.primary }}
              >
                Get started
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-600 p-2"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <Icon name="menu" size="sm" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
              <div className="px-3 sm:px-4 py-4 space-y-4">
                
                {/* Mobile Categories Section */}
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <h4 className="font-semibold text-sm sm:text-base mb-3" style={{ color: theme.primary }}>
                    Popular Platforms
                  </h4>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {categories.slice(0, 6).map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="flex items-center space-x-2 p-2 sm:p-3 rounded-lg hover:bg-white transition-colors group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div 
                          className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: `${category.color}15` }}
                        >
                          <Icon name={category.icon} size="sm" style={{ color: category.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="font-medium text-gray-900 transition-colors text-xs sm:text-sm truncate"
                            style={{
                              color: theme.textPrimary
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = theme.accent;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = theme.textPrimary;
                            }}
                          >
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {200 + (categories.indexOf(category) * 50)}+
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link 
                    href="/categories" 
                    className="block text-center mt-3 py-2 font-medium text-sm transition-colors"
                    style={{ color: theme.accent }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.accentDark;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.accent;
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Platforms →
                  </Link>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-1 sm:space-y-2">
                  {navigationItems.filter(item => !item.hasSubmenu).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors text-sm sm:text-base font-medium"
                      style={{ color: theme.textSecondary }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = theme.accent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = theme.textSecondary;
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="flex flex-col space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-100">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="justify-center text-sm sm:text-base font-medium"
                    style={{ color: theme.primary }}
                  >
                    Sign in
                  </Button>
                  <Button 
                    size="sm"
                    className="text-white justify-center text-sm sm:text-base font-medium rounded-full"
                    style={{ backgroundColor: theme.primary }}
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;