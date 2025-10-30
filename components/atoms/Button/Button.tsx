import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'md' | 'xl' | 'custom';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asChild?: boolean;
  customPadding?: string; // Custom padding için yeni prop
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
    customPadding,
    ...props
  }, ref) => {
    // Map custom variants to shadcn variants
    const mappedVariant = variant === 'primary' ? 'default' : variant;
    
    // Map custom sizes to shadcn sizes - custom size için undefined döndür
    const mappedSize = size === 'custom' ? undefined :
                      size === 'md' ? 'default' :
                      size === 'xl' ? 'lg' : size;

    // Apply custom styling for primary variant and custom sizes
    const customClassName = cn(
      variant === 'primary' && 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
      size === 'xl' && 'h-12 px-8 text-base',
      size === 'custom' && 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50',
      customPadding && size === 'custom' && customPadding,
      className
    );

    return (
      size === 'custom' ? (
        <button
          className={customClassName}
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
        </button>
      ) : (
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
      )
    );
  }
);

Button.displayName = 'Button';

export default Button;