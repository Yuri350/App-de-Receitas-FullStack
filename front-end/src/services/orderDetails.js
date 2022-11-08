import api from './api';

const request = async (id) => {
  const { data } = await api.get(`/order/${id}`);
  return data;
};

export default request;
