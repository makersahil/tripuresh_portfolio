import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * A simple text input with sensible default styling. You can override the
 * appearance via the className prop.
 */
const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={
        `border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring ${className}`.trim()
      }
      {...props}
    />
  );
};

export default Input;
