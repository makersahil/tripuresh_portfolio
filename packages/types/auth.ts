export interface AuthSession {
  /**
   * Unique identifier for the logged in user
   */
  id: string;
  /**
   * Email address for the user
   */
  email: string;
  /**
   * Role assigned to the user. Admins can manage content, viewers can only read public pages.
   */
  role: 'admin' | 'viewer';
}
