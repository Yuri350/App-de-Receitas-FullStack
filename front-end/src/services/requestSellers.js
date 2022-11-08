import api from './api';

const request = async () => {
  const { data } = await api.get('/getUsers/sellers');
  return data;
};

export default request;
