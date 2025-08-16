import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as authApi from '@tripuresh/api/auth';

interface AdminLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component for the admin dashboard. Provides a sidebar for
 * navigation and a main content area. Includes a logout button that
 * clears the session and returns the user to the login page.
 */
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { setSession } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authApi.logout();
    setSession(null);
    navigate('/login');
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-blue-400 font-semibold' : '';

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-gray-200 p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Admin</h1>
        <nav className="flex-1 space-y-2 text-sm">
          <NavLink to="/overview" className={linkClasses} end>
            Overview
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
          <NavLink to="/profile" className={linkClasses}>
            Profile
          </NavLink>
        </nav>
        <button onClick={handleLogout} className="mt-4 text-xs underline">
          Logout
        </button>
      </aside>
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
