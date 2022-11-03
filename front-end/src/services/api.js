import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default api;
