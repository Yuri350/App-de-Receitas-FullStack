import api from './api';

export const signInRequest = async (body) => {
  const { data } = await api.post('/login', body);
  return data;
};

export const requestCreate = async ({ email, name, password, role }) => {
  const { data } = await api.post('/users', { email, name, password, role });
  return data;
};

export const requestAdminCreate = async ({ email, name, password, role }, token) => {
  const { data } = await api
    .post('/users/admin/create', { email, name, password, role }, {
      headers: { authorization: token },
    });
  return data;
};

export const requestGetAllUsers = async () => {
  const { data } = await api
    .get('/users/admin/getUsers');
  return data;
};

export const requestRemoveUser = async (id) => {
  await api.delete(`/users/admin/deleteUser/${id}`);
};
