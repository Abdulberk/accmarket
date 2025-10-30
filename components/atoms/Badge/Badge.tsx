import React from 'react';
import { Badge as ShadcnBadge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className,
  ...props 
}) => {
  // Map custom variants to shadcn variants
  const mappedVariant = variant === 'success' ? 'secondary' : 
                        variant === 'warning' ? 'secondary' : 
                        variant === 'danger' ? 'destructive' : 
                        variant === 'info' ? 'secondary' : variant;

  // Custom styling for variants and sizes
  const customClassName = cn(
    // Custom variant styles
    variant === 'success' && 'bg-green-100 text-green-800 hover:bg-green-200',
    variant === 'warning' && 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    variant === 'info' && 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    // Size styles
    size === 'sm' && 'px-2 py-0.5 text-xs',
    size === 'lg' && 'px-3 py-1 text-sm',
    className
  );

  return (
    <ShadcnBadge 
      variant={mappedVariant} 
      className={customClassName}
      {...props}
    >
      {children}
    </ShadcnBadge>
  );
};

export default Badge;