import axios from 'axios';
import authService from './services/auth.js';



export const BASE_API_URL = 'vasyleoo2-001-site1.anytempurl.com';
export const API_URL = `https://${BASE_API_URL}/api`;
export const TOKEN = 'token';

export const AXIOS_INSTANCE = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  auth: authService,
};

export default api;