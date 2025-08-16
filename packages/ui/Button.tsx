import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style for the button */
  variant?: 'primary' | 'secondary' | 'danger';
}

/**
 * A simple button component that supports a few variants. Additional class
 * names passed via the className prop will be merged with the variant
 * styling.
 */
const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const base = 'px-4 py-2 rounded focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed';
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };
  return (
    <button
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`.trim()}
      {...props}
    />
  );
};

export default Button;
