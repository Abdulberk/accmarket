import React from "react";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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
    { name: "Facebook", icon: "facebook" as const, href: "#" },
    { name: "Twitter", icon: "twitter" as const, href: "#" },
    { name: "Instagram", icon: "instagram" as const, href: "#" }
  ];

  return (
    <footer className={cn("relative overflow-hidden", className)}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-white"></div>
      
      <div className="relative">
        {/* Newsletter Section - Revized with new design principles */}
        <div className="py-24 bg-gradient-to-b from-white via-cyan-50/20 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-12 md:p-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative max-w-4xl mx-auto text-center">
                {/* Updated Badge */}
                <div className="flex justify-center mb-8">
                  <div className="p-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-sm font-medium" style={{ color: '#3F5B6F' }}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#C7FFFF' }}>
                        <Check className="w-4 h-4" style={{ color: '#39B9EB' }} />
                      </div>
                      Join 10,000+ happy customers
                    </div>
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
                  Get the best deals first
                </h3>
                <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Subscribe to our newsletter and never miss exclusive offers and new account drops.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white/95 backdrop-blur-sm rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 border border-white/20"
                  />
                  <Button
                    type="submit"
                    size="custom"
                    customPadding="py-4 px-8 text-lg rounded-2xl font-medium"
                    className="text-white transition-all whitespace-nowrap"
                    style={{ backgroundColor: '#073049' }}
                  >
                    Subscribe Now
                    <Icon name="arrow-right" size="sm" className="ml-2" />
                  </Button>
                </form>
                
                <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-white" />
                  <span>No spam, unsubscribe at any time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium" style={{ color: '#072C48' }}>AccsMarket</h3>
                    <p className="text-sm" style={{ color: '#2C3E43' }}>Premium Social Media Accounts</p>
                  </div>
                </div>
                <p className="text-base mb-8 max-w-md leading-relaxed" style={{ color: '#2C3E43' }}>
                  The world&apos;s most trusted marketplace for premium, verified social media accounts with guaranteed quality and instant delivery.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all group shadow-sm hover:shadow-md"
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} size="sm" className="text-gray-600 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Columns */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
                {/* Products */}
                <div>
                  <h4 className="font-medium mb-6 text-lg" style={{ color: '#072C48' }}>Products</h4>
                  <ul className="space-y-4">
                    {footerLinks.products.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="transition-colors text-sm hover:text-cyan-600"
                          style={{ color: '#2C3E43' }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="font-medium mb-6 text-lg" style={{ color: '#072C48' }}>Support</h4>
                  <ul className="space-y-4">
                    {footerLinks.support.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="transition-colors text-sm hover:text-cyan-600"
                          style={{ color: '#2C3E43' }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="font-medium mb-6 text-lg" style={{ color: '#072C48' }}>Company</h4>
                  <ul className="space-y-4">
                    {footerLinks.company.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="transition-colors text-sm hover:text-cyan-600"
                          style={{ color: '#2C3E43' }}
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
            <div className="mt-16 pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-3 text-sm" style={{ color: '#2C3E43' }}>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon name="shield" size="sm" className="text-green-600" />
                    </div>
                    <span className="font-medium">SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: '#2C3E43' }}>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon name="check" size="sm" className="text-green-600" />
                    </div>
                    <span className="font-medium">Verified Seller</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: '#2C3E43' }}>
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Icon name="star" size="sm" className="text-yellow-600" />
                    </div>
                    <span className="font-medium">4.9/5 Rating</span>
                  </div>
                </div>
                <div className="text-sm font-medium" style={{ color: '#6B7280' }}>
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