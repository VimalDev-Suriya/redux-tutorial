import axios from 'axios';

export const blogApiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

blogApiInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log('Request Schema', config);
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

blogApiInstance.interceptors.response.use(
  (res) => {
    console.log('Response Schema', res);
    return res;
  },
  (res) => {
    throw res;
  }
);
