import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'md' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'default', 
    children, 
    loading = false,
    icon,
    iconPosition = 'left',
    disabled,
    ...props 
  }, ref) => {
    // Map custom variants to shadcn variants
    const mappedVariant = variant === 'primary' ? 'default' : variant;
    
    // Map custom sizes to shadcn sizes
    const mappedSize = size === 'md' ? 'default' : size === 'xl' ? 'lg' : size;

    // Apply custom styling for primary variant
    const customClassName = cn(
      variant === 'primary' && 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
      size === 'xl' && 'h-12 px-8 text-base',
      className
    );

    return (
      <ShadcnButton
        className={customClassName}
        variant={mappedVariant}
        size={mappedSize}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && !loading && (
          <span className="ml-2">{icon}</span>
        )}
      </ShadcnButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;