import axios from 'axios';

const apiManager = axios.create({
  baseURL: 'http://localhost:5000',
  responseType: 'json',
  withCredentials: true,
});

export default apiManager;
