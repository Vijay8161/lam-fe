import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  withCredentials: true // For cookies/sessions
});

// Auth API
export const login = (userData) => API.post('/auth/login', userData);
export const register = (userData) => API.post('/auth/register', userData);
export const googleLogin = () => window.open('/auth/google', '_self');
export const facebookLogin = () => window.open('/auth/facebook', '_self');
export const logout = () => API.get('/auth/logout');
export const getCurrentUser = () => API.get('/auth/current_user');

// User API
export const updateProfile = (userData) => API.put('/users/profile', userData);