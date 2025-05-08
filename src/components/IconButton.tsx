import React from 'react';

type IconButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  isLoading?: boolean;
  tooltip?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  tooltip,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none';
  
  const variantStyles = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    secondary: 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
    outline: 'text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
  };

  const sizeStyles = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3'
  };

  const iconSizeStyles = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';
  const loadingStyles = 'cursor-wait';

  const buttonStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && disabledStyles,
    isLoading && loadingStyles,
    className
  ].filter(Boolean).join(' ');

  const LoadingSpinner = () => (
    <svg
      className={`animate-spin ${iconSizeStyles[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const buttonContent = isLoading ? <LoadingSpinner /> : (
    <span className={iconSizeStyles[size]}>{icon}</span>
  );

  return (
    <button
      className={buttonStyles}
      disabled={disabled || isLoading}
      title={tooltip}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default IconButton;