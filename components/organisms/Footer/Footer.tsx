import React from "react";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
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
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Success Stories", href: "/stories" },
      { label: "API Documentation", href: "/api" },
      { label: "Status Page", href: "/status" },
      { label: "Changelog", href: "/changelog" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "Twitter", icon: "twitter", href: "#" },
    { name: "Instagram", icon: "instagram", href: "#" }
  ];

  return (
    <footer className={cn("relative overflow-hidden", className)}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-white"></div>
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 md:p-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  Join 10,000+ happy customers
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Get the best deals first
                </h3>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Subscribe to our newsletter and never miss exclusive offers and new account drops.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 shadow-lg whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </form>
                
                <p className="mt-4 text-sm text-white/70">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AccsMarket</h3>
                    <p className="text-xs text-gray-500">Premium Accounts</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  The world&apos;s most trusted marketplace for premium social media accounts.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all group"
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} size="sm" className="text-gray-600 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:col-span-4 gap-8">
                {/* Products */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
                  <ul className="space-y-3">
                    {footerLinks.products.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="shield" size="sm" className="text-green-500" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="check" size="sm" className="text-green-500" />
                    <span>Verified Seller</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="star" size="sm" className="text-yellow-500" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  © 2024 AccsMarket. All rights reserved.
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