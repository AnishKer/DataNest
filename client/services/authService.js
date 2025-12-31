import axios from 'axios';

export const login = async (email, password) => {
  return axios.post('/api/auth/login', { email, password }, { withCredentials: true });
};

export const register = async (username, email, password) => {
  return axios.post('/api/auth/register', { username, email, password });
};
