import api from './api';

export const requestData = async (token) => {
  api.defaults.headers.common.Authorization = token;
  const { data } = await api.get('/users');
  return data;
};

export const signInRequest = async (body) => {
  const { data } = await api.post('/login', body);
  return data;
};

export const requestCreate = async ({ email, name, password }) => {
  const { data } = await api.post('/users', { email, name, password });
  return data;
};
