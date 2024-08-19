import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const register = (userData) => API.post('/auth/register', userData);
export const castVote = (voteData, token) =>
  API.post('/vote/cast', voteData, {
    headers: { 'x-auth-token': token },
  });