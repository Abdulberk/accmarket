import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import Badge from "@/components/atoms/Badge/Badge";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import { cn } from "@/lib/utils";
import { ArrowRight, MoveRight, ArrowUpRight, TrendingUp, Check } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const stats = [
    { label: "Active Accounts", value: "50K+", icon: "user" as const },
    { label: "Happy Customers", value: "10K+", icon: "star" as const },
    { label: "Success Rate", value: "99.9%", icon: "shield" as const },
    { label: "Platforms", value: "15+", icon: "check" as const }
  ];

  const platforms = [
    { name: "Facebook", icon: "facebook", color: "bg-blue-500" },
    { name: "Instagram", icon: "instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Twitter", icon: "twitter", color: "bg-sky-500" },
    { name: "TikTok", icon: "user", color: "bg-black" }
  ];

  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/tee.jpeg"
          alt="Social media background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          style={{ zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-blue-50/70 to-indigo-100/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
        <div className="text-center">
          {/* Mobile Optimized Badge */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-1 rounded-full bg-white border border-gray-200">
              <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-white text-xs sm:text-sm font-medium" style={{ color: '#3F5B6F' }}>
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: '#C7FFFF' }}>
                  <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="#39B9EB" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </div>
                <span className="hidden sm:inline">Trusted by 10,000+ customers</span>
                <span className="sm:hidden">10K+ customers</span>
              </div>
            </div>
          </div>

          {/* Mobile Optimized Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 sm:mb-6 tracking-tight px-2" style={{ color: '#072C48' }}>
            <span className="block">Buy Premium</span>
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Social Media Accounts
            </span>
          </h1>

          {/* Mobile Optimized Subheading */}
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#2C3E43' }}>
            Get verified social media accounts instantly.
            Secure, authentic, and ready to use.
          </p>

          {/* Mobile Optimized Search Bar */}
          <div className="max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            <SearchBar
              placeholder="Search accounts..."
              variant="hero"
              size="lg"
              className="transform hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Mobile Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 sm:mb-24 lg:mb-32 px-4">
            <Button
              size="custom"
              customPadding="py-4 sm:py-6 pl-8 sm:pl-10 pr-6 sm:pr-8 text-base sm:text-lg rounded-2xl sm:rounded-3xl font-light"
              className="text-white transition-all w-full sm:w-auto"
              style={{ backgroundColor: '#073049' }}
            >
              <span className="hidden sm:inline">Explore All Accounts</span>
              <span className="sm:hidden">Explore Accounts</span>
              <Icon name="arrow-right" size="sm" className="ml-2" />
            </Button>
            <Button
              size="custom"
              customPadding="py-4 sm:py-6 pl-6 sm:pl-8 pr-8 sm:pr-10 text-base sm:text-lg rounded-2xl sm:rounded-3xl font-medium"
              className="transition-all w-full sm:w-auto"
              style={{ backgroundColor: '#DAF3FF', color: '#052A42' }}
            >
              <Check className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Easy Purchase
            </Button>
          </div>

          {/* Mobile Optimized Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto px-4 mb-12 sm:mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12),0_2px_6px_rgba(0,0,0,0.08)]"
                style={{
                  boxShadow: '0 4px 20px rgba(6, 182, 212, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Icon name={stat.icon} size="sm" className="text-cyan-600" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Optimized Social Media Platforms */}
          <div className="mt-8 sm:mt-12 lg:mt-16 space-y-4 sm:space-y-6 lg:space-y-8 px-4">
            <p className="text-base sm:text-lg font-medium" style={{ color: '#072C48' }}>
              Providing reliable services for best platforms
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center max-w-2xl lg:max-w-3xl mx-auto">
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #E4405F20' }}>
                <Icon name="instagram" size="md" className="sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7" style={{ color: '#E4405F' }} />
              </div>
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #1DA1F220' }}>
                <Icon name="twitter" size="md" className="sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7" style={{ color: '#1DA1F2' }} />
              </div>
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #FF000020' }}>
                <Icon name="youtube" size="md" className="sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7" style={{ color: '#FF0000' }} />
              </div>
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #1877F220' }}>
                <Icon name="facebook" size="md" className="sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7" style={{ color: '#1877F2' }} />
              </div>
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #00000020' }}>
                <Icon name="tiktok" size="md" className="sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7" style={{ color: '#000000' }} />
              </div>
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #0088CC20' }}>
                <Icon name="telegram" size="md" className="sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7" style={{ color: '#0088CC' }} />
              </div>
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #0A66C220' }}>
                <Icon name="linkedin" size="md" className="sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7" style={{ color: '#0A66C2' }} />
              </div>
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #FF450020' }}>
                <Icon name="reddit" size="md" className="sm:!w-6 sm:!h-6 lg:!w-7 lg:!h-7" style={{ color: '#FF4500' }} />
              </div>
              <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg bg-gray-100 text-gray-400">
                <span className="text-base sm:text-lg lg:text-xl font-bold">•••</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent"></div>
    </section>
  );
};

export default HeroSection;