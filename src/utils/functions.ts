import axios, { Method } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-default-api.com'; // Define your API base URL

interface ApiRequestOptions {
  method: Method;
  url: string;
  data?: any;
}

export const apiRequest = async <T>({ method, url, data = null }: ApiRequestOptions): Promise<T> => {
  try {
    const response = await axios({
      method,
      url: `${API_URL}${url}`, // Fixed template literal syntax
      data,
    });
    return response.data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};
