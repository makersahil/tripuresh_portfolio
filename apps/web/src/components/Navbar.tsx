import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Renders the top navigation bar for the public site. Uses React Router's
 * NavLink to automatically apply active styles on matching routes.
 */
const Navbar: React.FC = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-blue-600 font-semibold' : '';
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          Dr. Tripuresh Joshi
        </NavLink>
        <nav className="space-x-4 text-sm">
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/grants" className={linkClasses}>
            Grants
          </NavLink>
          <NavLink to="/articles" className={linkClasses}>
            Articles
          </NavLink>
          <NavLink to="/conferences-books" className={linkClasses}>
            Conferences &amp; Books
          </NavLink>
          <NavLink to="/patents" className={linkClasses}>
            Patents
          </NavLink>
          <NavLink to="/certifications" className={linkClasses}>
            Certifications
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
