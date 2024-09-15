import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // your API base URL
});

// Function to handle token expiration
const handleTokenExpiry = (navigate) => {
  // Remove the token from local storage
  localStorage.removeItem('token');
  // Redirect to the login page
  navigate('/login');
};

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // If the response is successful, just return it
    return response;
  },
  (error) => {
    const navigate = useNavigate();
    // Check if the error response status is 401 (Unauthorized)
    if (error.response && error.response.status === 401) {
      // Handle token expiry
      handleTokenExpiry(navigate);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
