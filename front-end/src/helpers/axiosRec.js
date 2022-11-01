import axios from 'axios';

const axiosReq = async (url, method, data = true) => {
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
  try {
    const response = await axios(options);
    return (response.data);
  } catch (error) {
    console.log('timeout exceeded');
    console.log(error);
  }
};
export default axiosReq;
