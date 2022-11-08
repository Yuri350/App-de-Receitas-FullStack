import api from './api';

export const signInRequest = async (body) => {
  const { data } = await api.post('/login', body);
  return data;
};

export const requestCreate = async ({ email, name, password }) => {
  const { data } = await api.post('/users', { email, name, password });
  return data;
};
