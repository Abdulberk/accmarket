import React from "react";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import Badge from "@/components/atoms/Badge/Badge";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import { cn } from "@/lib/utils";

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
      {/* Modern Cyan/Blue Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-sm font-medium">
              <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2 animate-pulse"></span>
              Trusted by 10,000+ customers
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 tracking-tight" style={{ color: '#072C48' }}>
            Buy Premium
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Social Media Accounts
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get verified social media accounts instantly. 
            Secure, authentic, and ready to use.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <SearchBar 
              placeholder="Search Instagram, Twitter, TikTok accounts..." 
              variant="hero"
              size="lg"
              className="transform hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* CTA Buttons - mb-20'yi mb-32'ye çıkardım */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-32">
            <Button
              size="lg"
              className="text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all"
              style={{ backgroundColor: '#072C48' }}
            >
              Get the best deals first
              <Icon name="arrow-right" size="sm" className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 px-8 py-4 text-lg hover:bg-gray-50 transition-all"
            >
              <Icon name="arrow-right" size="sm" className="mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12),0_2px_6px_rgba(0,0,0,0.08)]"
                style={{
                  boxShadow: '0 4px 20px rgba(6, 182, 212, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name={stat.icon} size="sm" className="text-cyan-600" />
                  </div>
                </div>
                {/* Gradient text'i normal text-gray-900 ile değiştirdim */}
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Platforms - Dribbble Style */}
          <div className="mt-16 space-y-6">
            <p className="text-sm text-gray-600 font-medium">
              Providing reliable services for best platforms
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #E4405F20' }}>
                <Icon name="instagram" size="sm" style={{ color: '#E4405F' }} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #1DA1F220' }}>
                <Icon name="twitter" size="sm" style={{ color: '#1DA1F2' }} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #FF000020' }}>
                <Icon name="youtube" size="sm" style={{ color: '#FF0000' }} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #1877F220' }}>
                <Icon name="facebook" size="sm" style={{ color: '#1877F2' }} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #00000020' }}>
                <Icon name="tiktok" size="sm" style={{ color: '#000000' }} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #0088CC20' }}>
                <Icon name="telegram" size="sm" style={{ color: '#0088CC' }} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #0A66C220' }}>
                <Icon name="linkedin" size="sm" style={{ color: '#0A66C2' }} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white" style={{ boxShadow: '0 4px 20px #FF450020' }}>
                <Icon name="reddit" size="sm" style={{ color: '#FF4500' }} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gray-100 text-gray-400">
                <span className="text-lg font-bold">•••</span>
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