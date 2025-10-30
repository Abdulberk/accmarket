"use client";

import React, { useState, useRef, useEffect } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { cn } from "@/lib/utils";
import { Instagram, Twitter, Youtube, Facebook, Music2 } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  showFilters?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "hero";
}

// Mock autocomplete data with platform info
const mockSuggestions = [
  { 
    type: "Instagram", 
    icon: Instagram,
    color: "text-pink-600",
    items: ["Instagram Verified Blue Badge", "Instagram Business Account", "Instagram Creator Account", "Instagram 10K+ Followers"] 
  },
  { 
    type: "Twitter", 
    icon: Twitter,
    color: "text-sky-600",
    items: ["Twitter Blue Verified", "Twitter Legacy Verified", "Twitter Monetized Account", "Twitter 5K+ Followers"] 
  },
  { 
    type: "TikTok", 
    icon: Music2,
    color: "text-gray-900",
    items: ["TikTok Creator Fund Eligible", "TikTok Business Account", "TikTok 100K+ Followers", "TikTok Live Enabled"] 
  },
  { 
    type: "YouTube", 
    icon: Youtube,
    color: "text-red-600",
    items: ["YouTube Monetized Channel", "YouTube 1K+ Subscribers", "YouTube Partner Program", "YouTube Shorts Fund"] 
  },
  { 
    type: "Facebook", 
    icon: Facebook,
    color: "text-blue-600",
    items: ["Facebook Page 10K+ Likes", "Facebook Business Manager", "Facebook Ad Account", "Facebook Creator Studio"] 
  }
];

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
  className,
  showFilters = false,
  size = "md",
  variant = "default"
}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  // Compute filtered suggestions
  const filteredSuggestions = query.length > 0 
    ? mockSuggestions.map(category => ({
        type: category.type,
        icon: category.icon,
        color: category.color,
        items: category.items.filter(item => 
          item.toLowerCase().includes(query.toLowerCase())
        )
      })).filter(category => category.items.length > 0)
    : [];
  
  const showSuggestions = isOpen && query.length > 0 && filteredSuggestions.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
      setIsOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setIsOpen(false);
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const allSuggestions = filteredSuggestions.flatMap(cat => cat.items);
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev < allSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(allSuggestions[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const sizeClasses = {
    sm: "h-10",
    md: "h-12",
    lg: "h-14"
  };

  const inputSizeClasses = {
    sm: "text-sm pl-10 pr-24",
    md: "text-base pl-12 pr-28",
    lg: "text-lg pl-14 pr-32"
  };

  const iconSizeClasses = {
    sm: "left-3 w-4 h-4",
    md: "left-4 w-5 h-5",
    lg: "left-5 w-6 h-6"
  };

  const buttonSizeClasses = {
    sm: "right-1 px-4",
    md: "right-1.5 px-5",
    lg: "right-2 px-6"
  };

  const isHero = variant === "hero";

  return (
    <div ref={searchRef} className="relative z-20">
      <form 
        onSubmit={handleSubmit} 
        className={cn(
          "relative transition-all duration-300",
          isFocused && isHero && "scale-105",
          className
        )}
      >
        <div className={cn(
          "relative overflow-hidden rounded-xl transition-all duration-300",
          isHero && "bg-white border border-gray-200 shadow-sm hover:shadow-md",
          isHero && isFocused && "ring-2 ring-gray-900 ring-opacity-20 border-gray-900"
        )}>
          {/* Search Icon */}
          <div className={cn(
            "absolute top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
            iconSizeClasses[size]
          )}>
            <Icon name="search" size={size === "lg" ? "md" : "sm"} />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              setIsFocused(true);
              if (query.length > 0) setIsOpen(true);
            }}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full bg-transparent focus:outline-none focus:ring-0 transition-colors",
              sizeClasses[size],
              inputSizeClasses[size],
              "placeholder:text-gray-400 text-gray-900 font-medium"
            )}
          />

          {/* Search Button */}
          <Button
            type="submit"
            size={size === "lg" ? "md" : "sm"}
            className={cn(
              "absolute top-1/2 -translate-y-1/2",
              buttonSizeClasses[size],
              isHero ? "bg-gray-900 hover:bg-gray-800 text-white" : ""
            )}
            disabled={!query.trim()}
          >
            {size === "lg" ? "Search" : <Icon name="arrow-right" size="sm" />}
          </Button>
        </div>

        {/* Autocomplete Suggestions - z-[100] ekledim */}
        {showSuggestions && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-xl border border-gray-200 shadow-md max-h-96 overflow-y-auto z-[100]">
            {filteredSuggestions.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.type}>
                  <div className="px-4 py-2 flex items-center gap-2 text-xs font-semibold text-gray-400 bg-gray-50/50">
                    <CategoryIcon className={cn("w-3.5 h-3.5", category.color)} />
                    {category.type}
                  </div>
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = filteredSuggestions
                      .slice(0, categoryIndex)
                      .reduce((acc, cat) => acc + cat.items.length, 0) + itemIndex;
                    
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSuggestionClick(item)}
                        className={cn(
                          "w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 text-sm",
                          selectedIndex === globalIndex && "bg-gray-50"
                        )}
                      >
                        <CategoryIcon className={cn("w-4 h-4 opacity-60", category.color)} />
                        <span className="text-gray-700">{item}</span>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </form>

      {/* Suggestions for Hero variant */}
      {isHero && !showSuggestions && (
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-xs font-medium text-gray-500">Popular:</span>
          <div className="flex flex-wrap gap-1.5">
            {[
              { text: "Instagram Verified", icon: Instagram, color: "hover:border-pink-300 hover:bg-pink-50 hover:text-pink-700" },
              { text: "Twitter Blue", icon: Twitter, color: "hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700" },
              { text: "YouTube Monetized", icon: Youtube, color: "hover:border-red-300 hover:bg-red-50 hover:text-red-700" }
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.text}
                  type="button"
                  onClick={() => {
                    setQuery(item.text);
                    if (onSearch) onSearch(item.text);
                  }}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 transition-all hover:shadow-sm",
                    item.color
                  )}
                >
                  <IconComponent className="w-3 h-3" />
                  <span>{item.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;