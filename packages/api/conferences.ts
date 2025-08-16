import apiClient from './client';
import { ConferenceBook } from '@tripuresh/types';

export async function list(params?: { page?: number; perPage?: number; search?: string; year?: number; type?: string; }): Promise<{ data: ConferenceBook[]; total: number; }> {
  const { data } = await apiClient.get('/conferences-books', { params });
  return data;
}

export async function get(id: string): Promise<ConferenceBook> {
  const { data } = await apiClient.get(`/conferences-books/${id}`);
  return data;
}

export async function create(payload: Partial<ConferenceBook>): Promise<ConferenceBook> {
  const { data } = await apiClient.post('/conferences-books', payload);
  return data;
}

export async function update(id: string, payload: Partial<ConferenceBook>): Promise<ConferenceBook> {
  const { data } = await apiClient.put(`/conferences-books/${id}`, payload);
  return data;
}

export async function remove(id: string): Promise<void> {
  await apiClient.delete(`/conferences-books/${id}`);
}
