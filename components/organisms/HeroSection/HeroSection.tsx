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
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
              Trusted by 10,000+ customers
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Buy Premium
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Explore Accounts
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
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <Icon name={stat.icon} size="sm" className="text-purple-600" />
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
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
    </section>
  );
};

export default HeroSection;