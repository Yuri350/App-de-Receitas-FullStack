// import axios from 'axios';
import axiosRec from '../helper/axiosRec';

// const api = axios.create({
//   baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
// });

// export const setToken = (token) => {
//   api.defaults.headers.common.Authorization = token;
// };

const requestData = async () => {
  const method = 'GET';
  const url = 'http://localhost:3001/login';
  const { data } = await axiosRec(url, method);
  return data;
};

const requestLogin = async (body) => {
  console.log('teste');
  const method = 'POST';
  const url = 'http://localhost:3001/login';
  const token = await axiosRec(url, method, body);
  return token;
};

export { requestLogin, requestData };
