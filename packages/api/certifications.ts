import apiClient from './client';
import { Certification } from '@tripuresh/types';

export async function list(params?: { page?: number; perPage?: number; search?: string; year?: number; }): Promise<{ data: Certification[]; total: number; }> {
  const { data } = await apiClient.get('/certifications', { params });
  return data;
}

export async function get(id: string): Promise<Certification> {
  const { data } = await apiClient.get(`/certifications/${id}`);
  return data;
}

export async function create(payload: Partial<Certification>): Promise<Certification> {
  const { data } = await apiClient.post('/certifications', payload);
  return data;
}

export async function update(id: string, payload: Partial<Certification>): Promise<Certification> {
  const { data } = await apiClient.put(`/certifications/${id}`, payload);
  return data;
}

export async function remove(id: string): Promise<void> {
  await apiClient.delete(`/certifications/${id}`);
}
