export interface Profile {
  /**
   * Full name of the person
   */
  name: string;
  /**
   * Brief biography or description about the person
   */
  biography: string;
  /**
   * URL to the profile photo
   */
  photoUrl?: string;
  /**
   * Current and past positions held
   */
  positions: string[];
  /**
   * Primary contact email address
   */
  contactEmail: string;
  /**
   * Optional contact phone number
   */
  phone?: string;
  /**
   * Optional mailing address
   */
  address?: string;
  /**
   * Social media or other external links (keyed by network)
   */
  social?: Record<string, string>;
}
