import React from 'react';
import { Button, Badge, Icon } from '@/components';
import { cn } from '@/lib/utils';


interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  stock: number;
  rating: number;
  reviewCount: number;
  platform: 'facebook' | 'instagram' | 'twitter' | 'tiktok';
  features: string[];
  isNew?: boolean;
  isPopular?: boolean;
  className?: string;
  onBuyClick?: (id: string) => void;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  originalPrice,
  stock,
  rating,
  reviewCount,
  platform,
  features,
  isNew = false,
  isPopular = false,
  className,
  onBuyClick
}) => {
  const platformIcons = {
    facebook: 'facebook',
    instagram: 'instagram',
    twitter: 'twitter',
    tiktok: 'user' // Using user as fallback for TikTok
  };

  const platformColors = {
    facebook: 'bg-blue-500',
    instagram: 'bg-gradient-to-r from-purple-500 to-pink-500',
    twitter: 'bg-sky-500',
    tiktok: 'bg-black'
  };

  return (
    <div className={cn(
      "bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group",
      className
    )}>
      {/* Header with platform icon and badges */}
      <div className="p-4 pb-0">
        <div className="flex items-center justify-between mb-3">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center text-white",
            platformColors[platform]
          )}>
            <Icon name={platformIcons[platform]} size="sm" />
          </div>
          <div className="flex gap-2">
            {isNew && <Badge variant="info" size="sm">New</Badge>}
            {isPopular && <Badge variant="warning" size="sm">Popular</Badge>}
          </div>
        </div>

        {/* Title and Description */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" size="sm">
              {feature}
            </Badge>
          ))}
          {features.length > 3 && (
            <Badge variant="outline" size="sm">
              +{features.length - 3} more
            </Badge>
          )}
        </div>

        {/* Rating and Stock */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Icon name="star" size="sm" className="text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">({reviewCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <div className={cn(
              "w-2 h-2 rounded-full",
              stock > 100 ? "bg-green-500" : stock > 10 ? "bg-yellow-500" : "bg-red-500"
            )} />
            <span className="text-sm text-gray-600">{stock} in stock</span>
          </div>
        </div>
      </div>

      {/* Footer with pricing and CTA */}
      <div className="p-4 pt-0 border-t border-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">{formatPrice(price)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          <Button 
            size="sm" 
            onClick={() => onBuyClick?.(id)}
            className="group-hover:scale-105 transition-transform"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;