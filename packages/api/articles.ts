import apiClient from './client';
import { Article } from '@tripuresh/types';

export async function list(params?: { page?: number; perPage?: number; search?: string; year?: number; }): Promise<{ data: Article[]; total: number; }> {
  const { data } = await apiClient.get('/articles', { params });
  return data;
}

export async function get(id: string): Promise<Article> {
  const { data } = await apiClient.get(`/articles/${id}`);
  return data;
}

export async function create(payload: Partial<Article>): Promise<Article> {
  const { data } = await apiClient.post('/articles', payload);
  return data;
}

export async function update(id: string, payload: Partial<Article>): Promise<Article> {
  const { data } = await apiClient.put(`/articles/${id}`, payload);
  return data;
}

export async function remove(id: string): Promise<void> {
  await apiClient.delete(`/articles/${id}`);
}
