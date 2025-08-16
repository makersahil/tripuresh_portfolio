import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import OverviewPage from './pages/Overview';
import GrantsPage from './pages/Grants';
import ArticlesPage from './pages/Articles';
import ConferencesBooksPage from './pages/ConferencesBooks';
import PatentsPage from './pages/Patents';
import CertificationsPage from './pages/Certifications';
import ProfilePage from './pages/Profile';
import AdminLayout from './layouts/AdminLayout';
import RequireAuth from './components/RequireAuth';

/**
 * Defines the routing configuration for the admin dashboard. Protected
 * routes are wrapped with RequireAuth to ensure only logged-in users may
 * access them.
 */
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/overview"
        element={
          <RequireAuth>
            <AdminLayout>
              <OverviewPage />
            </AdminLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/grants"
        element={
          <RequireAuth>
            <AdminLayout>
              <GrantsPage />
            </AdminLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/articles"
        element={
          <RequireAuth>
            <AdminLayout>
              <ArticlesPage />
            </AdminLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/conferences-books"
        element={
          <RequireAuth>
            <AdminLayout>
              <ConferencesBooksPage />
            </AdminLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/patents"
        element={
          <RequireAuth>
            <AdminLayout>
              <PatentsPage />
            </AdminLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/certifications"
        element={
          <RequireAuth>
            <AdminLayout>
              <CertificationsPage />
            </AdminLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <AdminLayout>
              <ProfilePage />
            </AdminLayout>
          </RequireAuth>
        }
      />
      {/* Redirect the root of the admin to the overview page if logged in */}
      <Route
        path="/"
        element={
          <RequireAuth>
            <AdminLayout>
              <OverviewPage />
            </AdminLayout>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default App;
