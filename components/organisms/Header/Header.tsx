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
    { name: "YouTube", icon: "🎥", href: "/categories/youtube" },
    { name: "Twitter", icon: "🐦", href: "/categories/twitter" },
    { name: "Gmail", icon: "📧", href: "/categories/gmail" },
    { name: "Reddit", icon: "🔥", href: "/categories/reddit" },
    { name: "TikTok", icon: "🎵", href: "/categories/tiktok" },
    { name: "VKontakte", icon: "📱", href: "/categories/vkontakte" },
    { name: "Instagram", icon: "📸", href: "/categories/instagram" },
    { name: "Facebook", icon: "👥", href: "/categories/facebook" },
    { name: "LinkedIn", icon: "💼", href: "/categories/linkedin" },
    { name: "Telegram", icon: "✈️", href: "/categories/telegram" },
    { name: "Discord", icon: "💬", href: "/categories/discord" },
    { name: "WhatsApp", icon: "💬", href: "/categories/whatsapp" }
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
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
                      onMouseEnter={() => setIsCategoriesOpen(true)}
                      onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors relative group flex items-center gap-1"
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
                          "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all",
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        )}></span>
                      </Link>
                      
                      {/* Dropdown Menu */}
                      {isCategoriesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                          <div className="px-4 py-2">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Social Media Accounts</h3>
                          </div>
                          <div className="grid grid-cols-2 gap-1 px-2">
                            {categories.map((category) => (
                              <Link
                                key={category.href}
                                href={category.href}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <span className="text-lg">{category.icon}</span>
                                <span className="text-sm text-gray-700 font-medium">{category.name}</span>
                              </Link>
                            ))}
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
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
              >
                <Icon name="user" size="sm" />
                <span className="ml-1.5">Sign in</span>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all"
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