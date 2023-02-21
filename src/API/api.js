import axios from 'axios';
const corona = axios.create({
  baseURL: 'https://api.covid19api.com',
});

export async function getAll() {
  try {
    const { data } = await corona.get('/summary');
    return data;
  } catch (error) {
    console.error(error);
  }
}

console.log('object');
