import axios from 'axios';

const apiKey = '6542e26ce797a5ea92c029f6';
const API_BASE_URL = 'https://dummyapi.io/data/v1/user';

export async function fetchUserData() {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: {
        'app-id': apiKey,
      },
      params: {
        limit: 50,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
}
