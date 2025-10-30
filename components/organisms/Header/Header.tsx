"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  
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

  return (
    <header className={cn("sticky top-0 z-50 w-full", className)}>
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-100"></div>
      
      {/* Header content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                AccsMarket
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
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
                        className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors relative group flex items-center gap-1"
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
                        <span className={cn(
                          "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all",
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        )}></span>
                      </Link>
                      
                      {/* Modern Dribbble-Style Mega Menu */}
                      {isCategoriesOpen && (
                        <div 
                          className="fixed inset-x-0 top-16 z-50"
                          onMouseEnter={() => setIsCategoriesOpen(true)}
                          onMouseLeave={() => setIsCategoriesOpen(false)}
                        >
                          <div className="bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100">
                            <div className="max-w-5xl mx-auto px-4 py-5">
                              
                              {/* Compact Header Section */}
                              <div className="text-center mb-6">
                                <h2 className="text-xl font-semibold mb-2" style={{ color: '#072C48' }}>
                                  Choose Your Platform
                                </h2>
                                <p className="text-gray-600 text-sm">
                                  Premium verified accounts with instant delivery
                                </p>
                              </div>

                              {/* Compact Grid Layout - 2 Rows x 3 Columns */}
                              <div className="grid grid-cols-3 gap-4 mb-6">
                                {categories.map((category) => (
                                  <div key={category.href} className="group">
                                    {/* Ultra Compact Card Design */}
                                    <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
                                      
                                      {/* Ultra Compact Header */}
                                      <div className="flex items-center gap-2 mb-2">
                                        <div
                                          className="w-8 h-8 rounded-md flex items-center justify-center shadow-sm"
                                          style={{
                                            backgroundColor: category.color,
                                            boxShadow: `0 2px 8px ${category.color}30`
                                          }}
                                        >
                                          <Icon
                                            name={category.icon}
                                            size="xs"
                                            className="text-white"
                                          />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h3 className="text-sm font-bold text-gray-900 truncate">
                                            {category.name}
                                          </h3>
                                          <p className="text-xs text-gray-500 truncate">
                                            {category.description.split(' ').slice(0, 3).join(' ')}...
                                          </p>
                                        </div>
          
          
                                      </div>
                                      {/* Ultra Compact Subcategories */}
                                      <div className="space-y-0.5 mb-2">
                                        {category.subcategories.slice(0, 2).map((sub, index) => (
                                          <Link
                                            key={sub.href}
                                            href={sub.href}
                                            className="flex items-center justify-between px-1.5 py-1 rounded hover:bg-white transition-all group/sub text-xs"
                                          >
                                            <span className="text-gray-700 group-hover/sub:text-gray-900 font-medium truncate">
                                              {sub.name}
                                            </span>
                                            <span className="text-gray-400 group-hover/sub:text-gray-600 text-xs ml-1">
                                              {Math.floor(Math.random() * 500) + 100}+
                                            </span>
                                          </Link>
                                        ))}
                                        <div className="text-xs text-gray-500 px-1.5 py-0.5">
                                          +{category.subcategories.length - 2} more
                                        </div>
                                      </div>

                                      {/* Ultra Compact CTA */}
                                      <Link
                                        href={category.href}
                                        className="w-full inline-flex items-center justify-center px-2 py-1.5 rounded font-medium text-xs transition-all"
                                        style={{
                                          backgroundColor: `${category.color}15`,
                                          color: category.color,
                                          border: `1px solid ${category.color}30`
                                        }}
                                      >
                                        View All
                                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </Link>
                                    </div>
                                  </div>
                                ))}
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
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors relative group"
                  >
                    {item.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex font-medium px-4 py-2 rounded-full transition-all"
                style={{ color: '#072C48' }}
              >
                Sign in
              </Button>
              <Button
                size="sm"
                className="font-medium px-6 py-2 rounded-full text-white shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: '#072C48' }}
              >
                Get started
              </Button>
              {/* Mobile menu */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-gray-600"
              >
                <Icon name="menu" size="sm" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;