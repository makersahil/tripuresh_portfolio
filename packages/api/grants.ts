import apiClient from './client';
import { Grant } from '@tripuresh/types';

/**
 * List grants with optional filters and pagination. Returns both the
 * collection of grants and the total count for pagination calculations.
 */
export async function list(params?: { page?: number; perPage?: number; search?: string; year?: number; }): Promise<{ data: Grant[]; total: number; }> {
  const { data } = await apiClient.get('/grants', { params });
  return data;
}

/**
 * Retrieve a single grant by its unique identifier.
 */
export async function get(id: string): Promise<Grant> {
  const { data } = await apiClient.get(`/grants/${id}`);
  return data;
}

/**
 * Create a new grant record. Only available to admin users.
 */
export async function create(payload: Partial<Grant>): Promise<Grant> {
  const { data } = await apiClient.post('/grants', payload);
  return data;
}

/**
 * Update an existing grant record. Only available to admin users.
 */
export async function update(id: string, payload: Partial<Grant>): Promise<Grant> {
  const { data } = await apiClient.put(`/grants/${id}`, payload);
  return data;
}

/**
 * Delete a grant record by its identifier. Only available to admin users.
 */
export async function remove(id: string): Promise<void> {
  await apiClient.delete(`/grants/${id}`);
}
