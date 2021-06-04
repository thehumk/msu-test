import axios from 'axios';

const BASE_URL = `https://yts.mx/api/v2/`;
const REQUEST_TIMEOUT = 10000;

export const createAPI = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });
}
