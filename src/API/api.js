import axios from 'axios';
const corona = axios.create({
   baseURL: 'https://api.covid19api.com',
});

export async function getAll() {
   const { data } = await corona.get('/summary');
   return data.Countries;
}
