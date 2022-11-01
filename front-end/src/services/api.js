import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  timeout: 1000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default api;
