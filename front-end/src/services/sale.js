import api from './api';

const request = async (info, authorization) => {
  const { data } = await api.post('/sale', info, { headers: { authorization } });
  console.log(data.id);
  return data.id;
};

export default request;
