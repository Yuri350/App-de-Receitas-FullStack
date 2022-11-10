import api from './api';

const request = async (id) => {
  const { data } = await api.get(`/order/${id}`);
  console.log(data);
  return data;
};

export const requestPatch = async (id, status) => {
  await api.patch(`/order/${id}`, { status });
};

export default request;
