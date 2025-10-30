import React from 'react';
import { Button, Icon } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const footerLinks = {
    products: [
      { label: 'Facebook Accounts', href: '/facebook' },
      { label: 'Instagram Accounts', href: '/instagram' },
      { label: 'Twitter Accounts', href: '/twitter' },
      { label: 'TikTok Accounts', href: '/tiktok' },
      { label: 'LinkedIn Accounts', href: '/linkedin' }
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Account Guidelines', href: '/guidelines' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Live Chat', href: '/chat' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
      { label: 'Affiliate Program', href: '/affiliate' }
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Success Stories', href: '/stories' },
      { label: 'API Documentation', href: '/api' },
      { label: 'Status Page', href: '/status' },
      { label: 'Changelog', href: '/changelog' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'Instagram', icon: 'instagram', href: '#' }
  ];

  return (
    <footer className={cn("bg-gray-900 text-white", className)}>
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400 mb-6 lg:mb-0">
                Get notified about new accounts, special offers, and platform updates.
              </p>
            </div>
            <div className="lg:flex-1 lg:max-w-md lg:ml-8">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button size="md" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AccsMarket</h3>
                <p className="text-xs text-gray-400">Premium Accounts</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              The world's most trusted marketplace for premium social media accounts. 
              Secure, verified, and ready to use.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size="sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Icon name="shield" size="sm" className="text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Icon name="check" size="sm" className="text-green-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Icon name="star" size="sm" className="text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 AccsMarket. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;