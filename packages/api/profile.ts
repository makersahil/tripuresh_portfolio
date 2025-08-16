import apiClient from './client';
import { Profile } from '@tripuresh/types';

/**
 * Retrieve the public profile information for Dr. Tripuresh Joshi. This
 * endpoint is generally accessible without authentication.
 */
export async function get(): Promise<Profile> {
  const { data } = await apiClient.get('/profile');
  return data;
}

/**
 * Update the profile information. Only available to admin users.
 */
export async function update(payload: Partial<Profile>): Promise<Profile> {
  const { data } = await apiClient.put('/profile', payload);
  return data;
}
