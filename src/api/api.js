// import notifications from "./services/notifications";
import axios from 'axios';



export const BASE_API_URL = '9f9e5ac8403e.ngrok.app';
export const API_URL = `https://${BASE_API_URL}/api`;

export const AXIOS_INSTANCE = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
// helper
};

export default api;