import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import GrantsPage from './pages/Grants';
import ArticlesPage from './pages/Articles';
import ConferencesBooksPage from './pages/ConferencesBooks';
import PatentsPage from './pages/Patents';
import CertificationsPage from './pages/Certifications';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grants" element={<GrantsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/conferences-books" element={<ConferencesBooksPage />} />
        <Route path="/patents" element={<PatentsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
