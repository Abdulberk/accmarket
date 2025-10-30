"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { cn } from "@/lib/utils";
import { Star, TrendingUp, Users, Shield } from "lucide-react";

interface TopBarProps {
  className?: string;
}

const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <div className={cn("w-full", className)}>
      {/* Main TopBar */}
      <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 text-gray-700 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12">
            {/* Left Side - Promotional Message */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                <span className="hidden sm:inline">Special Launch Offer: </span>
                <span className="font-semibold text-cyan-600">20% OFF</span>
                <span className="hidden md:inline"> on all premium accounts</span>
                <span className="sm:hidden"> all accounts</span>
              </span>
            </div>

            {/* Right Side - CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Stats - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>10K+ Customers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>99.9% Success</span>
                </div>
              </div>

              {/* Become a Seller CTA */}
              <Link
                href="/seller/register"
                className="flex items-center gap-1 sm:gap-2 py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-lg font-medium bg-white hover:bg-gray-50 text-cyan-600 border border-cyan-200 hover:border-cyan-300 transition-all duration-200"
              >
                <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="hidden sm:inline">Become a Seller</span>
                <span className="sm:hidden">Sell</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TopBar;