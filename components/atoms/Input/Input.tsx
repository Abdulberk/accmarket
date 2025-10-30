import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text',
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    variant = 'default',
    inputSize = 'md',
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = 'w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 bg-white',
      filled: 'border-transparent bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-blue-500/20',
      outline: 'border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 bg-transparent'
    };
    
    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-4 py-3 text-base'
    };

    const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : '';

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">{leftIcon}</span>
            </div>
          )}
          <input
            type={type}
            className={cn(
              baseStyles,
              variants[variant],
              sizes[inputSize],
              errorStyles,
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-400">{rightIcon}</span>
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;