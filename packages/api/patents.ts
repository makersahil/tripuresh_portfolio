import apiClient from './client';
import { Patent } from '@tripuresh/types';

export async function list(params?: { page?: number; perPage?: number; search?: string; year?: number; status?: string; }): Promise<{ data: Patent[]; total: number; }> {
  const { data } = await apiClient.get('/patents', { params });
  return data;
}

export async function get(id: string): Promise<Patent> {
  const { data } = await apiClient.get(`/patents/${id}`);
  return data;
}

export async function create(payload: Partial<Patent>): Promise<Patent> {
  const { data } = await apiClient.post('/patents', payload);
  return data;
}

export async function update(id: string, payload: Partial<Patent>): Promise<Patent> {
  const { data } = await apiClient.put(`/patents/${id}`, payload);
  return data;
}

export async function remove(id: string): Promise<void> {
  await apiClient.delete(`/patents/${id}`);
}
