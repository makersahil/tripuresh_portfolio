import React, { createContext, useContext, useEffect, useState } from 'react';
import * as authApi from '@tripuresh/api/auth';
import { AuthSession } from '@tripuresh/types';

interface AuthContextValue {
  session: AuthSession | null;
  loading: boolean;
  setSession: (session: AuthSession | null) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/**
 * Provider component for the admin dashboard. It manages the logged-in
 * admin session, including automatic refresh on load. Components can
 * subscribe to the session to know whether the admin is authenticated.
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApi
      .refresh()
      .then((s) => {
        setSession(s);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return <AuthContext.Provider value={{ session, loading, setSession }}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
