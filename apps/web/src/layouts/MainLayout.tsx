import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * The primary layout for public pages. Provides a header, main content area
 * and footer. The header includes navigation and the footer contains
 * copyright information.
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 container mx-auto p-4">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
