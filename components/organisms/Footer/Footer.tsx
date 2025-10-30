"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { useThemeColors } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const theme = useThemeColors();

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const footerLinks = {
    products: [
      { label: "Facebook Accounts", href: "/facebook" },
      { label: "Instagram Accounts", href: "/instagram" },
      { label: "Twitter Accounts", href: "/twitter" },
      { label: "TikTok Accounts", href: "/tiktok" },
      { label: "LinkedIn Accounts", href: "/linkedin" }
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Account Guidelines", href: "/guidelines" },
      { label: "FAQ", href: "/faq" },
      { label: "Live Chat", href: "/chat" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Affiliate Program", href: "/affiliate" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: "facebook" as const, href: "#" },
    { name: "Twitter", icon: "twitter" as const, href: "#" },
    { name: "Instagram", icon: "instagram" as const, href: "#" }
  ];

  return (
    <footer className={cn("relative overflow-hidden", className)}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-white"></div>
      
      <div className="relative">
        {/* Newsletter Section with Background Image */}
        <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-cyan-50/20 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16"
              style={{
                background: `linear-gradient(to bottom right, ${theme.gradientFrom}, ${theme.gradientTo})`
              }}
            >
              {/* Background Image with Next.js Image */}
              <div className="absolute inset-0 opacity-15">
                <Image 
                  src="/social3.jpeg" 
                  alt="Social media background" 
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="p-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
                    <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white text-xs sm:text-sm font-medium" style={{ color: theme.secondary }}>
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center mr-2 sm:mr-3" style={{ backgroundColor: theme.accentLight }}>
                        <Check className="w-3 sm:w-4 h-3 sm:h-4" style={{ color: theme.accent }} />
                      </div>
                      <span className="hidden sm:inline">Join 10,000+ happy customers</span>
                      <span className="sm:hidden">10K+ customers</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-4 sm:mb-6 tracking-tight px-4">
                  Get the best deals first
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
                  Subscribe to our newsletter and never miss exclusive offers and new account drops.
                </p>
                
                {/* Form */}
                <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 border border-white/20 text-sm sm:text-base"
                  />
                  <Button
                    type="submit"
                    size="custom"
                    customPadding="py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-xl sm:rounded-2xl font-medium"
                    className="text-white transition-all whitespace-nowrap w-full sm:w-auto"
                    style={{ backgroundColor: theme.primaryDark }}
                  >
                    <span className="hidden sm:inline">Subscribe Now</span>
                    <span className="sm:hidden">Subscribe</span>
                    <Icon name="arrow-right" size="sm" className="ml-2" />
                  </Button>
                </form>
                
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80 px-4">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-white flex-shrink-0" />
                  <span>No spam, unsubscribe at any time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="bg-white">
          {/* Mobile Accordion Footer */}
          <div className="block lg:hidden py-12">
            <div className="max-w-7xl mx-auto px-4">
              {/* Company Info - Mobile */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Image
                    src="/logo2.png"
                    alt="AccsMarket Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-medium" style={{ color: theme.primary }}>AccsMarket</h3>
                    <p className="text-sm" style={{ color: theme.textSecondary }}>Premium Social Media Accounts</p>
                  </div>
                </div>
                <p className="text-sm mb-6 leading-relaxed max-w-sm mx-auto" style={{ color: theme.textSecondary }}>
                  The world&apos;s most trusted marketplace for premium, verified social media accounts.
                </p>
                
                {/* Social Links - Mobile */}
                <div className="flex justify-center gap-4 mb-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all group shadow-sm hover:shadow-md"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F3F4F6';
                      }}
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} size="sm" className="text-gray-600 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Accordion Sections */}
              <div className="space-y-4">
                {/* Products Accordion */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('products')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-semibold text-lg" style={{ color: theme.primary }}>Products</h4>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 transition-transform",
                        openSections.includes('products') && "rotate-180"
                      )}
                      style={{ color: theme.primary }}
                    />
                  </button>
                  {openSections.includes('products') && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <ul className="space-y-3">
                        {footerLinks.products.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <span
                                className="text-sm font-medium transition-colors"
                                style={{ color: theme.textSecondary }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = theme.accent;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = theme.textSecondary;
                                }}
                              >
                                {link.label}
                              </span>
                              <Icon
                                name="arrow-right"
                                size="sm"
                                className="text-gray-400 transition-colors group-hover:text-current"
                                style={{ color: 'inherit' }}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Support Accordion */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('support')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-semibold text-lg" style={{ color: theme.primary }}>Support</h4>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 transition-transform",
                        openSections.includes('support') && "rotate-180"
                      )}
                      style={{ color: theme.primary }}
                    />
                  </button>
                  {openSections.includes('support') && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <ul className="space-y-3">
                        {footerLinks.support.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <span
                                className="text-sm font-medium transition-colors"
                                style={{ color: theme.textSecondary }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = theme.accent;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = theme.textSecondary;
                                }}
                              >
                                {link.label}
                              </span>
                              <Icon
                                name="arrow-right"
                                size="sm"
                                className="text-gray-400 transition-colors group-hover:text-current"
                                style={{ color: 'inherit' }}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Company Accordion */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('company')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-semibold text-lg" style={{ color: theme.primary }}>Company</h4>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 transition-transform",
                        openSections.includes('company') && "rotate-180"
                      )}
                      style={{ color: theme.primary }}
                    />
                  </button>
                  {openSections.includes('company') && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <ul className="space-y-3">
                        {footerLinks.company.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <span
                                className="text-sm font-medium transition-colors"
                                style={{ color: theme.textSecondary }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = theme.accent;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = theme.textSecondary;
                                }}
                              >
                                {link.label}
                              </span>
                              <Icon
                                name="arrow-right"
                                size="sm"
                                className="text-gray-400 transition-colors group-hover:text-current"
                                style={{ color: 'inherit' }}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Trust Indicators - Mobile */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="shield" size="sm" className="text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-green-700">SSL Secured</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-xl">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="star" size="sm" className="text-yellow-600" />
                  </div>
                  <span className="text-xs font-medium text-yellow-700">4.9/5 Rating</span>
                </div>
              </div>

              {/* Copyright - Mobile */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <div className="text-xs font-medium" style={{ color: '#6B7280' }}>
                  © 2025 AccsMarket. All rights reserved.
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Footer Layout */}
          <div className="hidden lg:block py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                {/* Company Info - Desktop */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <Image
                      src="/logo2.png"
                      alt="AccsMarket Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="text-2xl font-medium" style={{ color: theme.primary }}>AccsMarket</h3>
                      <p className="text-sm" style={{ color: theme.textSecondary }}>Premium Social Media Accounts</p>
                    </div>
                  </div>
                  <p className="text-base mb-8 max-w-md leading-relaxed" style={{ color: theme.textSecondary }}>
                    The world&apos;s most trusted marketplace for premium, verified social media accounts with guaranteed quality and instant delivery.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all group shadow-sm hover:shadow-md"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#F3F4F6';
                        }}
                        aria-label={social.name}
                      >
                        <Icon name={social.icon} size="sm" className="text-gray-600 group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Links Columns - Desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
                  {/* Products */}
                  <div>
                    <h4 className="font-medium mb-6 text-lg" style={{ color: theme.primary }}>Products</h4>
                    <ul className="space-y-4">
                      {footerLinks.products.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="transition-colors text-sm"
                            style={{ color: theme.textSecondary }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = theme.accent;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = theme.textSecondary;
                            }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support */}
                  <div>
                    <h4 className="font-medium mb-6 text-lg" style={{ color: theme.primary }}>Support</h4>
                    <ul className="space-y-4">
                      {footerLinks.support.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="transition-colors text-sm"
                            style={{ color: theme.textSecondary }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = theme.accent;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = theme.textSecondary;
                            }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h4 className="font-medium mb-6 text-lg" style={{ color: theme.primary }}>Company</h4>
                    <ul className="space-y-4">
                      {footerLinks.company.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="transition-colors text-sm"
                            style={{ color: theme.textSecondary }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = theme.accent;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = theme.textSecondary;
                            }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Desktop */}
              <div className="mt-16 pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="flex items-center gap-3 text-sm" style={{ color: theme.textSecondary }}>
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name="shield" size="sm" className="text-green-600" />
                      </div>
                      <span className="font-medium">SSL Secured</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm" style={{ color: theme.textSecondary }}>
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name="check" size="sm" className="text-green-600" />
                      </div>
                      <span className="font-medium">Verified Seller</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm" style={{ color: theme.textSecondary }}>
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Icon name="star" size="sm" className="text-yellow-600" />
                      </div>
                      <span className="font-medium">4.9/5 Rating</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#6B7280' }}>
                    © 2025 AccsMarket. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;