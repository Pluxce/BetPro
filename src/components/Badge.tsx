import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  rounded?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  rounded = false,
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center font-medium';

  const variantStyles = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-indigo-100 text-indigo-800'
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1'
  };

  const iconSizeStyles = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const roundedStyles = rounded ? 'rounded-full' : 'rounded';

  const badgeStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    roundedStyles,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeStyles}>
      {icon && (
        <span className={`mr-1.5 ${iconSizeStyles[size]}`}>
          {icon}
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;