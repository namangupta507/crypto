// src/api/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your base URL
});

// Optional: Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Attach token from localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling, like logging out user on 401
    if (error.response && error.response.status === 401) {
      // Example: redirect to login or clear token
      console.error('Unauthorized. Redirect to login.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
