import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = (username, password) =>
  api.post('/auth/login', { username, password });

export const register = (userData) =>
  api.post('/auth/register', userData);

export const getAllUsers = () =>
  api.get('/auth/admin/users');

export const deleteUser = (id) =>
  api.delete(`/auth/admin/users/${id}`);

export const updateUser = (data) =>
  api.put('/auth/user/update', data);

export default api;
