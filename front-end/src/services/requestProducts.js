import api from './api';

const request = async () => {
  const { data } = await api.get('/customer/products');
  return data;
};

export default request;
