import axios from 'axios';

export const apiKey = process.env.REACT_APP_API_KEY;

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
