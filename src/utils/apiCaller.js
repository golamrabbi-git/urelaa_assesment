import axios from "axios";

const uri = 'https://demo.zfcourier.xyz/api/v/1.0.0';

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers if needed
    'x-auth-token': localStorage.getItem('token')
  },
};

export const getApiCall = async (endpoint, params = {}) => {
  try {
    return await axios.get(uri + endpoint, {
      params,
      ...config,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postApiCall = async (endpoint, data = {}) => {
   try {
     const response = await axios.post(uri + endpoint, data, config);
     return response.data; // Return the response data
   } catch (error) {
     console.error('Error:', error);
     return error.response?.data; // Return the error response data if available
   }
 };
