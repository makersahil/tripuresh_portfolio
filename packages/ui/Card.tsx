import React from 'react';

export interface CardProps {
  /** Optional header for the card */
  title?: React.ReactNode;
  /** Card content */
  children: React.ReactNode;
}

/**
 * A lightweight card component with a border, rounded corners and optional
 * header. Useful for grouping related information or actions.
 */
const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="border border-gray-200 rounded-lg shadow-sm p-4 mb-4 bg-white">
    {title && <h3 className="font-semibold text-lg mb-2">{title}</h3>}
    <div>{children}</div>
  </div>
);

export default Card;
