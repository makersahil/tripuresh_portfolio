import apiClient from './client';
import { AuthSession } from '@tripuresh/types';

/**
 * Holds the current authenticated session in memory. Components should call
 * `getSession()` to access the cached session rather than persisting a copy.
 */
let currentSession: AuthSession | null = null;

/**
 * Perform a login request using the provided credentials. On success the
 * returned access token is stored in localStorage and the session cache is
 * updated. Throws an error on failure.
 */
export async function login(email: string, password: string): Promise<AuthSession> {
  const { data } = await apiClient.post('/auth/login', { email, password });
  if (data.accessToken) {
    localStorage.setItem('accessToken', data.accessToken);
  }
  currentSession = data.user as AuthSession;
  return currentSession;
}

/**
 * Refresh the current session by requesting a new access token. If the
 * refresh succeeds, the new token is stored in localStorage and the
 * session cache is updated. Returns null if the refresh fails.
 */
export async function refresh(): Promise<AuthSession | null> {
  try {
    const { data } = await apiClient.post('/auth/refresh');
    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
    }
    currentSession = data.user as AuthSession;
    return currentSession;
  } catch {
    currentSession = null;
    localStorage.removeItem('accessToken');
    return null;
  }
}

/**
 * Log out of the current session. This clears the access token and session
 * cache. The backend logout route is called to invalidate the server-side
 * session where applicable.
 */
export async function logout(): Promise<void> {
  try {
    await apiClient.post('/auth/logout');
  } finally {
    localStorage.removeItem('accessToken');
    currentSession = null;
  }
}

/**
 * Accessor for the current session. Returns null if no session is cached.
 */
export function getSession(): AuthSession | null {
  return currentSession;
}
