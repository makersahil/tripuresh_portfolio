import React from 'react';

/**
 * Simple footer component. Displays the current year and ownership
 * attribution. Can be extended to include social links if needed.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Dr. Tripuresh Joshi
      </div>
    </footer>
  );
};

export default Footer;
