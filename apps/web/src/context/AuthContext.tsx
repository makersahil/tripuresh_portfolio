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
 * Provider component that manages the authentication state for the public
 * website. On mount it attempts to refresh the existing session so that
 * navigating directly to a protected admin page will succeed if the user
 * already has a valid refresh token. This hook only stores auth state for
 * the duration of the page lifecycle; localStorage is used for the access
 * token in conjunction with axios interceptors.
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
