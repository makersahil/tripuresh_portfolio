import axios from 'axios';
import * as auth from './auth';

/**
 * A preconfigured Axios instance for interacting with the backend API. The
 * base URL is read from the Vite environment variables. All requests send
 * credentials such as cookies and attach an Authorization header when an
 * access token is available in localStorage. If a request receives a 401
 * response the interceptor attempts to refresh the session and retry the
 * original request once.
 */
const apiClient = axios.create({
  baseURL: import.meta.env?.VITE_API_BASE_URL || (typeof process !== 'undefined' ? (process as any).env?.VITE_API_BASE_URL : ''),
  withCredentials: true
});

apiClient.interceptors.request.use((config) => {
  // Attach access token if available
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers = config.headers || {};
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Attempt to refresh and retry once on unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshed = await auth.refresh();
        if (refreshed) {
          return apiClient(originalRequest);
        }
      } catch {
        await auth.logout();
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
