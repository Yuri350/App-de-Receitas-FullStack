import axios from 'axios';

const axiosReq = (url, method, data = true) => {
  const options = {
    method,
    url,
    data,
    timeout: 10000,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };
  return axios(options)
    .then((response) => (response.data))
    .catch((error) => {
      console.log('timeout exceeded');
      console.log(error);
    });
};
export default axiosReq;
