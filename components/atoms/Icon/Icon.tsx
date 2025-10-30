import React from 'react';
import { cn } from '@/lib/utils';
import {
  Menu,
  X,
  Search,
  User,
  Shield,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Check,
  ChevronRight,
  Loader2
} from 'lucide-react';

interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 'md', className }) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  // Map icon names to Lucide components
  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    menu: Menu,
    close: X,
    search: Search,
    user: User,
    shield: Shield,
    star: Star,
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    check: Check,
    arrow_right: ChevronRight,
    loading: Loader2
  };

  const IconComponent = iconMap[name] || User;

  return (
    <IconComponent 
      className={cn(sizes[size], className)} 
    />
  );
};

export default Icon;