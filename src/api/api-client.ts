import axios, { AxiosResponse } from 'axios';

export interface APIResponse<T> extends AxiosResponse<T> {
  success: boolean;
}

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    appid: process.env.REACT_APP_API_KEY,
  },
});
