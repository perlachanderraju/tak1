import axios from 'axios';

const BASE_URL = '<http://localhost:3001/api>'; // Adjust if your backend URL is different

export const search = async (query) => {
  try {
    const response = await axios.post(`${BASE_URL}/search`, { query });
    return response.data;
  } catch (error) {
    console.error('Search API error:', error);
    return [];
  }
}
