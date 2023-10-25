import axios from 'axios';



export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_BACKEND_URL,
  timeout:10000
 
});

axiosInstance.interceptors.response.use(
  value => {
    return value;
  },
  error => {
    if (error?.response?.data?.error) {
     
      return Promise.reject(error?.response?.data?.error);
    } else {
      return Promise.reject(error);
    }
  }
);









