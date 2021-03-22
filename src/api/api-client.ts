import axios, { AxiosResponse } from 'axios';

export interface APIResponse<T> extends AxiosResponse<T> {
  success: boolean;
}

export const apiKey = process.env.REACT_APP_API_KEY;

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
